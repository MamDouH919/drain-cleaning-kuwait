import type { NextConfig } from "next";
import articlesJson from "./content/articles.json";

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
const legacyBlogSlugs: string[] = [
  ...(articlesJson as { slug: string }[]).map((article) => article.slug),
  "drain-cleaning-kuwait",
  "drain-cleaning-in-kuwait",
];

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
      ...slugRedirects.flatMap(({ from, to }) => [
        { source: from, destination: to, permanent: true },
        { source: encodeURI(from), destination: to, permanent: true },
      ]),
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
