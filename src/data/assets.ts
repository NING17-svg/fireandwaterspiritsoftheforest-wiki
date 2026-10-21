import type { AssetManifest } from "@/types/assets";

// Local copies live under public/images/. Each record comes from the fixed
// Collector images directory at the project root (see page-assembly.md).
export const assetManifest = {
  "forest-spirits-lineup": {
    id: "forest-spirits-lineup",
    src: "/images/forest-spirits-lineup.jpg",
    alt: "Seven forest spirit characters lined up on a grass platform: Fire, Water, Earth, Diamond, Shadow, Electricity, and Air.",
    width: 1920,
    height: 1080,
    pageIds: ["home", "spirits-abilities"],
    usage: "Hero identity image for the home page and the Spirit Abilities page.",
  },
  "puzzle-gates-and-liquids": {
    id: "puzzle-gates-and-liquids",
    src: "/images/puzzle-gates-and-liquids.jpg",
    alt: "A puzzle-platformer level with red lava, green mud, blue water pools, and two character-specific wooden gates.",
    width: 1920,
    height: 1080,
    pageIds: ["puzzle-solving"],
    usage: "Hero image for the Puzzle Solutions guide showing gates and the lava/water pools.",
  },
  "crystal-platform-run": {
    id: "crystal-platform-run",
    src: "/images/crystal-platform-run.jpg",
    alt: "Floating red and blue crystals above a series of wood and grass platforms with a spike hazard below.",
    width: 1920,
    height: 1080,
    pageIds: ["all-crystals"],
    usage: "Hero image for the Collect All Crystals guide showing red and blue crystals above platforms.",
  },
  "mutant-plant-encounter": {
    id: "mutant-plant-encounter",
    src: "/images/mutant-plant-encounter.jpg",
    alt: "A green mutant plant enemy on the right side of a platform with a water spirit, a fire spirit, a wooden crate, and two crystals.",
    width: 1920,
    height: 1080,
    pageIds: ["getting-past-enemies"],
    usage: "Hero image for the Get Past Enemies guide showing a mutant plant encounter.",
  },
  "interactable-lava-water-slime": {
    id: "interactable-lava-water-slime",
    src: "/images/interactable-lava-water-slime.jpg",
    alt: "An interactable platforming environment showing a red lava pool, a blue water pool, green slime on a grass platform, and the water and fire spirits.",
    width: 1920,
    height: 1080,
    pageIds: ["how-to-push-objects"],
    usage: "Hero image for the How to Push Objects guide showing the lava, water, and slime interactable environment.",
  },
} satisfies AssetManifest;
