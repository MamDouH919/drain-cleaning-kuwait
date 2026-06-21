import type { MetadataRoute } from "next";
import { SITE_URL, allAreaPageSlugs } from "@/lib/areas";
import { blogPosts } from "@/lib/blog";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/drain-cleaning-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/roof-waterproofing-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kitchen-bathroom-drain-cleaning-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/thermal-waterproofing-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/basement-pump-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/manhole-installation-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/water-tank-cleaning-kuwait", priority: 0.9, changeFrequency: "monthly" },
  { path: "/areas", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact-us", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const areaEntries: MetadataRoute.Sitemap = allAreaPageSlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...areaEntries, ...blogEntries];
}
