#!/usr/bin/env node
/**
 * scripts/swap-image-paths.mjs — Phase 4 image path swap
 *
 * Replaces every reference to `../../Image%20Assets/<source-filename>` (in
 * templates, partials, and CSS) with the optimised hosted URL using the
 * web-friendly slug from optimise-images.mjs.
 *
 * Two modes:
 *   --local       point at `../public/images/<slug>.{webp|png}` (or .../public/images/ for CSS)
 *   --remote URL  point at <URL>/<slug>.{webp|png}
 *
 * Usage:
 *   node scripts/swap-image-paths.mjs --local
 *   node scripts/swap-image-paths.mjs --remote https://teamos-ai.github.io/capital-unique-site/public/images
 *
 * Idempotent: re-running with a different --remote rewrites prior absolute
 * URLs to the new base (matches the slug pattern, not the path prefix).
 */

import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// source filename → { slug, ext }
// `ext` is the OUTPUT extension after optimisation (logos stay PNG, photos become WebP)
const MAP = {
  "Logo Square.png":                                      { slug: "logo-icon-bronze",      ext: "png" },
  "Logo Retangle Long.png":                               { slug: "logo-wordmark-bronze",  ext: "png" },
  "John_Capital Unique_BlueBooks.png":                    { slug: "bluebooks",             ext: "webp" },
  "John_Capital Unique_Book_Car_Married_Finance.jpeg":    { slug: "book-car-married",      ext: "webp" },
  "John_Capital Unique_Book_Serious_Investors.jpeg":      { slug: "serious-investors",     ext: "webp" },
  "John_Capital Unique_Book_Shelf.jpeg":                  { slug: "book-shelf",            ext: "webp" },
  "John_Capital Unique_Calculator.jpeg":                  { slug: "calculator",            ext: "webp" },
  "John_Capital Unique_Calculator_Abstract.jpeg":         { slug: "calculator-abstract",   ext: "webp" },
  "John_Capital Unique_Desk_Coffee.jpeg":                 { slug: "desk-coffee",           ext: "webp" },
  "John_Capital Unique_Empty_Desk.jpeg":                  { slug: "empty-desk",            ext: "webp" },
  "John_Capital Unique_Footer_Cards.jpeg":                { slug: "footer-cards",          ext: "webp" },
  "John_Capital Unique_Footer_Pressure.jpeg":             { slug: "footer-pressure",       ext: "webp" },
  "John_Capital Unique_Footer_Rocks.jpeg":                { slug: "footer-rocks",          ext: "webp" },
  "John_Capital Unique_Footer_Shapes.jpeg":               { slug: "footer-shapes",         ext: "webp" },
  "John_Capital Unique_Footer_Shuffle_Cards.jpeg":        { slug: "footer-shuffle-cards",  ext: "webp" },
  "John_Capital Unique_Footer_WAve.jpeg":                 { slug: "footer-wave",           ext: "webp" },
  "John_Capital Unique_Hand_Shake.jpeg":                  { slug: "hand-shake",            ext: "webp" },
  "John_Capital Unique_Headshot_Dark.jpeg":               { slug: "headshot-dark",         ext: "webp" },
  "John_Capital Unique_Headshot_Tan_Golden.jpeg":         { slug: "headshot-golden",       ext: "webp" },
  "John_Capital Unique_Meeting_BoardRoom.png":            { slug: "meeting-boardroom",     ext: "webp" },
  "John_Capital Unique_Meeting_Sign.png":                 { slug: "meeting-sign",          ext: "webp" },
  "John_Capital Unique_Meeting_Women.png":                { slug: "meeting-women",         ext: "webp" },
  "John_Capital Unique_Office_Profile_Seated.jpeg":       { slug: "office-profile",        ext: "webp" },
  "John_Capital Unique_Office_Seated.jpeg":               { slug: "office-seated",         ext: "webp" },
  "John_Capital Unique_Review_Documents.png":             { slug: "review-documents",      ext: "webp" },
  "John_Capital Unique_Strategy_CHess.jpeg":              { slug: "strategy-chess",        ext: "webp" },
  "John_Capital Unique_Table_Coffee_Paper.jpeg":          { slug: "table-coffee-paper",    ext: "webp" },
  "John_Capital Unique_WaitRoom_Painting.jpeg":           { slug: "waitroom-painting",     ext: "webp" },
};

