import type { ModuleAdAnchor } from "@/components/ads/AdModuleSequence";

/**
 * In-body banner anchors for the reading-right-rail guide pages.
 *
 * Every `after` value is a real authored module id from
 * src/data/pages/guide-pages.ts — AdModuleSequence throws at render time if an
 * anchor names a module that does not exist, so these cannot drift silently.
 * The anchor lands roughly a third of the way down each page: past the quick
 * answer and the first sections, before the reader reaches the end.
 *
 * Hub pages and the home page deliberately carry no section break: their
 * bodies are short card grids, and a banner between two cards only breaks the
 * reading rhythm. They keep `page-top` and the footer smartlink.
 */
export const pageAdAnchors: Record<string, ModuleAdAnchor[]> = {
  "how-to-push-objects": [
    { after: "use-both-spirits-for-force", slot: "guide-section-break" },
  ],
  "level-structure": [
    { after: "how-many-levels-are-in-the-game", slot: "guide-section-break" },
  ],
  "all-crystals": [
    { after: "reaching-high-crystals", slot: "guide-section-break" },
  ],
  "getting-past-enemies": [
    { after: "wait-out-patrol-lanes", slot: "guide-section-break" },
  ],
  "online-co-op-lag-fix": [
    { after: "lobby-stuck-on-creating", slot: "guide-section-break" },
  ],
};