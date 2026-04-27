# Image manifest — Phase 4

> Generated 2026-04-28. Single source of truth for every image referenced across the site. Updated when an image is added, replaced, or moved.

This file maps **every image used in `styled/*.html`** to its source file in `Image Assets/`, the pages where it appears, the slot description (Phase 4 prompt context), and the eventual absolute URL once hosted.

Phase 4 process:
1. Decide hosting (GHL Media Library / GitHub Pages / external CDN).
2. Optimise images (resize to web-appropriate dimensions, convert to WebP with JPEG fallback, compress to ~150–300 KB target).
3. Upload optimised files to host; capture absolute URL per file.
4. Find-replace `../../Image%20Assets/<filename>` with the absolute URL across `styled/*.html` and `src/shared/direction-b.css`.
5. Tag `images-v1`.

---

## Optimisation targets (per image type)

| Type | Display max | Target file size | Format |
|---|---|---|---|
| Logo (PNG with transparency) | 200×200px | < 30 KB | PNG (preserve transparency) |
| Hero / pedestal background | 1920×1080px | 200–350 KB | WebP + JPEG fallback |
| Card image (4:3 / 3:4) | 1200×900px | 150–250 KB | WebP + JPEG fallback |
| Final-vault hero (21:7) | 2400×800px | 250–400 KB | WebP + JPEG fallback |
| Headshot / portrait | 800×1000px | 120–200 KB | WebP + JPEG fallback |

---

## Currently-used images (19 files)

Find-replace key: in `styled/*.html` and `src/shared/direction-b.css`, every reference uses the form `../../Image%20Assets/<filename>` (HTML files) or `../../../Image%20Assets/<filename>` (CSS file). Phase 4 swaps the prefix only.

| # | Source file | Source size | Used on (pages) | Slot description | Target URL (TBD) |
|---|---|---|---|---|---|
| 1 | `Logo Square.png` | 416 KB | All 17 pages (navbar + footer) + pedestal coin in hero (CSS) | Bronze "M." monogram on charcoal rounded square. Logo file. | TBD |
| 2 | `John_Capital Unique_Footer_Pressure.jpeg` | 2,292 KB | home, about, calculators, charles-ai, business, commercial, agriculture, construction, property-development, private-capital, insights-and-resources, overview, how-it-works | `final-vault__hero` (cinematic bronze pressure shot under final CTA). | TBD |
| 3 | `John_Capital Unique_Strategy_CHess.jpeg` | 608 KB | home, get-capital (pathway--borrow), guides, charles-ai, insights-and-resources | "Borrow" pathway card backdrop (chess strategy). | TBD |
| 4 | `John_Capital Unique_Headshot_Tan_Golden.jpeg` | 1,652 KB | home, overview, get-capital (pathway--invest), articles | "Investor" pathway / approach card (warm-light portrait). | TBD |
| 5 | `John_Capital Unique_Office_Seated.jpeg` | 664 KB | home, charles-ai | Approach card "For borrowers seeking finance" (advisor at desk). | TBD |
| 6 | `John_Capital Unique_Meeting_Women.png` | 1,612 KB | home | Approach card "Deploy capital with clarity" (partnership meeting). | TBD |
| 7 | `John_Capital Unique_WaitRoom_Painting.jpeg` | 908 KB | home (hero backdrop), about (full-bleed standards background) | Hero backdrop (faint), Standards section bg. | TBD |
| 8 | `John_Capital Unique_Book_Shelf.jpeg` | 712 KB | home (hero backdrop) | Hero backdrop (faint). | TBD |
| 9 | `John_Capital Unique_Headshot_Dark.jpeg` | 468 KB | about | Hero portrait — John Codrington (dark suit, dark bg). | TBD |
| 10 | `John_Capital Unique_BlueBooks.png` | 496 KB | about, insights-and-resources | Cycles split (about) / Essential reading card (insights). | TBD |
| 11 | `John_Capital Unique_Office_Profile_Seated.jpeg` | 2,800 KB | about | Decision-maker split — John profile shot. | TBD |
| 12 | `John_Capital Unique_Meeting_BoardRoom.png` | 1,856 KB | overview, articles, insights-and-resources, property-development | Project / boardroom imagery. | TBD |
| 13 | `John_Capital Unique_Hand_Shake.jpeg` | 2,648 KB | overview, charles-ai, articles, construction | Partnership / handshake. | TBD |
| 14 | `John_Capital Unique_Review_Documents.png` | 1,876 KB | overview, get-capital, guides, construction, insights-and-resources | Document review. | TBD |
| 15 | `John_Capital Unique_Footer_WAve.jpeg` | 2,408 KB | get-capital, agriculture | Final-vault wave hero variant. | TBD |
| 16 | `John_Capital Unique_Calculator.jpeg` | 884 KB | charles-ai, guides | Calculator / numbers shot. | TBD |
| 17 | `John_Capital Unique_Empty_Desk.jpeg` | 704 KB | articles, insights-and-resources | Quiet office / contemplation. | TBD |
| 18 | `John_Capital Unique_Meeting_Sign.png` | 1,848 KB | construction, insights-and-resources, get-capital | Document signing. | TBD |
| 19 | `John_Capital Unique_Table_Coffee_Paper.jpeg` | 3,360 KB | get-capital | Tailored split (Table / coffee / paper still life). | TBD |