function urlEncode(name) {
  return name.replace(/ /g, "%20");
}

function replaceInText(text, sourceBase, targetBase) {
  let out = text;
  let replaced = 0;

  // Step 1: replace any prior absolute or relative path that already uses our slugs
  // This makes the script idempotent — if we previously swapped to localhost, we can re-swap to remote
  for (const { slug, ext } of Object.values(MAP)) {
    const slugPattern = new RegExp(`(['"\\(])([^"'\\)]*?)/${slug}\\.${ext}`, "g");
    const before = out;
    out = out.replace(slugPattern, (match, quote, prefix) => {
      if (prefix === targetBase) return match; // already pointing at target
      replaced++;
      return `${quote}${targetBase}/${slug}.${ext}`;
    });
  }

  // Step 2: replace original source paths (../../Image%20Assets/<filename>) and CSS variant (../../../Image%20Assets/...)
  for (const [source, { slug, ext }] of Object.entries(MAP)) {
    const encoded = urlEncode(source);
    const sourcePattern = new RegExp(
      `((?:\\.\\./){2,3})Image%20Assets/${encoded.replace(/[.+]/g, "\\$&")}`,
      "g"
    );
    out = out.replace(sourcePattern, () => {
      replaced++;
      return `${targetBase}/${slug}.${ext}`;
    });
  }

  return { out, replaced };
}

async function processFile(filepath, targetBase) {
  const text = await readFile(filepath, "utf8");
  const { out, replaced } = replaceInText(text, "../../Image%20Assets", targetBase);
  if (replaced > 0) {
    await writeFile(filepath, out);
  }
  return replaced;
}

async function* walk(dir, ext) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full, ext);
    else if (entry.name.endsWith(ext)) yield full;
  }
}

async function main() {
  const args = process.argv.slice(2);
  let targetBase;

  if (args[0] === "--local") {
    targetBase = "../public/images";
  } else if (args[0] === "--remote") {
    targetBase = args[1];
    if (!targetBase) {
      console.error("--remote requires a URL: node scripts/swap-image-paths.mjs --remote https://example.com/images");
      process.exit(1);
    }
  } else {
    console.error("Usage:");
    console.error("  node scripts/swap-image-paths.mjs --local");
    console.error("  node scripts/swap-image-paths.mjs --remote <BASE_URL>");
    process.exit(1);
  }

  console.log(`Swap target: ${targetBase}\n`);

  const targets = [
    join(ROOT, "src", "templates"),
    join(ROOT, "partials"),
    join(ROOT, "src", "shared"),
  ];

  let totalFiles = 0;
  let totalReplacements = 0;

  for (const dir of targets) {
    for (const ext of [".html", ".css"]) {
      try {
        for await (const file of walk(dir, ext)) {
          const replaced = await processFile(file, targetBase);
          if (replaced > 0) {
            const rel = file.replace(ROOT + "\\", "").replace(/\\/g, "/").replace(ROOT + "/", "");
            console.log(`  ${rel.padEnd(48)} ${replaced} replacements`);
            totalReplacements += replaced;
            totalFiles++;
          }
        }
      } catch (err) {
        if (err.code !== "ENOENT") throw err;
      }
    }
  }

  console.log(`\n${totalReplacements} replacements across ${totalFiles} files.`);
  console.log("\nNext: run `npm run build` to regenerate styled/*.html with updated paths.");
}

main().catch((err) => {
  console.error("Swap failed:", err);
  process.exit(1);
});
