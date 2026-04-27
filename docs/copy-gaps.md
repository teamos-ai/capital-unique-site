# Copy gaps log

Items flagged during Phase 1 wireframe generation across all 17 pages, organised by page. Each row is something to address before Phase 5 (GHL upload) by either supplying real content, confirming a placeholder is acceptable, or making a Phase 2 design/structure decision.

Three categories:
- **TODO** — explicit content gap. Real copy or assets needed.
- **NOTE** — structural observation. Decision required (often Phase 2).
- **STATUS** — section currently flagged `data-status` in the wireframe.

---

## /home

| Section | Type | Note |
|---|---|---|
| Layout381 — duplicate icon card | NOTE | Relume export contains two near-identical "Intelligent, discreet, reliable" icon cards. Phase 2: keep both, replace second with a different value-prop, or collapse to one. |
| What clients say (Testimonial33) | STATUS | Testimonial copy not yet provided. Needs 2–4 short quotes with name + role + company. |
| Ready to move forward | STATUS extra-from-copy | Final CTA "Get Started / Speak with our team" exists in `content/home.md` but has no matching Relume component. Phase 2: add a `partials/cta-final.html` or drop from copy. |

## /overview

| Section | Type | Note |
|---|---|---|
| Hero (extra-from-copy) | STATUS | H1 + lede in markdown has no matching Header component in `overview/index.jsx`. Phase 2: add a Header76 (mirror of Home) or remove the hero copy. |
| Logo3 trust strip | STATUS | Awaiting real partner logos (~8). |
| Layout239 third card | NOTE | Layout239 ships with 3 icon-card slots; only 2 pathway blocks exist. Third filled with "Capital designed around your strategy" — Phase 2 confirmation. |
| Structured opportunities (extra-from-copy) | STATUS | Investor-side block in markdown has no matching Relume component. Phase 2: add Layout207-style block or fold into Layout239. |
| Gallery24 / Our work | STATUS | Component present but no markdown copy. Awaiting 3+ project tiles. |
| Testimonial33 | STATUS | Component present but no markdown copy. Awaiting 2–4 quotes. |

## /about

| Section | Type | Note |
|---|---|---|
| Header15 headline | NOTE | Relume placeholder "Direct access, every time" replaced with "One decision-maker. End to end." from markdown. Demoted from h1 to h2 for accessibility. |
| Header6 (extra-from-copy) | STATUS | Component has no matching markdown block. Relume copy carried; confirm with client. Decide whether to keep embedded email-capture form. |
| Testimonial3 | STATUS | No testimonial copy in markdown. Awaiting 3 quotes + names + cities + optional logos. |
| Cta25 (extra-from-copy) | STATUS | Final-CTA copy not in markdown; carried from Relume. Flagged `data-partial="cta-charles-ai"`. |

## /how-it-works *(intentionally placeholder copy per brief — user will write later)*

| Section | Type | Note |
|---|---|---|
| Header78 hero | TODO | "Medium length hero heading goes here" + Lorem ipsum body. Suggested: "How non-bank capital actually works" / "From conversation to capital, in four clear steps". |
| Header62 intro | TODO | Lorem ipsum body. Provisionally replaced; confirm. |
| Layout254 / Step 1 (Understand the deal) | TODO | Real body copy needed. |
| Layout254 / Step 2 (Assess options) | TODO | Real body copy needed. |
| Layout254 / Step 3 (Confirm terms) | TODO | Real body copy needed. |
| Layout254 / Step 4 (Deploy funding) | TODO | Real body copy needed. |
| Charles A.I block (extra-from-copy) | STATUS | "Start with Charles A.I for clarity" in markdown has no matching Relume component. Phase 2: add layout component or extract as `cta-charles-ai` partial. |

## /get-capital

