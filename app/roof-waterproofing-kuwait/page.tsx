import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/areas";

const PAGE_PATH = "/roof-waterproofing-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";
const COVER_IMAGE = "/services/عازل-اسطح-الكويت.webp";
const COVER_ALT = "عزل أسطح في الكويت مائي وحراري";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "عزل أسطح الكويت | عزل مائي وحراري",
  description:
    "عزل أسطح الكويت ضد الحرارة وتسرب المياه بأفضل مواد العزل المائي والحراري والفوم، فريق متخصص وضمان على الخدمة وأسعار مناسبة في جميع مناطق الكويت.",
  keywords: [
    "عزل أسطح الكويت",
    "عزل مائي الكويت",
    "عزل حراري الكويت",
    "عزل فوم الكويت",
    "معالجة تسربات المياه",
    "roof waterproofing Kuwait",
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
    title: "عزل أسطح الكويت أفضل حماية ضد الحرارة وتسرب المياه",
    description:
      "عزل مائي وحراري وفوم للأسطح بأفضل المواد وضمان على الخدمة وخدمة 24 ساعة في جميع مناطق الكويت.",
    siteName: "خدمات الكويت",
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "عزل أسطح الكويت أفضل حماية ضد الحرارة وتسرب المياه",
    description:
      "عزل مائي وحراري وفوم للأسطح بأفضل المواد وضمان على الخدمة وخدمة 24 ساعة في جميع مناطق الكويت.",
    images: [COVER_IMAGE],
  },
};

const features = [
  "العزل المائي للأسطح",
  "العزل الحراري",
  "عزل الفوم (بولي يوريثان)",
  "معالجة تسربات المياه",
  "حماية الأسطح من الشمس والحرارة",
];

const whyUs = [
  { title: "خبرة طويلة في العزل بالكويت", desc: "سنوات من الخبرة في عزل الأسطح والمباني." },
  { title: "مواد عالية الجودة", desc: "نستخدم أفضل مواد العزل المائي والحراري المعتمدة." },
  { title: "ضمان على الخدمة", desc: "ضمان حقيقي على أعمال العزل لحماية طويلة الأمد." },
  { title: "أسعار مناسبة", desc: "تقييم وسعر واضح قبل بدء العمل بدون رسوم خفية." },
  { title: "فريق متخصص", desc: "فنيون مدربون على أحدث تقنيات العزل." },
];

const steps = [
  { title: "المعاينة", desc: "نعاين السطح ونحدد مساحته وحالته بدقة." },
  { title: "تحديد المشكلة", desc: "نكتشف مصادر التسرب ونقاط ضعف العزل." },
  { title: "اختيار نوع العزل", desc: "نوصي بأنسب نظام عزل مائي أو حراري أو فوم." },
  { title: "تنفيذ العزل", desc: "ننفذ العزل بمواد عالية الجودة وبإتقان." },
  { title: "اختبار الجودة", desc: "نختبر السطح للتأكد من فعالية العزل ومنع التسرب." },
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
    question: "كم سعر عزل الأسطح في الكويت؟",
    answer:
      "يختلف سعر عزل الأسطح حسب مساحة السطح ونوع العزل المطلوب، ونقدم معاينة وتقييم وسعر واضح قبل بدء العمل بدون رسوم خفية.",
  },
  {
    question: "ما أفضل نوع عزل للأسطح في الكويت؟",
    answer:
      "يعتمد الاختيار على حالة السطح، لكن العزل المائي والحراري وعزل الفوم من أفضل الأنظمة لحماية الأسطح من التسربات والحرارة في مناخ الكويت.",
  },
  {
    question: "كم تستغرق مدة تنفيذ عزل الأسطح؟",
    answer:
      "غالباً يتم تنفيذ العزل خلال يوم إلى يومين حسب مساحة السطح ونوع العزل وحالته.",
  },
  {
    question: "هل يوجد ضمان على خدمة العزل؟",
    answer:
      "نعم، نوفر ضماناً على أعمال العزل المائي والحراري لضمان حماية طويلة الأمد للأسطح.",
  },
  {
    question: "هل العزل يقاوم حرارة الصيف في الكويت؟",
    answer:
      "نعم، العزل الحراري وعزل الفوم يقللان من انتقال الحرارة إلى المبنى ويساعدان على خفض درجة الحرارة واستهلاك التكييف.",
  },
  {
    question: "هل تغطون جميع مناطق الكويت؟",
    answer:
      "نعم، نقدم خدمة عزل الأسطح في جميع مناطق الكويت مثل حولي والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "عزل أسطح الكويت",
      serviceType: "عزل مائي وحراري للأسطح",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "عزل أسطح الكويت ضد الحرارة وتسرب المياه بأفضل مواد العزل المائي والحراري والفوم مع ضمان على الخدمة.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات عزل الأسطح",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "العزل المائي للأسطح" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "العزل الحراري" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "عزل الفوم" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "معالجة تسربات المياه" } },
        ],
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
        { "@type": "ListItem", position: 2, name: "عزل أسطح الكويت", item: PAGE_URL },
      ],
    },
  ],
};

