# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-10-22 - Content update: online lag causes and the update roadmap

- `/guides/online-co-op-lag-fix` gained a causes section naming the developer's own three runtime triggers (VPN enabled, host below full framerate with graphics on Ultra, unstable connection), flagged the VPN as the one a player can clear on their own side, added the 100% physics explanation for why ordinary jitter is unusually visible here, and recorded the still-unexplained report of a joining player's characters teleporting while the host sees nothing. The existing patched-symptom fixes (VSYNC desync, "Creating…" lobby, Remote Play, Deck aiming) are unchanged.
- `/guides/co-op-and-game-modes` now points online-session readers at those causes and states the regional session-server limit, including the developer's own explanation for the worst lobby reports from China.
- New page `/guides/update-roadmap`: every publicly committed but unshipped item with the date the developer stated it (levels, snow and desert DLC packs, level editor with public sharing, achievements, tutorial, new enemy types, stun feedback, music and sound effects, facial animation, localization, console ports), the level count shown as the conflicting public figures rather than one number, and an explicit note that no ship date or price has been published.
- `/guides/level-structure` replaces its single level count with those conflicting figures and links its snow/desert DLC bullet to the roadmap; `/guides/getting-past-enemies` and `/guides/spirits-abilities` link their roadmap-relevant callout and achievement to the new page; `/guides/puzzle-solving` links its physics framing to the lag causes.
- Home guide-index gained a "What is coming next" group and its level-count key fact now says the public figures conflict.
- Ad placement contract unchanged: `ad-placement-manifest.json`, every code in `src/data/ads.ts`, the six declared slots and the existing `guide-section-break` anchors were not touched; the new page follows the `content` / `reading-right-rail` family and gets its own anchor after `committed-but-not-shipped`.
- No route, canonical, hreflang, sitemap or ownership change. Route count 9 → 10.

### 2026-10-21 - Adsterra integration: 11 codes filled

- `adsterra-integrator` registered `fireandwaterspiritsoftheforest.wiki` with Adsterra and created 6 platform placements covering every format/size the V4 inventory selects: Banner 728x90, 468x60, 320x50, 160x300, Native Banner, Smartlink. Popunder and Social Bar are not in the page inventory and were not requested.
- All 11 page-level keys in `src/data/ads.ts` are populated with the assigned Adsterra codes; the three same-size `page-top`/`guide-section-break`/`guide-before-faq` keys share one platform placement per format.
- No layout, component or page change. No live verification performed; `npm run verify` rebuilt the static export. Cloudflare build, live page checks, ad requests and revenue are out of scope for this entry.

### 2026-10-21 - fireandwaterspiritsoftheforest.wiki assembled from the Guide Editor handoff

- Built 9 pages: home hub plus one `/guides/<slug>` page per Guide Editor article. `seoTitle`, `metaDescription`, and `<h1>` are byte-for-byte copies of frontmatter `title`, `description`, and body `# H1`; home `h1` is the game name from `site.gameName`.
- Shells by answer shape: 3 hub pages (spirits-abilities, puzzle-solving, co-op-and-game-modes), 5 `reading-right-rail` content pages, 1 `guide-portal` home. `hub` variant is `grouped-list` — `guide-portal` is a `HomeVariant` and fails typecheck on the hub shell.
- Added a static-export sentinel to `src/app/[slug]/page.tsx`. This site has no single-segment routes, and an empty `generateStaticParams()` is a hard `output: "export"` build failure. The sentinel renders `notFound()`, stays out of the sitemap and route manifest, and is excluded from deployment by `public/.assetsignore`.
- All 5 Collector images placed and registered with alt text; no page ships without one. level-structure and co-op-and-game-modes reuse `crystal-platform-run` and `forest-spirits-lineup` on the theory that a page with no imagery reads as missing work; online-co-op-lag-fix keeps its hero empty because no image depicts multiplayer networking, and uses a `media-gallery` instead.
- Removed template residues: `public/examples/` demo images, the template FAQ copy in `src/data/faq.ts`, and the "not part of this guide template" 404 copy.
- Removed the template's hardcoded Google AdSense publisher `ca-pub-4194035852162505` from `src/app/layout.tsx` and emptied `public/ads.txt`. That ID belongs to another domain; this site monetizes through Adsterra only. Documented in README so a future owner adds all three carriers together if the domain ever gets its own AdSense account.
- `footerNavigation` no longer points at About / Contact / Privacy / Terms — this site publishes none of those pages, and the template defaults left four dead links on every page. Footer now links to five real guides.
- Rewrote the ad inventory to match what actually renders: added the missing `guide-native` slot (mobile Native Banner inside `ContentPage`), and added `src/data/ad-anchors.ts` so the declared `guide-section-break` position renders after a real module on each of the 5 content pages. All six declared slots now render; all codes stay empty.
- Verified: `npm run verify` (typecheck + lint + build), `npm run routes:manifest -- --output route-manifest.json` (9 slashless routes), and `validate_guide_v4_stage.py page-builder` → `{"status": "pass", "routes": 9, "display_images": 1}`. Independently confirmed all 9 reader-path links land inside their named rendered section, every page has exactly one canonical matching its route, no internal link has a trailing slash or misses the route manifest, and no page has an `img` without alt text.

