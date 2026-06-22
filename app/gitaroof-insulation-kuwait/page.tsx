import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_URL, areas } from "@/lib/areas";

const PAGE_PATH = "/gitaroof-insulation-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const COVER_IMAGE = "/services/عازل-اسطح-جيتاروف.webp";
const COVER_ALT = "عزل أسطح جيتاروف في الكويت";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "عزل أسطح جيتاروف الكويت | عزل مائي وحراري قوي",
  description:
    "خدمة عزل أسطح جيتاروف في الكويت بمادة مقاومة للماء والحرارة لحماية طويلة الأمد للمباني، فريق متخصص وضمان على الخدمة في جميع مناطق الكويت.",
  keywords: [
    "عزل أسطح جيتاروف",
    "جيتاروف الكويت",
    "عزل جيتاروف",
    "عزل أسطح الكويت",
    "gitaroof insulation Kuwait",
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
    title: "عزل أسطح جيتاروف الكويت | عزل مائي وحراري قوي",
    description:
      "عزل أسطح بمادة الجيتاروف المقاومة للماء والحرارة لحماية طويلة الأمد للمباني في جميع مناطق الكويت.",
    siteName: "خدمات الكويت",
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "عزل أسطح جيتاروف الكويت | عزل مائي وحراري قوي",
    description:
      "عزل أسطح بمادة الجيتاروف المقاومة للماء والحرارة لحماية طويلة الأمد للمباني في الكويت.",
    images: [COVER_IMAGE],
  },
};

const features = [
  "عزل الأسطح بمادة الجيتاروف",
  "عزل مائي مقاوم للتسرب",
  "عزل حراري يخفض الحرارة",
  "معالجة الشقوق والتسربات",
  "حماية طويلة الأمد للأسطح",
];

const whyUs = [
  { title: "مادة قوية ومعتمدة", desc: "الجيتاروف من أقوى مواد العزل المقاومة للعوامل الجوية." },
  { title: "فريق متخصص", desc: "فنيون مدربون على تطبيق الجيتاروف بإتقان." },
  { title: "ضمان على الخدمة", desc: "ضمان حقيقي على أعمال العزل لحماية طويلة الأمد." },
  { title: "أسعار مناسبة", desc: "معاينة وسعر واضح قبل بدء العمل بدون رسوم خفية." },
];

const steps = [
  { title: "المعاينة", desc: "نعاين السطح ونحدد مساحته وحالته بدقة." },
  { title: "تجهيز السطح", desc: "ننظّف السطح ونعالج الشقوق قبل العزل." },
  { title: "تطبيق الجيتاروف", desc: "نطبّق طبقة الجيتاروف بإتقان وتغطية كاملة." },
  { title: "التجفيف", desc: "نترك الطبقة لتجف وتتماسك بشكل صحيح." },
  { title: "اختبار الجودة", desc: "نختبر العزل للتأكد من فعاليته قبل التسليم." },
];

const searchTerms = [
  "شركة عزل جيتاروف الكويت",
  "أفضل عزل جيتاروف",
  "أسعار عزل أسطح جيتاروف",
  "عزل جيتاروف للأسطح",
  "جيتاروف عزل مائي",
  "فني عزل جيتاروف الكويت",
];

