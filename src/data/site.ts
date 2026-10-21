import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Fire and Water: Spirits of the Forest Wiki",
  brandMark: "F&W",
  gameName: "Fire and Water: Spirits of the Forest",
  domain: "fireandwaterspiritsoftheforest.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://fireandwaterspiritsoftheforest.wiki").replace(/\/$/, ""),
  description:
    "Unofficial game guide for Fire and Water: Spirits of the Forest: spirit abilities, physics puzzles, crystal routes, mutant plants, level structure, and online co-op help.",
  tagline:
    "Spirits, puzzles, crystals, mutant plants, levels, and online co-op help for the 2-player physics puzzle-platformer Fire and Water: Spirits of the Forest.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        wikiNavigation: "Guide index",
        homeDetails: "About this guide and recent updates",
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
        onThisPage: "On this page",
        answerContext: "More context",
      },
    },
  ],
  author: "Fire and Water: Spirits of the Forest Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store page",
      href: "https://store.steampowered.com/app/4697950/Fire_and_Water_Spirits_of_the_Forest/",
      description: "Official Steam store page with current store description and developer notes.",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide. Final purchase, release, and patch information should come from official sources.",
};
