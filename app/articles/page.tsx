import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/cms/ArticleCard";
import HubPagination from "@/components/cms/HubPagination";
import { CMS_PAGE_SIZE, getArticles } from "@/lib/cms/client";
import {
  CMS_BASE_PATH,
  CMS_SECTION_TITLE,
  buildListMetadata,
  listJsonLd,
} from "@/lib/cms/seo";
import { SITE_URL } from "@/lib/areas";
import type { ArticleSummary } from "@/lib/cms/types";

export const revalidate = 3600; // = CMS_REVALIDATE_SECONDS (must be a literal for Next segment config)

const PAGE_DESCRIPTION =
  "مقالات ودلائل متخصصة من فريق الخبراء: تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت، محتوى محدَّث ومراجَع.";

export const metadata: Metadata = buildListMetadata({
  title: `${CMS_SECTION_TITLE} | دلائل ونصائح متخصصة`,
  description: PAGE_DESCRIPTION,
  path: CMS_BASE_PATH,
});

function parsePage(value: string | undefined): number {
  const n = Number.parseInt(value ?? "1", 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
}

export default async function ArticlesHubPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = parsePage(pageParam);

  let items: ArticleSummary[] = [];
  let totalPages = 1;
  let failed = false;
  try {
    const result = await getArticles({ page, limit: CMS_PAGE_SIZE });
    items = result.items;
    totalPages = result.meta?.totalPages ?? 1;
  } catch (error) {
    failed = true;
    console.error("[cms] hub list failed:", error);
  }

  const jsonLd = listJsonLd({
    path: CMS_BASE_PATH,
    name: CMS_SECTION_TITLE,
    description: PAGE_DESCRIPTION,
    items,
    breadcrumb: [
      { name: "الرئيسية", item: SITE_URL },
      { name: CMS_SECTION_TITLE, item: `${SITE_URL}${CMS_BASE_PATH}` },
    ],
  });

  return (
    <main className="flex-1" dir="rtl">
      <Breadcrumbs items={[{ label: CMS_SECTION_TITLE }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="w-full bg-gradient-to-bl from-sky-50 via-white to-emerald-50">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
            {CMS_SECTION_TITLE}
          </span>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            مقالات ودلائل الخبراء
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            {PAGE_DESCRIPTION}
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="flex flex-col gap-8">
            {items.length === 0 ? (
              <p className="rounded-2xl border border-slate-100 bg-slate-50 p-10 text-center text-slate-500">
                {failed
                  ? "تعذّر تحميل المقالات حالياً، يرجى المحاولة لاحقاً."
                  : "لا توجد مقالات منشورة بعد."}
              </p>
            ) : (
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((post) => (
                  <li key={post.slug}>
                    <ArticleCard post={post} />
                  </li>
                ))}
              </ul>
            )}

            <HubPagination
              basePath={CMS_BASE_PATH}
              page={page}
              totalPages={totalPages}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