const faqs = [
  {
    question: "ما هو عزل الجيتاروف؟",
    answer:
      "الجيتاروف مادة عزل قوية تُطبّق على الأسطح لتكوين طبقة مقاومة للماء والحرارة، تحمي المبنى من التسربات وارتفاع الحرارة لفترة طويلة.",
  },
  {
    question: "هل الجيتاروف مناسب لمناخ الكويت؟",
    answer:
      "نعم، الجيتاروف مقاوم لأشعة الشمس والحرارة العالية والرطوبة، مما يجعله مناسباً جداً لمناخ الكويت.",
  },
  {
    question: "كم يستمر عزل الجيتاروف؟",
    answer:
      "مع التطبيق الصحيح يوفر الجيتاروف حماية طويلة الأمد تمتد لسنوات، ونقدم ضماناً على الخدمة.",
  },
  {
    question: "هل يعالج الجيتاروف التسربات القائمة؟",
    answer:
      "نعم، نعالج الشقوق ونقاط التسرب في السطح قبل تطبيق الجيتاروف لضمان نتيجة فعّالة.",
  },
  {
    question: "هل الخدمة متوفرة في جميع مناطق الكويت؟",
    answer:
      "نعم، نقدم خدمة عزل أسطح الجيتاروف في جميع مناطق الكويت مع فريق متخصص وضمان على الخدمة.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "عزل أسطح جيتاروف الكويت",
      serviceType: "عزل أسطح مائي وحراري بمادة الجيتاروف",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "عزل أسطح جيتاروف في الكويت بمادة مقاومة للماء والحرارة لحماية طويلة الأمد للمباني.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات عزل الجيتاروف",
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
        { "@type": "ListItem", position: 2, name: "عزل أسطح جيتاروف الكويت", item: PAGE_URL },
      ],
    },
  ],
};

export default function GitaroofInsulationKuwaitPage() {
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
            عزل بضمان في جميع مناطق الكويت
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            عزل أسطح جيتاروف الكويت
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-bold text-slate-700 sm:text-2xl">
            عزل مائي وحراري قوي لحماية طويلة الأمد
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            عزل أسطح جيتاروف بمادة قوية مقاومة للماء والحرارة لحماية مبناك من
            التسربات وارتفاع الحرارة، مع فريق متخصص يصل إليك في جميع مناطق
            الكويت وضمان على الخدمة.
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
            ما هو عزل الجيتاروف ولماذا تختاره؟
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            الجيتاروف من أقوى مواد عزل الأسطح المستخدمة في الكويت، فهو يجمع بين
            العزل المائي والحراري في طبقة متينة تُطبّق على السطح لتكوين غشاء
            مقاوم للماء وأشعة الشمس والحرارة العالية. يتميز الجيتاروف بقدرته على
            تحمّل ظروف مناخ الكويت القاسية صيفاً، ومقاومته للتشقق والتقشّر مع
            مرور الوقت، مما يجعله خياراً مثالياً لحماية الأسطح والمباني على
            المدى الطويل. نقوم بمعاينة السطح ومعالجة الشقوق والتسربات القائمة
            أولاً، ثم نطبّق طبقة الجيتاروف بإتقان وتغطية كاملة تضمن عزلاً فعّالاً
            يحمي مبناك من تسرب المياه ويقلل من انتقال الحرارة إلى الداخل ويخفض
            استهلاك التكييف. ومع فريقنا المتخصص وضماننا على الخدمة، نضمن لك نتيجة
            عالية الجودة في جميع مناطق الكويت.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
            <h3 className="text-base font-bold text-slate-900">
              مميزات عزل الجيتاروف
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              مقاوم للماء والحرارة وأشعة الشمس، ومتين لا يتشقق، ويخفض حرارة
              المبنى وفاتورة التكييف، مع عمر تشغيلي طويل.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خدمات عزل الجيتاروف التي نقدمها
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
            لماذا تختارنا لعزل الجيتاروف؟
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
            خطوات تطبيق الجيتاروف
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
            عزل أسطح جيتاروف — خدمة قريبة منك
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            إذا كنت تبحث عن عزل أسطح جيتاروف في الكويت بجودة عالية وضمان، اتصل
            بنا أو راسلنا واتساب ونصل إليك في أي منطقة بأسعار مناسبة وحماية طويلة
            الأمد.
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
            نخدم جميع مناطق الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نصل إليك أينما كنت داخل الكويت لعزل الأسطح بالجيتاروف في حولي
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
            <Link href="/roof-waterproofing-kuwait" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              عزل أسطح الكويت
            </Link>
            <Link href="/thermal-waterproofing-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              العزل المائي والحراري
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
            الأسئلة الشائعة عن عزل الجيتاروف
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 shadow-sm ring-1 ring-slate-900/5"
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

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-bl from-emerald-700 via-emerald-800 to-sky-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              احمِ سطحك بعزل جيتاروف قوي الآن
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              اتصل بنا الآن لعزل أسطح جيتاروف احترافي بأفضل المواد وضمان على
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
