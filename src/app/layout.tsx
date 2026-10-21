import type { Metadata } from "next";
import { site } from "@/data/site";
import { Analytics } from "@/lib/analytics";
import { getPrimaryLocaleConfig } from "@/lib/localization";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  title: site.name,
  description: site.description,
  alternates: {
    canonical: site.baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={getPrimaryLocaleConfig().htmlLang}>
      <head>
        {/*
          No Google AdSense carriers here on purpose. This site monetizes
          through Adsterra (see ad-placement-manifest.json and src/data/ads.ts),
          and the template's hardcoded ca-pub ID belongs to a different domain.
          Claiming it here would assert AdSense ownership of
          fireandwaterspiritsoftheforest.wiki for someone else's account.
        */}
        {site.bingSiteAuthCode ? (
          <meta name="msvalidate.01" content={site.bingSiteAuthCode} />
        ) : null}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
