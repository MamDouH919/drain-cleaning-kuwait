import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SITE_URL,
  BUSINESS_NAME,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  areaBySlug,
  parseAreaSlug,
  allAreaPageSlugs,
  serviceConfigs,
} from "@/lib/areas";

export const dynamicParams = false;

export function generateStaticParams() {
  return allAreaPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseAreaSlug(slug);
  if (!parsed) return {};

  const { service, area } = parsed;
  const path = `/${slug}`;
  const url = `${SITE_URL}${path}`;
  const title = service.metaTitle(area.name);
  const description = service.metaDescription(area.name);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [
      `${service.shortName} ${area.name}`,
      `${service.shortName} الكويت`,
      `خدمات ${area.name}`,
      area.name,
      service.keywordEn,
    ],
    alternates: { canonical: path, languages: { "ar-KW": path } },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      type: "website",
      locale: "ar_KW",
      url,
      title,
      description,
      siteName: BUSINESS_NAME,
      images: [{ url: "/hero-service.svg", width: 720, height: 720, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero-service.svg"],
    },
  };
}

export default async function AreaServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parsed = parseAreaSlug(slug);
  if (!parsed) notFound();

  const { service, area } = parsed;
  const path = `/${slug}`;
  const url = `${SITE_URL}${path}`;
  const other =
    service.id === "drain-cleaning"
      ? serviceConfigs["roof-waterproofing"]
      : serviceConfigs["drain-cleaning"];

  const nearbyAreas = area.nearby
    .map((s) => areaBySlug.get(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const nearbyNames = nearbyAreas.map((a) => a.name).join("، ");

  const faqs = service.faqs(area.name);
  const heroFrom = service.theme === "sky" ? "from-sky-50" : "from-emerald-50";
  const heroTo = service.theme === "sky" ? "to-emerald-50" : "to-sky-50";
  const badge = service.theme === "sky" ? "border-sky-200 text-sky-700" : "border-emerald-200 text-emerald-700";
  const btn =
    service.theme === "sky"
      ? "from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 shadow-sky-600/25"
      : "from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-emerald-600/25";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}/#service`,
        name: `${service.shortName} ${area.name}`,
        serviceType: service.serviceType,
        url,
        areaServed: [
          { "@type": "City", name: area.name },
          { "@type": "Country", name: "الكويت" },
        ],
        provider: { "@id": `${SITE_URL}/#business` },
        description: service.metaDescription(area.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `خدمات ${service.shortName} في ${area.name}`,
          itemListElement: service.features.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faqs.map((faq) => ({
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
          { "@type": "ListItem", position: 2, name: "المناطق", item: `${SITE_URL}/areas` },
          { "@type": "ListItem", position: 3, name: `${service.shortName} ${area.name}`, item: url },
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

      <section className={`relative w-full overflow-hidden bg-gradient-to-bl ${heroFrom} via-white ${heroTo}`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-24">
          <span className={`inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur ${badge}`}>
            خدمة 24 ساعة في {area.name} وجميع مناطق الكويت
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {service.h1(area.name)}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            {service.shortName} في {area.name} بأحدث المعدات وسرعة استجابة وخدمة
            طوارئ على مدار الساعة مع أسعار مناسبة وضمان على الخدمة.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="اتصل الآن"
              className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l px-7 py-4 text-lg font-bold text-white shadow-lg transition ${btn}`}
            >
              {PHONE_DISPLAY} | اتصل الآن
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-white px-7 py-4 text-lg font-bold text-emerald-700 shadow-md transition hover:bg-emerald-50"
            >
              تواصل واتساب
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {service.shortName} في {area.name}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {service.intro(area.name, nearbyNames)}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {service.secondaryIntro(area.name)}
          </p>
          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
            <h3 className="text-base font-bold text-slate-900">
              أكثر المشاكل شيوعاً في {area.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {service.problems(area.name)}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            كيف نعمل في {area.name}؟
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {service.steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-bl from-sky-600 to-emerald-600 text-base font-extrabold text-white shadow-md">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خدماتنا في {area.name}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ring-1 ring-slate-900/5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42.001l-3.75-3.77a1 1 0 0 1 1.418-1.41l3.04 3.057 6.541-6.605a1 1 0 0 1 1.415-.006Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-base font-bold text-slate-800">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            لماذا تختارنا في {area.name}؟
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "سرعة الوصول", desc: `نصل إلى ${area.name} خلال وقت قصير.` },
              { title: "فنيون متخصصون", desc: "فريق مدرب على أحدث التقنيات." },
              { title: "بدون تكسير", desc: "حلول دقيقة دون إتلاف المكان." },
              { title: "أسعار مناسبة", desc: "تقييم واضح بدون رسوم خفية." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            نخدم {area.name} والمناطق المجاورة
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            بالإضافة إلى {area.name}، نقدم خدمة {service.shortName} في المناطق
            المجاورة مثل {nearbyNames} وجميع مناطق الكويت بنفس سرعة الاستجابة.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {nearbyAreas.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/${service.prefix}${n.slug}`}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-sky-600 hover:text-white"
                >
                  {service.shortName} {n.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href={service.hubHref} className="font-bold text-sky-700 underline-offset-4 hover:underline">
              {service.shortName} الكويت
            </Link>
            <Link href={`/${other.prefix}${area.slug}`} className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              {other.shortName} {area.name}
            </Link>
            <Link href="/contact-us" className="font-bold text-slate-700 underline-offset-4 hover:underline">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            آراء عملائنا في {area.name}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.testimonials(area.name).map((t) => (
              <figure
                key={t.name}
                className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-slate-600">
                  {t.text}
                </blockquote>
                <figcaption className="text-sm font-bold text-slate-900">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {service.shortName} {area.name} — خدمة قريبة منك
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نوفر خدمة {service.shortName} في {area.name} لكل من يبحث عن حل سريع
            وموثوق. اتصل بنا أو راسلنا واتساب في أي وقت، ونصل إليك في {area.name}
            بأسرع وقت بأسعار مناسبة وضمان على الخدمة.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {service.searchTerms(area.name).map((term) => (
              <li
                key={term}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-sky-500" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 1 0 3.4 9.82l3.64 3.64a1 1 0 0 0 1.42-1.42l-3.64-3.64A5.5 5.5 0 0 0 9 3.5Zm-3.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                {term}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            الأسئلة الشائعة عن {service.shortName} في {area.name}
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 shadow-sm ring-1 ring-slate-900/5"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 text-base font-bold text-slate-900 marker:content-none sm:px-6 sm:text-lg">
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
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              {service.ctaTitle} في {area.name}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              اتصل بنا الآن واحصل على خدمة {service.shortName} احترافية وسريعة في
              {" "}
              {area.name}.
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
          </div>
        </div>
      </section>
    </main>
  );
}