| Section | Type | Note |
|---|---|---|
| Hero (extra-from-copy) | STATUS | H1 + lede in markdown has no matching Header component. Phase 2: add or accept Logo3 as opener. |
| Logo3 trust strip | STATUS | Awaiting real partner logos. |
| Layout422 second card | NOTE | Relume ships both cards labelled "For borrowers / Strategic capital for complex decisions". Relabelled second card as investor-side. Confirm. |
| Layout16 differentiators | NOTE | Layout16 is single-image + bullet list in Relume; markdown has 3-card grid. Rendered as inline 3-card list. Phase 2: confirm component swap. |
| Layout207 mapping | NOTE | Relume default is investor-side; mapped here to borrower-leaning "Lending shaped around your situation". Eyebrow "Fund" may not fit. |
| Our work (project gallery) | TODO | Project gallery copy not provided. Needs 3–6 project summaries + photography. No Relume component. Phase 2: add Gallery24 or custom grid. |
| What clients say (testimonials) | TODO | Testimonial copy not provided. No Testimonial component in `get-capital/index.jsx`. Phase 2: add Testimonial33. |
| Cta21 (extra-from-copy) | STATUS | "Choose your path forward" heading + body has no matching markdown block; carried Relume default. |

## /business

| Section | Type | Note |
|---|---|---|
| How business capital moves (Layout298) | NOTE | Step labels (Clarity / Structure / Suitability / Judgement) diverge from home's verb-led process labels (Understand / Assess / Confirm / Deploy). Confirm whether `how-funding-works` partial supports both label sets. |
| Cta25 (Charles A.I) | NOTE | Relume Cta25 default copy ("Next steps are yours to set") differs from content md framing ("Start with Charles A.I"). Used content as canonical. |

## /commercial

| Section | Type | Note |
|---|---|---|
| Hero (Header62 secondary) | NOTE | Two `<h1>` elements (Header76 + Header62). Demote Header62 to `<h2>` or restructure. |
| How we differ from banks (Layout508) | TODO | 6 tabs in Relume; only 1 tab body (Business reality) provided in markdown. Cash flow context / Asset focus / Timing awareness / Timing matters bodies missing. One tab title duplicated ("Business reality" appears twice). |
| Commercial Scenarios (Layout417) | TODO | 4 stacking cards (Working capital pressure / Business acquisition / Equipment and assets / Transitional restructuring) with no body copy in markdown. Body drafted from `/business` analogues — confirm. |
| End of page | NOTE | No Cta25 in `commercial/index.jsx` — page ends abruptly on Layout298. Confirm whether intentional or whether a closing CTA should be added. |

## /construction *(known agriculture copy bleed — preserved verbatim per brief)*

| Section | Type | Note |
|---|---|---|
| Hero parallax tiles (Header80) | NOTE | Phase 4: confirm whether to keep 6-tile parallax or simplify to single editorial photograph. |
| Inline logo strip in Layout138 | NOTE | Logo strip embedded in Fundamentals block; not present on /home or /agriculture. Confirm whether to remove or align with global `logo-strip` partial. |
| Construction projects we fund (Gallery2) | TODO | Project type categories (residential dev / commercial fitout / multi-stage subdivision / civil works) absent from markdown. Gallery2 ships 2 image tiles only — likely needs 3–4 cards with text. |
| Build Projects Funded (Layout417) | NOTE | Relume ships 4 cards (Ground-up / Funding gaps / Delays / Land-to-build) with placeholder copy. Markdown supplies 3 alternative cards (Builders ✅ / Developers ✅ / Not suited ❌). Used markdown as canonical. Phase 2: extend back to 4 or restructure. |
| How construction capital moves — step 01 Listen | NOTE | Copy-bleed from /agriculture: "seasonal patterns" reads as agriculture language. Recommended: "your project, build schedule, risk profile, and what capital needs to achieve". Preserved verbatim per spec. |
| How construction capital moves — step 02 Assess | NOTE | Copy-bleed: "your farm structure" reads as agriculture language. Recommended: "your project structure" / "your build structure". Preserved verbatim per spec. |
| Cta25 | NOTE | Markdown specifies single CTA "Speak with our team". Relume ships two (Use Charles A.I + Book a call). Both retained per `cta-charles-ai` partial pattern. Confirm hierarchy. |

## /agriculture

