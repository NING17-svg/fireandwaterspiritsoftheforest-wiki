import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Only the keys actually used in this site's ad-placement-manifest.json
// are present here, each empty; Page Builder leaves matching codes empty
// and only the Adsterra Integrator fills in real codes.
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "",
    "page-top-468x60": "",
    "page-top-320x50": "",
    "guide-section-break-728x90": "",
    "guide-section-break-468x60": "",
    "guide-section-break-320x50": "",
    "guide-native-mobile": "",
    "guide-before-faq-468x60": "",
    "guide-before-faq-320x50": "",
    "guide-rail-160x300": "",
    "footer-sponsored-smartlink": "",
  },
};

export const adInventory = inventory;
