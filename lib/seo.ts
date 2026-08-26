import type { Metadata } from "next";
import { COMPANY_NAME, DEFAULT_SEO, SITE_URL } from "@/data/company";

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

/**
 * Shared metadata builder for static pages.
 * Keeps Open Graph / canonical patterns consistent across routes.
 */
export function buildMetadata({
  title,
  description = DEFAULT_SEO.description,
  path = "/",
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${COMPANY_NAME}`
    : DEFAULT_SEO.title;

  const canonical = new URL(path, SITE_URL).toString();

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName: COMPANY_NAME,
      locale: "sr_RS",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
