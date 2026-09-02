// CMS images come from an env-driven host unknown at config time, so
// `next/image` remotePatterns can't be pinned. Plain <img> with explicit
// width/height keeps the integration host-agnostic.
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CMS_BASE_PATH } from "@/lib/cms/client";
import type { ArticleSummary } from "@/lib/cms/types";

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("ar-KW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function ArticleCard({ post }: { post: ArticleSummary }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`${CMS_BASE_PATH}/${post.slug}`}
        className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
      >
        <span className="relative block aspect-[16/10] overflow-hidden bg-slate-100">
          {post.featuredImage?.url ? (
            <img
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              width={640}
              height={400}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : null}
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-sky-700 backdrop-blur">
            {post.category?.name}
          </span>
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {post.author?.name ? (
            <>
              <span aria-hidden="true">•</span>
              <span className="font-semibold text-slate-500">
                {post.author.name}
              </span>
            </>
          ) : null}
        </div>

        <h2 className="mt-3 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-700">
          <Link href={`${CMS_BASE_PATH}/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        <Link
          href={`${CMS_BASE_PATH}/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-sky-700"
        >
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
        </Link>
      </div>
    </article>
  );
}
