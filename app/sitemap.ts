import type { MetadataRoute } from "next";
import { SITE_URL, allAreaPageSlugs } from "@/lib/areas";
import { articles } from "@/lib/articles";
import { CMS_BASE_PATH, safeGetAllArticles } from "@/lib/cms/client";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/drain-cleaning-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/roof-waterproofing-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kitchen-bathroom-drain-cleaning-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/thermal-waterproofing-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/basement-pump-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/manhole-installation-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/water-tank-cleaning-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/gitaroof-insulation-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/drain-cleaning-prices-kuwait", priority: 0.8, changeFrequency: "monthly" },
  { path: "/roof-insulation-prices-kuwait", priority: 0.8, changeFrequency: "monthly" },
  { path: "/areas", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blogs", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blogs/drain-cleaning-kuwait", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blogs/drain-cleaning-in-kuwait", priority: 0.8, changeFrequency: "monthly" },
  { path: CMS_BASE_PATH, priority: 0.8, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact-us", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
];

// تاريخ آخر مراجعة فعلية لمحتوى الصفحات الثابتة وصفحات المناطق (القالب) —
// يُحدَّث يدويًا فقط عند تعديل حقيقي في المحتوى/الأسعار/البنية، وليس تاريخ
// آخر عملية build، حتى لا يُبلِّغ جوجل بتعديل وهمي في كل نشر.
const CONTENT_LAST_MODIFIED = new Date("2026-09-15T00:00:00+00:00");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const areaEntries: MetadataRoute.Sitemap = allAreaPageSlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/blogs/${article.slug}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // CMS-backed hub. Safe helper returns [] when the CMS is unset/unreachable,
  // so the sitemap still builds.
  const cmsArticles = await safeGetAllArticles();

  const hubArticleEntries: MetadataRoute.Sitemap = cmsArticles.map((article) => ({
    url: `${SITE_URL}${CMS_BASE_PATH}/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt || now),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...areaEntries,
    ...articleEntries,
    ...hubArticleEntries,
  ];
}
