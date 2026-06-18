import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_URL, areas } from "@/lib/areas";

const PAGE_PATH = "/kitchen-bathroom-drain-cleaning-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const COVER_IMAGE = "/services/تسليك-مجاري-المطابخ-والحمامات.webp";
const COVER_ALT = "تسليك مجاري المطابخ والحمامات في الكويت";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "تسليك مجاري المطابخ والحمامات الكويت | بدون تكسير",
  description:
    "تسليك مجاري المطابخ والحمامات في الكويت وفتح انسداد الأحواض والبلاعات بدون تكسير بأحدث الأجهزة وسرعة استجابة وخدمة 24 ساعة في جميع المناطق.",
  keywords: [
    "تسليك مجاري المطابخ",
    "تسليك مجاري الحمامات",
    "انسداد حوض المطبخ",
    "تسليك بلاعة الحمام",
    "kitchen bathroom drain cleaning Kuwait",
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
    title: "تسليك مجاري المطابخ والحمامات الكويت | بدون تكسير",
    description:
      "فتح انسداد أحواض المطابخ والحمامات والبلاعات بدون تكسير بأحدث الأجهزة وخدمة 24 ساعة في جميع مناطق الكويت.",
    siteName: "خدمات الكويت",
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تسليك مجاري المطابخ والحمامات الكويت | بدون تكسير",
    description:
      "فتح انسداد أحواض المطابخ والحمامات والبلاعات بدون تكسير بأحدث الأجهزة وخدمة 24 ساعة.",
    images: [COVER_IMAGE],
  },
};

const features = [
  "تسليك انسداد حوض المطبخ",
  "تسليك بلاعات الحمامات",
  "فتح انسداد المغاسل والأحواض",
  "إزالة الدهون والترسبات",
  "تسليك بدون تكسير 24 ساعة",
];

const whyUs = [
  { title: "سرعة استجابة", desc: "نصل إليك خلال وقت قصير في أي منطقة." },
  { title: "بدون تكسير", desc: "أجهزة حديثة تفتح الانسداد دون إتلاف المكان." },
  { title: "فنيون متخصصون", desc: "خبرة في انسدادات المطابخ والحمامات." },
  { title: "أسعار مناسبة", desc: "تقييم وسعر واضح قبل بدء العمل." },
];

const steps = [
  { title: "استقبال الطلب", desc: "تواصل معنا عبر الاتصال أو واتساب على مدار الساعة." },
  { title: "الوصول السريع", desc: "يصل الفني إلى موقعك خلال وقت قصير." },
  { title: "فحص الانسداد", desc: "نحدد سبب انسداد الحوض أو البلاعة بدقة." },
  { title: "التسليك", desc: "نفتح الانسداد بأجهزة حديثة وبدون تكسير." },
  { title: "اختبار التصريف", desc: "نتأكد من انسياب المياه تماماً قبل المغادرة." },
];

const searchTerms = [
  "تسليك مجاري المطابخ الكويت",
  "تسليك حمامات الكويت",
  "فتح انسداد حوض المطبخ",
  "تسليك بلاعة المطبخ",
  "أرقام تسليك مطابخ الكويت",
  "تسليك حوض المغسلة",
];