| Section | Type | Note |
|---|---|---|
| How agricultural capital works (Layout138) | TODO | Source PDF says "We structure capital around:" but bullet list missing from export. Likely items: land value, stock and equipment as collateral, seasonal cashflow timing, off-take/contract certainty. Confirm with client. |
| Agricultural Working Capital (Layout365) | NOTE | Relume ships 2 near-identical "Working capital pressure" cards. Markdown's 4 categories (Working / Land / Acquire / Bridge) live in Layout254 below — Layout365's 3-card structure has no clean content mapping. Phase 2: author distinct copy per card or collapse. |
| How we think about agricultural capital (Layout121) | NOTE | Relume export typo "Seasonal Patters" — corrected to "Seasonal patterns" in wireframe. |
| Map your scenario before the conversation | STATUS extra-from-copy | Section exists in markdown but no matching Relume component. Phase 2: fold into Cta25, add as standalone block, or remove from copy. |

## /property-development

| Section | Type | Note |
|---|---|---|
| Layout138 logo strip | NOTE | Embedded logo strip duplicates the home-page Logo3 trust signal. Confirm whether this strip is needed here. |
| Layout399 process labels | NOTE | Variant uses Understand / Assess / Confirm / **Execute**; canonical home block uses Deploy. Decide whether to align labels. |
| Gallery7 (project case studies) | STATUS | 3–6 real project case-study images and links pending. (Tracked in `content/README.md` item 4.) |

## /private-capital

| Section | Type | Note |
|---|---|---|
| Header78 hero marquee | NOTE | Dual-row scrolling marquee. Phase 4: confirm whether to keep motion or replace with single editorial photograph (mirrors home recommendation). |
| Layout138 logo strip | NOTE | Embedded logo strip; rationalise against the second logo strip in Cta33 — pick one location. |
| Layout416 scenarios | TODO | Per-card body copy missing for Asset-rich / Trust-held / Equity release. Relume placeholder duplicated across all three. Markdown provides intro only. |
| Layout376 fit | NOTE | Relume layout is 1 feature + 4 "Not suitable for" duplicates; markdown supplies four distinct headings. Confirm card layout (1+3 or 4 equal). |
| "This works when complexity demands it" | STATUS extra-from-copy | Section in markdown, no matching Relume component. Phase 2: new partial, fold into preceding section, or remove. |
| Cta33 logo strip | NOTE | Second logo strip on this page; pick one location. |

## /charles-ai

| Section | Type | Note |
|---|---|---|
| Logo3 | NOTE | Heading lifted from Relume export — markdown supplies no heading for this strip. Confirm strip belongs on this page at all. |
| Header62 sub-hero | NOTE | Relume export uses a second `<h1>` below the main Header145 hero. Recommend demoting to `<h2>` in Phase 2. |
| "How Charles A.I works" 3-step | STATUS extra-from-copy | 3-step process in markdown, no matching Relume component. Phase 2: add a 3-step layout component or adapt `how-funding-works` partial. |

## /contact

| Section | Type | Note |
|---|---|---|
| (entire page) | STATUS | No `content/contact.md` supplied. Hero, form labels/options, contact details, and Contact22 cards all need real copy. (Tracked in `content/README.md` item 4.) |
| Contact6 form | NOTE | Form fields all disabled in wireframe. Confirm dropdown options, radio copy, validation, success/error messaging, and submission target (email/CRM/both). |
| Contact22 vs Contact6 | NOTE | Contact22 duplicates email/phone/office details already in Contact6. Confirm whether both blocks are needed. |

## /calculators

| Section | Type | Note |
|---|---|---|
| Header60 hero copy | NOTE | "Calculators designed for clarity" used from markdown, replacing Relume placeholder ("Let's Calculate."). Confirm voice. |
| Calculator suite (5 cards) | STATUS | Interactive calculator logic TBD. Card grid has no matching Relume component. Phase 2: confirm dedicated pages (`/calculators/borrowing-capacity`) vs inline modals; decide on icon/illustration treatment. |
| Cta21 | TODO | Generic copy in Relume export ("Ready for a conversation"). Confirm whether this should route to Charles A.I (apply `cta-charles-ai` partial) or remain a generic advisor-conversation CTA. |

