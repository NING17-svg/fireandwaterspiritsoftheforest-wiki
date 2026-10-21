import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  {
    href: "/",
    labels: { "en-US": "Start" },
  },
  {
    href: "/guides/spirits-abilities",
    labels: { "en-US": "Spirits & enemies" },
    children: [
      { href: "/guides/spirits-abilities", labels: { "en-US": "Spirit abilities" } },
      { href: "/guides/getting-past-enemies", labels: { "en-US": "Get past enemies" } },
    ],
  },
  {
    href: "/guides/puzzle-solving",
    labels: { "en-US": "Puzzles & levels" },
    children: [
      { href: "/guides/puzzle-solving", labels: { "en-US": "Puzzle solutions" } },
      { href: "/guides/how-to-push-objects", labels: { "en-US": "How to push objects" } },
      { href: "/guides/level-structure", labels: { "en-US": "Level structure" } },
    ],
  },
  {
    href: "/guides/all-crystals",
    labels: { "en-US": "Collect & enemies" },
    children: [
      { href: "/guides/all-crystals", labels: { "en-US": "Collect all crystals" } },
      { href: "/guides/getting-past-enemies", labels: { "en-US": "Get past enemies" } },
    ],
  },
  {
    href: "/guides/co-op-and-game-modes",
    labels: { "en-US": "Co-op & online" },
    children: [
      { href: "/guides/co-op-and-game-modes", labels: { "en-US": "Co-op and game modes" } },
      { href: "/guides/online-co-op-lag-fix", labels: { "en-US": "Online co-op lag fix" } },
    ],
  },
];

// This site publishes no About, Contact, Privacy, or Terms pages, so the
// footer links to the guides a reader most often wants second. Do not add
// policy hrefs here unless a matching page ships in src/data/pages/site-pages.ts.
export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/guides/spirits-abilities", labels: { "en-US": "Spirit abilities" } },
  { href: "/guides/puzzle-solving", labels: { "en-US": "Puzzle solutions" } },
  { href: "/guides/all-crystals", labels: { "en-US": "Collect all crystals" } },
  { href: "/guides/getting-past-enemies", labels: { "en-US": "Get past enemies" } },
  { href: "/guides/co-op-and-game-modes", labels: { "en-US": "Co-op and game modes" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
