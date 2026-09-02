// CMS images come from an env-driven host unknown at config time, so
// `next/image` remotePatterns can't be pinned. Plain <img> with explicit
// width/height (reserves layout, no CLS) keeps the integration host-agnostic,
// per the task's ContentBlocks spec.
/* eslint-disable @next/next/no-img-element */
import type { Article, ContentBlock } from "@/lib/cms/types";

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("ar-KW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/** One content block → semantic HTML. Array order is the document order. */
function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return block.level === 3 ? (
        <h3 className="mt-8 scroll-mt-28 text-xl font-bold text-slate-800">
          {block.content}
        </h3>
      ) : (
        <h2 className="mt-12 scroll-mt-28 border-r-4 border-sky-600 pr-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          {block.content}
        </h2>
      );

    case "paragraph":
      return (
        <p className="mt-5 text-lg leading-loose text-slate-700">
          {block.content}
        </p>
      );

    case "list":
      return block.ordered ? (
        <ol className="mt-4 list-decimal space-y-2.5 pr-6 text-lg leading-relaxed text-slate-700 marker:font-bold marker:text-sky-600">
          {block.items.map((item, i) => (
            <li key={i} className="pr-1">
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="mt-4 list-disc space-y-2.5 pr-6 text-lg leading-relaxed text-slate-700 marker:text-sky-500">
          {block.items.map((item, i) => (
            <li key={i} className="pr-1">
              {item}
            </li>
          ))}
        </ul>
      );

    case "image":
      return (
        <figure className="mt-8">
          {/* width/height reserve the intrinsic ratio → no layout shift */}
          <img
            src={block.url}
            alt={block.alt}
            title={block.title}
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-3xl border border-slate-100 object-cover shadow-md ring-1 ring-slate-900/5"
          />
          {block.caption ? (
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case "quote":
      return (
        <blockquote className="mt-8 border-r-4 border-sky-500 bg-sky-50/60 px-6 py-4 text-lg italic leading-relaxed text-slate-800">
          <p>{block.content}</p>
          {block.author ? (
            <cite className="mt-2 block text-sm font-semibold not-italic text-slate-500">
              — {block.author}
            </cite>
          ) : null}
        </blockquote>
      );

    case "divider":
      return <hr className="my-10 border-t border-slate-200" />;

    default:
      return null;
  }
}

/**
 * Renders the full `<article>` element: the title is the single `<h1>`, the
 * featured image and byline sit in `<header>`, then the content blocks in
 * their given order. No decorative wrapper divs.
 */
export default function ArticleBody({ article }: { article: Article }) {
  const { author, category, featuredImage } = article;

  return (
    <article className="mx-auto max-w-3xl">
      <header>
        <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-700">
          {category.name}
        </span>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        {article.excerpt ? (
          <p className="mt-4 text-xl leading-relaxed text-slate-600">
            {article.excerpt}
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
          <span rel="author" className="font-semibold text-slate-600">
            {author.name}
          </span>
          {author.jobTitle ? <span>{author.jobTitle}</span> : null}
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
          {article.updatedAt && article.updatedAt !== article.publishedAt ? (
            <span>
              آخر تحديث: <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
            </span>
          ) : null}
        </div>

        {featuredImage?.url ? (
          <figure className="mt-8">
            <img
              src={featuredImage.url}
              alt={featuredImage.alt || article.title}
              width={1200}
              height={630}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full rounded-3xl border border-slate-100 object-cover shadow-lg ring-1 ring-slate-900/5"
            />
          </figure>
        ) : null}
      </header>

      {article.contentBlocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </article>
  );
}
