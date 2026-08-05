import articlesJson from "@/content/articles.json";
import { SITE_URL } from "@/lib/areas";

export { SITE_URL };

export const articleCategories = [
  "تسليك المجاري",
  "عزل الأسطح",
  "نصائح الصيانة المنزلية",
] as const;

export type ArticleCategory = (typeof articleCategories)[number];

export type Block =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "faq"; items: { q: string; a: string }[] }
  | {
      type: "links";
      title?: string;
      items: { label: string; href: string; external?: boolean }[];
    };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  keywords: string[];
  category: string;
  author: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  featuredImage: string;
  featuredAlt: string;
  blocks: Block[];
};

export const articles = articlesJson as Article[];

export const articleBySlug = new Map(articles.map((a) => [a.slug, a]));

export function getAdjacentArticles(slug: string) {
  const index = articles.findIndex((a) => a.slug === slug);
  return {
    prev: index > 0 ? articles[index - 1] : null,
    next: index >= 0 && index < articles.length - 1 ? articles[index + 1] : null,
  };
}

export type TocItem = { id: string; text: string; level: 2 | 3 };

export function buildToc(blocks: Block[]): TocItem[] {
  const toc: TocItem[] = [];
  blocks.forEach((block, i) => {
    if (block.type === "h2") toc.push({ id: `heading-${i}`, text: block.text, level: 2 });
    if (block.type === "h3") toc.push({ id: `heading-${i}`, text: block.text, level: 3 });
  });
  return toc;
}

export function getFaqs(blocks: Block[]) {
  const faqBlock = blocks.find((b) => b.type === "faq");
  return faqBlock && faqBlock.type === "faq" ? faqBlock.items : [];
}

export type ArticleSummary = Pick<
  Article,
  | "slug"
  | "title"
  | "excerpt"
  | "category"
  | "featuredImage"
  | "datePublished"
  | "readingMinutes"
>;

// مقالات لها صفحاتها الخاصة (تصميم مستقل) تُعرض في قائمة المقالات فقط،
// ولا تمر عبر مسار [slug] لأن لها ملف page.tsx خاص بها.
export const customArticlePages: ArticleSummary[] = [
  {
    slug: "drain-cleaning-in-kuwait",
    title: "تسليك المجاري في الكويت: الدليل الكامل وخدمة 24 ساعة",
    excerpt:
      "دليل شامل لتسليك المجاري في الكويت: العلامات والأسباب وطرق الفتح والأسعار ونصائح الوقاية، مع خدمة فني 24 ساعة بدون تكسير.",
    category: "تسليك المجاري",
    featuredImage: "/تسليك-مجاري-الكويت.webp",
    datePublished: "2026-07-16",
    readingMinutes: 12,
  },
  {
    slug: "drain-cleaning-kuwait",
    title: "تسليك مجاري الكويت: الدليل الشامل وخدمة 24 ساعة",
    excerpt:
      "كل ما تحتاجه عن تسليك مجاري الكويت: العلامات والأسباب وطرق التسليك والأسعار ونصائح الوقاية بدون تكسير.",
    category: "تسليك المجاري",
    featuredImage: "/تسليك-مجاري-الكويت.webp",
    datePublished: "2026-07-15",
    readingMinutes: 11,
  },
];

/** كل المقالات — مقالات المحتوى بالإضافة إلى الصفحات ذات التصميم المستقل. */
export function getArticleSummaries(): ArticleSummary[] {
  const summaries: ArticleSummary[] = articles.map(
    ({ slug, title, excerpt, category, featuredImage, datePublished, readingMinutes }) => ({
      slug,
      title,
      excerpt,
      category,
      featuredImage,
      datePublished,
      readingMinutes,
    })
  );

  return [...summaries, ...customArticlePages].sort((a, b) =>
    a.datePublished < b.datePublished ? 1 : -1
  );
}

export function getRelatedArticles(slug: string, limit = 3): ArticleSummary[] {
  const current = articleBySlug.get(slug);
  if (!current) return [];
  const all = getArticleSummaries().filter((a) => a.slug !== slug);
  const sameCategory = all.filter((a) => a.category === current.category);
  const others = all.filter((a) => a.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}