### 2026-10-15 - Slashless page URL baseline

- Made `trailingSlash: false` explicit and set Static Assets HTML handling to `drop-trailing-slash` for generated sites.
- Kept the existing slashless page inventory; Guide V4 Page Builder now exports guide pages as `out/guides/<slug>.html` and its handoff gate rejects slash URLs in routes, canonical metadata, sitemap, or internal links.

### 2026-10-02 - V4 semantic ad inventory

- Replaced fixed six format bindings with independently named positions and container-fitting device alternatives; added 160x300 and mobile-home-only 300x250 capability. Guide bodies and desktop prohibit rectangles; Social Bar excluded.
- Page Builder reserves empty codes and uses local-only placeholders; Adsterra Integrator still supplies real codes via browser automation. Complete module anchors avoid splitting answers/tables/steps.
- No route, content, publisher ownership or site deployment change. Focused inventory, responsive execution and placement capture validation required.


### 2026-10-02 - Third V4 site: optional reference directory

- Scope: reusable object directory and assembly guidance extracted from Kingdom Rush 6; no site deployment or role/Skill change.
- Added: optional `ReferenceDirectory` for existing entity-grid inputs, source name/label/summary search, exact badge filters, count/reset/empty states, optional registered media and unique Unicode/duplicate-name anchors. Shared pure helpers support homepage previews. Plain same-page URLs can target the entry; existing fragments, queries and external targets remain intact.
- Design: semantic tokens and serializable localized labels; caller owns placement, categories, columns, fonts, palette and assets. Ordinary EntityGrid/ModuleRenderer and page routes/SEO remain unchanged.
- Verification: source/SSR conservation, registered media, empty/no-label datasets, link retention and anchor collisions; actual Chrome 1440px/390px search/filter/reset, independent localized directory, no overflow, and no-JS reading/fragment targets. Type/lint, template/content, V4 components/composition, static build and rendered SEO checked. Temporary browser fixtures are private runtime evidence, not production routes.
- Business boundary: component behavior only; no claims about game facts, search traffic, ad fill or revenue.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.

### 2026-10-01 - V4 reading and page assembly

- Changes: task-led first homepage module, safe Markdown paragraphs/lists/links/tables, grouped navigation, compact content headers and mobile contents.
- Affected routes: all shells; route and locale contracts retained.
- Validation: regression fixture reproduces single-p failure; demand compositions and each built page's prose/steps/callout structures plus contents targets checked by validate:reading. Full shared-template verify required before publication.
- Adoption: central template only; existing sites require scoped migration and live verification.

## 2026-10-01 — V4 template composition and visual system

- Scope: shared template only; no role, Skill, production runtime or live-site migration.
- Added portal, reference-desk and visual-cover home compositions; recursive Wiki navigation; four editable themes and three self-hosted display fonts.
- Added grouped guide index, featured guides, progression and fact panels; optional media in steps.
- Kept supplementary homepage copy accessible in a disclosure; retained existing routes, content modules and static SEO/ad contracts.
- Missing optional media emits warnings and uses fallback. Local preview assets remain unbound to generic game data.
- Verification: npm run verify; desktop/mobile review of local showcase; native contents jumps; wide-table local scrolling; browser regression confirms a 404 image hides/falls back while a healthy image loads. This records template behavior, not game-fact or business validation.

## 2026-10-01 — Separate template capabilities from game design

- Removed production theme presets, named skins and bundled display fonts; retained free color/font/asset inputs, layout options and independent modules.
- Production default is a neutral runnable placeholder. Demo themes/fonts and assembly examples live only in scripts/fixtures and do not choose any site's design.
- Clarified that module choice/order, navigation and visual identity are decided for each game at invocation. No role or Skill changes.
- Verification: focused custom-theme propagation and composition regression; shared-template build/SEO/reading checks and independent showcase export.


## 2026-10-02 — Player content assembly and internal evidence boundary

- Removed automatic review dates, footer disclaimer, and entity source/version/remake modules; retained internal trace fields. Empty answer/fact sections are omitted. Task modules are optional, with an answer or useful player entry still required.
- Builder records current SHA-bound Writer/Collector answer and required-image mappings. The central gate checks every current manifest HTML, answer excerpts/context links and necessary local/built/live assets. Homepage platform/release/pricing facts belong on approved independent routes.
- Validation covers rendering boundaries, short lookup/entry-only pages, types/lint, static build, SEO metadata/sitemap, reading structure and V4 composition. Python regressions reject lost answers/images, hidden/non-body substitutions, stale inputs and claimed completion without local plus canonical live checks. Writer/Collector/Theme/Planner contract regressions passed.
- Maintenance branch only: no scheduler resumed, historical deployment, live visual or revenue result. Actual game facts, image meaning and computed visibility still require semantic and desktop/mobile visual acceptance.
