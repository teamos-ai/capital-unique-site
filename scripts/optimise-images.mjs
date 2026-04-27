#!/usr/bin/env node
/**
 * scripts/optimise-images.mjs — Image optimisation for Phase 4
 *
 * Reads source images from `../Image Assets/` (parent of project root) and writes
 * optimised versions to `public/images/` with web-friendly slug names. Logos
 * stay as PNG (transparency preservation). Photos get both WebP (modern) +
 * JPEG fallback so the eventual `dist/` packaging can use <picture> with a
 * <source srcset="...webp"> + <img src="...jpg"> pattern.
 *
 * Usage:
 *   npm run optimise
 *   node scripts/optimise-images.mjs
 */

import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "..", "Image Assets");
const OUT = join(ROOT, "public", "images");

// Slug mapping: source filename → web-friendly slug (no extension)
const SLUGS = {
  "Logo Square.png":                                      { slug: "logo-icon-bronze",      type: "logo-icon" },
  "Logo Retangle Long.png":                               { slug: "logo-wordmark-bronze",  type: "logo-wordmark" },

  "John_Capital Unique_BlueBooks.png":                    { slug: "bluebooks",             type: "photo" },
  "John_Capital Unique_Book_Car_Married_Finance.jpeg":    { slug: "book-car-married",      type: "photo" },
  "John_Capital Unique_Book_Serious_Investors.jpeg":      { slug: "serious-investors",     type: "photo" },
  "John_Capital Unique_Book_Shelf.jpeg":                  { slug: "book-shelf",            type: "photo" },
  "John_Capital Unique_Calculator.jpeg":                  { slug: "calculator",            type: "photo" },
  "John_Capital Unique_Calculator_Abstract.jpeg":         { slug: "calculator-abstract",   type: "photo" },
  "John_Capital Unique_Desk_Coffee.jpeg":                 { slug: "desk-coffee",           type: "photo" },
  "John_Capital Unique_Empty_Desk.jpeg":                  { slug: "empty-desk",            type: "photo" },
  "John_Capital Unique_Footer_Cards.jpeg":                { slug: "footer-cards",          type: "hero-wide" },
  "John_Capital Unique_Footer_Pressure.jpeg":             { slug: "footer-pressure",       type: "hero-wide" },
  "John_Capital Unique_Footer_Rocks.jpeg":                { slug: "footer-rocks",          type: "hero-wide" },
  "John_Capital Unique_Footer_Shapes.jpeg":               { slug: "footer-shapes",         type: "hero-wide" },
  "John_Capital Unique_Footer_Shuffle_Cards.jpeg":        { slug: "footer-shuffle-cards",  type: "hero-wide" },
  "John_Capital Unique_Footer_WAve.jpeg":                 { slug: "footer-wave",           type: "hero-wide" },
  "John_Capital Unique_Hand_Shake.jpeg":                  { slug: "hand-shake",            type: "photo" },
  "John_Capital Unique_Headshot_Dark.jpeg":               { slug: "headshot-dark",         type: "photo" },
  "John_Capital Unique_Headshot_Tan_Golden.jpeg":         { slug: "headshot-golden",       type: "photo" },
  "John_Capital Unique_Meeting_BoardRoom.png":            { slug: "meeting-boardroom",     type: "photo" },
  "John_Capital Unique_Meeting_Sign.png":                 { slug: "meeting-sign",          type: "photo" },
  "John_Capital Unique_Meeting_Women.png":                { slug: "meeting-women",         type: "photo" },
  "John_Capital Unique_Office_Profile_Seated.jpeg":       { slug: "office-profile",        type: "photo" },
  "John_Capital Unique_Office_Seated.jpeg":               { slug: "office-seated",         type: "photo" },
  "John_Capital Unique_Review_Documents.png":             { slug: "review-documents",      type: "photo" },
  "John_Capital Unique_Strategy_CHess.jpeg":              { slug: "strategy-chess",        type: "photo" },
  "John_Capital Unique_Table_Coffee_Paper.jpeg":          { slug: "table-coffee-paper",    type: "photo" },
  "John_Capital Unique_WaitRoom_Painting.jpeg":           { slug: "waitroom-painting",     type: "photo" },
};

// Per-type sizing + format
const RECIPES = {
  "logo-icon": {
    // Square logo icon — keep transparency, small size for navbar/footer
    formats: [{ ext: "png", opts: { quality: 90, compressionLevel: 9 } }],
    width: 240,
  },
  "logo-wordmark": {
    // Wide logo with wordmark — keep transparency
    formats: [{ ext: "png", opts: { quality: 92, compressionLevel: 9 } }],
    width: 600,
  },
  "photo": {
    // General photography — used in cards, splits, small hero backgrounds
    formats: [
      { ext: "webp", opts: { quality: 80, effort: 5 } },
      { ext: "jpg",  opts: { quality: 82, mozjpeg: true } },
    ],
    width: 1600,
  },
  "hero-wide": {
    // Final-vault wide hero (21:7 displayed). Source files are huge (2-3MB) — bring down to web-deliverable
    formats: [
      { ext: "webp", opts: { quality: 78, effort: 5 } },
      { ext: "jpg",  opts: { quality: 80, mozjpeg: true } },
    ],
    width: 2400,
  },
};

async function exists(path) {
  try { await stat(path); return true; }
  catch { return false; }
}

async function optimiseOne(source, slug, type) {
  const recipe = RECIPES[type];
  if (!recipe) throw new Error(`Unknown type "${type}" for ${slug}`);

  const inputPath = join(SRC, source);
  if (!(await exists(inputPath))) {
    console.warn(`  ! source missing: ${source}`);
    return null;
  }

  const inputBytes = (await stat(inputPath)).size;
  const results = [];

  for (const fmt of recipe.formats) {
    const outPath = join(OUT, `${slug}.${fmt.ext}`);
    let pipeline = sharp(inputPath).resize({
      width: recipe.width,
      withoutEnlargement: true,
      fit: "inside",
    });

    switch (fmt.ext) {
      case "webp": pipeline = pipeline.webp(fmt.opts); break;
      case "jpg":  pipeline = pipeline.jpeg(fmt.opts); break;
      case "png":  pipeline = pipeline.png(fmt.opts); break;
    }

    await pipeline.toFile(outPath);
    const outBytes = (await stat(outPath)).size;
    results.push({ ext: fmt.ext, bytes: outBytes });
  }

  return { source, slug, type, inputBytes, results };
}

async function main() {
  console.log("Optimising images → public/images/\n");
  await mkdir(OUT, { recursive: true });

  const entries = Object.entries(SLUGS);
  const results = [];

  for (const [source, { slug, type }] of entries) {
    const result = await optimiseOne(source, slug, type);
    if (!result) continue;

    const inputKB = (result.inputBytes / 1024).toFixed(0);
    const outputs = result.results.map((r) => `${slug}.${r.ext} ${(r.bytes / 1024).toFixed(0)}KB`).join(" + ");
    console.log(`  ✓ ${source.padEnd(54)} ${inputKB.padStart(5)}KB →  ${outputs}`);
    results.push(result);
  }

  const totalIn = results.reduce((s, r) => s + r.inputBytes, 0);
  const totalOut = results.reduce((s, r) => s + r.results.reduce((ss, x) => ss + x.bytes, 0), 0);
  console.log(`\nProcessed ${results.length} source files.`);
  console.log(`Total source: ${(totalIn / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Total output: ${(totalOut / 1024 / 1024).toFixed(1)} MB (counts both webp + jpg)`);
}

main().catch((err) => {
  console.error("Optimisation failed:", err);
  process.exit(1);
});
