import type { PageContent } from "@/types/content";

const lastReviewed = "2026-10-16";

export const guidePages: PageContent[] = [
  // -------------------------------------------------------------
  // Spirits Abilities — hub. Combines a roster table, ability
  // mechanics, the first-pairing recommendation, and the link into
  // mutant-plant usage.
  // -------------------------------------------------------------
  {
    id: "spirits-abilities",
    translationKey: "spirits-abilities",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/spirits-abilities",
    url: "/guides/spirits-abilities",
    pageType: "guides",
    presentation: { shell: "hub", variant: "grouped-list" },
    h1: "Fire and Water Spirits of the Forest Spirit Abilities Explained",
    seoTitle:
      "Fire and Water Spirits of the Forest Spirit Abilities Guide",
    metaDescription:
      "Spirit abilities in Fire and Water: Spirits of the Forest explained: aim-and-fire elemental shots, what each spirit does, and a first pairing for a new run.",
    summary:
      "Seven forest spirits, the aim-and-fire mechanic, and a default Fire + Water pairing for the first run.",
    hero: {
      eyebrow: "Spirits & characters",
      subtitle:
        "Seven element spirits, each with its own movement physics and an aim-and-fire elemental shot. Pick two — both must reach their own gate to clear each level.",
      ctas: [
        { label: "Puzzle solutions", href: "/guides/puzzle-solving" },
        { label: "Get past enemies", href: "/guides/getting-past-enemies" },
      ],
      assetId: "forest-spirits-lineup",
    },
    quickAnswer:
      "The seven spirits are Fire, Water, Earth, Air, Diamond, Shadow, and Electricity. Each has distinct movement physics plus a single aim-and-fire elemental ability that stuns mutant plants, hits off-route targets, and dashes the spirit itself across gaps. Pick Fire and Water for the smoothest first run.",
    keyFacts: [
      {
        label: "Ability input",
        value: "Aim with right stick; fires on release",
      },
      {
        label: "Stun duration",
        value:
          "Stuns are temporary; re-fire rather than walk past a guarded route",
      },
      { label: "Solo play", value: "One person drives both spirits" },
    ],
    modules: [
      {
        id: "the-seven-playable-spirits",
        type: "data-table",
        heading: "The Seven Playable Spirits",
        columns: [
          { key: "spirit", label: "Spirit" },
          { key: "element", label: "Element cue" },
          { key: "role", label: "Role in the pair (per store page and player reports)" },
        ],
        rows: [
          {
            spirit: "Fire",
            element: "Red",
            role:
              "Crosses lava pools the other spirits cannot; named in the game's title and is the most-used ability in the official walkthrough footage.",
          },
          {
            spirit: "Water",
            element: "Blue",
            role:
              "Crosses water pools the other spirits cannot; pairs directly with Fire on lava vs water gates.",
          },
          {
            spirit: "Earth",
            element: "Brown / green",
            role:
              "A tank-style runner; useful for heavier pushable boxes where momentum matters.",
          },
          {
            spirit: "Air",
            element: "Light",
            role:
              "Mobile; the spirit stores show using Air for vertical dashes and high air routes.",
          },
          {
            spirit: "Diamond",
            element: "Crystal-bright",
            role:
              "One of the tougher bodies in early patch discussions; pairs well as the second runner on push puzzles.",
          },
          {
            spirit: "Shadow",
            element: "Dark",
            role:
              "Stealth-style spirit; favoured in some player routes for its lower-visibility element.",
          },
          {
            spirit: "Electricity",
            element: "Yellow",
            role:
              "Listed as a unique role on the store page; the developer has not separately published its ability text.",
          },
        ],
      },
      {
        id: "how-spirit-abilities-work",
        type: "prose",
        heading: "How Spirit Abilities Work",
        body: `Spirit abilities are not instant — they fire as an aimed projectile. On a controller you aim with the right stick and the ability shot fires on release, and on Steam Deck the same flick-to-fire aiming is the part players report struggling with most. Because the same ability can be used against different things, a single spirit's kit handles three jobs in one game:

- **Stunning a mutant plant** (the main combat use).
- **Hitting a target that is out of reach**, like a lever or a high crystal.
- **Moving the spirit itself across a gap**, by aiming a shot the spirit then flies toward.

The developer shipped an "Ability Improvement" update shortly after release that raised how useful the character abilities are compared to the launch build, so current behaviour differs from the launch footage. Where the abilities fit into puzzle solving — the levers, the gates, the mushroom bounce chains — is on the [Puzzle Solutions](/guides/puzzle-solving) page.`,
      },
      {
        id: "which-spirit-to-pick-first",
        type: "entity-grid",
        heading: "Which Spirit to Pick First",
        items: [
          {
            title: "Pick Fire and Water for the smoothest first run",
            summary:
              "The game is named after them, the official walkthrough footage uses them, and the level layouts (lava vs water pools, plus the gates that pair with each) are built around their interaction.",
            href: "/guides/puzzle-solving",
            badge: "Default",
          },
          {
            title: "Pick any pair that covers each other's gaps",
            summary:
              "Both characters must reach their own gate to clear the level, so the two spirits you pick should not both be strong at the same job.",
            href: "/guides/co-op-and-game-modes",
          },
          {
            title: "Solo players still pick two spirits",
            summary:
              "Solo means one person controlling both, so the choice still shapes the level — see the Co-op and Game Modes guide for how solo play works under the hood.",
            href: "/guides/co-op-and-game-modes",
          },
          {
            title: "“Master Of Elements” achievement",
            summary:
              "There is one spirit-related achievement, Master Of Elements, which is the only achievement the developer has tied directly to spirit play.",
          },
        ],
      },
      {
        id: "first-pairing-facts",
        type: "fact-panel",
        heading: "First-run pairing at a glance",
        facts: [
          {
            label: "Default first pair",
            value: "Fire + Water",
            href: "/guides/puzzle-solving",
          },
          {
            label: "Solo support",
            value: "Yes, drives both spirits",
            href: "/guides/co-op-and-game-modes",
          },
          {
            label: "Ability firing",
            value: "Right-stick release",
          },
        ],
      },
      {
        id: "using-abilities-on-mutant-plants",
        type: "prose",
        heading: "Using Abilities on Mutant Plants",
        body: `Hitting a mutant plant with an elemental ability shot stuns it for a short time. The aim-and-fire mechanic matters here: a plant is moving, so the stun takes leading the target. The developer confirms enemies are stunned on hit while also noting the stun feedback is still weak and being improved, so do not rely on the visual cue alone — count the beats.

Stuns are temporary: a stunned plant reverts and starts moving again, so on a narrow ledge or one-way route you often have to keep firing rather than stun once and walk past. Two fires in quick succession is the common pattern when a plant is gating a crystal or the exit. The full pattern — when to stun, when to wait out a patrol lane, how to deal with the ranged plant type — is on the [How to Get Past Enemies](/guides/getting-past-enemies) page.`,
      },
    ],
    faqIds: ["what-is-this-site"],
    relatedPageIds: [
      "puzzle-solving",
      "how-to-push-objects",
      "getting-past-enemies",
      "co-op-and-game-modes",
    ],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed,
  },

  // -------------------------------------------------------------
  // Puzzle Solutions — hub. Frames the physics model and the
  // no-walkthrough caveat, then points to push detail.
  // -------------------------------------------------------------
  {
    id: "puzzle-solving",
    translationKey: "puzzle-solving",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/puzzle-solving",
    url: "/guides/puzzle-solving",
    pageType: "guides",
    presentation: { shell: "hub", variant: "grouped-list" },
    h1: "Fire and Water Spirits of the Forest Puzzle Solutions Explained",
    seoTitle:
      "Fire and Water Spirits of the Forest Puzzle Solutions Guide",
    metaDescription:
      "Puzzle solutions in Fire and Water: Spirits of the Forest: physics, pushables, mushroom bounce pads, character-specific gates, and the teamwork each room needs.",
    summary:
      "Every puzzle is a physics problem. The recurring pieces — gates, pools, levers, tilt platforms, pushables, crystals, and patrolling mutant plants — and the teamwork to clear them.",
    hero: {
      eyebrow: "Puzzles & levels",
      subtitle:
        "There are no hidden switches: every object is real physics. The same recurring pieces appear across levels, and the same two rules catch first-time players out.",
      ctas: [
        { label: "How to push objects", href: "/guides/how-to-push-objects" },
        { label: "Get past enemies", href: "/guides/getting-past-enemies" },
      ],
      assetId: "puzzle-gates-and-liquids",
    },
    quickAnswer:
      "Each room asks you to sweep the crystals and reach both character-specific gates. The recurring physics pieces are character-specific gates, lava/water-only pools, tilt platforms, mushroom bounce pads, pushables, levers, and patrolling mutant plants. Two rules: stand on a mushroom rather than jump on it, and two spirits pushing together is more force than either alone.",
    keyFacts: [
      {
        label: "Cleared when",
        value: "Both spirits are on their own character-specific gate",
      },
      { label: "Crystal rule", value: "Touch to pick up; no separate pickup button" },
      {
        label: "Mushroom rule",
        value: "Stand still to stack the bounces; jumping cancels them",
      },
    ],
    modules: [
      {
        id: "the-goal-of-each-room",
        type: "prose",
        heading: "The Goal of Each Room",
        body: `Every level asks the same two things:

1. Sweep the crystals placed in the room.
2. Get both spirits to their own character-specific gate.

The level is cleared only when both characters are standing on their own gate. A level where you carry one spirit through while the other stands still will not count as cleared, no matter how many crystals you collected along the way. The structure and exact count of levels is on the [Level Structure and Walkthrough](/guides/level-structure) page.`,
      },
      {
        id: "key-puzzle-pieces",
        type: "entity-grid",
        heading: "Key Puzzle Pieces",
        items: [
          {
            title: "Character-specific gates",
            summary:
              "Each spirit has its own door at the end of the level, and the room does not count as cleared until both spirits reach their own gate.",
          },
          {
            title: "Liquids only one character can enter",
            summary:
              "Fire crosses lava pools and Water crosses water pools; neither can cross the other's pool. The room is built around where each one can stand.",
          },
          {
            title: "Levers and switches",
            summary:
              "On the level walls — usually paired with a movable object so the lever is part of the same push problem, not the puzzle on its own.",
          },
          {
            title: "Tilting platforms",
            summary:
              "Platforms held at a central point tilt according to the weight and position of whatever is standing on them, so moving from one end of the platform to the other is what levels it.",
          },
          {
            title: "Pushables",
            summary:
              "Crates, logs and branches; covered separately on the How to Push Objects guide.",
            href: "/guides/how-to-push-objects",
          },
          {
            title: "Crystals",
            summary:
              "Floating faceted gems that sit off the main route; covered on the Collect All Crystals guide.",
            href: "/guides/all-crystals",
          },
          {
            title: "Mutant plants",
            summary:
              "Patrolling routes that block the path; they cannot be killed — see Get Past Enemies.",
            href: "/guides/getting-past-enemies",
          },
        ],
      },
      {
        id: "mushroom-bounce-pads",
        type: "steps",
        heading: "Mushroom Bounce Pads",
        items: [
          {
            title: "Stand on, don't jump onto",
            body:
              "Jumping onto a mushroom cancels the boost. Land on it from a calm walk or from another solid surface.",
            doneCondition: "Spirit lands on the mushroom without a jump cancel.",
          },
          {
            title: "Let it stack",
            body:
              "Standing still on a mushroom makes each successive bounce higher.",
            doneCondition:
              "Each bounce is visibly higher than the previous one.",
          },
          {
            title: "Chain onto ball-throw routes",
            body:
              "In levels that drop a ball above a mushroom, throw the ball up, then bounce into the line of the throw to grab the route above.",
            doneCondition:
              "Spirit reaches the platform the ball points at.",
          },
        ],
      },
      {
        id: "two-spirit-teamwork",
        type: "entity-grid",
        heading: "Two-Spirit Teamwork",
        items: [
          {
            title: "Shove a teammate across a gap",
            summary:
              "Walk into your partner at the ledge to send them across to a platform they could not jump to.",
          },
          {
            title: "Pair push on a crate",
            summary:
              "One spirit alone is often not enough force to budge a heavier object, so both stand on the same side and push together. The How to Push Objects guide covers this in step form.",
            href: "/guides/how-to-push-objects",
          },
        ],
      },
      {
        id: "walk-the-room-puzzles",
        type: "prose",
        heading: "Walk-the-Room Puzzles",
        body: `Not every puzzle is a force problem. Some rooms look like a straight line to the exit but need movement ability instead. The official store page shows levels where the answer is to have the spirit dash high into the air to reach a route a walking path cannot reach. This is the same ability-as-mobility mechanic described on the [Spirit Abilities](/guides/spirits-abilities) page — the "movement physics" half of a spirit's kit, used on its own when the puzzle does not have anything to shoot.`,
      },
      {
        id: "no-published-walkthrough",
        type: "callout",
        tone: "caution",
        title: "No Published Walkthrough",
        body: `The developer has not released per-level solution steps, and the Steam Community guides list for this title is empty, so levels have to be solved from the mechanics above rather than copied from a guide. This is the same reason no walkthrough page exists: every solution is a small combination of the pieces on this page, applied to the room you are in.`,
      },
    ],
    faqIds: ["what-is-this-site"],
    relatedPageIds: [
      "how-to-push-objects",
      "spirits-abilities",
      "all-crystals",
      "level-structure",
    ],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed,
  },

  // -------------------------------------------------------------
  // How to Push Objects — process. Steps for walking in, two-spirit
  // force, stopping on the mark, and sticky collision.
  // -------------------------------------------------------------
  {
    id: "how-to-push-objects",
    translationKey: "how-to-push-objects",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/how-to-push-objects",
    url: "/guides/how-to-push-objects",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "How to Push Objects in Fire and Water: Spirits of the Forest",
    seoTitle:
      "Fire and Water Spirits of the Forest How to Push Objects",
    metaDescription:
      "How to push objects in Fire and Water: Spirits of the Forest: walk into them, use two-spirit force, and stop pushing before the ledge to avoid losing the crate.",
    summary:
      "Push crates, logs and branches by walking into them; one spirit is often not enough, momentum carries, so break contact before the ledge.",
    hero: {
      eyebrow: "Puzzle solving",
      subtitle:
        "There is no separate push button — pushing is just walking into objects along the side you want them to move. Pacing and stopping matter more than forcing.",
      ctas: [
        { label: "Puzzle solutions", href: "/guides/puzzle-solving" },
        { label: "Spirit abilities", href: "/guides/spirits-abilities" },
      ],
      assetId: "interactable-lava-water-slime",
    },
    quickAnswer:
      "Push crates, logs and branches by walking into them. The force is your spirit's push strength against the object's weight; one spirit is rarely enough on the heavier crates, so pair up on the same side. Break contact before the ledge — the object coasts on its own.",
    keyFacts: [
      { label: "Input", value: "Walk into the flat side of the object" },
      { label: "Force scales", value: "Two spirits on the same side, same beat" },
      { label: "Stopping", value: "Break contact before the target edge" },
    ],
    modules: [
      {
        id: "push-by-walking-into-the-object",
        type: "steps",
        heading: "Push by Walking Into the Object",
        items: [
          {
            title: "Stand facing the flat side",
            body:
              "Line up on the side you want the object to move, with no other geometry between you.",
            doneCondition: "Spirit is touching the flat side, head-on.",
          },
          {
            title: "Walk into it",
            body:
              "Keep contact; the object only moves while you are pushing it.",
            doneCondition: "The object is sliding while contact holds.",
          },
          {
            title: "Release for an instant stop",
            body:
              "Let go of the direction and the object stops, because there is no script carrying it forward.",
            doneCondition:
              "Object comes to rest within a beat of releasing direction.",
          },
        ],
      },
      {
        id: "use-both-spirits-for-force",
        type: "steps",
        heading: "Use Both Spirits for Force",
        items: [
          {
            title: "Stand on the same side, slightly offset",
            body:
              "Both spirits on the same side of the object, slightly offset so neither is inside the other.",
            doneCondition: "Two spirits contact the same face, no overlap.",
          },
          {
            title: "Walk in together",
            body:
              "Walk into the object together. The two forces compound under the physics simulation.",
            doneCondition: "Object moves further than one spirit can push it.",
          },
          {
            title: "Release at the same beat",
            body:
              "Stop pushing at the same time. If one spirit lets go a frame earlier, the object can drift back and even knock the second spirit off balance.",
            doneCondition: "Object comes to rest with both spirits still in contact, then released together.",
          },
          {
            title: "Know where the job fits",
            body:
              "Two-spirit force is the same mechanic that shows up across every puzzle room — see [Puzzle Solutions](/guides/puzzle-solving) for where a push job fits into the wider problem set.",
            doneCondition: "You can name which recurring puzzle piece this push is solving.",
          },
        ],
      },
      {
        id: "stop-at-the-right-moment",
        type: "steps",
        heading: "Stop at the Right Moment",
        items: [
          {
            title: "Identify the target edge",
            body:
              "Identify the ledge, slot, or switch the object has to land on or next to.",
            doneCondition: "Both players can name the same target edge.",
          },
          {
            title: "Push until the far edge passes the mark",
            body:
              "Push until the object's far edge is just past that target.",
            doneCondition: "Object's far edge is one beat past the target.",
          },
          {
            title: "Step back so you are no longer in contact",
            body:
              "The object coasts to a stop on the mark.",
            doneCondition: "Object rests on or beside the target edge.",
          },
        ],
      },
      {
        id: "dealing-with-sticky-collision",
        type: "steps",
        heading: "Dealing With Sticky Collision",
        items: [
          {
            title: "Push with a steady direction",
            body:
              "Sudden direction changes can make the object spin. Keep the input steady.",
            doneCondition: "Object tracks the push rather than spinning.",
          },
          {
            title: "If the object refuses to budge",
            body:
              "Line both spirits up and push together — the per-spirit force scales cleanly.",
            doneCondition: "Object begins moving under two-spirit push.",
          },
          {
            title: "If the object clips into a wall",
            body:
              "Walk around to the opposite side and push the other way; the simulation does not always let you pull.",
            doneCondition: "Object is freed from the wall clip.",
          },
        ],
      },
    ],
    faqIds: ["what-is-this-site"],
    relatedPageIds: ["puzzle-solving", "spirits-abilities"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed,
  },

  // -------------------------------------------------------------
  // Level Structure — answer. Level shape, count, curve, bugs.
  // -------------------------------------------------------------
  {
    id: "level-structure",
    translationKey: "level-structure",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/level-structure",
    url: "/guides/level-structure",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Level Structure in Fire and Water: Spirits of the Forest",
    seoTitle:
      "Fire and Water Spirits of the Forest Level Walkthrough Guide",
    metaDescription:
      "Level structure in Fire and Water: Spirits of the Forest: 2.5D rooms, two character gates, the current count toward 40 levels, and known level bugs to spot.",
    summary:
      "Each level is one self-contained 2.5D room. The count is between 30 and 40, the difficulty curve is uneven, and a small number of level bugs have known status.",
    hero: {
      eyebrow: "Puzzles & levels",
      subtitle:
        "Every level is a 2.5D puzzle-platformer room with two gates and a fixed set of physics pieces. There is no per-level walkthrough; solutions come from the mechanics.",
      ctas: [
        { label: "Collect all crystals", href: "/guides/all-crystals" },
        { label: "Level-specific crystal bugs", href: "/guides/all-crystals" },
      ],
      assetId: "crystal-platform-run",
    },
    quickAnswer:
      "Each level is one 2.5D room in the forest biome with both spirits running real physics. The launch build was planned at 30 levels toward a 40-level target; the current count is between 30 and 40. The difficulty curve is uneven, and a small number of level bugs (level 14 crystal fixed, level 11 geometry bug open) have known status.",
    keyFacts: [
      { label: "Biome at launch", value: "Forest only" },
      {
        label: "Planned levels",
        value: "30 at launch, target 40 total",
      },
      {
        label: "Level 14 crystal",
        value: "Patched — collectible is reachable",
      },
      {
        label: "Level 11 route",
        value:
          "Known geometry bug — purple platform sits too high; no fix yet",
      },
    ],
    modules: [
      {
        id: "what-counts-as-a-level",
        type: "prose",
        heading: "What Counts as a Level",
        body: `Each level is one room: enter, solve, exit.

- Every level is set in the forest biome. Snow and desert biome rooms have been announced as separate DLC packs of thirty levels each and are not yet in the game.
- All movement, object interaction and enemy behaviour is simulated through real physics rather than scripted animation.
- Both spirits running into each other is a normal mechanic, not a bug — one body shoves the other — and the camera zooms in and out on its own as the pair spread apart.
- The room is cleared only when both spirits reach their own character-specific gate.

That camera zoom-out is the cue your level is on the wider side: the smaller the camera frame, the narrower the puzzle and the more a single room reads like a vertical tower.`,
      },
      {
        id: "how-many-levels-are-in-the-game",
        type: "prose",
        heading: "How Many Levels Are in the Game",
        body: `The level count grows between patches, so any old number is unreliable. Here is what the developer has said publicly.

- The launch build was planned at 30 levels, which works out to roughly three to four hours of play.
- The target for the game is 40 levels; the developer said they will keep adding levels until it reaches 40.
- About twenty further levels were nearly finished and were added shortly after release, so the count is higher than 30 right now and lower than 40 until the final batch lands.

If you are following a walkthrough video or guide from launch week, expect the room count to be off. For room-by-room crystal routes, see [Collect All Crystals](/guides/all-crystals).`,
      },
      {
        id: "difficulty-curve",
        type: "prose",
        heading: "Difficulty Curve",
        body: `Difficulty is uneven rather than a steady curve. Players describe the opening level as having roughly the right amount of figuring-out, then later rooms as occasionally extremely hard, and several reviews are about a single level that took hours or had to be abandoned.

- Mushroom bounce chains and ball-throw routes show up across multiple levels as recurring set pieces.
- Difficulty spikes tend to land on rooms that combine several mechanics — a tilt-platform plus a pushable plus a mutant plant — at once.
- A level that you cannot clear after several attempts is not necessarily a bug. Patch updates also tend to land in this region.

If you are stuck on a single room, check the [Collect All Crystals](/guides/all-crystals) page for the level 11 crystal route specifically, and the [How to Get Past Enemies](/guides/getting-past-enemies) page for the plant-specific patterns.`,
      },
      {
        id: "known-level-bugs",
        type: "schedule",
        heading: "Known Level Bugs",
        items: [
          {
            label: "Level 14 crystal",
            timing: "Patched",
            detail:
              "Level 14 shipped with one crystal that could not be collected at all. This has been fixed in a follow-up patch.",
            tone: "confirmed",
          },
          {
            label: "VSYNC desync",
            timing: "Patched",
            detail:
              "The same update also fixed lag between the two players caused by VSYNC settings — see the Online Co-op Lag Fix page.",
            tone: "confirmed",
          },
          {
            label: "Level 11 purple platform",
            timing: "Open",
            detail:
              "Level 11 has a purple platform sitting slightly too high for the ball to reach the mushroom beneath it, which left that route effectively unreachable. This is a known geometry bug the developer has not shipped a fix for yet.",
            tone: "caution",
          },
        ],
      },
      {
        id: "known-bugs-fact-panel",
        type: "fact-panel",
        heading: "Level bug status at a glance",
        facts: [
          { label: "Level 14 crystal", value: "Patched" },
          { label: "VSYNC desync patch", value: "Shipped (same update)" },
          { label: "Level 11 route", value: "Still effectively unreachable" },
          {
            label: "Gate-stuck reports",
            value: "Separate bug, not a missed collectible",
          },
        ],
      },
      {
        id: "why-there-is-no-per-level-walkthrough",
        type: "callout",
        tone: "caution",
        title: "Why There Is No Per-Level Walkthrough",
        body: `The developer has not released step-by-step walkthroughs for individual levels, and the Steam Community guides list for this title is empty. Solutions are written from the mechanics on the [Puzzle Solutions](/guides/puzzle-solving) page rather than copied from a guide sheet — that is also why each guide on this site is built around the recurring physics pieces instead of a level-by-level script.`,
      },
    ],
    faqIds: ["what-is-this-site"],
    relatedPageIds: [
      "all-crystals",
      "getting-past-enemies",
      "puzzle-solving",
      "online-co-op-lag-fix",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed,
  },

  // -------------------------------------------------------------
  // Collect All Crystals — process.
  // -------------------------------------------------------------
  {
    id: "all-crystals",
    translationKey: "all-crystals",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/all-crystals",
    url: "/guides/all-crystals",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "How to Collect All Crystals in Fire and Water: Spirits of the Forest",
    seoTitle:
      "Fire and Water Spirits of the Forest Collect All Crystals",
    metaDescription:
      "How to collect every crystal in Fire and Water: Spirits of the Forest: placement, high air routes, stuns that clear guards, and the level 11 and 14 fixes.",
    summary:
      "Crystals are floating red and blue gems you pick up by touching. High ones need a vertical dash, a mushroom bounce chain, or a ball-throw route; guarded ones need a plant stun.",
    hero: {
      eyebrow: "Collect & enemies",
      subtitle:
        "Pickup is automatic, but the route matters. Most rooms put crystals off the main path and some guard them with mutant plants — the steps here cover both.",
      ctas: [
        { label: "Get past enemies", href: "/guides/getting-past-enemies" },
        { label: "Level structure", href: "/guides/level-structure" },
      ],
      assetId: "crystal-platform-run",
    },
    quickAnswer:
      "Touching a crystal picks it up — there is no separate collect button. High crystals are reached with the spirit's vertical dash, by standing still on a mushroom bounce chain so successive bounces get higher, or via a ball-throw route. Crystals guarded by mutant plants need the plant stunned in its patrol lane.",
    keyFacts: [
      { label: "Pickup rule", value: "Walk, dash, or fly into the crystal" },
      {
        label: "Mushroom rule",
        value:
          "Stand still to stack the bounces; jumping cancels them",
      },
      {
        label: "Ranged plants",
        value: "Move perpendicular to the projectile line, not along it",
      },
    ],
    modules: [
      {
        id: "where-crystals-sit",
        type: "prose",
        heading: "Where Crystals Sit",
        body: `Crystals are not on the line of the room; they are placed off the main route, which is why a crystal sweep usually takes longer than the platforming alone suggests.

- Crystals appear in red and blue inside the same room, so each level has both colours to find.
- They float in mid-air at heights ranging from shoulder-height for either spirit up to crystal lines well above where the standing jump can reach.
- Several crystals sit on a direct line with the exit gate, so the sweep and the room exit are the same planning pass.`,
      },
      {
        id: "picking-them-up",
        type: "steps",
        heading: "Picking Them Up",
        items: [
          {
            title: "Walk, dash, or fly into the crystal",
            body:
              "There is no pickup animation or button. Touching the crystal adds it to your count.",
          },
          {
            title: "Pickup is instantaneous",
            body:
              "On contact, the crystal disappears and counts toward the level's total.",
          },
          {
            title: "Continue without waiting",
            body:
              "Continue along the route without waiting for any prompt.",
          },
        ],
      },
      {
        id: "reaching-high-crystals",
        type: "entity-grid",
        heading: "Reaching High Crystals",
        items: [
          {
            title: "Use the spirit's movement ability",
            summary:
              "Some spirits have a vertical dash that the store footage shows carrying a spirit up to the crystal line. Treat the high crystal as a 'throw the spirit at it' target rather than a walking target.",
          },
          {
            title: "Use a mushroom bounce chain",
            summary:
              "Standing still on a mushroom bounce pad makes each successive bounce higher, so a chain of mushrooms underneath the crystal is the way up. Jumping on a mushroom cancels the boost, so do not jump — stand and let it bounce you.",
          },
          {
            title: "Use a ball-throw route",
            summary:
              "Some levels drop a ball you can throw upward. Throw the ball onto the crystal or onto a platform above it, then bounce into the line of the throw.",
          },
        ],
      },
      {
        id: "stunning-plants-for-crystal-routes",
        type: "steps",
        heading: "Stunning Plants for Crystal Routes",
        items: [
          {
            title: "Approach from outside the patrol lane",
            body:
              "Approach the crystal from outside the plant's patrol lane.",
          },
          {
            title: "Fire an elemental ability shot, leading the target",
            body:
              "Fire an ability shot that connects with the plant, leading the target if it is moving.",
          },
          {
            title: "Pick up the crystal inside the stun window",
            body:
              "Stuns are temporary — a stunned plant reverts and starts moving again — so move through the open lane before the stun expires and grab the crystal.",
            doneCondition: "Crystal is in your count before the plant resumes its patrol.",
          },
          {
            title: "Know the full plant pattern",
            body:
              "Waiting out a patrol lane and dodging the ranged plant type are covered on [How to Get Past Enemies](/guides/getting-past-enemies) — use those when the stun window is too short for the direct route.",
          },
        ],
      },
      {
        id: "level-11-route-callout",
        type: "callout",
        tone: "caution",
        title: "Level 11 crystal route is still blocked",
        body: `The level 11 route the developer has not yet fixed works through a purple platform sitting slightly too high for the ball to reach the mushroom beneath it, so that route is effectively unreachable in the current build rather than solvable from the mechanics.`,
      },
      {
        id: "level-specific-crystal-bugs",
        type: "data-table",
        heading: "Level-Specific Crystal Bugs",
        columns: [
          { key: "level", label: "Level" },
          { key: "status", label: "Status" },
          { key: "detail", label: "Detail" },
        ],
        rows: [
          {
            level: "Level 14",
            status: "Patched",
            detail:
              "Shipped with one crystal that could not be picked up at all in the original build; this was fixed in a follow-up patch.",
          },
          {
            level: "Level 11",
            status: "Open",
            detail:
              "Purple platform sits slightly too high for the ball to reach the mushroom beneath it — that route is effectively unreachable in the current build.",
          },
          {
            level: "Any level",
            status: "Watch",
            detail:
              "Reports of full crystal sweeps followed by a gate that would not open are a separate gate-stuck bug rather than a missed collectible, so the count to aim for is every crystal in the room.",
          },
        ],
      },
    ],
    faqIds: ["what-is-this-site"],
    relatedPageIds: [
      "getting-past-enemies",
      "level-structure",
      "puzzle-solving",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed,
  },

  // -------------------------------------------------------------
  // Get Past Enemies — process. Mutant-plant stuns, patrol lanes,
  // and the ranged plant type.
  // -------------------------------------------------------------
  {
    id: "getting-past-enemies",
    translationKey: "getting-past-enemies",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/getting-past-enemies",
    url: "/guides/getting-past-enemies",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "How to Get Past Enemies in Fire and Water: Spirits of the Forest",
    seoTitle:
      "Fire and Water Spirits of the Forest How to Get Past Enemies",
    metaDescription:
      "How to get past enemies in Fire and Water: Spirits of the Forest: aim-and-fire stuns on mutant plants, patrol lane timing, and how to dodge the ranged types.",
    summary:
      "Mutant plants cannot be killed; they are stunned by an elemental ability shot, and ranged plants are dodged by stepping off their projectile line.",
    hero: {
      eyebrow: "Collect & enemies",
      subtitle:
        "Plants patrol fixed ground and aerial routes. Stuns are short, so a two-shot pattern is common when a plant is gating the only path forward.",
      ctas: [
        { label: "Spirit abilities", href: "/guides/spirits-abilities" },
        { label: "Collect all crystals", href: "/guides/all-crystals" },
      ],
      assetId: "mutant-plant-encounter",
    },
    quickAnswer:
      "Plants cannot be killed — hitting them with the spirit's body or movement abilities does not remove them. Stun them with an elemental ability shot, move through the open lane inside the stun window, and use two shots in quick succession on a one-way route. Ranged plants shoot back; approach from the side and step perpendicular to their line.",
    keyFacts: [
      { label: "Stun length", value: "Short — re-fire rather than walk past" },
      {
        label: "Two-shot pattern",
        value: "Common when a plant is gating the only path",
      },
      {
        label: "Ranged plants",
        value: "Move perpendicular to the projectile line, not along it",
      },
    ],
    modules: [
      {
        id: "why-you-cannot-kill-mutant-plants",
        type: "prose",
        heading: "Why You Cannot Kill Mutant Plants",
        body: `The mutants are part of the level furniture, not a wave to clear.

- Plants cannot be destroyed. Hitting them with the spirit's body or with movement abilities does not remove them from the room.
- Plants cannot be killed. The game has no combat system in the usual sense.
- The developer's stated approach is to neutralise them temporarily, not to clear them out of the level.

The practical impact is that any room you go through, you go through with the plant still there. Plan around the plant, not against it.`,
      },
      {
        id: "stun-plants-with-an-elemental-shot",
        type: "steps",
        heading: "Stun Plants With an Elemental Shot",
        items: [
          {
            title: "Pick the moment the plant is at a known position",
            body:
              "Pick the moment when the plant is at a known position — at one end of its patrol or pausing at a marker.",
          },
          {
            title: "Aim with the right stick and release to fire",
            body:
              "Aim the ability shot with the right stick and release to fire (the same flick-to-fire mechanic described on the Spirit Abilities page).",
          },
          {
            title: "Move through the open lane before the stun expires",
            body:
              "Move through the open lane before the stun window closes.",
          },
          {
            title: "Re-fire rather than walk past",
            body:
              "The stun window is temporary — a stunned plant reverts and starts moving again, so on a narrow ledge or a one-way route you keep firing rather than stun once and walk through. Two shots in quick succession is the common pattern when a plant is gating the only path forward.",
            doneCondition:
              "You are through the lane with the plant already moving again behind you.",
          },
          {
            title: "Pick the spirit for the shot",
            body:
              "The element on the shot does not change the stun — what matters is the hit, so any spirit will do. [Spirit Abilities](/guides/spirits-abilities) covers which pairing covers the most ground if you want a default.",
          },
        ],
      },
      {
        id: "wait-out-patrol-lanes",
        type: "entity-grid",
        heading: "Wait Out Patrol Lanes",
        items: [
          {
            title: "Ground patrols",
            summary:
              "Move back and forth on a straight line or a loop. When the plant reaches the far end of the patrol, the near lane is open.",
          },
          {
            title: "Aerial patrols",
            summary:
              "Fly along a fixed arc. The window is the part of the arc that does not cover the route you want.",
          },
          {
            title: "Pause markers",
            summary:
              "Spots where a plant stops and turns. Each pause opens the lane at the opposite end of the route.",
          },
        ],
      },
      {
        id: "dealing-with-ranged-plants",
        type: "steps",
        heading: "Dealing With Ranged Plants",
        items: [
          {
            title: "Identify the projectile line",
            body:
              "Identify the line the ranged plant fires down before you commit to the route.",
          },
          {
            title: "Approach from the side",
            body:
              "Approach from the side of the line, not along it.",
          },
          {
            title: "Step perpendicular through the gap",
            body:
              "Move through the gap perpendicular to the line so the projectile passes behind you.",
          },
        ],
      },
      {
        id: "future-enemy-types",
        type: "callout",
        tone: "tip",
        title: "Future enemy types are already built",
        body: `The developer is adding more enemy types rather than changing the ones in the game, so the enemy set grows between patches. Two more types are already built but not yet placed in any level — jumper and puncher types are reported as nearly finished — so this page will need updating once those types are live in rooms.`,
      },
    ],
    faqIds: ["what-is-this-site"],
    relatedPageIds: [
      "spirits-abilities",
      "all-crystals",
      "puzzle-solving",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed,
  },

  // -------------------------------------------------------------
  // Co-op & Game Modes — hub.
  // -------------------------------------------------------------
  {
    id: "co-op-and-game-modes",
    translationKey: "co-op-and-game-modes",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/co-op-and-game-modes",
    url: "/guides/co-op-and-game-modes",
    pageType: "guides",
    presentation: { shell: "hub", variant: "grouped-list" },
    h1: "Co-op Setup and Game Modes in Fire and Water: Spirits of the Forest",
    seoTitle:
      "Fire and Water Spirits of the Forest Play Solo Beginner Tips",
    metaDescription:
      "Co-op setup and game modes in Fire and Water: Spirits of the Forest: solo, shared keyboard (disabled), keyboard plus gamepad, dual gamepads, Steam Remote Play.",
    summary:
      "Solo, the disabled shared keyboard, gamepad pairs, Steam Remote Play Together, and Steam Deck character-switch quirks.",
    hero: {
      eyebrow: "Co-op & online",
      subtitle:
        "Single-player is first-class. The store-listed shared-keyboard mode was disabled in an update. Today the live local options are solo, keyboard + gamepad, and dual gamepads.",
      ctas: [
        { label: "Online co-op lag fix", href: "/guides/online-co-op-lag-fix" },
        { label: "Spirit abilities", href: "/guides/spirits-abilities" },
      ],
      assetId: "forest-spirits-lineup",
    },
    quickAnswer:
      "Solo drives both spirits on one controller. The store-listed shared-keyboard mode was disabled in an update — that two-players-one-keyboard option is gone. Today the local options are keyboard plus gamepad or two gamepads, and online co-op plus Steam Remote Play Together are supported online.",
    keyFacts: [
      { label: "Single-player", value: "Officially supported" },
      {
        label: "Shared keyboard (two players)",
        value: "Disabled in a post-launch update",
      },
      {
        label: "Local co-op today",
        value: "Keyboard + gamepad or two gamepads",
      },
      { label: "Online", value: "Online co-op + Steam Remote Play Together" },
    ],
    modules: [
      {
        id: "single-player-mode",
        type: "prose",
        heading: "Single-Player Mode",
        body: `Yes, you can play the game alone. The store page lists the option explicitly: "For Lone Wolves: Want to experience this inner journey alone? Take control of both characters and play solo," and Steam lists Single-player alongside Shared/Split Screen Co-op. Solo is a full way to play, not a reduced mode.

How solo works under the hood:

1. You drive both spirits yourself.
2. You step between them with the character-switch control (see below).
3. Both spirits still must reach their own character-specific gate for the level to count as cleared, so you cannot finish by carrying one spirit through on its own.

What solo costs you is the second pair of hands, not the abilities. Every spirit's elemental ability is available to whichever spirit you are currently driving, so the puzzles stay solvable — they just take longer because one person is doing both jobs. Players who play solo report it works well, and a solo player describes switching between Player 1 and Player 2 as the normal way to progress rather than an inconvenience. On Steam Deck, the standard shoulder-button swap can be unreliable on Player 2; see the character-switch section below for the touchscreen workaround.`,
      },
      {
        id: "two-players-on-one-keyboard",
        type: "callout",
        tone: "caution",
        title: "Two Players on One Keyboard",
        body: `Two players on one keyboard was disabled in an update. The store page still advertises the single-keyboard two-player option, but the developer disabled that mode in the "Improved UI, UX and Input Scheme" update because it "wasn't useful and was causing conflictions." Players who bought the game specifically for that mode have confirmed it no longer works.

What that means in practice:

- **Don't expect both players on one keyboard anymore.** If you set up two USB keyboards and assigned one to each player before the update, the second player's inputs are ignored.
- **Plan for at least one gamepad per player.** The local options that work today are keyboard plus gamepad or two gamepads.
- **Solo on a single keyboard still works.** One person, one keyboard, both characters — that mode is the solo option above.

If you bought the game expecting one keyboard for two people, the shared-keyboard mode is gone, and the live single-keyboard option is solo play, not two players.`,
      },
      {
        id: "keyboard-plus-gamepad-and-two-gamepads",
        type: "comparison",
        heading: "Keyboard Plus Gamepad and Two Gamepads",
        options: [
          {
            name: "Keyboard plus gamepad",
            summary:
              "One player on the keyboard, one player on a controller. This is the same setup that solo players sometimes add a gamepad to just to have a second input device on the desk.",
            bestFor: "Solo desk play with one controller on the side.",
          },
          {
            name: "Two gamepads",
            summary:
              "Two controllers on the same screen. A pair reported playing together on the same screen using Xbox One controllers and found it comfortable.",
            bestFor: "Couch co-op on a TV.",
          },
          {
            name: "Shared screen co-op",
            summary:
              "Shared screen co-op is the official mode for both setups. The game renders split-screen rather than a single shared view, so two players side-by-side on one monitor is the design.",
            bestFor: "Anyone playing on one screen.",
          },
        ],
      },
      {
        id: "online-co-op-and-steam-remote-play",
        type: "prose",
        heading: "Online Co-op and Steam Remote Play",
        body: `Online co-op is supported, and Steam Remote Play Together works so a friend can join without owning the game. The single-player build also runs offline with no server check.

Three things that feel like a setup problem but are not:

- **Desyncing between the two spirits** is the VSYNC bug the developer patched — see the [Online Co-op Lag Fix](/guides/online-co-op-lag-fix) page.
- **Lobbies that hang on "Creating…"** are caused by the hosting server location, not by your connection. The developer has patched this for some regions, but the worst reports still come from China and other parts of Asia. There is no local setting for it.
- **Steam Remote Play Together streams video as well as input,** so a poor remote session feels like lag even when the host's connection is fine.`,
      },
      {
        id: "switching-characters-mid-game",
        type: "entity-grid",
        heading: "Switching Characters Mid-Game",
        items: [
          {
            title: "Controller: LB / RB",
            summary:
              "On a controller the shoulder buttons switch your character — LB and RB step between the two spirits. This is the fast way to swap mid-puzzle, and the same buttons work while a partner is driving the other spirit in split-screen so you can hand a character over without leaving the level.",
          },
          {
            title: "Steam Deck: touchscreen arrows",
            summary:
              "On Steam Deck, the controller buttons are unreliable for the second player: a Deck owner reported that LB and RB changed only Player 1 and would not move Player 2, and the developer's answer is to use the touchscreen instead, where tapping the on-screen red and blue arrows changes character. Steam Deck players also find the P2 character awkward to select when playing solo and end up using the touchscreen for that too. If the shoulder-button swap does nothing on a Steam Deck build, that is the known cause rather than a broken install, and the touchscreen arrows are the workaround.",
          },
        ],
      },
    ],
    faqIds: ["what-is-this-site"],
    relatedPageIds: [
      "online-co-op-lag-fix",
      "spirits-abilities",
      "level-structure",
    ],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed,
  },

  // -------------------------------------------------------------
  // Online Co-op Lag Fix — answer. The desync, the Creating…, the
  // Remote Play, the Deck aiming.
  // -------------------------------------------------------------
  {
    id: "online-co-op-lag-fix",
    translationKey: "online-co-op-lag-fix",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/online-co-op-lag-fix",
    url: "/guides/online-co-op-lag-fix",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Online Co-op Lag Fix in Fire and Water: Spirits of the Forest",
    seoTitle:
      "Fire and Water Spirits of the Forest Online Co-op Lag Fix",
    metaDescription:
      "Online co-op lag fix for Fire and Water: Spirits of the Forest: the VSYNC desync patch, the stuck 'Creating…' lobby bug, and Steam Remote Play and Deck quirks.",
    summary:
      "Most online symptoms are the patched VSYNC desync, the partially patched 'Creating…' lobby bug, the Remote Play stream, or the Deck aim model.",
    hero: {
      eyebrow: "Co-op & online",
      subtitle:
        "Each online symptom has a specific cause. Working through them in the order players report them clears up most sessions.",
      ctas: [
        { label: "Co-op and game modes", href: "/guides/co-op-and-game-modes" },
        { label: "Level structure", href: "/guides/level-structure" },
      ],
    },
    quickAnswer:
      "For desyncing spirits, make sure both clients are on the current build and the host re-hosts — that is the patched VSYNC bug. For lobbies that hang on 'Creating…', there is no client-side setting; it is the hosting server location. For rubber-banding that is actually the Remote Play stream, switch the joining player to wired and lower in-game quality. Steam Deck aiming is the input model, not lag.",
    keyFacts: [
      {
        label: "Desync patch",
        value: "VSYNC setting — re-host after the update",
      },
      {
        label: "Creating… lobby",
        value: "Server-side; no local switch",
      },
      {
        label: "Remote Play lag",
        value:
          "Lower in-game quality on the host; joiner switches to wired",
      },
    ],
    modules: [
      {
        id: "lag-between-the-two-players",
        type: "steps",
        heading: "Lag Between the Two Players",
        items: [
          {
            title: "Update both clients",
            body:
              "Make sure both players are running the current build (the developer labelled the fix the 'Lag Fix - Level 14 Fix' update).",
          },
          {
            title: "Restart on both ends",
            body: "Restart the game on both ends after the update.",
          },
          {
            title: "Re-host on the affected client",
            body:
              "Re-host. The host's VSYNC setting is the one that affects both clients.",
          },
          {
            title: "If the jitter returns later",
            body:
              "If it is gone after the restart, it was the VSYNC bug. If it comes back, the patches have not covered every cause for every player, so keep both clients on the same Steam and game version and expect some rooms to still be jittery on slow networks.",
            doneCondition:
              "Jitter is either gone, or narrowed to a network-speed problem rather than a desync.",
          },
          {
            title: "Rule out the non-online setups first",
            body:
              "Single-player, local co-op, and Steam Remote Play sessions get mistaken for online connectivity problems. [Co-op and Game Modes](/guides/co-op-and-game-modes) lists which of those is which.",
          },
        ],
      },
      {
        id: "lobby-stuck-on-creating",
        type: "steps",
        heading: "Lobby Stuck on \"Creating…\"",
        items: [
          {
            title: "Confirm the launch build is current on both ends",
            body:
              "Confirm the launch build is current on both ends.",
          },
          {
            title: "Try the host on a different network",
            body: "Try the host on a different network if available.",
          },
          {
            title: "If the lobby still hangs, wait on the server-side fix",
            body:
              "If the lobby still hangs, there is no client-side setting for it — the fix has to land on the server side, which the developer says they are continuing to roll out.",
          },
        ],
      },
      {
        id: "lobby-stuck-link",
        type: "prose",
        heading: "What the stuck lobby really is",
        body: `A lobby that never resolves is not your connection or your firewall; it is the lobby service. Steam Remote Play Together is the practical workaround — see the section below.`,
      },
      {
        id: "lag-that-is-the-remote-play-stream",
        type: "entity-grid",
        heading: "Lag That Is Actually the Remote Play Stream",
        items: [
          {
            title: "Use a wired network on the joining player",
            summary:
              "Switch the joining player to a wired network if they are on Wi-Fi.",
          },
          {
            title: "Close other video or downloads",
            summary:
              "Close other video or download activity on the joining player's network.",
          },
          {
            title: "Lower in-game quality on the host",
            summary:
              "If they are far from the host, reduce the in-game graphics quality in the host's settings — the encoded stream scales with the frame budget.",
          },
        ],
      },
      {
        id: "two-spirits-one-session",
        type: "media-gallery",
        heading: "What a lagging session actually looks like",
        assetIds: ["mutant-plant-encounter"],
      },
      {
        id: "steam-deck-aiming",
        type: "callout",
        tone: "tip",
        title: "Steam Deck Aiming That Feels Like Lag",
        body: `On Steam Deck the ability aiming is described as fiddly, with the shot firing on right-stick release, so the aiming feels imprecise rather than the connection being bad. This is not online lag; it is the input model.

1. Use the touchscreen character-switch arrows instead of the shoulder buttons on Steam Deck — the developer has confirmed the shoulder swap only updates Player 1 reliably.
2. Tap the on-screen red and blue arrows to swap characters.
3. Lead the target a little more than usual because the flick-and-release aim takes a beat longer than a button press.

That last point matters when you are aiming at a moving mutant plant — the [How to Get Past Enemies](/guides/getting-past-enemies) page goes through the aim-leading pattern.`,
      },
    ],
    faqIds: ["what-is-this-site"],
    relatedPageIds: [
      "co-op-and-game-modes",
      "getting-past-enemies",
      "level-structure",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed,
  },
];