const searchTerms = [
  "شركة عزل أسطح الكويت",
  "أفضل عزل أسطح الكويت",
  "أسعار عزل أسطح الكويت",
  "عزل مائي الكويت",
  "عزل حراري الكويت",
  "عزل فوم الكويت",
];

export default function RoofWaterproofingKuwaitPage() {
  return (
    <main className="flex-1" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full overflow-hidden bg-gradient-to-bl from-emerald-50 via-white to-sky-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
            عزل مائي وحراري بضمان في جميع مناطق الكويت
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            عزل أسطح الكويت
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-bold text-slate-700 sm:text-2xl">
            أفضل حماية ضد الحرارة وتسرب المياه 24 ساعة
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            عزل أسطح الكويت المائي والحراري وعزل الفوم بأفضل المواد وأحدث
            التقنيات لحماية مبناك من الحرارة وتسربات المياه، مع ضمان على الخدمة
            وفريق متخصص يصل إليك في جميع مناطق الكويت.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="اتصل الآن"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-emerald-600 to-emerald-700 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:from-emerald-700 hover:to-emerald-800"
            >
              {PHONE_DISPLAY} | اتصل الآن
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-200 bg-white px-7 py-4 text-lg font-bold text-sky-700 shadow-md transition hover:bg-sky-50"
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
            أهمية عزل الأسطح في مناخ الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            يتميز مناخ الكويت بارتفاع درجات الحرارة صيفاً، مما يجعل عزل الأسطح
            ضرورة وليس رفاهية لحماية المباني والحفاظ على راحة ساكنيها. فالعزل
            الحراري الجيد يقلل من انتقال الحرارة إلى الداخل ويخفض استهلاك التكييف
            وفاتورة الكهرباء بشكل ملحوظ. وفي الوقت نفسه يحمي العزل المائي السطح
            من تسربات المياه والرطوبة التي قد تسبب تلف الأسقف والجدران وظهور
            الشقوق مع مرور الوقت. نعتمد في عزل أسطح الكويت على أحدث مواد العزل
            المائي والحراري وعزل الفوم عالية الجودة، ونطبقها وفق أنظمة هندسية
            دقيقة تناسب كل نوع من المباني السكنية والتجارية. كما نقدم معالجة
            فعّالة لتسربات المياه القائمة قبل تنفيذ العزل لضمان نتيجة طويلة
            الأمد. ومع توفر خدمتنا على مدار 24 ساعة وفريق متخصص وضمان على الخدمة،
            نضمن لك حماية كاملة لسطح منزلك أو منشأتك في جميع مناطق الكويت.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خدمات عزل الأسطح التي نقدمها
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
            لماذا تختارنا لعزل الأسطح؟
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
            خطوات تنفيذ عزل الأسطح
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-bl from-emerald-600 to-sky-600 text-base font-extrabold text-white shadow-md">
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
            عزل أسطح الكويت — خدمة موثوقة قريبة منك
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            إذا كنت تبحث عن عزل أسطح الكويت بجودة عالية وسعر مناسب، فنحن نوفر
            خدمة عزل مائي وحراري وفوم متكاملة مع ضمان على الخدمة. اتصل بنا أو
            راسلنا واتساب ونصل إليك في أي منطقة بالكويت بأسرع وقت.
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
            عزل أسطح في جميع مناطق الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نصل إليك أينما كنت داخل الكويت بخدمة عزل أسطح مائي وحراري في حولي
            والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير وجميع المناطق
            الأخرى.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/roof-waterproofing-${area.slug}`}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-emerald-600 hover:text-white"
                >
                  عزل أسطح {area.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-slate-600">
            نقدم أيضاً خدمة{" "}
            <Link href="/drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              تسليك مجاري الكويت
            </Link>{" "}
            بدون تكسير على مدار 24 ساعة.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            الأسئلة الشائعة عن عزل الأسطح
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
              احمِ سطح منزلك من الحرارة والتسربات الآن
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              اتصل بنا الآن واحصل على عزل أسطح احترافي بأفضل المواد وضمان على
              الخدمة.
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-4 text-base font-bold text-white shadow-lg transition hover:bg-sky-400"
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
