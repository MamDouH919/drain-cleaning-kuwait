import Image from "next/image";
import Link from "next/link";
import {
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  areaBySlug,
  type Area,
} from "@/lib/areas";
import { getBlogSummaries } from "@/lib/blog";
import { articles } from "@/lib/articles";

const servicePages = [
  { label: "تسليك مجاري الكويت", href: "/drain-cleaning-kuwait" },
  { label: "تسليك مجاري المطابخ والحمامات", href: "/kitchen-bathroom-drain-cleaning-kuwait" },
  { label: "اسعار تسليك مجاري الكويت", href: "/drain-cleaning-prices-kuwait" },
  { label: "تركيب مكينة سرداب", href: "/basement-pump-kuwait" },
  { label: "تركيب منهول الكويت", href: "/manhole-installation-kuwait" },
  { label: "غسيل تانكي الكويت", href: "/water-tank-cleaning-kuwait" },
  { label: "عزل أسطح الكويت", href: "/roof-waterproofing-kuwait" },
  { label: "العزل المائي والحراري", href: "/thermal-waterproofing-kuwait" },
];

export default function ArticleSidebar({ area }: { area: Area }) {
  const posts = getBlogSummaries().slice(0, 5);
  const guides = articles.slice(0, 6);
  const nearby = area.nearby
    .map((slug) => areaBySlug.get(slug))
    .filter((a): a is Area => Boolean(a));

  return (
    <aside className="single-sidebar" aria-label="روابط وصفحات أخرى">
      <section className="sidebar-card sidebar-cta">
        <h2 className="sidebar-title">تحتاج فني الآن؟</h2>
        <p className="sidebar-cta-text">
          خدمة تسليك مجاري {area.name} على مدار 24 ساعة، وصول سريع وسعر واضح قبل التنفيذ.
        </p>
        <a className="sidebar-cta-btn" href={`tel:${PHONE_NUMBER}`} aria-label="اتصل الآن">
          {PHONE_DISPLAY} | اتصل الآن
        </a>
        <a
          className="sidebar-cta-btn sidebar-cta-btn-alt"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب"
        >
          تواصل واتساب
        </a>
      </section>

      <section className="sidebar-card">
        <h2 className="sidebar-title">صفحات الخدمات</h2>
        <ul className="sidebar-list">
          {servicePages.map((page) => (
            <li key={page.href}>
              <Link href={page.href}>{page.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="sidebar-card">
        <h2 className="sidebar-title">أحدث المدونة</h2>
        <ul className="sidebar-posts">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link className="sidebar-post" href={`/blog/${post.slug}`}>
                <span className="sidebar-post-thumb">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    width={96}
                    height={96}
                    sizes="96px"
                  />
                </span>
                <span className="sidebar-post-body">
                  <span className="sidebar-post-title">{post.title}</span>
                  <span className="sidebar-post-meta">
                    {post.category} · {post.readingMinutes} دقائق
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link className="sidebar-more" href="/blog">
          كل المدونة
        </Link>
      </section>

      <section className="sidebar-card">
        <h2 className="sidebar-title">مقالات مفيدة</h2>
        <ul className="sidebar-list">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link href={`/articles/${guide.slug}`}>{guide.title}</Link>
            </li>
          ))}
        </ul>
        <Link className="sidebar-more" href="/articles">
          كل المقالات
        </Link>
      </section>

      <section className="sidebar-card">
        <h2 className="sidebar-title">مناطق قريبة</h2>
        <ul className="sidebar-tags">
          {nearby.map((a) => (
            <li key={a.slug}>
              <Link href={`/drain-cleaning-${a.slug}`}>تسليك مجاري {a.name}</Link>
            </li>
          ))}
          <li>
            <Link href="/areas">كل المناطق</Link>
          </li>
        </ul>
      </section>
    </aside>
  );
}
