"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogCategories, type BlogSummary } from "@/lib/blog";

const PER_PAGE = 6;

const filters = ["الكل", ...blogCategories] as const;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ar-KW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogList({ posts }: { posts: BlogSummary[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof filters)[number]>("الكل");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim();
    return posts.filter((p) => {
      const matchesCategory = category === "الكل" || p.category === category;
      const matchesQuery = q === "" || p.title.includes(q) || p.excerpt.includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const reset = () => setPage(1);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 3.4 9.82l3.64 3.64a1 1 0 0 0 1.42-1.42l-3.64-3.64A5.5 5.5 0 0 0 9 3.5Zm-3.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <label htmlFor="blog-search" className="sr-only">
            ابحث في المقالات
          </label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              reset();
            }}
            placeholder="ابحث عن مقال..."
            className="w-full rounded-full border border-slate-200 bg-white py-3 pr-12 pl-4 text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setCategory(f);
                reset();
              }}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                category === f
                  ? "bg-sky-600 text-white shadow"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-slate-100 bg-slate-50 p-10 text-center text-slate-500">
          لا توجد مقالات مطابقة لبحثك.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
              >
                <span className="relative block aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-sky-700 backdrop-blur">
                    {post.category}
                  </span>
                </span>
                <span className="flex flex-1 flex-col p-6">
                  <span className="flex items-center gap-2 text-xs text-slate-400">
                    <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                    <span aria-hidden="true">•</span>
                    <span>{post.readingMinutes} دقائق قراءة</span>
                  </span>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-700">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-sky-700">
                    اقرأ المقال
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <nav aria-label="ترقيم الصفحات" className="flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            السابق
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i + 1)}
              aria-current={currentPage === i + 1 ? "page" : undefined}
              className={`h-10 w-10 rounded-full text-sm font-bold transition ${
                currentPage === i + 1
                  ? "bg-sky-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            التالي
          </button>
        </nav>
      )}
    </div>
  );
}
