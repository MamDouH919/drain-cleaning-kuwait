import Link from "next/link";
import ArticleCard from "@/components/cms/ArticleCard";
import { CMS_BASE_PATH, safeGetArticles } from "@/lib/cms/client";

/**
 * Site-wide "latest articles" band, rendered from the CMS hub. Placed in the
 * root layout so every page links into `/articles`. Renders nothing when the
 * CMS is unset/unreachable or has no published articles.
 */
export default async function ArticlesSection({
  limit = 3,
}: {
  limit?: number;
}) {
  const { items } = await safeGetArticles({ limit });
  if (items.length === 0) return null;

  return (
    <section
      dir="rtl"
      aria-labelledby="cms-articles-heading"
      className="w-full border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              المقالات
            </span>
            <h2
              id="cms-articles-heading"
              className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              مقالات ودلائل الخبراء
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              محتوى متخصص ومراجَع عن تسليك المجاري وعزل الأسطح والصيانة المنزلية
              في الكويت.
            </p>
          </div>
          <Link
            href={CMS_BASE_PATH}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            كل المقالات
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((post) => (
            <li key={post.slug}>
              <ArticleCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
