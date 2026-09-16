/**
 * SEO helpers for CMS-backed pages: `<head>` metadata + JSON-LD graphs.
 * Mirrors the conventions used by the hand-written pages in this repo.
 */

import type { Metadata } from "next";
import { SITE_URL, BUSINESS_NAME } from "@/lib/areas";
import { CMS_BASE_PATH } from "./client";
import type { Article, ArticleSummary } from "./types";

export { CMS_BASE_PATH };

export const CMS_SECTION_URL = `${SITE_URL}${CMS_BASE_PATH}`;
export const CMS_SECTION_TITLE = "المقالات";

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

/** Absolute URL for an image reference that may already be absolute. */
function imageUrl(src: string | undefined): string | undefined {
  if (!src) return undefined;
  return src.startsWith("http") ? src : `${SITE_URL}${src}`;
}

// ── Article page metadata ─────────────────────────────────────────────────

export function buildArticleMetadata(
  article: Article,
  canonicalPath: string,
): Metadata {
  const { seo } = article;
  const title = seo.metaTitle || article.title;
  const description = seo.metaDescription || article.excerpt;
  const canonical = seo.canonicalUrl || absoluteUrl(canonicalPath);
  const ogImage =
    imageUrl(seo.ogImage) || imageUrl(article.featuredImage?.url);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical },
    robots: seo.robots || undefined,
    openGraph: {
      type: "article",
      locale: "ar_KW",
      url: canonical,
      siteName: BUSINESS_NAME,
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: article.author?.name ? [article.author.name] : undefined,
      section: article.category?.name,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: article.featuredImage?.alt || title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export function buildListMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(opts.path);
  return {
    metadataBase: new URL(SITE_URL),
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path, languages: { "ar-KW": opts.path } },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "ar_KW",
      url,
      siteName: BUSINESS_NAME,
      title: opts.title,
      description: opts.description,
    },
  };
}

// ── JSON-LD graphs ───────────────────────────────────────────────────────

function breadcrumbList(
  id: string,
  trail: { name: string; item: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function articleJsonLd(article: Article, path: string) {
  const url = absoluteUrl(path);
  const image =
    imageUrl(article.seo?.ogImage) || imageUrl(article.featuredImage?.url);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.excerpt,
      ...(image ? { image: [image] } : {}),
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      inLanguage: "ar",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      articleSection: article.category?.name,
      author: article.author?.jsonLd
        ? article.author.jsonLd
        : article.author?.name
          ? { "@type": "Person", name: article.author.name }
          : undefined,
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    breadcrumbList(`${url}#breadcrumb`, [
      { name: "الرئيسية", item: SITE_URL },
      { name: CMS_SECTION_TITLE, item: CMS_SECTION_URL },
      { name: article.title, item: url },
    ]),
  ];

  // Embed the author's schema.org Person node verbatim, if the CMS provided a
  // standalone one (kept separate from the article `author` reference above).
  if (
    article.author?.jsonLd &&
    typeof article.author.jsonLd === "object" &&
    !Array.isArray(article.author.jsonLd)
  ) {
    graph.push(article.author.jsonLd as Record<string, unknown>);
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function listJsonLd(opts: {
  path: string;
  name: string;
  description: string;
  items: ArticleSummary[];
  breadcrumb: { name: string; item: string }[];
}) {
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: opts.name,
        description: opts.description,
        inLanguage: "ar",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#business` },
      },
      breadcrumbList(`${url}#breadcrumb`, opts.breadcrumb),
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        itemListElement: opts.items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: `${CMS_SECTION_URL}/${item.slug}`,
        })),
      },
    ],
  };
}