const faqs = [
  {
    question: "كيف يتم تسليك انسداد حوض المطبخ؟",
    answer:
      "نستخدم أجهزة سلك وضغط مياه لإزالة الدهون وبقايا الطعام المتراكمة في ماسورة الحوض بدون أي تكسير، مع اختبار التصريف بعد الانتهاء.",
  },
  {
    question: "هل تسليك الحمامات يتم بدون تكسير؟",
    answer:
      "نعم، نفتح انسداد بلاعات الحمامات والمغاسل بأحدث الأجهزة دون الحاجة لأي تكسير للأرضيات أو المواسير.",
  },
  {
    question: "ما أسباب انسداد مجاري المطبخ؟",
    answer:
      "تراكم الزيوت والدهون وبقايا الطعام هو السبب الأكثر شيوعاً لانسداد حوض المطبخ مع مرور الوقت.",
  },
  {
    question: "هل الخدمة متوفرة 24 ساعة؟",
    answer:
      "نعم، نوفر خدمة تسليك مجاري المطابخ والحمامات على مدار 24 ساعة في جميع مناطق الكويت بما في ذلك الطوارئ.",
  },
  {
    question: "كم تستغرق عملية التسليك؟",
    answer:
      "غالباً يتم حل الانسداد خلال 30 إلى 60 دقيقة حسب حالة الانسداد ومكانه.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "تسليك مجاري المطابخ والحمامات الكويت",
      serviceType: "تسليك مجاري وفتح انسدادات",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "تسليك مجاري المطابخ والحمامات في الكويت وفتح انسداد الأحواض والبلاعات بدون تكسير بأحدث الأجهزة.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات تسليك المطابخ والحمامات",
        itemListElement: features.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "تسليك مجاري المطابخ والحمامات الكويت",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function KitchenBathroomDrainCleaningPage() {
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
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
            خدمة طوارئ 24 ساعة في جميع مناطق الكويت
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            تسليك مجاري المطابخ والحمامات الكويت
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-bold text-slate-700 sm:text-2xl">
            فتح انسداد الأحواض والبلاعات بدون تكسير
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            معالجة انسداد أحواض المطابخ والحمامات والبلاعات بسرعة وكفاءة عالية
            بأحدث الأجهزة وبدون تكسير، مع فريق متخصص يصل إليك في جميع مناطق
            الكويت على مدار الساعة.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="اتصل الآن"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-sky-600 to-sky-700 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-sky-600/25 transition hover:from-sky-700 hover:to-sky-800"
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

          <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl shadow-slate-300/50 ring-1 ring-slate-900/5">
            <Image
              src={COVER_IMAGE}
              alt={COVER_ALT}
              width={1200}
              height={750}
              preload
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            تسليك مجاري المطابخ والحمامات في الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            يُعد حوض المطبخ وبلاعات الحمامات من أكثر النقاط عرضة للانسداد في
            المنزل، نظراً لتراكم الزيوت وبقايا الطعام في المطبخ، والشعر وبقايا
            الصابون في الحمامات. ومع الوقت تتكوّن كتل تسد المجرى وتبطئ تصريف
            المياه حتى يتوقف تماماً. نقدم خدمة تسليك مجاري المطابخ والحمامات في
            الكويت باستخدام أجهزة سلك كهربائي وضغط مياه عالٍ تزيل الانسداد من
            جذوره بدون أي تكسير للأرضيات أو المواسير. نتعامل مع أحواض المطابخ
            والمغاسل وبلاعات الحمامات بسرعة وكفاءة، مع اختبار التصريف بعد
            الانتهاء للتأكد من حل المشكلة نهائياً. وخدمتنا متوفرة على مدار 24
            ساعة في جميع مناطق الكويت بأسعار مناسبة وتقييم واضح قبل بدء العمل.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
            <h3 className="text-base font-bold text-slate-900">
              علامات انسداد المطبخ والحمام
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              بطء تصريف المياه، وأصوات غرغرة، وروائح كريهة من البلاعة، وارتفاع
              منسوب الماء عند فتح الصنبور.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خدماتنا في تسليك المطابخ والحمامات
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
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
            لماذا تختارنا؟
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
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
            خطوات تسليك المطابخ والحمامات
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
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

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            تسليك مطابخ وحمامات — خدمة قريبة منك
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            إذا كنت تبحث عن خدمة تسليك مجاري المطابخ والحمامات في الكويت بسرعة
            وبدون تكسير، اتصل بنا أو راسلنا واتساب ونصل إليك في أي منطقة بأسرع
            وقت وبأسعار مناسبة.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {searchTerms.map((term) => (
              <li
                key={term}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
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

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            نخدم جميع مناطق الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نصل إليك أينما كنت داخل الكويت لتسليك مجاري المطابخ والحمامات في حولي
            والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير وجميع المناطق.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <li
                key={area.slug}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700"
              >
                {area.name}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              تسليك مجاري الكويت
            </Link>
            <Link href="/manhole-installation-kuwait" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              تركيب منهول الكويت
            </Link>
            <Link href="/contact-us" className="font-bold text-slate-700 underline-offset-4 hover:underline">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            الأسئلة الشائعة
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
              حوض المطبخ مسدود؟ تواصل الآن
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              اتصل بنا الآن لتسليك مجاري المطابخ والحمامات بسرعة وبدون تكسير.
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
