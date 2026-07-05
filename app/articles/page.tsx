import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/areas";
import { articles } from "@/lib/articles";

const PAGE_PATH = "/articles";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "المقالات | نصائح تسليك المجاري وعزل الأسطح في الكويت",
  description:
    "مقالات ونصائح متخصصة في تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت، تعرف على أحدث التقنيات وطرق الوقاية من المشاكل.",
  alternates: { canonical: PAGE_PATH, languages: { "ar-KW": PAGE_PATH } },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: PAGE_URL,
    siteName: "خدمات الكويت",
    title: "المقالات | نصائح تسليك المجاري وعزل الأسطح في الكويت",
    description:
      "مقالات ونصائح متخصصة في تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت.",
  },
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("ar-KW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default function ArticlesPage() {
  return (
    <main className="flex-1" dir="rtl">
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
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.featuredImage}
                      alt={article.featuredAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-sky-700 backdrop-blur">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-sky-700">
                      {article.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time>
                      <span>{article.readingMinutes} دقائق قراءة</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
