import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/areas";
import {
  SITE_URL,
  blogPosts,
  blogPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ar-KW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostBySlug.get(slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  const url = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
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
      title: post.title,
      description: post.description,
      siteName: "خدمات الكويت",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: post.cover, width: 720, height: 720, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPostBySlug.get(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const url = `${SITE_URL}${path}`;
  const related = getRelatedPosts(post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}/#article`,
        headline: post.title,
        description: post.description,
        image: `${SITE_URL}${post.cover}`,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        inLanguage: "ar",
        mainEntityOfPage: url,
        articleSection: post.category,
        author: { "@id": `${SITE_URL}/#business` },
        publisher: { "@id": `${SITE_URL}/#business` },
        keywords: post.keywords.join("، "),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "المدونة", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="flex-1" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="w-full bg-gradient-to-bl from-sky-50 via-white to-emerald-50">
          <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:py-16">
            <nav aria-label="مسار التنقل" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-sky-700">الرئيسية</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog" className="hover:text-sky-700">المدونة</Link>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-slate-700">{post.category}</span>
            </nav>

            <span className="mt-6 inline-flex items-center rounded-full bg-sky-600 px-4 py-1.5 text-sm font-bold text-white">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              <span aria-hidden="true">•</span>
              <span>{post.readingMinutes} دقائق قراءة</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="relative -mt-2 mb-10 aspect-[16/9] overflow-hidden rounded-3xl border border-white/60 bg-white shadow-xl ring-1 ring-slate-900/5">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              unoptimized
              preload
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 pb-16 sm:px-8">
          <nav
            aria-label="محتويات المقال"
            className="mb-10 rounded-2xl border border-slate-100 bg-slate-50/60 p-6"
          >
            <h2 className="text-base font-extrabold text-slate-900">محتويات المقال</h2>
            <ol className="mt-4 flex flex-col gap-2 text-sm">
              {post.sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-flex items-center gap-2 text-slate-600 transition hover:text-sky-700"
                  >
                    <span className="font-bold text-sky-600">{i + 1}.</span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-col gap-5">
            {post.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
          </div>

          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-10 scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-slate-900">{section.heading}</h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed text-slate-700">
                    {p}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-4 flex flex-col gap-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42.001l-3.75-3.77a1 1 0 0 1 1.418-1.41l3.04 3.057 6.541-6.605a1 1 0 0 1 1.415-.006Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-12">
            <h2 className="text-2xl font-extrabold text-slate-900">الأسئلة الشائعة</h2>
            <div className="mt-6 flex flex-col gap-4">
              {post.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 shadow-sm ring-1 ring-slate-900/5"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-bold text-slate-900 marker:content-none sm:px-6">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700 transition-transform duration-300 group-open:rotate-180">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-base leading-relaxed text-slate-600 sm:px-6">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              تحتاج خدمة احترافية في الكويت؟
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              فريقنا جاهز لمساعدتك في تسليك المجاري وعزل الأسطح على مدار 24 ساعة.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER}`}
                aria-label="اتصل الآن"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-sky-700 shadow-lg transition hover:bg-sky-50"
              >
                {PHONE_DISPLAY} | اتصل الآن
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل عبر واتساب"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-bold text-white shadow-lg transition hover:bg-emerald-400"
              >
                واتساب
              </a>
            </div>
          </section>

          <section className="mt-12 flex flex-wrap gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-sm">
            <span className="font-bold text-slate-900">روابط مفيدة:</span>
            <Link href="/drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              تسليك مجاري الكويت
            </Link>
            <Link href="/roof-waterproofing-kuwait" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              عزل أسطح الكويت
            </Link>
            <Link href="/areas" className="font-bold text-slate-700 underline-offset-4 hover:underline">
              مناطق الخدمة
            </Link>
            <Link href="/contact-us" className="font-bold text-slate-700 underline-offset-4 hover:underline">
              تواصل معنا
            </Link>
          </section>
        </div>
      </article>

      {related.length > 0 && (
        <section className="w-full border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">مقالات ذات صلة</h2>
            <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="relative block aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={r.cover}
                        alt={r.title}
                        fill
                        unoptimized
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </span>
                    <span className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-bold text-sky-700">{r.category}</span>
                      <h3 className="mt-2 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-700">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.excerpt}</p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
