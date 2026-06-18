import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/areas";

const PAGE_PATH = "/drain-cleaning-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const COVER_IMAGE = "/portfolio/تسليك-مجاري.webp";
const COVER_ALT = "تسليك مجاري الكويت بدون تكسير";
const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "تسليك مجاري الكويت | فتح انسدادات بدون تكسير",
  description:
    "خدمة تسليك مجاري الكويت بدون تكسير على مدار 24 ساعة، فتح المجاري وحل الانسدادات بأحدث الأجهزة وسرعة استجابة في جميع مناطق الكويت مع ضمان وأسعار مناسبة.",
  keywords: [
    "تسليك مجاري الكويت",
    "فتح مجاري الكويت",
    "تسليك مجاري بدون تكسير",
    "تسليك مجاري المطابخ",
    "تسليك مجاري الحمامات",
    "drain cleaning Kuwait",
  ],
  alternates: {
    canonical: PAGE_PATH,
    languages: { "ar-KW": PAGE_PATH },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: PAGE_URL,
    title: "تسليك مجاري الكويت بدون تكسير 24 ساعة",
    description:
      "فتح المجاري وحل الانسدادات بدون تكسير بأحدث الأجهزة وخدمة طوارئ 24 ساعة في جميع مناطق الكويت.",
    siteName: "خدمات الكويت",
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تسليك مجاري الكويت بدون تكسير 24 ساعة",
    description:
      "فتح المجاري وحل الانسدادات بدون تكسير بأحدث الأجهزة وخدمة طوارئ 24 ساعة في جميع مناطق الكويت.",
    images: [COVER_IMAGE],
  },
};

const features = [
  "تسليك مجاري المطابخ",
  "تسليك مجاري الحمامات",
  "فتح المجاري الرئيسية",
  "تسليك مجاري بدون تكسير",
  "خدمة طوارئ 24 ساعة",
];

const whyUs = [
  { title: "خبرة طويلة", desc: "سنوات من العمل الميداني في تسليك المجاري بالكويت." },
  { title: "سرعة استجابة", desc: "نصل إليك خلال وقت قصير في أي منطقة." },
  { title: "بدون تكسير", desc: "أجهزة حديثة تحل الانسداد دون إتلاف المكان." },
  { title: "أسعار مناسبة", desc: "تقييم وسعر واضح قبل بدء العمل بدون رسوم خفية." },
  { title: "خدمة 24 ساعة", desc: "متواجدون ليلاً ونهاراً طوال أيام الأسبوع." },
];

const steps = [
  { title: "استقبال الطلب", desc: "تواصل معنا عبر الاتصال أو واتساب على مدار الساعة." },
  { title: "الوصول للموقع", desc: "يصل فريقنا إليك بأسرع وقت داخل الكويت." },
  { title: "فحص المشكلة", desc: "نحدد سبب الانسداد ومكانه بدقة قبل البدء." },
  { title: "حل الانسداد", desc: "نعالج المشكلة بأحدث الأجهزة وبدون تكسير." },
  { title: "اختبار الخدمة", desc: "نتأكد من انسياب الصرف تماماً قبل المغادرة." },
];

const areas = [
  { name: "حولي", slug: "hawalli" },
  { name: "السالمية", slug: "salmiya" },
  { name: "الفروانية", slug: "farwaniya" },
  { name: "الجهراء", slug: "jahra" },
  { name: "الأحمدي", slug: "ahmadi" },
  { name: "مبارك الكبير", slug: "mubarak-kabeer" },
];

const faqs = [
  {
    question: "كم سعر تسليك المجاري في الكويت؟",
    answer:
      "يختلف السعر حسب حالة الانسداد ومكانه، لكن نوفر أسعار مناسبة وتقييم واضح قبل بدء العمل بدون رسوم خفية.",
  },
  {
    question: "هل يتم تسليك المجاري بدون تكسير؟",
    answer:
      "نعم، نستخدم أحدث الأجهزة التي تسمح بفتح المجاري وحل الانسدادات بدون أي تكسير أو إتلاف للمكان.",
  },
  {
    question: "هل تقدمون خدمة طوارئ 24 ساعة؟",
    answer:
      "نعم، نوفر خدمة تسليك مجاري الكويت على مدار 24 ساعة طوال أيام الأسبوع بما في ذلك الحالات الطارئة.",
  },
  {
    question: "كم يستغرق وقت تسليك المجاري؟",
    answer:
      "غالباً يتم حل المشكلة خلال 30 إلى 60 دقيقة حسب حالة الانسداد ومكانه.",
  },
  {
    question: "هل تغطون جميع مناطق الكويت؟",
    answer:
      "نعم، نغطي جميع مناطق الكويت مثل حولي والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير.",
  },
  {
    question: "هل خدمة تسليك المجاري تشمل المطابخ والحمامات؟",
    answer:
      "نعم، نقدم تسليك مجاري المطابخ والحمامات وفتح المجاري الرئيسية للمنازل والفلل والشركات.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "تسليك مجاري الكويت",
      serviceType: "تسليك مجاري وفتح انسدادات",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "خدمة تسليك مجاري الكويت بدون تكسير على مدار 24 ساعة، فتح المجاري وحل الانسدادات بأحدث الأجهزة.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات تسليك المجاري",
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
        { "@type": "ListItem", position: 2, name: "تسليك مجاري الكويت", item: PAGE_URL },
      ],
    },
  ],
};

