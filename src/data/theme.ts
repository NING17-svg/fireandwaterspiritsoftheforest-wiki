import type { ThemeConfig } from "@/types/theme";

// Fire and Water: Spirits of the Forest visual identity.
// Forest biome with seven element spirits; primary accent is forest green,
// with lava (red) and water (blue) supporting the gameplay dual-element language.
export const theme: ThemeConfig = {
  mode: "light",
  navigation: "header",
  tokens: {
    pageBg: "#f3f7ee",
    surface1: "#ffffff",
    surface2: "#eaf1e1",
    surface3: "#d6e3c8",
    surfaceInverse: "#1c2a1f",
    textPrimary: "#1c2a1f",
    textMuted: "#54635a",
    textInverse: "#ffffff",
    textOnAccentPrimary: "#ffffff",
    textLink: "#2f7a3e",
    focusRing: "#2f7a3e",
    line: "#cdd9c0",
    lineStrong: "#88a08a",
    accentPrimary: "#2f7a3e",
    accentSecondary: "#cf2e2e",
    accentBright: "#1e6bd6",
    statusConfirmed: "#2f7a3e",
    statusCaution: "#b97014",
    statusUnknown: "#54635a",
  },
  typography: {
    headingFamily: "Fredoka, Quicksand, 'Segoe UI', system-ui, sans-serif",
    bodyFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "10px",
    borderWidth: "1px",
    shadow: "0 18px 40px rgba(28, 42, 31, 0.08)",
    hoverLift: "-2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0, position: "center" },
  variants: {
    home: "guide-portal",
    hub: "grouped-list",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "organic", intensity: "low" },
};
