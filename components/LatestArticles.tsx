import Image from "next/image";
import Link from "next/link";
import { getBlogSummaries } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ar-KW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function LatestArticles() {
  const posts = getBlogSummaries().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section
      dir="rtl"
      aria-labelledby="articles-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-right">
          <div className="mx-auto max-w-2xl sm:mx-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              نصائح ومقالات
            </span>
            <h2
              id="articles-heading"
              className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              مقالات تساعدك على حماية منزلك
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              نصائح متخصصة في تسليك المجاري وعزل الأسطح والصيانة المنزلية في
              الكويت.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
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
          {posts.map((post) => (
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
                  <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-700">
                    {post.title}
                  </h3>
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
      </div>
    </section>
  );
}