**Total raw size:** ~30 MB. **Target after optimisation:** < 6 MB (60–80% reduction via resize + WebP compression).

---

## Available but not yet placed (7 files)

These photos in `Image Assets/` aren't currently referenced by any `styled/*.html`. They remain candidates for Phase 4 swaps if a slot's current photo doesn't land:

| File | Source size | Suggested use |
|---|---|---|
| `Logo Retangle Long.png` | 88 KB | Wordmark + icon variant — could replace text-only "capital unique" wordmark in navbar/footer for richer brand expression. |
| `John_Capital Unique_Book_Car_Married_Finance.jpeg` | 2,652 KB | Strategy / lifestyle moment. |
| `John_Capital Unique_Book_Serious_Investors.jpeg` | 2,712 KB | Investor / heritage section. |
| `John_Capital Unique_Calculator_Abstract.jpeg` | 592 KB | Calculator hero alternative. |
| `John_Capital Unique_Desk_Coffee.jpeg` | 844 KB | Approach / "deliberate" beat. |
| `John_Capital Unique_Footer_Cards.jpeg` | 2,304 KB | Alternative final-vault hero. |
| `John_Capital Unique_Footer_Rocks.jpeg` | 2,400 KB | Alternative final-vault hero. |
| `John_Capital Unique_Footer_Shapes.jpeg` | 2,380 KB | Alternative final-vault hero. |
| `John_Capital Unique_Footer_Shuffle_Cards.jpeg` | 2,472 KB | Alternative final-vault hero. |

---

## Slots that may benefit from a Gemini-generated alternative

Per huashu-design's "core asset protocol" (anti-AI-slop rule: real photography only — no SVG silhouettes, no CSS shape stand-ins), Gemini-generated images should look like real editorial photography, not illustrations. The brand-spec voice (deliberate, discreet, considered, decisive, plain-spoken) should drive prompts.

Slots where current photos are weakest / most repetitive (candidates for replacement):

| Slot | Current photo | Issue | Proposed Gemini prompt direction |
|---|---|---|---|
| Final-vault hero (13 pages reuse `Footer_Pressure.jpeg`) | 1 photo, 13 places | Visual repetition across pages | Generate 4 variants of "cinematic bronze pressure" hero so service pages differ from each other. |
| Construction project gallery | 3 boardroom/handshake photos | Off-topic for construction | Generate 3 real construction-site photos: residential dev, commercial fitout, multi-stage subdivision. |
| Property-development hero | 1 boardroom photo | Off-topic | Generate 1 architectural/site-walk photo. |
| Calculators page | None of the photos really fit interactive tools | Tool feel weak | Generate 5 abstract bronze-on-charcoal "tool" icons (NOT illustrations — abstract photographic stills like a brass scale, ledger, slide rule etc.). |
| Pathways cards across home/get-capital/overview | Same chess + headshot duo on every page | Repetition | Generate 2-3 variants per pathway so reuse doesn't read as lazy. |

**Decision required (Phase 4 question):** which (if any) of the above slots warrant Gemini gen vs accepting the existing photos as-is.

---

## Hosting URL placeholder

Once hosting is chosen, every entry in this file gets an absolute URL. The find-replace token used in `styled/*.html` will be:

- Source: `../../Image%20Assets/<filename>`
- Target: `<HOSTING_BASE>/<optimised-filename>`

For `src/shared/direction-b.css` the source is `../../../Image%20Assets/<filename>` (one extra `../` because CSS is two levels deep at `src/shared/`).

---

## Phase 5 grep checks (must all return 0 matches in `dist/*.html`)

After Phase 4 swaps + Phase 5 packaging, these patterns must not appear in any `dist/<page>.html`:

```
src="../../
src="../
src="./
src="/
url("../
url("../../
url("../../../
Image%20Assets
Image Assets
```
