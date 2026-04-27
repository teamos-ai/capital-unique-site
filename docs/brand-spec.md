# Capital Unique — Brand Spec (frozen)

> Generated 2026-04-28 from client-supplied assets.
> Source files: `Image Assets/` + Figma (`https://www.figma.com/design/3Sn9v8Y4g4kPevA5AiPROA/Capital-Unique-Site`).
> Status: complete for Phase 2/3 build. Update only if brand changes.

This file is the **single source of truth** for brand assets. All HTML / CSS / image references in `partials/`, `styled/`, and `dist/` MUST trace back to a path or token defined here.

---

## 🎯 Core assets (one-tier identity)

### Logo

Two finishes. Pairing rules are non-negotiable.

| Finish | Use on | Source file (Image Assets/) | Notes |
|---|---|---|---|
| **Bronze on charcoal** | Dark backgrounds (Neutral Darkest / Darker) | `Logo Square.png`, `Logo Retangle Long.png` | Bronze "M." monogram on charcoal rounded-square. Used on hero (dark variant), footer, dark CTA sections. |
| **Silver / chrome on light** | Light backgrounds (Neutral Lightest / Lighter) | seen on `1.png` cover (chrome variant) | Silver/platinum "M." on the same charcoal square but with chrome finish. Used on light-mode pages. **User-supplied rule**: silver pairs with white/blue light backgrounds. |

**Brand narrative cue (from `8.png`–`12.png`):** "Capital carved from the original source of wealth" — gold nugget → gold brick → bronze logo (dark variant); silver nugget → silver brick → silver logo (light variant). Source-of-wealth metaphor underpins the dual finish.

