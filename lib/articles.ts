import articlesJson from "@/content/articles.json";

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