## /guides

| Section | Type | Note |
|---|---|---|
| Cta58 (email capture) | TODO | Confirm whether guide downloads are gated (registration per guide) or ungated with email opt-in for full library. FAQ implies registration is required. |
| Blog34 featured guides | STATUS | Three featured guide PDFs pending — copy + metadata in markdown, asset files not yet produced. |
| Faq6 | NOTE | Five Q&As rendered as `<dl>`. Phase 2: confirm whether to keep `<details>` accordion or static `<dl>` in production. |

## /articles

| Section | Type | Note |
|---|---|---|
| Header77 image marquee | NOTE | Auto-scrolling image marquee. Phase 4: keep motion or replace with static editorial collage. |
| Logo3 | STATUS | Logo strip pending real partner / publication logos. |
| BlogPostHeader1 | TODO | Single-article header sitting inside the listing index. Likely intended for a future `/articles/[slug]` template. Confirm: remove from index, repurpose as "Featured article" hero, or keep as wireframe placeholder. Articles will be authored in GHL's blog. |
| Cta58 | NOTE | Currently tagged `data-partial="cta-charles-ai"` but is actually a newsletter capture. Remove the partial flag if it stays a newsletter form. |
| Blog34 article cards | STATUS | Three article bodies pending. To be authored in GHL blog. |

## /insights-and-resources

| Section | Type | Note |
|---|---|---|
| Layout396 pillar icons | NOTE | Three pillar icons. Phase 2: refined line-icon vs editorial photo treatment. |
| Blog34 + Blog34_1 | NOTE | Two near-identical components (Blog34 for guides, Blog34_1 for articles). Confirm consolidation into a shared partial parameterised by content type. |
| Blog34 (Essential reading) | STATUS | Guide PDF assets pending. |
| Layout237 (calculators) | STATUS | Calculator interactive logic pending. Markdown only lists 3 calculators (vs 5 on /calculators). Confirm whether hub deliberately surfaces a subset. |
| Blog34_1 (Recent writing) | STATUS | Article bodies pending. |
| Cta21 | TODO | Generic "Explore / Contact" copy. Confirm whether hub-page CTA should route to Charles A.I (`cta-charles-ai` partial) or remain a generic team-conversation CTA. |

---

## Cross-cutting Phase 2 decisions

These come up on multiple pages — resolve once and apply across:

1. **`how-funding-works` partial label set** — verb-led (Understand / Assess / Confirm / Deploy) on home, but several pages use thematic labels (Clarity / Structure / Suitability / Judgement on /business; Execute instead of Deploy on /property-development). Decide: one canonical label set, or partial supports both.
2. **`cta-charles-ai` partial scope** — Cta21 / Cta25 / Cta33 / Cta57 / Cta58 all exist across pages with subtly different copy. Some are explicit Charles A.I CTAs, some are newsletter capture, some are generic "talk to us". Decide which Cta variants belong to the partial.
3. **Logo strip placement** — Logo3 appears as a top-level partial on /home, /overview, /get-capital, /charles-ai, /articles. But /property-development, /private-capital, /construction also embed inline logo strips inside Layout138 / Cta33. Pick one canonical placement pattern.
4. **Hero motion** — multiple pages ship multi-tile parallax / marquee / scrolling image grids (Header76 on home + commercial; Header77 on articles; Header78 on private-capital + how-it-works; Header80 on construction). Decide: keep motion as a hero pattern, or default to single editorial photograph (matches editorial design lean).
5. **Two `<h1>` per page** — /commercial, /charles-ai both ship two `<h1>` elements from the Relume export. Demote secondary to `<h2>` for accessibility.
6. **Awaiting-content backfill order** — testimonials (home, overview, about, get-capital), project gallery (overview, get-capital, property-development), partner logos (home, overview, get-capital, charles-ai, articles), guide PDFs (guides, insights-and-resources), article bodies (articles, insights-and-resources), calculator logic (calculators, insights-and-resources), full contact page copy. These are easy swaps once content arrives.
