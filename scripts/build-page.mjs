#!/usr/bin/env node
/**
 * scripts/build-page.mjs — Partial inliner for Capital Unique
 *
 * Reads a template HTML file from src/templates/<page>.html and substitutes
 * `{{> partial-name}}` markers with the contents of the matching file in
 * partials/<partial-name>.html. The leading docstring HTML comment in each
 * partial file is stripped before inlining.
 *
 * Usage:
 *   node scripts/build-page.mjs <input> <output>
 *   node scripts/build-page.mjs --all                 # build every src/templates/*.html → styled/<name>.html
 *   node scripts/build-page.mjs src/templates/home.html styled/home.html
 *
 * Phase 3 only does partial inlining. Phase 5 packaging (inline CSS, absolute
 * image URLs, comment stripping) is handled by a separate script run on the
 * styled output.
 */

import { readFile, writeFile, readdir, mkdir } from "node:fs/promises";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

async function loadPartials() {
  const partialsDir = join(ROOT, "partials");
  const files = await readdir(partialsDir);
  const partials = {};
  for (const file of files) {
    if (!file.endsWith(".html")) continue;
    const name = file.replace(/\.html$/, "");
    const content = await readFile(join(partialsDir, file), "utf8");
    // Strip leading <!-- docstring --> comment so partials concatenate cleanly
    partials[name] = content.replace(/^﻿?\s*<!--[\s\S]*?-->\s*/, "").trimStart();
  }
  return partials;
}

function inlinePartials(template, partials) {
  // Match {{> partial-name}} with optional whitespace
  return template.replace(/\{\{>\s*([\w-]+)\s*\}\}/g, (match, name) => {
    if (!partials[name]) {
      console.warn(`  ! missing partial: ${name}`);
      return `<!-- BUILD WARNING: partial "${name}" not found -->`;
    }
    return partials[name];
  });
}

async function buildOne(inputPath, outputPath) {
  const partials = await loadPartials();
  const template = await readFile(inputPath, "utf8");
  const html = inlinePartials(template, partials);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
  return { inputPath, outputPath, bytes: html.length };
}

async function buildAll() {
  const tmplDir = join(ROOT, "src", "templates");
  let templateFiles;
  try {
    templateFiles = await readdir(tmplDir);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error(`No templates directory found at ${tmplDir}`);
      console.error(`Create src/templates/<page>.html files first.`);
      process.exit(1);
    }
    throw err;
  }

  const results = [];
  for (const file of templateFiles.sort()) {
    if (!file.endsWith(".html")) continue;
    const inputPath = join(tmplDir, file);
    const outputPath = join(ROOT, "styled", file);
    const result = await buildOne(inputPath, outputPath);
    results.push(result);
    console.log(`  ✓ ${basename(inputPath)} → styled/${basename(outputPath)}  (${result.bytes.toLocaleString()} bytes)`);
  }
  return results;
}

async function main() {
  const args = process.argv.slice(2);

  if (args[0] === "--all") {
    console.log("Building all templates → styled/...");
    const results = await buildAll();
    console.log(`\nBuilt ${results.length} page${results.length === 1 ? "" : "s"}.`);
    return;
  }

  if (args.length !== 2) {
    console.error("Usage:");
    console.error("  node scripts/build-page.mjs <input> <output>");
    console.error("  node scripts/build-page.mjs --all");
    process.exit(1);
  }

  const [inputPath, outputPath] = args;
  const result = await buildOne(inputPath, outputPath);
  console.log(`✓ ${result.inputPath} → ${result.outputPath} (${result.bytes.toLocaleString()} bytes)`);
}

main().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
