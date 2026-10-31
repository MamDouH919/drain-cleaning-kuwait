import { SITE_URL } from "./areas";
import { ORGANIZATION_ID } from "./schema";

/** `2026-07-14` → `2026-07-14T00:00:00+03:00` (توقيت الكويت). التواريخ الكاملة بتعدي زي ما هي. */
export function kuwaitDate(date: string) {
  return date.length === 10 ? `${date}T00:00:00+03:00` : date;
}

/**
 * نودين `WebPage` + `Article` (أو `BlogPosting`) لأي صفحة دليل أو مقال.
 *
 * - `headline` لازم يبقى الـ H1 الظاهر بالحرف.
 * - التواريخ حقيقية: أول نشر من git، وآخر تعديل من `lib/last-modified.ts`
 *   أو `dateModified` بتاع المقال، ومش وقت الـ build.
 * - `publisher` دايمًا `#organization`. والـ `author` كمان، إلا لو الصفحة ليها
 *   كاتب فعلي (مقالات المدونة).
 */
export function articleGraph({
  url,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  breadcrumbId,
  type = "Article",
  author = { "@id": ORGANIZATION_ID },
  extra = {},
}: {
  url: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  breadcrumbId?: string;
  type?: "Article" | "BlogPosting";
  author?: Record<string, unknown>;
  extra?: Record<string, unknown>;
}) {
  const webPageId = `${url}#webpage`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return [
    {
      "@type": "WebPage",
      "@id": webPageId,
      url,
      name: headline,
      inLanguage: "ar",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      primaryImageOfPage: { "@type": "ImageObject", url: imageUrl },
      ...(breadcrumbId ? { breadcrumb: { "@id": breadcrumbId } } : {}),
    },
    {
      "@type": type,
      "@id": `${url}#article`,
      headline,
      description,
      inLanguage: "ar",
      image: imageUrl,
      datePublished: kuwaitDate(datePublished),
      dateModified: kuwaitDate(dateModified),
      author,
      publisher: { "@id": ORGANIZATION_ID },
      mainEntityOfPage: { "@id": webPageId },
      ...extra,
    },
  ];
}
