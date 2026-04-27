# Capital Unique — Working notes for Claude Code

Personal project. Static site for a non-bank lender, hosted on **GHL Custom HTML Pages** (one self-contained `.html` per page).

## Hard constraints (always)

- One `.html` per page in `dist/`. CSS in `<style>`, JS in `<script>`, images at absolute `https://...` URLs.
- **No relative paths** in `dist/*.html`. No `@relume_io` references. No `<!-- comments -->`. No debug `data-component` / `data-partial` attributes. No Lorem ipsum.
- Pre-commit grep check on `dist/*.html`: zero matches for `src="/`, `src="./`, `src="../`, `href="/`, `href="./`, `href="../`, `@relume_io`, `<!--`.

## Workflow (do not skip ahead)

```
Phase 0 Setup → Phase 1 Wireframes (all 17) → Phase 2 Design system →
Phase 3 Apply design → Phase 4 Images → Phase 5 GHL packaging → Phase 6 Handoff
```

Each phase covers all 17 pages before the next begins. Stop at every "Stop here" checkpoint. Per-page commits during Phases 1, 3, 5. Per-partial commits in Phase 2.

## Repos to lean on

- `huashu-design` (https://github.com/teamos-ai/huashu-design) — Phase 2 design system. OKLCH tokens, anti-AI-slop rules, 20 design philosophies, 5-dimension review.
- `website-launch-kit` (installed as `anthropic-skills:website-launch-kit`) — cherry-pick `scripts/generate-image.mjs` and the `GEMINI_API_KEY` config check for Phase 4 only. Do not apply its full clone-first flow to this 17-page site.
- `gstack` (https://github.com/teamos-ai/gstack) — pull in review/QA agents (design-review, slop-scan, qa) at "Stop here" checkpoints.
- `benai-skills` (https://github.com/teamos-ai/benai-skills) — meta-skills collection. Inspect `shared-skills/` for reusable building blocks before Phase 2.

## Content quirks (already known — do not re-flag)

- `how-it-works.md` is intentionally placeholder copy. Use as-is in Phase 1; user will write real copy later.
- `construction.md` has copy bleed from Agriculture. Acknowledged. Use as-is in Phase 1.
- Testimonials, project gallery, contact page, article bodies — easy-swap placeholders for later. Output `<section data-status="awaiting-content">[…content pending]</section>` in earlier phases.
- Articles page is a rough index only; real article posts will live in GHL's blog later.

## Reusable partials (Phase 2 inventory)

- `partials/navbar.html` (Navbar13)
- `partials/footer.html` (Footer10)
- `partials/logo-strip.html` (Logo3)
- `partials/how-funding-works.html` — 4-step block (Home, Overview, Get Capital + adapted on most service pages)
- `partials/cta-charles-ai.html` — reused on Business, How It Works, Property Development, Private Capital, Agriculture
- `partials/testimonial.html` — placeholder until quotes supplied
- Hero variants as needed

## Voice / tone (working hypothesis — confirm in Phase 2)

Deliberate, discreet, considered, decisive, plain-spoken. Editorial / publication-style design lean: serif display, generous whitespace, restrained color, real photography.

## Working style preferences

- **Read each phase's reference material before starting.** Phase 2: read `huashu-design`'s `SKILL.md` and any referenced files before generating tokens.
- **Stop at every "Stop here" checkpoint** — don't run ahead.
- **Commit small, commit often.** Per-page commits during Phases 1, 3, 5. Per-partial in Phase 2.
- **One `AskUserQuestion` round per question** unless tightly coupled (then consolidate).
- **Flag guesses vs verified work** — especially design decisions and structural inferences from incomplete copy.
- **Tags as milestones**: `wireframes-v1`, `styled-v1`, `images-v1`, `v1.0.0`.