const searchTerms = [
  "شركة تسليك مجاري الكويت",
  "أفضل تسليك مجاري الكويت",
  "أسعار تسليك مجاري الكويت",
  "تسليك مجاري بدون تكسير",
  "فتح مجاري الكويت",
  "أرقام تسليك مجاري الكويت",
];

export default function DrainCleaningKuwaitPage() {
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
            تسليك مجاري الكويت
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-bold text-slate-700 sm:text-2xl">
            فتح انسدادات بدون تكسير 24 ساعة
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            تسليك مجاري الكويت وفتح المجاري وحل الانسدادات بأحدث الأجهزة وبدون
            تكسير، مع سرعة استجابة وخدمة طوارئ على مدار الساعة يصل إليك في جميع
            مناطق الكويت.
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
              height={900}
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
            أهمية تسليك المجاري في الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تُعد مشاكل انسداد المجاري من أكثر المشاكل المنزلية إلحاحاً في الكويت،
            فهي قد تتحول خلال دقائق إلى حالة طوارئ تهدد نظافة المنزل وسلامة
            الصرف الصحي. تأخير معالجة الانسداد يؤدي إلى تجمع المياه والروائح
            الكريهة وربما تلف الأرضيات والجدران. لذلك نوفر خدمة تسليك مجاري
            الكويت على مدار 24 ساعة طوال أيام الأسبوع، لنكون بجانبك في الحالات
            الطارئة وفي أي وقت تحتاج فيه إلى تدخل سريع. يعتمد فريقنا على أحدث
            الأجهزة والمعدات التي تتيح فتح المجاري وحل الانسدادات بدون تكسير أو
            إتلاف للأرضيات، مما يوفر عليك تكاليف الترميم. ومع سرعة الاستجابة
            والوصول إلى موقعك في جميع مناطق الكويت، نضمن لك حلاً جذرياً للمشكلة
            مع اختبار كامل للتأكد من انسياب الصرف قبل المغادرة. نحرص على تقديم
            خدمة احترافية تجمع بين الجودة والسرعة والأسعار المناسبة، لأن راحتك
            وثقتك هي أولويتنا.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خدمات تسليك المجاري التي نقدمها
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
            لماذا تختارنا لتسليك المجاري؟
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خطوات تسليك المجاري
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
            تسليك مجاري الكويت — خدمة موثوقة قريبة منك
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            إذا كنت تبحث عن تسليك مجاري الكويت بسرعة وبدون تكسير، فنحن نوفر خدمة
            فتح انسدادات احترافية على مدار 24 ساعة بأسعار مناسبة. اتصل بنا أو
            راسلنا واتساب ونصل إليك في أي منطقة بالكويت بأسرع وقت.
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
            تسليك مجاري في جميع مناطق الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نصل إليك أينما كنت داخل الكويت بخدمة تسليك مجاري سريعة في حولي
            والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير وجميع المناطق
            الأخرى.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/drain-cleaning-${area.slug}`}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-sky-600 hover:text-white"
                >
                  تسليك مجاري {area.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-slate-600">
            نقدم أيضاً خدمة{" "}
            <Link href="/roof-waterproofing-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              عزل أسطح الكويت
            </Link>{" "}
            المائي والحراري لحماية مبناك على المدى الطويل.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            الأسئلة الشائعة عن تسليك المجاري
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-900/5"
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

      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              نصل إليك خلال 30 دقيقة داخل الكويت
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              اتصل بنا الآن واحصل على خدمة تسليك مجاري احترافية وسريعة بأسعار
              مناسبة.
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
