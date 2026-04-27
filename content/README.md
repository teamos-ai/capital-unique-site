# Capital Unique — Content (Markdown)

Page copywriting converted from the supplied client PDFs into clean markdown for the build pipeline. Each file maps to one Relume page export folder.

## File map

| Markdown file | Relume folder | Suggested URL slug | Status |
|---|---|---|---|
| `home.md` | `home/` | `/` | ✅ Complete |
| `overview.md` | `overview/` | `/overview` | ✅ Complete |
| `about.md` | `about/` | `/about` | ✅ Complete |
| `how-it-works.md` | `how-it-works/` | `/how-it-works` | ⚠️ **Incomplete — placeholder copy** |
| `get-capital.md` | `get-capital/` | `/get-capital` | ✅ Complete (testimonials + project gallery TBD) |
| `business.md` | `business/` | `/business` | ✅ Complete |
| `commercial.md` | `commercial/` | `/commercial` | ✅ Complete |
| `construction.md` | `construction/` | `/construction` | ⚠️ See note below |
| `agriculture.md` | `agriculture/` | `/agriculture` | ✅ Complete |
| `property-development.md` | `property-development/` | `/property-development` | ✅ Complete |
| `private-capital.md` | `private-capital/` | `/private-capital` | ✅ Complete |
| `charles-ai.md` | `charles-a.i/` | `/charles-ai` | ✅ Complete |
| `calculators.md` | `calculators/` | `/calculators` | ✅ Complete (calculators themselves are TBD) |
| `guides.md` | `guides/` | `/guides` | ✅ Complete |
| `articles.md` | `articles/` | `/articles` | ✅ Complete (article bodies TBD) |
| `insights-and-resources.md` | `insights-&-resources/` | `/insights-and-resources` | ✅ Complete |
| — | `contact/` | `/contact` | ❌ **No copy supplied** |

**17 Relume pages total. 16 markdown files supplied. Contact page copy is missing.**

## Things Claude Code needs to flag with the client before/during build

### 1. How It Works page is largely placeholder copy
The hero heading, hero body, and all four step descriptions in `how-it-works.md` are still Lorem ipsum from Relume. The 4-step structure on Home, Overview, and Get Capital strongly suggests the steps map to *Understand the deal → Assess options → Confirm terms → Deploy funding*, but the client should confirm and provide finalised body copy. Search for `<!-- TODO -->` comments in that file.

### 2. Construction page has copy/paste artefacts from Agriculture
The "How construction capital moves" section in `construction.md` references "seasonal patterns" and "farm structure" — clearly dropped in from the Agriculture template and not retailored. Original wording is preserved in the file with `<!-- NOTE -->` flags. Recommend a quick rewrite for build/project context.

### 3. Reused content blocks across pages
The 4-step "How funding works" block (Understand the deal / Assess options / Confirm terms / Deploy funding) appears verbatim on Home, Overview, and Get Capital. It also appears in adapted form on Business, Commercial, Construction, Agriculture, Property Development, Private Capital, and (likely) How It Works. **Build this as a single shared partial / component** — fixing one fixes all.

Similarly, the "Start with Charles A.I" CTA block appears on Business, How It Works, Property Development, Private Capital, Agriculture. Make it a partial.

### 4. Missing copy / assets

| Item | Where it's needed |
|---|---|
| Contact page copy | `/contact` |
| Testimonial quotes (2–4) | Home, Get Capital |
| Project case studies (3–6) | Get Capital ("Our work" section) |
| Agriculture "We structure capital around:" bullet list | Agriculture |
| Construction project type list | Construction |
| Article body copy | Articles (3 articles indexed, no bodies) |
| Calculator interactive logic | Calculators (5 tools listed, no math defined) |
| Guides PDF assets | Guides (3 featured guides + library) |

### 5. Duplicate content between Articles and Insights & Resources
Both pages list articles with similar titles. The site IA suggests:
- `/insights-and-resources` = hub page combining all three resource types (guides, calculators, articles)
- `/articles` = articles-only listing
- `/guides` = guides-only listing
- `/calculators` = calculators-only listing

Confirm with client that this is the intended hierarchy. The article titles on `/articles` and `/insights-and-resources` differ slightly — pick one canonical set.

### 6. Charles A.I as a feature, not a page
"Start with Charles A.I" appears as a CTA on most service pages. Confirm with client whether `/charles-ai` is a destination page describing the tool, an actual interactive tool embedded in the page, or a route to a third-party app.

## Frontmatter schema used in each file

```yaml
---
slug: /the-url-path
relume_folder: matching-folder-name
title: Browser tab / OG title
meta_description: 1–2 sentence meta description
status: incomplete  # only present when applicable
---
```

The build script can parse this to populate `<title>`, `<meta name="description">`, and Open Graph tags on each `dist/<page>.html`.

## Convention used in body content

- `# H1` — hero heading (page-level, only one per file)
- `## H2` — section heading
- `### H3` — sub-section / step / card
- `**Primary CTA:**` and `**Secondary CTA:**` — explicit CTA labels
- `<!-- TODO: ... -->` — copy gap that needs client input
- `<!-- NOTE: ... -->` — observation about the source content (not a gap, just context)
- `<!-- IMPLEMENTATION NOTE: ... -->` — guidance for the build, not the writer

When converting to HTML, strip all HTML comments before shipping to `dist/`.