**Logo rules:**
- Never tint the logo. Never re-render in a different color. Never change the rounded-square frame.
- Always use the file (`<img src=...>`), never re-draw in SVG/CSS.
- Wordmark version (`Logo Retangle Long.png`) used in navbar + footer. Square version (`Logo Square.png`) used as social avatar / favicon source / floating brand element (the "bronze coin" hero treatment).
- On dark backgrounds, "capital unique" wordmark is **white**. Icon is bronze.
- On light backgrounds, "capital unique" wordmark is **Neutral Darkest (#0A0702)**. Icon is silver/chrome.

### Photography (25 shots — `John_Capital Unique_*.jpeg/png` in `Image Assets/`)

Inventoried by use-case. Phase 4 maps each wireframe `[data-image]` slot to a file from this list (or generates new via Gemini if a slot has no good candidate).

| File | Shot description | Recommended use |
|---|---|---|
| `John_Capital Unique_BlueBooks.png` | Stack of blue ledger books | About hero / heritage-cue section |
| `John_Capital Unique_Book_Car_Married_Finance.jpeg` | Book + car metaphor | Get Capital secondary |
| `John_Capital Unique_Book_Serious_Investors.jpeg` | Open ledger / investor scene | Private Capital hero |
| `John_Capital Unique_Book_Shelf.jpeg` | Bookshelf | Heritage section background |
| `John_Capital Unique_Calculator.jpeg` | Calculator on desk | Calculators page hero |
| `John_Capital Unique_Calculator_Abstract.jpeg` | Abstract calculator render | Calculators secondary |
| `John_Capital Unique_Desk_Coffee.jpeg` | Desk with coffee, paperwork | Approach / "deliberate" beat |
| `John_Capital Unique_Empty_Desk.jpeg` | Empty office desk | Secondary mood |
| `John_Capital Unique_Footer_Cards.jpeg` | Footer-style card spread | Footer texture (option) |
| `John_Capital Unique_Footer_Pressure.jpeg` | Bronze gradient pressure shot | Final CTA hero (matches Figma "Ready to move forward" treatment) |
| `John_Capital Unique_Footer_Rocks.jpeg` | Stone / rocks | Footer texture (option) |
| `John_Capital Unique_Footer_Shapes.jpeg` | Geometric shapes | Footer texture (option) |
| `John_Capital Unique_Footer_Shuffle_Cards.jpeg` | Shuffled cards | Footer texture (option) |
| `John_Capital Unique_Footer_WAve.jpeg` | Wave / curve | Section transition / hero footer treatment |
| `John_Capital Unique_Hand_Shake.jpeg` | Handshake | Get Capital / partnership beat |
| `John_Capital Unique_Headshot_Dark.jpeg` | Headshot, dark suit, dark bg | About — Dark variant |
| `John_Capital Unique_Headshot_Tan_Golden.jpeg` | Headshot, warm light | Investor portrait |
| `John_Capital Unique_Meeting_BoardRoom.png` | Boardroom meeting | Business / Commercial hero |
| `John_Capital Unique_Meeting_Sign.png` | Document signing | Get Capital / Deploy step |
| `John_Capital Unique_Meeting_Women.png` | Female advisor in meeting | Diversity beat / About |
| `John_Capital Unique_Office_Profile_Seated.jpeg` | Profile portrait, office | About — Light variant |
| `John_Capital Unique_Office_Seated.jpeg` | Front-on portrait | Charles A.I / advisor beat |
| `John_Capital Unique_Review_Documents.png` | Reviewing documents | Confirm-terms step |
| `John_Capital Unique_Strategy_CHess.jpeg` | Chess strategy | Borrow card hero (matches Figma "Capital designed around your strategy") |
| `John_Capital Unique_Table_Coffee_Paper.jpeg` | Table with coffee + paper | Approach / Process beat |
| `John_Capital Unique_WaitRoom_Painting.jpeg` | Waiting room with painting | Heritage / private-bank feel |

**Photography rule (anti-AI-slop):** real photography only. No SVG silhouettes. No CSS-shape stand-ins. If a slot has no good photo, leave a flagged placeholder until Phase 4 gen.

---

## 🎨 Color system

Source: Figma Style Guide (`The Brand Colors` slide / `4.png`).

### Neutrals (foundation — 7-step scale)

| Token | Name (client) | Hex | OKLCH | RGB | Use |
|---|---|---|---|---|---|
| `--color-neutral-lightest` | Neutral Lightest | `#F2F2F2` | `oklch(95.2% 0 0)` | `242 242 242` | Light page background, light cards |
| `--color-neutral-lighter` | Neutral Lighter | `#DAD9D9` | `oklch(86.6% 0.001 17)` | `218 217 217` | Light section background (alt), card borders on light |
| `--color-neutral-light` | Neutral Light | `#B5B4B3` | `oklch(74.3% 0.001 60)` | `181 180 179` | Muted text on light, dividers |
| `--color-neutral` | Neutral | `#848380` | `oklch(56.0% 0.005 80)` | `132 131 128` | Body text on light (secondary), captions |
| `--color-neutral-dark` | Neutral Dark | `#53514D` | `oklch(38.7% 0.005 80)` | `83 81 77` | Body text on light (primary), card borders on dark |
| `--color-neutral-darker` | Neutral Darker | `#221F1B` | `oklch(18.1% 0.005 60)` | `34 31 27` | Section background (dark alt), card surface on dark |
| `--color-neutral-darkest` | Neutral Darkest | `#0A0702` | `oklch(6.7% 0.005 80)` | `10 7 2` | Hero / footer / dark section background; primary heading on light |

### Warm accents (bronze family — 3 hues)

| Token | Name | Hex | OKLCH | RGB | Use |
|---|---|---|---|---|---|
| `--color-brandy-punch` | Brandy Punch | `#CD722D` | `oklch(62.0% 0.155 50)` | `205 114 45` | **Primary brand accent.** Filled CTAs ("Borrow"), highlight words in copy ("discreet" / "Capital"), card gradient base, link/hover glow on dark. |
| `--color-amber` | Amber | `#FFC400` | `oklch(83.4% 0.180 89)` | `255 196 0` | Brighter accent — use sparingly. Active states, focus rings, alert. |
| `--color-marigold` | Marigold | `#BF862A` | `oklch(62.1% 0.115 70)` | `191 134 42` | Heritage gold — use on dark in hero pedestal treatment, deep card gradients. |

### Cool accents (navy family — 2 hues)

| Token | Name | Hex | OKLCH | RGB | Use |
|---|---|---|---|---|---|
| `--color-cloud-burst` | Cloud Burst | `#273166` | `oklch(27.5% 0.094 270)` | `39 49 102` | Card borders on light (the navy outlines on Figma "Brand" slide), dark card alt, deep CTAs. |
| `--color-ship-cove` | Ship Cove | `#7B8CBD` | `oklch(61.7% 0.064 265)` | `123 140 189` | Soft blue-grey for muted backgrounds, drapery gradient endpoint, secondary mood color. |

### Semantic aliases (the only thing components reference)

```css
--bg:           var(--color-neutral-lightest);  /* light mode default */
--bg-alt:       var(--color-neutral-lighter);
--bg-dark:      var(--color-neutral-darkest);
--bg-dark-alt:  var(--color-neutral-darker);

--fg:           var(--color-neutral-darkest);   /* light mode body */
--fg-muted:     var(--color-neutral-dark);
--fg-on-dark:   var(--color-neutral-lightest);  /* dark mode body */
--fg-on-dark-muted: var(--color-neutral-light);

--accent:        var(--color-brandy-punch);
--accent-strong: var(--color-marigold);
--accent-bright: var(--color-amber);

--border:       var(--color-cloud-burst);       /* navy borders on light */
--border-dark:  var(--color-neutral-dark);      /* subtle borders on dark */

--focus-ring:   var(--color-amber);
```

**Anti-slop rules baked in:**
- ❌ No purple gradients (the brand is bronze + navy + neutrals — purple is off-brand and an AI tell).
- ❌ No emoji icons. SVG icons only.
- ❌ No rounded-corner + thin left border accents (AI cliché).
- ❌ No SVG silhouettes for people. Real photography (the John_Capital Unique_* set).
- ❌ No CSS-gradient stand-ins for product/photo content.
- ✅ Bronze accent used **strategically**, not as a default tint. Light cards get a subtle bronze gradient. Highlight words in copy can be bronze. Most surfaces stay neutral.

---

## 🔤 Typography

Source: Figma typography page + user confirmation.

| Role | Family | Weight(s) | License | Use |
|---|---|---|---|---|
| **Display** | Montserrat | 800 (Black), 700 (Bold) | Google Fonts | Hero headings, section headings, pull quotes, wordmark-style emphasis |
| **Body** | Inter | 400 (Regular), 500 (Medium), 600 (Semibold) | Google Fonts | All body copy, navigation labels, button text, captions |
| **Eyebrow** | Montserrat | 600 (Semibold), 700 (Bold) | Google Fonts | Small uppercase eyebrow labels (e.g. "Approach", "The Process", "YOUR BRANDING KIT") — letter-spaced, 12–14px |

**Font loading (for `dist/*.html`):** Google Fonts `<link>` tag pointing to:
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700;800&display=swap
```

**Type scale (modular, 1.25× — Major Third):**

| Token | Size | Use |
|---|---|---|
| `--text-xs` | 12px / 0.75rem | Captions, footer fine print |
| `--text-sm` | 14px / 0.875rem | Eyebrow labels (caps), small UI |
| `--text-base` | 16px / 1rem | Body default |
| `--text-md` | 18px / 1.125rem | Body emphasis, lead paragraphs |
| `--text-lg` | 20px / 1.25rem | Step card body |
| `--text-xl` | 24px / 1.5rem | h4 / step heading "01 Understand the deal" |
| `--text-2xl` | 32px / 2rem | h3 |
| `--text-3xl` | 48px / 3rem | h2 / "How funding works" |
| `--text-4xl` | 72px / 4.5rem | h1 / "Capital Intelligently Applied." |
| `--text-5xl` | 96px / 6rem | Page-hero / "Capital, without the constraints of banks." |

**Line heights:**
- Display (3xl+): `1.05` (tight, dramatic)
- Sub-display (2xl): `1.15`
- Body (base, md, lg): `1.55`
- Small (xs, sm): `1.4`

**Letter-spacing:**
- Eyebrow (uppercase 14px): `0.08em`
- Display (3xl+): `-0.015em` (slight negative for tighter, more confident feel)
- Body: default

---

## 🎵 Voice & tone

**Five descriptors (locked):** *deliberate, discreet, considered, decisive, plain-spoken*.

**Brand framework cue (from `3.png` "The Brand" slide):**
- *How the brand operates*: Institutional heritage. Adaptive expertise. Partnership-focused.
- *What the brand is*: Calm authority, proven capability, generational trust.
- *Why it matters*: Bridges the gap between complex needs and accessible capital.
- *How it differs*: Beyond brokerage — strategic capital partnership.
- *What it does*: Delivers capital through expertise, structure, enduring partnerships.

**Copy rules:**
- Active voice, short sentences. "We move with clarity and speed." not "Speed and clarity are how we operate."
- One idea per paragraph. Three sentences max for a paragraph in body copy.
- Specifics over adjectives. "Decisions in 7 days" beats "fast turnaround".
- Bronze-highlight specific words (1 per heading max — see Figma "discreet", "Capital when banks say no" pattern).
- Never use: *innovative, cutting-edge, world-class, next-generation, unleash, supercharge*.

---

## 🚫 Anti-look (don't look like this)

User did not provide explicit anti-references, but from the brand framework + voice, avoid:
- **Fintech / startup gloss** — gradients on every card, neon accents, glassmorphism, rounded everything. The brand says "calm authority", not "growth-hacking SaaS".
- **Generic finance stock** — handshakes-in-front-of-skylines, bull-and-bear illustrations, Wall-Street ticker imagery.
- **Overly Christmas-warm bronze** — Brandy Punch + Marigold can drift toward holiday-warm if used everywhere. Restrain to accents + select gradient cards. Most surfaces stay neutral.
- **Two-tone purple/teal AI gradients** — the AI-design tell. Brand stays bronze + navy + neutrals.

---

## 📐 Layout primitives

- Container max-width: `1280px` (default), `960px` (text-led sections), `720px` (article body).
- Section vertical padding: `96px` desktop / `64px` tablet / `48px` mobile (light), more on dark heroes.
- Grid gutters: `24px` mobile / `32px` desktop.
- Card border-radius: `16px` (matches Figma rounded card style).
- Border weight: `1.5px` for navy borders on cards (matches Figma "Brand" slide cards).

---

## 🔄 Pairing rules (from user)

1. **Silver/chrome logo** pairs with **white / Neutral Lightest / drapery gradient** backgrounds.
2. **Bronze logo** pairs with **dark / Neutral Darkest / charcoal** backgrounds.
3. Section rhythm alternates light and dark — don't put 3+ light or dark sections in a row without contrast.
4. Bronze accent (Brandy Punch) used strategically — not as section color, but as: filled primary CTA / highlight word / card gradient base / focus ring.
5. Navy (Cloud Burst) used as: thin card outline on light backgrounds, deep card alt for "investor" treatment, section dividers.

---

## 📦 Asset paths (relative to project root)

```
Image Assets/                                    # source folder, NOT inside repo
├── Logo Square.png                              # bronze on dark, square frame
├── Logo Retangle Long.png                       # icon + wordmark, dark bg
├── 1.png – 195.png                              # Figma page exports (reference only)
└── John_Capital Unique_*.jpeg/png               # 25 photography shots
```

For Phase 4 hosting, photos and logos will be uploaded to GHL Media Library (or chosen CDN) and absolute URLs swapped in via `--CDN_BASE` find-and-replace. Until then, `docs/direction-*.html` references the source files via absolute file:// paths (won't work in `dist/` — that's Phase 4's job).
