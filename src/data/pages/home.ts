import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "guide-portal" },
  h1: `${site.gameName}`,
  seoTitle:
    "Fire and Water: Spirits of the Forest Game Guide and Tips",
  metaDescription:
    "Fire and Water: Spirits of the Forest tips: the 2-player physics puzzle-platformer. Covers spirits, puzzles, crystals, enemies, online co-op, and solo play.",
  summary:
    "Start here for the seven forest spirits, the recurring puzzle pieces, crystal routes, mutant plant patterns, level structure, and online co-op help.",
  hero: {
    eyebrow: "Unofficial guide hub",
    subtitle:
      "A 2-player physics puzzle-platformer from IQ Games: choose your spirits, sweep every crystal, get both of you to your gates.",
    ctas: [
      { label: "Spirit abilities", href: "/guides/spirits-abilities" },
      { label: "Online co-op & game modes", href: "/guides/co-op-and-game-modes" },
    ],
    assetId: "forest-spirits-lineup",
  },
  quickAnswer:
    "Fire and Water: Spirits of the Forest is a 2-player co-op physics puzzle-platformer with seven element spirits. Each room asks you to sweep the crystals and reach both character-specific gates; every puzzle is a force problem solved by walking into objects, mushroom bounce chains, and elemental ability shots.",
  keyFacts: [
    { label: "Players", value: "1–2 (local, online, Steam Remote Play)" },
    { label: "Spirits at launch", value: "7 (Fire, Water, Earth, Air, Diamond, Shadow, Electricity)" },
    { label: "Planned levels", value: "40 (currently between 30 and 40)" },
    {
      label: "Patch status",
      value: "Level 14 crystal fixed; Level 11 geometry bug still open",
    },
  ],
  modules: [
    {
      id: "find-help",
      type: "guide-index",
      heading: "Where do you want to start?",
      columns: 2,
      groups: [
        {
          title: "Pick a spirit and a first run",
          items: [
            {
              label: "Spirit abilities",
              href: "/guides/spirits-abilities",
              description: "All seven elements, the aim-and-fire mechanic, and the Fire + Water first pairing.",
            },
            {
              label: "Puzzle solutions",
              href: "/guides/puzzle-solving",
              description: "The recurring physics pieces and the two rules first-time players miss.",
            },
          ],
        },
        {
          title: "Get past the room",
          items: [
            {
              label: "How to push objects",
              href: "/guides/how-to-push-objects",
              description: "Walk, two-spirit shove, and stopping on the mark.",
            },
            {
              label: "Collect all crystals",
              href: "/guides/all-crystals",
              description: "Pickup, high air routes, stuns that clear guards, and known crystal bugs.",
            },
            {
              label: "Get past enemies",
              href: "/guides/getting-past-enemies",
              description: "Aim-and-fire stuns on mutant plants, patrol lanes, and ranged types.",
            },
            {
              label: "Level structure",
              href: "/guides/level-structure",
              description: "What each level looks like, level count, and known level bugs.",
            },
          ],
        },
        {
          title: "Co-op and online play",
          items: [
            {
              label: "Co-op and game modes",
              href: "/guides/co-op-and-game-modes",
              description: "Solo, the disabled shared keyboard, gamepad pairs, and Steam Remote Play.",
            },
            {
              label: "Online co-op lag fix",
              href: "/guides/online-co-op-lag-fix",
              description: "VSYNC desync, the stuck 'Creating…' lobby, and Steam Deck aiming quirks.",
            },
          ],
        },
      ],
    },
    {
      id: "featured",
      type: "featured-guides",
      heading: "Start with the spirits",
      lead: {
        title: "Spirit abilities",
        href: "/guides/spirits-abilities",
        description:
          "All seven element spirits, the aim-and-fire mechanic, and the Fire + Water first pairing.",
        assetId: "forest-spirits-lineup",
      },
      supporting: [
        {
          title: "Puzzle solutions",
          href: "/guides/puzzle-solving",
          description: "The recurring pieces, mushroom bounce pads, two-spirit teamwork, and why no walkthrough exists.",
        },
        {
          title: "Collect all crystals",
          href: "/guides/all-crystals",
          description: "Pickup, high routes via mushrooms and ball throws, stuns for guarded crystals, and known bugs.",
        },
        {
          title: "How to push objects",
          href: "/guides/how-to-push-objects",
          description: "Walk into crates, two-spirit shove, and stop at the right moment.",
        },
        {
          title: "Get past enemies",
          href: "/guides/getting-past-enemies",
          description: "Stun mutant plants with elemental shots, dodge patrols, and handle ranged plants.",
        },
      ],
    },
  ],
  faqIds: ["what-is-this-site", "is-official"],
  relatedPageIds: [
    "spirits-abilities",
    "puzzle-solving",
    "how-to-push-objects",
    "all-crystals",
    "getting-past-enemies",
    "level-structure",
    "co-op-and-game-modes",
    "online-co-op-lag-fix",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-16",
};
