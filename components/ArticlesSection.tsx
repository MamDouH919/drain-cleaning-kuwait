import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("ar-KW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default function ArticlesSection() {
  const latest = articles.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section
      id="articles"
      dir="rtl"
      aria-labelledby="articles-heading"
      className="w-full bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              المدونة
            </span>
            <h2
              id="articles-heading"
              className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              أحدث المقالات والنصائح
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              نصائح ومعلومات مفيدة عن تسليك المجاري وعزل الأسطح والصيانة المنزلية
              في الكويت.
            </p>
          </div>
          <Link
            href="/articles"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            كل المقالات
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
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
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-sky-700">
                    {article.title}
                  </h3>
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
  );
}
