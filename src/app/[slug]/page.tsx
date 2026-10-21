import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageRenderer } from "@/components/pages/PageRenderer";
import { getIndexablePages, getPageByUrl } from "@/lib/content";
import { metadataForPage } from "@/lib/seo";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const params = getIndexablePages()
    .filter((page) => page.url !== "/" && page.url.split("/").filter(Boolean).length === 1)
    .map((page) => ({ slug: page.url.slice(1) }));

  // Next.js static export rejects a dynamic route when generateStaticParams
  // returns an empty array. This site has no single-segment routes yet, so the
  // sentinel renders through notFound() and is never linked, indexed, or
  // included in the route manifest. Drop it once a top-level page exists.
  return params.length > 0 ? params : [{ slug: "__static_export_placeholder__" }];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageByUrl(`/${slug}`);

  return page ? metadataForPage(page) : {};
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageByUrl(`/${slug}`);

  if (!page) notFound();

  return (
    <PageShell locale={page.locale} currentUrl={page.url}>
      <PageRenderer page={page} />
    </PageShell>
  );
}
