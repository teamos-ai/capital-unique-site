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

## Skills installed (in `~/.claude/skills/`) and how each plugs into the build

All skills are user-level. Most need a Claude Code restart before they're invocable as slash commands, but their `SKILL.md` files can be `Read` directly mid-session at any time.

### Phase 2 (design system) — primary drivers
- **`huashu-design`** — main driver. OKLCH tokens, anti-AI-slop rules, 20 design philosophies, 5-dimension review. Read `~/.claude/skills/huashu-design/SKILL.md` before generating `tokens.css`.
- **`ui-ux-pro-max`** — second perspective on philosophy / token structure. Use as cross-check against huashu-design's choices, not as a competing source of truth. Resolve conflicts in favour of huashu-design.
- **`design-system`** (sub-skill of ui-ux-pro-max) — token-system patterns.
- **`brand`** (sub-skill of ui-ux-pro-max) — brand asset protocol; useful before/during the consolidated brand-input round.
- **`design`** (sub-skill of ui-ux-pro-max) — visual design judgement, supplements huashu-design's review pass.

### Phase 3 (apply design to wireframes)
- **`ui-styling`** — concrete CSS / styling patterns when stitching tokens onto wireframes via partials.
- **`design`** — visual review during the per-page styling pass.

### Phase 4 (image generation)
- **`website-launch-kit`** — cherry-pick `scripts/generate-image.mjs` + `GEMINI_API_KEY` config check only. Do **not** apply its full clone-first flow to this 17-page site.
- **`prompt-master`** — use to refine Gemini Imagen prompts in `docs/image-manifest.md` before generation runs.

### Phase 1 / 3 / 5 (review checkpoints)
- **`gstack`** — multi-skill bundle (40+ sub-skills under `~/.claude/skills/gstack/`). Specifically use:
  - `gstack/qa/SKILL.md` — quality-assurance pass at each checkpoint
  - `gstack/review/SKILL.md` — code/output review
  - `gstack/design-review/SKILL.md` — design pass after Phase 3
  - `gstack/design-shotgun/SKILL.md` — fast comparative design review
  - `gstack/slop-scan.config.json` — anti-AI-slop scan before Phase 5 packaging
  - `gstack/ship/SKILL.md` — final packaging pass

### Situational use (read on demand)
- **`process-interviewer`** — use if a section's intent is unclear and we need to drive a structured Q&A round.
- **`decision-toolkit`** — for the cross-cutting Phase 2 decisions in `docs/copy-gaps.md`.
- **`fact-checker`** — only if any factual claims surface in the copy that need verification (e.g. "Australia's most discerning investors" trust line).
- **`find-skills`** — if we hit a problem that may map to a skill we haven't yet considered.
- **`humanizer`** — if any copy needs polishing (note: user is writing copy themselves, so use sparingly).

### Installed but not directly load-bearing for this project
On disk and available, but no natural fit for a 17-page non-bank-lender static site. Not flagged for active use here:
`audio-transcriber`, `agent-browser`, `mcp-builder`, `frontend-slides`, `slides`, `deep-research`, `openrouter`, `file-organizer`, `banner-design`.

### Reference repos (not installed as skills)
- **`benai-skills`** (https://github.com/teamos-ai/benai-skills) — meta-skills collection. Inspect specific pieces from the GitHub repo on demand if a need surfaces.

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
