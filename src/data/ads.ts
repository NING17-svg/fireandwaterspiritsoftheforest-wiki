import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Page Builder supplies an empty Adsterra registry; real codes are added by Adsterra Integrator.
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "<script>\n  atOptions = {\n    'key' : '42f3aa81998e1c287f10ad89cff59f5a',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/42f3aa81998e1c287f10ad89cff59f5a\"></script>",
    "page-top-468x60": "<script>\n  atOptions = {\n    'key' : '7a7e588a8bd06d2c93f9991332de7bd1',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/7a7e588a8bd06d2c93f9991332de7bd1\"></script>",
    "page-top-320x50": "<script>\n  atOptions = {\n    'key' : '9bb7e8e627f5c1a4b32bd28e75ff597e',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/9bb7e8e627f5c1a4b32bd28e75ff597e\"></script>",
    "guide-section-break-728x90": "<script>\n  atOptions = {\n    'key' : '42f3aa81998e1c287f10ad89cff59f5a',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/42f3aa81998e1c287f10ad89cff59f5a\"></script>",
    "guide-section-break-468x60": "<script>\n  atOptions = {\n    'key' : '7a7e588a8bd06d2c93f9991332de7bd1',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/7a7e588a8bd06d2c93f9991332de7bd1\"></script>",
    "guide-section-break-320x50": "<script>\n  atOptions = {\n    'key' : '9bb7e8e627f5c1a4b32bd28e75ff597e',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/9bb7e8e627f5c1a4b32bd28e75ff597e\"></script>",
    "guide-native-mobile": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/02c35dfca6a51fe506652780ba6b1dd9\"></script>\n<div id=\"container-02c35dfca6a51fe506652780ba6b1dd9\"></div>",
    "guide-before-faq-468x60": "<script>\n  atOptions = {\n    'key' : '7a7e588a8bd06d2c93f9991332de7bd1',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/7a7e588a8bd06d2c93f9991332de7bd1\"></script>",
    "guide-before-faq-320x50": "<script>\n  atOptions = {\n    'key' : '9bb7e8e627f5c1a4b32bd28e75ff597e',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/9bb7e8e627f5c1a4b32bd28e75ff597e\"></script>",
    "guide-rail-160x300": "<script>\n  atOptions = {\n    'key' : 'e2d8b4807900fd39262b999f6b4b30d0',\n    'format' : 'iframe',\n    'height' : 300,\n    'width' : 160,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e2d8b4807900fd39262b999f6b4b30d0\"></script>",
    "footer-sponsored-smartlink": "https://araplhn.org/4/2fcf90e3c9862aa3102ee8fd7816b0d3",
  },
};

export const adInventory = inventory;
