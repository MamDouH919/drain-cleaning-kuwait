import type { MetadataRoute } from "next";
import { SITE_URL, allAreaPageSlugs } from "@/lib/areas";
import { articles } from "@/lib/articles";
import { CMS_BASE_PATH, safeGetAllArticles } from "@/lib/cms/client";
import { PAGE_LAST_MODIFIED } from "@/lib/last-modified";

// من غير changefreq وpriority لأن جوجل بيتجاهلهم.
const staticRoutes = [
  "",
  "/drain-cleaning-kuwait",
  "/roof-waterproofing-kuwait",
  "/kitchen-bathroom-drain-cleaning-kuwait",
  "/thermal-waterproofing-kuwait",
  "/basement-pump-kuwait",
  "/manhole-installation-kuwait",
  "/water-tank-cleaning-kuwait",
  "/gitaroof-insulation-kuwait",
  "/drain-cleaning-prices-kuwait",
  "/roof-insulation-prices-kuwait",
  "/areas",
  "/blogs",
  "/about-us",
  "/contact-us",
  "/privacy-policy",
  "/terms-conditions",
];

// lastmod بيطلع بس لو فيه تاريخ حقيقي للصفحة (lib/last-modified.ts).
function entry(path: string, lastModified?: string): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    ...(lastModified ? { lastModified } : {}),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = staticRoutes.map((path) => entry(path, PAGE_LAST_MODIFIED[path]));

  const areaEntries = allAreaPageSlugs().map((slug) =>
    entry(`/${slug}`, PAGE_LAST_MODIFIED[`/${slug}`]),
  );

  const articleEntries = articles.map((article) =>
    entry(`/blogs/${article.slug}`, article.dateModified),
  );

  // CMS-backed hub. Safe helper returns [] when the CMS is unset/unreachable,
  // so the sitemap still builds.
  const cmsArticles = await safeGetAllArticles();

  const hubArticleEntries = cmsArticles.map((article) =>
    entry(`${CMS_BASE_PATH}/${article.slug}`, article.updatedAt || article.publishedAt),
  );

  return [
    ...staticEntries,
    ...areaEntries,
    ...articleEntries,
    ...hubArticleEntries,
  ];
}
