// Author avatar comes from the env-driven CMS host, so a plain <img> is used
// here too (see components/cms/ArticleBody.tsx for the rationale).
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleSidebar from "@/components/ArticleSidebar";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleBody from "@/components/cms/ArticleBody";
import { getArticle, safeGetArticles } from "@/lib/cms/client";
import {
  CMS_BASE_PATH,
  CMS_SECTION_TITLE,
  articleJsonLd,
  buildArticleMetadata,
} from "@/lib/cms/seo";
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/areas";

export const revalidate = 3600; // = CMS_REVALIDATE_SECONDS (must be a literal for Next segment config)
// Slugs not known at build time are rendered on first request, then cached.
export const dynamicParams = true;

export async function generateStaticParams() {
  const { items } = await safeGetArticles({ limit: 100 });
  return items.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "المقال غير موجود" };
  return buildArticleMetadata(article, `${CMS_BASE_PATH}/${slug}`);
}

export default async function HubArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const path = `${CMS_BASE_PATH}/${slug}`;
  const jsonLd = articleJsonLd(article, path);
  const { author, category } = article;

  return (
    <main className="flex-1 bg-white" dir="rtl">
      <Breadcrumbs
        items={[
          { label: CMS_SECTION_TITLE, href: CMS_BASE_PATH },
          { label: category.name },
          { label: article.title },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-8">
            <ArticleBody article={article} />

            {/* Author E-E-A-T panel — page-level, outside the <article>. */}
            <aside className="mt-14 rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                {author.avatar?.url ? (
                  <img
                    src={author.avatar.url}
                    alt={author.avatar.alt || author.name}
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-white"
                  />
                ) : null}
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-slate-400">
                    عن الكاتب
                  </span>
                  <p
                    className="mt-1 text-lg font-bold text-slate-900"
                    rel="author"
                  >
                    {author.name}
                  </p>
                  <p className="text-sm font-semibold text-sky-700">
                    {author.jobTitle}
                    {author.yearsOfExperience
                      ? ` · خبرة ${author.yearsOfExperience}+ سنوات`
                      : ""}
                  </p>
                  {author.bio ? (
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {author.bio}
                    </p>
                  ) : null}

                  {author.expertise?.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {author.expertise.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {author.credentials?.length > 0 ? (
                    <ul className="mt-4 space-y-1 text-sm text-slate-600">
                      {author.credentials.map((cred) => (
                        <li key={`${cred.title}-${cred.year}`}>
                          <span className="font-semibold text-slate-800">
                            {cred.title}
                          </span>{" "}
                          — {cred.issuer} ({cred.year})
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {author.socialLinks?.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-3 text-sm">
                      {author.socialLinks.map((link) => (
                        <li key={link.url}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="font-bold text-sky-700 underline-offset-4 hover:underline"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </aside>

            <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl">
              <h2 className="text-2xl font-extrabold text-white">
                تحتاج خدمة فنية في الكويت؟
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-sky-50/90">
                اتصل بنا الآن واحصل على خدمة سريعة واحترافية في جميع مناطق
                الكويت.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-sky-700 shadow-lg transition hover:bg-sky-50"
                >
                  {PHONE_DISPLAY} | اتصل الآن
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-emerald-400"
                >
                  واتساب
                </a>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href={CMS_BASE_PATH}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 underline-offset-4 hover:underline"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
                كل مقالات {CMS_SECTION_TITLE}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <ArticleSidebar excludeSlug={slug} />
          </div>
        </div>
      </div>
    </main>
  );
}
