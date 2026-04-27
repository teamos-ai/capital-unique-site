# Capital Unique — Website

> Capital Intelligently Applied. Non-bank lender for complex finance scenarios.

Static site built from a Relume export, hosted as **GHL Custom HTML Pages** (one self-contained `.html` per page, no relative paths).

## Layout

```
relume-source/    Raw Relume export — read-only reference (17 pages, JSX)
content/          Page copywriting (markdown + frontmatter). See content/README.md.
docs/             Design system docs, decisions, image manifest, copy gaps log
partials/         Reusable HTML/CSS components (Phase 2 onward)
src/shared/       tokens.css, base.css, shared JS
wireframes/       Phase 1 output — bare semantic HTML, real copy, no design
styled/           Phase 3 output — full design applied via partials
dist/             Phase 5 output — self-contained .html files for GHL upload (gitignored)
public/images/    Generated Gemini images (manifest in docs/image-manifest.md)
scripts/          Build scripts, image generation
```

## Build phases

| Phase | Goal | Output |
|---|---|---|
| 0 | Setup | This repo |
| 1 | Wireframes | `wireframes/*.html` — semantic HTML, real copy, no design |
| 2 | Design system | `src/shared/tokens.css`, `partials/*.html`, `docs/design-system.md` |
| 3 | Apply design | `styled/*.html` — wireframes composed from partials + tokens |
| 4 | Images | Real Gemini-generated images at absolute URLs |
| 5 | GHL packaging | `dist/*.html` — inlined CSS/JS, absolute image URLs, no comments |
| 6 | Handoff | Regen instructions, design system reference, copy gaps log |

## Hard constraints (GHL)

- Each upload is one self-contained `.html` file. No multi-folder uploads.
- Relative paths are not supported. Every CSS / JS / image reference must be inline or an absolute `https://...` URL.
- Verify before each upload: `dist/<page>.html` contains zero matches for `src="/`, `src="./`, `src="../`, `href="/`, `href="./`, `href="../`, `@relume_io`, `<!--`.

## Tools / skills

- **`huashu-design`** — design system, OKLCH tokens, anti-AI-slop, 5-dimension review (Phase 2 driver).
- **`website-launch-kit`** — image generation pipeline (`scripts/generate-image.mjs`) used in Phase 4.
- **`gstack`** — review/QA agents (design-review, slop-scan, qa) called at each "Stop here" checkpoint.
- **`benai-skills`** — additional shared skills/connectors as needed.

## Regenerate / redeploy (post-v1)

See `docs/regen.md` (created in Phase 6).
