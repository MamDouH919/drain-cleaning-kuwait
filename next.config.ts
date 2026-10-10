import type { NextConfig } from "next";
import articlesJson from "./content/articles.json";

// The 2026-09 SEO audit flagged 132 near-duplicate area pages (66 districts ×
// 2 services) as a doorway-page pattern (findings/sitemap.md, Finding 1).
// Consolidated to 8 areas (6 real governorates + 2 flagship high-demand
// districts — see lib/areas.ts) with genuinely differentiated content.
// Retired district slugs 301-redirect to their real governorate's surviving
// page, grouped below by governorate for auditability.
const retiredAreaGovernorate: Record<string, string[]> = {
  asima: [
    "sharq", "sulaibikhat", "shuwaikh", "kaifan", "qadsiya", "daiya",
    "mansouriya", "faiha", "shamiya", "khaldiya", "adailiya", "qortuba",
    "surra", "yarmouk", "doha", "gharb-sulaibikhat", "jaber-al-ahmad",
  ],
  hawalli: [
    "jabriya", "salwa", "mishref", "bayan", "rumaithiya",
    "shaab", "shuhada", "siddiq", "zahra", "hateen",
  ],
  farwaniya: [
    "jleeb-al-shuyoukh", "ardhiya", "omariya", "rabiya", "ishbiliya",
    "firdous", "andalous", "sabah-al-nasser", "riggae",
    "gharb-abdullah-mubarak", "abdullah-mubarak",
  ],
  ahmadi: [
    "mangaf", "abu-halifa", "fintas", "mahboula", "egaila", "riqqa",
    "hadiya", "sabahiya", "jaber-al-ali", "fahad-al-ahmad", "umm-al-haiman",
  ],
  jahra: ["qairawan", "mutlaa", "sulaibiya", "nahda", "saad-al-abdullah"],
  "mubarak-kabeer": ["sabah-al-salem", "abu-fatira", "adan", "qusour", "qurain"],
};

const areaServicePrefixes = ["drain-cleaning-", "roof-waterproofing-"];

const areaPageRedirects: { source: string; destination: string; permanent: true }[] =
  Object.entries(retiredAreaGovernorate).flatMap(([survivor, retired]) =>
    retired.flatMap((oldSlug) =>
      areaServicePrefixes.map((prefix) => ({
        source: `/${prefix}${oldSlug}`,
        destination: `/${prefix}${survivor}`,
        permanent: true as const,
      })),
    ),
  );

const slugRedirects: { from: string; to: string }[] = [
  { from: "/تسليك-مجاري-الكويت", to: "/drain-cleaning-kuwait" },
  {
    from: "/تسليك-مجاري-المطابخ-والحمامات",
    to: "/kitchen-bathroom-drain-cleaning-kuwait",
  },
  { from: "/عزل-اسطح-الكويت", to: "/roof-waterproofing-kuwait" },
  { from: "/العزل-المائي-والحراري", to: "/thermal-waterproofing-kuwait" },
];

// المقالات المكتوبة يدويًا انتقلت من /articles إلى /blogs، وصار مسار
// /articles/[slug] الآن لمقالات نظام إدارة المحتوى. نُعيد توجيه روابط
// المقالات اليدوية القديمة (بما فيها الصفحتان ذواتا التصميم الخاص) إلى
// /blogs بشكل دائم حتى لا تُفقد من الفهرس ولا تصطدم بمسار الـ CMS.
const legacyBlogSlugs: string[] = (articlesJson as { slug: string }[]).map(
  (article) => article.slug,
);

// مقالات مدونة كانت تنافس صفحة خدمة أو منطقة على نفس الكلمة، فدُمجت فيها.
// كل مساراتها القديمة (/blogs و/articles و/blog) تذهب إلى الصفحة مباشرة
// بخطوة واحدة بدل سلسلة تحويلات. التفاصيل في docs/removed-blog-posts.md.
const mergedArticles: Record<string, string> = {
  "drain-cleaning-kuwait": "/drain-cleaning-kuwait",
  "drain-cleaning-in-kuwait": "/drain-cleaning-kuwait",
  "best-drain-cleaning-companies-kuwait": "/drain-cleaning-kuwait",
  "kitchen-drain-cleaning": "/kitchen-bathroom-drain-cleaning-kuwait",
  "drain-cleaning-hawalli-guide": "/drain-cleaning-hawalli",
  "drain-cleaning-salmiya-guide": "/drain-cleaning-salmiya",
};
const mergedArticleRedirects = Object.entries(mergedArticles).flatMap(
  ([slug, destination]) =>
    ["/blogs", "/articles", "/blog"].map((base) => ({
      source: `${base}/${slug}`,
      destination,
      permanent: true,
    })),
);

// Tailwind is the only stylesheet on the site (small, atomic CSS) — inlining
// it removes the render-blocking <link rel="stylesheet"> request that was
// measured as the dominant contributor to LCP's "element render delay"
// (300–700ms per page). See taslikmajarikuwait.com-audit/findings/performance.md.
const CSP_HEADER = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com",
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      ...areaPageRedirects,
      // قبل قاعدتي /articles/<slug> و/blog/:slug العامتين حتى تطابق أولًا.
      ...mergedArticleRedirects,
      ...slugRedirects.flatMap(({ from, to }) => [
        { source: from, destination: to, permanent: true },
        { source: encodeURI(from), destination: to, permanent: true },
      ]),
      // صفحة فهرس /articles أُلغيت لصالح /blogs. مطابقة تامة للمسار فقط، فلا
      // تلتقط /articles/<slug> (مقالات الـ CMS والتحويلات الخاصة أدناه).
      { source: "/articles", destination: "/blogs", permanent: true },
      // روابط المقالات اليدوية القديمة على /articles/<slug> → /blogs/<slug>.
      ...legacyBlogSlugs.map((slug) => ({
        source: `/articles/${slug}`,
        destination: `/blogs/${slug}`,
        permanent: true,
      })),
      // مسار /blog القديم كان يحمل نفس مقالات المدونة اليدوية.
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/blog/:slug", destination: "/blogs/:slug", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // يفرض HTTPS على المتصفح لمدة سنتين ويشمل النطاقات الفرعية.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "Content-Security-Policy", value: CSP_HEADER },
        ],
      },
    ];
  },
};

export default nextConfig;
