import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/areas";

const PAGE_PATH = "/roof-insulation-prices-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const COVER_IMAGE = "/services/عازل-اسطح-الكويت.webp";
const COVER_ALT = "اسعار عزل اسطح الكويت";
const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "اسعار عزل اسطح الكويت | أسعار العزل المائي والحراري 2026 بالمتر",
  description:
    "اسعار عزل اسطح الكويت للعزل المائي والحراري وعزل الفوم بأسعار مناسبة بالمتر، تقييم وسعر واضح قبل البدء بدون رسوم خفية مع ضمان على الخدمة في جميع مناطق الكويت.",
  keywords: [
    "اسعار عزل اسطح الكويت",
    "أسعار عزل الأسطح الكويت",
    "سعر عزل الأسطح في الكويت",
    "كم سعر عزل الأسطح بالمتر",
    "أسعار العزل المائي والحراري الكويت",
    "سعر عزل الفوم الكويت",
    "تكلفة عزل الأسطح الكويت",
    "roof insulation prices Kuwait",
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
    title: "اسعار عزل اسطح الكويت | أسعار واضحة بالمتر بدون رسوم خفية",
    description:
      "أسعار عزل الأسطح المائي والحراري وعزل الفوم في الكويت بالمتر، سعر واضح قبل البدء وضمان على الخدمة.",
    siteName: "خدمات الكويت",
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "اسعار عزل اسطح الكويت | أسعار واضحة بالمتر بدون رسوم خفية",
    description:
      "أسعار عزل الأسطح المائي والحراري وعزل الفوم في الكويت بالمتر، سعر واضح قبل البدء وضمان على الخدمة.",
    images: [COVER_IMAGE],
  },
};

const priceList = [
  {
    service: "العزل المائي",
    desc: "حماية السطح من تسربات المياه والرطوبة بمواد عزل عالية الجودة.",
    price: "سعر بالمتر حسب المساحة",
  },
  {
    service: "العزل الحراري",
    desc: "خفض حرارة السطح وتقليل فاتورة التكييف في صيف الكويت.",
    price: "سعر بالمتر حسب المساحة",
  },
  {
    service: "عزل الفوم",
    desc: "عزل مائي وحراري متكامل برش الفوم البولي يوريثان.",
    price: "حسب سُمك الطبقة",
  },
  {
    service: "عزل أسطح جيتاروف",
    desc: "عزل بألواح ومواد الجيتاروف للحماية طويلة الأمد.",
    price: "حسب المعاينة",
  },
  {
    service: "معالجة تسربات المياه",
    desc: "كشف ومعالجة أماكن التسرب قبل تنفيذ العزل الكامل.",
    price: "سعر واضح قبل البدء",
  },
];

const priceFactors = [
  { title: "مساحة السطح", desc: "يُحسب سعر العزل غالباً بالمتر المربع حسب مساحة السطح." },
  { title: "نوع العزل", desc: "العزل المائي يختلف عن الحراري وعن عزل الفوم في التكلفة." },
  { title: "نوع المواد", desc: "جودة ونوع مواد العزل المستخدمة تؤثر على السعر النهائي." },
  { title: "حالة السطح", desc: "السطح الذي يحتاج إصلاح تشققات أو تجهيز يزيد من العمل." },
  { title: "عدد الطبقات", desc: "بعض المشاريع تحتاج طبقة عزل مزدوجة لحماية أعلى." },
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
    question: "كم سعر عزل الأسطح في الكويت بالمتر؟",
    answer:
      "يُحسب سعر عزل الأسطح في الكويت غالباً بالمتر المربع ويختلف حسب نوع العزل ومساحة السطح ونوع المواد، ونقدم لك سعراً واضحاً بعد المعاينة قبل البدء بدون رسوم خفية.",
  },
  {
    question: "ما الفرق في السعر بين العزل المائي والحراري؟",
    answer:
      "يختلف سعر العزل المائي عن الحراري حسب نوع المواد وطريقة التنفيذ، وفي كثير من الحالات ننفذ عزلاً مائياً وحرارياً متكاملاً بسعر مناسب.",
  },
  {
    question: "هل عزل الفوم أغلى من الأنواع الأخرى؟",
    answer:
      "يعتمد سعر عزل الفوم على سُمك الطبقة والمساحة، وهو يجمع بين العزل المائي والحراري في خطوة واحدة مما يجعله خياراً اقتصادياً على المدى الطويل.",
  },
  {
    question: "هل توجد رسوم على المعاينة والتقييم؟",
    answer:
      "نقدم معاينة وتقييماً واضحاً للسطح، ونتفق معك على السعر النهائي قبل البدء بدون أي مفاجآت أو رسوم خفية.",
  },
  {
    question: "كيف أحصل على سعر عزل السطح لمنزلي؟",
    answer:
      "اتصل بنا أو راسلنا واتساب وأخبرنا بمساحة السطح ونوع العزل المطلوب، وسنعطيك تصوراً مبدئياً للسعر ثم سعراً نهائياً بعد المعاينة.",
  },
  {
    question: "هل يوجد ضمان على العزل مقابل السعر؟",
    answer:
      "نعم، نقدم ضماناً على خدمة العزل باستخدام مواد عالية الجودة، لتحصل على أفضل قيمة مقابل ما تدفعه وحماية طويلة الأمد.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "اسعار عزل اسطح الكويت",
      serviceType: "عزل أسطح مائي وحراري",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "أسعار عزل الأسطح المائي والحراري وعزل الفوم في الكويت بالمتر بسعر واضح قبل البدء وبدون رسوم خفية.",
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
        { "@type": "ListItem", position: 2, name: "اسعار عزل اسطح الكويت", item: PAGE_URL },
      ],
    },
  ],
};

