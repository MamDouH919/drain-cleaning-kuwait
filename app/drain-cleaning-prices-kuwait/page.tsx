import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/areas";

const PAGE_PATH = "/drain-cleaning-prices-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const COVER_IMAGE = "/portfolio/تسليك-مجاري.webp";
const COVER_ALT = "اسعار تسليك مجاري الكويت";
const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "اسعار تسليك مجاري الكويت | أسعار فتح المجاري 2026 بدون رسوم خفية",
  description:
    "اسعار تسليك مجاري الكويت وأسعار فتح المجاري وحل الانسدادات بدون تكسير، تقييم وسعر واضح قبل بدء العمل بدون رسوم خفية مع خدمة طوارئ 24 ساعة في جميع مناطق الكويت.",
  keywords: [
    "اسعار تسليك مجاري الكويت",
    "أسعار تسليك المجاري الكويت",
    "سعر تسليك المجاري في الكويت",
    "كم سعر تسليك المجاري",
    "أسعار فتح المجاري الكويت",
    "تسعيرة تسليك مجاري الكويت",
    "أرخص تسليك مجاري الكويت",
    "drain cleaning prices Kuwait",
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
    title: "اسعار تسليك مجاري الكويت | أسعار واضحة بدون رسوم خفية",
    description:
      "أسعار تسليك المجاري وفتح الانسدادات بدون تكسير في الكويت، تقييم وسعر واضح قبل البدء وخدمة 24 ساعة.",
    siteName: "خدمات الكويت",
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "اسعار تسليك مجاري الكويت | أسعار واضحة بدون رسوم خفية",
    description:
      "أسعار تسليك المجاري وفتح الانسدادات بدون تكسير في الكويت، تقييم وسعر واضح قبل البدء وخدمة 24 ساعة.",
    images: [COVER_IMAGE],
  },
};

const priceList = [
  {
    service: "تسليك مجاري المطابخ",
    desc: "فتح انسداد حوض المطبخ وإزالة الدهون المتراكمة بدون تكسير.",
    price: "تبدأ من أسعار مناسبة",
  },
  {
    service: "تسليك مجاري الحمامات",
    desc: "فتح بلاعات الحمام والمغاسل وإزالة تجمعات الشعر والصابون.",
    price: "تبدأ من أسعار مناسبة",
  },
  {
    service: "فتح المجاري الرئيسية",
    desc: "معالجة انسداد المجرى الرئيسي للمنزل أو الفيلا بأجهزة الضغط.",
    price: "حسب المعاينة",
  },
  {
    service: "شفط البيارات والجور",
    desc: "تنظيف وشفط البيارات والجور بسيارات مجهزة.",
    price: "حسب حجم البيارة",
  },
  {
    service: "خدمة طوارئ 24 ساعة",
    desc: "استجابة سريعة في أي وقت داخل الكويت ليلاً ونهاراً.",
    price: "سعر واضح قبل البدء",
  },
];

const priceFactors = [
  { title: "درجة الانسداد", desc: "الانسداد البسيط أقل تكلفة من الانسداد العميق في المجرى الرئيسي." },
  { title: "مكان الانسداد", desc: "تسليك المطبخ أو الحمام يختلف عن معالجة الشبكة الرئيسية." },
  { title: "نوع العقار", desc: "الشقق تختلف عن الفلل والمباني والشركات في حجم العمل." },
  { title: "وقت الخدمة", desc: "خدمة الطوارئ الليلية قد تختلف قليلاً عن المواعيد العادية." },
  { title: "الحاجة لمعدات خاصة", desc: "استخدام كاميرا فحص أو ضغط مياه عالٍ يحدده حجم المشكلة." },
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
      "يختلف سعر تسليك المجاري في الكويت حسب درجة الانسداد ومكانه ونوع العقار، ونوفر دائماً تقييماً وسعراً واضحاً قبل بدء العمل بدون رسوم خفية.",
  },
  {
    question: "هل الأسعار ثابتة أم تختلف حسب الحالة؟",
    answer:
      "الأسعار تختلف حسب حالة الانسداد، لكننا نلتزم بإخبارك بالسعر النهائي قبل البدء حتى تكون على علم كامل بالتكلفة.",
  },
  {
    question: "هل توجد رسوم على المعاينة؟",
    answer:
      "نقدم تقييماً واضحاً للمشكلة قبل البدء، ونتفق معك على السعر أولاً بدون أي مفاجآت أو رسوم خفية.",
  },
  {
    question: "هل أسعار تسليك المجاري تشمل الطوارئ 24 ساعة؟",
    answer:
      "نعم، نوفر خدمة تسليك مجاري بأسعار مناسبة على مدار 24 ساعة طوال أيام الأسبوع بما في ذلك الحالات الطارئة.",
  },
  {
    question: "كيف أحصل على سعر تسليك المجاري لحالتي؟",
    answer:
      "اتصل بنا أو راسلنا واتساب واشرح لنا المشكلة ومكانها، وسنعطيك تصوراً مبدئياً للسعر ثم سعراً نهائياً بعد المعاينة.",
  },
  {
    question: "هل تقدمون أسعاراً خاصة للفلل والشركات؟",
    answer:
      "نعم، نوفر أسعاراً مناسبة للفلل والمباني والشركات حسب حجم العمل وعدد النقاط المطلوب تسليكها.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "اسعار تسليك مجاري الكويت",
      serviceType: "تسليك مجاري وفتح انسدادات",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "أسعار تسليك المجاري وفتح الانسدادات بدون تكسير في الكويت بسعر واضح قبل البدء وبدون رسوم خفية.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "KWD",
        availability: "https://schema.org/InStock",
        areaServed: "KW",
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
        { "@type": "ListItem", position: 2, name: "اسعار تسليك مجاري الكويت", item: PAGE_URL },
      ],
    },
  ],
};

