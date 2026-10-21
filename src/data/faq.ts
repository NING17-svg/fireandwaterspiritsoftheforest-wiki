import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "what-is-this-site",
    question: "What is this site?",
    answer:
      "It is an unofficial, English-language guide hub for Fire and Water: Spirits of the Forest on Steam. It collects the mechanics, puzzle rules, crystal routes, enemy patterns, level structure, and co-op setup for the game in one place, so you can find the answer for the room you are stuck in without reading a whole forum thread.",
    pageIds: [
      "home",
      "spirits-abilities",
      "puzzle-solving",
      "how-to-push-objects",
      "level-structure",
      "all-crystals",
      "getting-past-enemies",
      "co-op-and-game-modes",
      "online-co-op-lag-fix",
      "update-roadmap",
    ],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "is-official",
    question: "Is this an official Fire and Water: Spirits of the Forest website?",
    answer:
      "No. This is a fan guide site and is not affiliated with, endorsed by, or connected to IQ Games or the publisher. The official source for the game is its Steam store page.",
    pageIds: ["home", "co-op-and-game-modes"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "where-facts-come-from",
    question: "Where do the facts on this site come from?",
    answer:
      "Game mechanics come from the official Steam store page and the developer's published patch notes. Player-facing details that the developer has not documented — level bugs, control quirks, reported connection problems — are labelled as player reports rather than stated as official facts.",
    pageIds: [
      "level-structure",
      "online-co-op-lag-fix",
      "co-op-and-game-modes",
      "getting-past-enemies",
      "update-roadmap",
    ],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "no-walkthrough-published",
    question: "Why is there no level-by-level walkthrough here?",
    answer:
      "Because the developer has not published one, and the Steam Community guides list for this title is empty. Every guide on this site is instead built around the recurring physics pieces — gates, pools, tilt platforms, mushroom bounce pads, pushables, crystals, and patrolling mutant plants — so a solution is a combination of mechanics applied to the room you are in.",
    pageIds: ["puzzle-solving", "level-structure"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-platform",
    question: "Which platform does this guide cover?",
    answer:
      "Steam on PC, which is where Fire and Water: Spirits of the Forest released. Controller and keyboard input, Steam Deck behaviour, Steam Remote Play Together, and the online co-op lobby are all covered because they are Steam-side concerns.",
    pageIds: ["co-op-and-game-modes", "online-co-op-lag-fix"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
];