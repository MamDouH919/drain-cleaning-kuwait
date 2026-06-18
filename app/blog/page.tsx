import type { Metadata } from "next";
import BlogList from "@/components/BlogList";
import { SITE_URL, getBlogSummaries, blogPosts } from "@/lib/blog";

const PAGE_PATH = "/blog";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "المدونة | نصائح تسليك المجاري وعزل الأسطح في الكويت",
  description:
    "مقالات ونصائح متخصصة في تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت لمساعدتك على حماية منزلك وحل مشاكل الصرف والعزل.",
  keywords: [
    "مدونة تسليك المجاري",
    "نصائح عزل الأسطح",
    "صيانة منزلية الكويت",
    "تسليك مجاري الكويت",
    "عزل أسطح الكويت",
  ],
  alternates: { canonical: PAGE_PATH, languages: { "ar-KW": PAGE_PATH } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: PAGE_URL,
    title: "المدونة | نصائح تسليك المجاري وعزل الأسطح في الكويت",
    description:
      "مقالات ونصائح متخصصة في تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت.",
    siteName: "خدمات الكويت",
    images: [{ url: "/hero-service.svg", width: 720, height: 720, alt: "مدونة خدمات الكويت" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "المدونة | نصائح تسليك المجاري وعزل الأسطح في الكويت",
    description:
      "مقالات ونصائح متخصصة في تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت.",
    images: ["/hero-service.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${PAGE_URL}/#blog`,
  name: "مدونة خدمات الكويت",
  description:
    "مقالات ونصائح في تسليك المجاري وعزل الأسطح والصيانة المنزلية في الكويت.",
  url: PAGE_URL,
  inLanguage: "ar",
  publisher: { "@id": `${SITE_URL}/#business` },
  blogPost: blogPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE_URL}/blog/${p.slug}`,
    datePublished: p.datePublished,
    dateModified: p.dateModified,
  })),
};

export default function BlogPage() {
  const posts = getBlogSummaries();

  return (
    <main className="flex-1" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full overflow-hidden bg-gradient-to-bl from-sky-50 via-white to-emerald-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
            نصائح ومقالات متخصصة
          </span>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            مدونة تسليك المجاري وعزل الأسطح في الكويت
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            مقالات عملية تساعدك على فهم مشاكل المجاري والأسطح، والوقاية منها،
            واتخاذ القرار الصحيح لحماية منزلك في الكويت.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <BlogList posts={posts} />
        </div>
      </section>
    </main>
  );
}