const searchTerms = [
  "اسعار عزل اسطح الكويت",
  "أسعار عزل الأسطح الكويت",
  "كم سعر عزل الأسطح بالمتر",
  "أسعار العزل المائي والحراري",
  "سعر عزل الفوم الكويت",
  "تكلفة عزل الأسطح الكويت",
  "سعر عزل اسطح جيتاروف",
];

export default function RoofInsulationPricesKuwaitPage() {
  return (
    <main className="flex-1" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full overflow-hidden bg-gradient-to-bl from-sky-50 via-white to-emerald-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
            أسعار واضحة بالمتر — بدون رسوم خفية
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            اسعار عزل اسطح الكويت
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-bold text-slate-700 sm:text-2xl">
            أسعار مناسبة للعزل المائي والحراري وعزل الفوم مع ضمان
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            نوفر لك أسعار عزل اسطح الكويت بشفافية كاملة، مع تقييم وسعر واضح قبل
            بدء العمل وبدون رسوم خفية. يُحسب سعر العزل غالباً بالمتر المربع ويختلف
            حسب نوع العزل ومساحة السطح ونوع المواد، ونحرص على تقديم خدمة عزل
            احترافية بأسعار مناسبة وضمان على الخدمة في جميع مناطق الكويت.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="اتصل الآن لمعرفة السعر"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-emerald-600 to-emerald-700 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:from-emerald-700 hover:to-emerald-800"
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
            كم تكلفة عزل الأسطح في الكويت؟
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            من أكثر الأسئلة التي تصلنا: كم سعر عزل الأسطح في الكويت بالمتر؟
            والإجابة الصادقة أن السعر يعتمد على عدة عوامل مثل مساحة السطح ونوع
            العزل المطلوب (مائي، حراري، فوم) ونوع المواد وحالة السطح. لذلك يُحسب
            السعر غالباً بالمتر المربع، ولا يمكن تحديده برقم واحد ثابت لجميع
            الحالات. لكننا نلتزم بمبدأ واضح: نعاين السطح ونخبرك بالسعر النهائي
            قبل بدء العمل وتوافق عليه، بدون أي رسوم خفية. نحرص على أن تكون أسعار
            عزل الأسطح لدينا مناسبة ومنافسة مقابل جودة المواد والتنفيذ والضمان
            الذي نقدمه.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            جدول أسعار خدمات عزل الأسطح
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            الأسعار التالية استرشادية وتُحسب غالباً بالمتر المربع، وتتحدد بدقة
            بعد المعاينة. نتفق معك على السعر النهائي قبل بدء العمل دائماً.
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
                  <span className="inline-flex w-fit items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
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
            ما العوامل التي تحدد سعر عزل الأسطح؟
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
            لماذا أسعار العزل لدينا هي الأنسب؟
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نجمع بين الأسعار المناسبة وجودة المواد والتنفيذ، فلا تدفع مقابل عزل
            ضعيف يحتاج إعادة بعد فترة قصيرة. نقدم لك سعراً واضحاً بالمتر قبل
            البدء، ونستخدم مواد عزل عالية الجودة تحمي مبناك من الحرارة وتسربات
            المياه لسنوات. ومع الضمان الذي نقدمه على الخدمة، تحصل على أفضل قيمة
            مقابل ما تدفعه وتوفير حقيقي في فاتورة التكييف وتكاليف الصيانة على
            المدى الطويل.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "سعر واضح بالمتر قبل بدء العمل",
              "بدون رسوم خفية أو مفاجآت",
              "مواد عزل عالية الجودة وضمان على الخدمة",
              "توفير في فاتورة التكييف وحماية من التسربات",
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
            <Link href="/roof-waterproofing-kuwait" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              عزل أسطح الكويت
            </Link>{" "}
            و
            <Link href="/thermal-waterproofing-kuwait" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              {" "}العزل المائي والحراري
            </Link>{" "}
            و
            <Link href="/gitaroof-insulation-kuwait" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              {" "}عزل أسطح جيتاروف
            </Link>
            . كما نقدم خدمة{" "}
            <Link href="/drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              تسليك مجاري الكويت
            </Link>{" "}
            ويمكنك الاطلاع على{" "}
            <Link href="/drain-cleaning-prices-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              اسعار تسليك مجاري الكويت
            </Link>
            .
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {searchTerms.map((term) => (
              <li
                key={term}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-emerald-500" aria-hidden="true">
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
            أسعار عزل الأسطح في جميع مناطق الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نقدم أسعاراً مناسبة لخدمة عزل الأسطح في جميع مناطق الكويت مثل حولي
            والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/roof-waterproofing-${area.slug}`}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-emerald-600 hover:text-white"
                >
                  عزل أسطح {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            الأسئلة الشائعة عن أسعار عزل الأسطح
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-900/5"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 text-base font-bold text-slate-900 marker:content-none sm:px-6 sm:text-lg">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition-transform duration-300 group-open:rotate-180">
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
          <div className="overflow-hidden rounded-3xl bg-gradient-to-bl from-emerald-700 via-emerald-800 to-sky-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              احصل على سعر عزل السطح الآن
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              اتصل بنا أو راسلنا واتساب وأخبرنا بمساحة السطح لنعطيك سعراً واضحاً
              مناسباً قبل بدء العمل.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER}`}
                aria-label="اتصل الآن"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-emerald-700 shadow-lg transition hover:bg-emerald-50"
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