const searchTerms = [
  "اسعار تسليك مجاري الكويت",
  "أسعار تسليك المجاري الكويت",
  "كم سعر تسليك المجاري",
  "أسعار فتح المجاري الكويت",
  "تسعيرة تسليك مجاري الكويت",
  "أرخص تسليك مجاري الكويت",
  "سعر تسليك مجاري بدون تكسير",
];

export default function DrainCleaningPricesKuwaitPage() {
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
            أسعار واضحة قبل البدء — بدون رسوم خفية
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            اسعار تسليك مجاري الكويت
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-bold text-slate-700 sm:text-2xl">
            أسعار مناسبة لفتح المجاري وحل الانسدادات بدون تكسير 24 ساعة
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            نوفر لك أسعار تسليك مجاري الكويت بشفافية كاملة، مع تقييم وسعر واضح
            قبل بدء العمل وبدون رسوم خفية. تختلف الأسعار حسب درجة الانسداد ومكانه
            ونوع العقار، ونحرص دائماً على تقديم خدمة احترافية بأسعار مناسبة وخدمة
            طوارئ على مدار الساعة في جميع مناطق الكويت.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="اتصل الآن لمعرفة السعر"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-sky-600 to-sky-700 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-sky-600/25 transition hover:from-sky-700 hover:to-sky-800"
            >
              {PHONE_DISPLAY} | اطلب السعر الآن
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
            كم تكلفة تسليك المجاري في الكويت؟
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            من أكثر الأسئلة التي تصلنا: كم سعر تسليك المجاري في الكويت؟ والإجابة
            الصادقة أن السعر لا يمكن تحديده برقم واحد ثابت، لأنه يعتمد على عدة
            عوامل مثل درجة الانسداد ومكانه ونوع العقار والمعدات المطلوبة. لكننا
            نلتزم بمبدأ واضح: لا نبدأ أي عمل قبل أن نخبرك بالسعر النهائي وتوافق
            عليه، بدون أي رسوم خفية أو مفاجآت. نحرص على أن تكون أسعار تسليك
            المجاري لدينا مناسبة ومنافسة مقابل جودة الخدمة والسرعة والضمان،
            ونقدم لك تقييماً واضحاً للمشكلة قبل البدء حتى تكون على علم كامل
            بالتكلفة المتوقعة.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            جدول أسعار خدمات تسليك المجاري
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            الأسعار التالية استرشادية وتتحدد بدقة بعد المعاينة حسب حالة كل عميل.
            نتفق معك على السعر النهائي قبل بدء العمل دائماً.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-900/5">
            <ul className="divide-y divide-slate-100">
              {priceList.map((item) => (
                <li
                  key={item.service}
                  className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6"
                >
                  <div className="sm:flex-1">
                    <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                      {item.service}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700 ring-1 ring-sky-100">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            ما العوامل التي تحدد سعر تسليك المجاري؟
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {priceFactors.map((item) => (
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
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            لماذا أسعارنا هي الأنسب في الكويت؟
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نجمع بين الأسعار المناسبة وجودة الخدمة العالية، فلا تدفع مقابل خدمة
            غير مكتملة ولا تفاجأ برسوم إضافية. نقدم لك سعراً واضحاً قبل البدء،
            ونستخدم أحدث الأجهزة التي تفتح الانسداد بدون تكسير مما يوفر عليك
            تكاليف الترميم. كما نمنحك ضماناً على الخدمة واختباراً كاملاً لانسياب
            الصرف قبل المغادرة، لتحصل على أفضل قيمة مقابل ما تدفعه.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "سعر واضح ونهائي قبل بدء العمل",
              "بدون رسوم خفية أو مفاجآت",
              "أجهزة حديثة تفتح الانسداد بدون تكسير",
              "ضمان على الخدمة وخدمة طوارئ 24 ساعة",
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-base font-medium text-slate-700 ring-1 ring-slate-900/5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42.001l-3.75-3.77a1 1 0 0 1 1.418-1.41l3.04 3.057 6.541-6.605a1 1 0 0 1 1.415-.006Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خدمات ذات صلة
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تعرف على تفاصيل خدمة{" "}
            <Link href="/drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              تسليك مجاري الكويت
            </Link>{" "}
            و
            <Link href="/kitchen-bathroom-drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              {" "}تسليك مجاري المطابخ والحمامات
            </Link>
            . كما نقدم خدمة{" "}
            <Link href="/roof-waterproofing-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              عزل أسطح الكويت
            </Link>{" "}
            ويمكنك الاطلاع على{" "}
            <Link href="/roof-insulation-prices-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              اسعار عزل اسطح الكويت
            </Link>
            .
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
            أسعار تسليك المجاري في جميع مناطق الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نقدم أسعاراً مناسبة لخدمة تسليك المجاري في جميع مناطق الكويت مثل
            حولي والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/drain-cleaning-${area.slug}`}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-sky-600 hover:text-white"
                >
                  تسليك مجاري {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            الأسئلة الشائعة عن أسعار تسليك المجاري
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
              احصل على سعر تسليك المجاري الآن
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              اتصل بنا أو راسلنا واتساب واشرح لنا مشكلتك لنعطيك سعراً واضحاً
              مناسباً قبل بدء العمل.
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
