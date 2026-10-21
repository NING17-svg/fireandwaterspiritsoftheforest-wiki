# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Site Snapshot

- Game: Fire and Water: Spirits of the Forest (Steam, IQ Games)
- Domain: `fireandwaterspiritsoftheforest.wiki`
- Primary locale: `en-US` (root paths, no prefix)
- Source of truth for copy: `guide-editor/content/index.md` and `guide-editor/content/guides/*.md`
- URL rule: `/` plus `/guides/<slug>`, never a trailing slash; the exported file is `out/guides/<slug>.html`

Every page's `seoTitle`, `metaDescription`, and rendered `<h1>` are byte-for-byte
copies of the Guide Editor frontmatter `title`, `description`, and body `# H1`.
Do not rewrite them from the game name — the editor owns that text.

## Page Inventory

The rows below are the primary-locale baseline. This site publishes one locale only,
so no page has a second-language alternate yet; adding a locale must also add its
canonical, hreflang, sitemap, and route-manifest entries.

| URL | File/Route | Shell | Intent | Primary keyword | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | home | Hub | Fire and Water: Spirits of the Forest | Spirit abilities | Hub | `guide-index` (3 groups) + `featured-guides` (lead spirits-abilities). Hero asset `forest-spirits-lineup`. |
| `/guides/spirits-abilities` | `src/data/pages/guide-pages.ts` | hub | hub | spirit abilities in Fire and Water | Puzzle solutions | Hub | Roster `data-table` + ability mechanics + first pairing. Two reader paths. Hero asset `forest-spirits-lineup`. |
| `/guides/puzzle-solving` | `src/data/pages/guide-pages.ts` | hub | hub | Fire and Water puzzle solutions | How to push objects | Hub | Frames the physics model; `callout` records that no per-level walkthrough is published. Hero asset `puzzle-gates-and-liquids`. |
| `/guides/how-to-push-objects` | `src/data/pages/guide-pages.ts` | content | process | how to push objects | Puzzle solutions | Task detail | Four `steps` sections; `reading-right-rail` with `guide-rail` ad slot. Hero asset `interactable-lava-water-slime`. |
| `/guides/level-structure` | `src/data/pages/guide-pages.ts` | content | answer | Fire and Water level structure | Collect all crystals | Reference | Level count and `schedule` of known bugs (Level 14 patched, Level 11 open). Hero asset `crystal-platform-run`. |
| `/guides/all-crystals` | `src/data/pages/guide-pages.ts` | content | process | how to collect all crystals | Get past enemies | Task detail | `steps` + `data-table` of level-specific crystal bugs. Hero asset `crystal-platform-run`. |
| `/guides/getting-past-enemies` | `src/data/pages/guide-pages.ts` | content | process | how to get past enemies | Spirit abilities | Task detail | Stun pattern for mutant plants; `entity-grid` for patrol lanes. Hero asset `mutant-plant-encounter`. |
| `/guides/co-op-and-game-modes` | `src/data/pages/guide-pages.ts` | hub | hub | play Fire and Water solo | Online co-op lag fix | Hub | Records that the store-listed shared-keyboard mode was disabled upstream. Hero asset `forest-spirits-lineup`. |
| `/guides/online-co-op-lag-fix` | `src/data/pages/guide-pages.ts` | content | answer | online co-op lag fix | Co-op and game modes | Task detail | VSYNC desync, stuck "Creating…" lobby, Remote Play stream, Deck aiming. No hero asset; one `media-gallery`. |

## Deliberately Absent URLs

There is no `/wiki`, `/guides` index, `/release-date`, `/faq`, `/about`,
`/contact`, `/privacy-policy`, or `/terms`. Do not add footer or navigation links
to these until a matching page ships in the corresponding `src/data/pages/*.ts`
array — an unlinked 404 is a broken internal link, and `validate_slashless_export`
rejects internal links that miss the route manifest.

## Reader Paths

Each guide's frontmatter `next_steps` entry requires an in-body link inside the
named H2 section, not only in the page footer. Verify after any content edit:

| Page | Section (`after_heading`) | Target |
|---|---|---|
| `/guides/spirits-abilities` | How Spirit Abilities Work | `/guides/puzzle-solving` |
| `/guides/spirits-abilities` | Using Abilities on Mutant Plants | `/guides/getting-past-enemies` |
| `/guides/puzzle-solving` | Key Puzzle Pieces | `/guides/how-to-push-objects` |
| `/guides/how-to-push-objects` | Use Both Spirits for Force | `/guides/puzzle-solving` |
| `/guides/level-structure` | How Many Levels Are in the Game | `/guides/all-crystals` |
| `/guides/all-crystals` | Stunning Plants for Crystal Routes | `/guides/getting-past-enemies` |
| `/guides/getting-past-enemies` | Stun Plants With an Elemental Shot | `/guides/spirits-abilities` |
| `/guides/co-op-and-game-modes` | Online Co-op and Steam Remote Play | `/guides/online-co-op-lag-fix` |
| `/guides/online-co-op-lag-fix` | Lag Between the Two Players | `/guides/co-op-and-game-modes` |

The rendered heading must match `after_heading` exactly. Note that
`StatusCallout` renders as `.status-callout`, not `.content-module`, so a
`callout` module is invisible to that check — never move a reader-path link
into a callout title.

## Generated Route Families

- Fixed pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity hubs and details: generated from `src/data/entities.ts`. That file is
  empty for this site; the game has no separate entity layer worth a route family.
- Final route inventory: `npm run routes:manifest -- --output route-manifest.json`.

## Asset Registry

Five Collector images, all under `public/images/` and registered in
`src/data/assets.ts` with alt text:

| Asset id | Rendered on |
|---|---|
| `forest-spirits-lineup` | home hero, home featured lead, spirits-abilities hero, co-op-and-game-modes hero |
| `puzzle-gates-and-liquids` | puzzle-solving hero |
| `crystal-platform-run` | all-crystals hero, level-structure hero |
| `mutant-plant-encounter` | getting-past-enemies hero, online-co-op-lag-fix media gallery |
| `interactable-lava-water-slime` | how-to-push-objects hero |

## Ad Positions

Six positions are declared in `ad-placement-manifest.json` and all six render:
`page-top` and `footer-sponsored` on all 9 pages; `guide-section-break`,
`guide-native`, `guide-before-faq`, and `guide-rail` on the 5 `content`-shell
pages. In-body anchors live in `src/data/ad-anchors.ts` and name real module ids.
Every code in `src/data/ads.ts` is intentionally empty until the Adsterra
Integrator fills them.