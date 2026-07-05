import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SITE_URL,
  BUSINESS_NAME,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/areas";
import {
  articles,
  articleBySlug,
  buildToc,
  getAdjacentArticles,
  getFaqs,
  type Block,
} from "@/lib/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) return {};

  const path = `/articles/${slug}`;
  const url = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: article.metaTitle,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: path, languages: { "ar-KW": path } },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      type: "article",
      locale: "ar_KW",
      url,
      title: article.metaTitle,
      description: article.description,
      siteName: BUSINESS_NAME,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      images: [{ url: article.featuredImage, width: 1200, height: 630, alt: article.featuredAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.description,
      images: [article.featuredImage],
    },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("ar-KW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

function BlockContent({ block, index }: { block: Block; index: number }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="mt-6 rounded-2xl border-r-4 border-sky-500 bg-sky-50/60 p-5 text-lg font-bold leading-relaxed text-slate-800">
          {block.text}
        </p>
      );
    case "p":
      return (
        <p className="mt-5 text-lg leading-loose text-slate-700">{block.text}</p>
      );
    case "h2":
      return (
        <h2
          id={`heading-${index}`}
          className="mt-12 scroll-mt-28 border-r-4 border-sky-600 pr-3 text-2xl font-extrabold text-slate-900 sm:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          id={`heading-${index}`}
          className="mt-8 scroll-mt-28 text-xl font-bold text-slate-800"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-slate-700">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-4 space-y-3">
          {block.items.map((item, i) => (
            <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-slate-700">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-bl from-sky-600 to-emerald-600 text-sm font-extrabold text-white">
                {i + 1}
              </span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "image":
      return (
        <figure className="mt-8">
          <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-md ring-1 ring-slate-900/5">
            <Image
              src={block.src}
              alt={block.alt}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-auto w-full object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "faq":
      return (
        <div className="mt-6 flex flex-col gap-4">
          {block.items.map((faq) => (
            <details
              key={faq.q}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 shadow-sm ring-1 ring-slate-900/5"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-bold text-slate-900 marker:content-none sm:text-lg">
                {faq.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700 transition-transform duration-300 group-open:rotate-180">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-5 text-base leading-relaxed text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      );
    case "links":
      return (
        <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
          {block.title && (
            <h2 className="text-lg font-bold text-slate-900">{block.title}</h2>
          )}
          <ul className="mt-4 flex flex-col gap-2">
            {block.items.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-sky-700 underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 font-bold text-sky-700 underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) notFound();

  const path = `/articles/${slug}`;
  const url = `${SITE_URL}${path}`;
  const toc = buildToc(article.blocks);
  const faqs = getFaqs(article.blocks);
  const { prev, next } = getAdjacentArticles(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}/#article`,
        headline: article.title,
        description: article.description,
        image: `${SITE_URL}${article.featuredImage}`,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        inLanguage: "ar",
        author: { "@type": "Person", name: article.author },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        articleSection: article.category,
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}/#faq`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "المقالات", item: `${SITE_URL}/articles` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="flex-1 bg-white" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:py-16">
        <nav aria-label="مسار التنقل" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-sky-700">الرئيسية</Link>
          <span aria-hidden="true">/</span>
          <Link href="/articles" className="hover:text-sky-700">المقالات</Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-slate-700">{article.title}</span>
        </nav>

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-100 shadow-lg ring-1 ring-slate-900/5">
          <Image
            src={article.featuredImage}
            alt={article.featuredAlt}
            width={1200}
            height={630}
            preload
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="h-auto w-full object-cover"
          />
        </div>

        <header className="mt-8">
          <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-700">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-slate-400" aria-hidden="true">
                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
              </svg>
              {article.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-slate-400" aria-hidden="true">
                <path d="M7 2v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7Zm12 7v10H5V9h14Z" />
              </svg>
              <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-slate-400" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10a1 1 0 0 1-.29.71l-3 3-1.42-1.42L11 11.59V6h2v6Z" />
              </svg>
              {article.readingMinutes} دقائق قراءة
            </span>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="min-w-0">
            {toc.length > 0 && (
              <details className="mb-8 rounded-2xl border border-slate-100 bg-slate-50/60 p-5 lg:hidden" open>
                <summary className="cursor-pointer text-base font-bold text-slate-900">
                  محتويات المقال
                </summary>
                <ol className="mt-3 space-y-2">
                  {toc.map((item) => (
                    <li key={item.id} className={item.level === 3 ? "pr-4" : ""}>
                      <a href={`#${item.id}`} className="text-sm text-slate-600 hover:text-sky-700">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            )}

            {article.blocks.map((block, index) => (
              <BlockContent key={index} block={block} index={index} />
            ))}

            <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl">
              <h2 className="text-2xl font-extrabold text-white">تحتاج فحص أو تسليك مجاري؟</h2>
              <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-sky-50/90">
                اتصل بنا الآن واحصل على خدمة سريعة واحترافية بأسعار مناسبة في جميع مناطق الكويت.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-sky-700 shadow-lg transition hover:bg-sky-50">
                  {PHONE_DISPLAY} | اتصل الآن
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-emerald-400">
                  واتساب
                </a>
              </div>
            </div>

            {(prev || next) && (
              <nav aria-label="تصفح المقالات" className="mt-10 grid grid-cols-1 gap-4 border-t border-slate-100 pt-8 sm:grid-cols-2">
                {prev ? (
                  <Link href={`/articles/${prev.slug}`} className="group rounded-2xl border border-slate-100 p-5 transition hover:border-sky-200 hover:shadow-md">
                    <span className="text-xs font-semibold text-slate-400">المقال السابق</span>
                    <span className="mt-1 block font-bold text-slate-900 group-hover:text-sky-700">{prev.title}</span>
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link href={`/articles/${next.slug}`} className="group rounded-2xl border border-slate-100 p-5 text-left transition hover:border-sky-200 hover:shadow-md sm:text-right">
                    <span className="text-xs font-semibold text-slate-400">المقال التالي</span>
                    <span className="mt-1 block font-bold text-slate-900 group-hover:text-sky-700">{next.title}</span>
                  </Link>
                )}
              </nav>
            )}
          </div>

          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                <h2 className="text-base font-bold text-slate-900">محتويات المقال</h2>
                <ol className="mt-4 space-y-2.5">
                  {toc.map((item) => (
                    <li key={item.id} className={item.level === 3 ? "pr-4" : ""}>
                      <a href={`#${item.id}`} className="block text-sm leading-relaxed text-slate-600 transition-colors hover:text-sky-700">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          )}
        </div>
      </article>
    </main>
  );
}
