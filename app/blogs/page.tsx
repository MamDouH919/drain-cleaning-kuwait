import type { Metadata } from "next";
import ArticleList from "@/components/ArticleList";
import { SITE_URL } from "@/lib/areas";
import { getArticleSummaries } from "@/lib/articles";

import Breadcrumbs from "@/components/Breadcrumbs";
const PAGE_PATH = "/blogs";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "المدونة | نصائح تسليك المجاري وعزل الأسطح في الكويت",
  description:
    "مقالات ونصائح متخصصة في تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت، تعرف على أحدث التقنيات وطرق الوقاية من المشاكل.",
  alternates: { canonical: PAGE_PATH, languages: { "ar-KW": PAGE_PATH } },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: PAGE_URL,
    siteName: "خدمات الكويت",
    title: "المدونة | نصائح تسليك المجاري وعزل الأسطح في الكويت",
    description:
      "مقالات ونصائح متخصصة في تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت.",
  },
};

export default function ArticlesPage() {
  const posts = getArticleSummaries();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: "المدونة",
        url: PAGE_URL,
        inLanguage: "ar",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "المدونة", item: PAGE_URL },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}/#list`,
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: post.title,
          url: `${SITE_URL}/blogs/${post.slug}`,
        })),
      },
    ],
  };

  return (
    <main className="flex-1" dir="rtl">
      <Breadcrumbs items={[{ label: "المدونة" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full overflow-hidden bg-gradient-to-bl from-sky-50 via-white to-emerald-50">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
            المدونة
          </span>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            مقالات ونصائح الصيانة في الكويت
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            كل ما تحتاج معرفته عن تسليك المجاري وعزل الأسطح والصيانة المنزلية،
            نصائح عملية وأحدث التقنيات المستخدمة في الكويت.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <ArticleList posts={posts} />
        </div>
      </section>
    </main>
  );
}
