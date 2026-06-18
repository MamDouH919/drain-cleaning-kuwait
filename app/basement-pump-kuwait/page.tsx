import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_URL, areas } from "@/lib/areas";

const PAGE_PATH = "/basement-pump-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const COVER_IMAGE = "/services/تركيب-مكين-سرداب-الكويت.webp";
const COVER_ALT = "تركيب مكينة سرداب في الكويت";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "تركيب مكينة سرداب الكويت | مضخات سحب مياه السراديب",
  description:
    "خدمة تركيب مكينة سرداب في الكويت لسحب مياه السراديب وحمايتها من الغرق، توريد وتركيب وصيانة مضخات المياه بأحدث الأنواع وضمان على الخدمة 24 ساعة.",
  keywords: [
    "تركيب مكينة سرداب",
    "مكينة سرداب الكويت",
    "مضخة سحب مياه السرداب",
    "صيانة مكينة سرداب",
    "basement pump Kuwait",
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
    title: "تركيب مكينة سرداب الكويت | مضخات سحب مياه السراديب",
    description:
      "تركيب وصيانة مكائن سحب مياه السراديب في الكويت بأحدث الأنواع وضمان على الخدمة على مدار 24 ساعة.",
    siteName: "خدمات الكويت",
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تركيب مكينة سرداب الكويت | مضخات سحب مياه السراديب",
    description:
      "تركيب وصيانة مكائن سحب مياه السراديب في الكويت بأحدث الأنواع وضمان على الخدمة.",
    images: [COVER_IMAGE],
  },
};

const features = [
  "توريد وتركيب مكائن السرداب",
  "مضخات سحب المياه الأوتوماتيكية",
  "صيانة وإصلاح مكينة السرداب",
  "تركيب عوامات وحساسات المياه",
  "خدمة طوارئ سحب مياه السراديب 24 ساعة",
];

const whyUs = [
  { title: "فنيون متخصصون", desc: "خبرة في تركيب وصيانة مكائن السراديب بجميع أنواعها." },
  { title: "مكائن عالية الجودة", desc: "نوفر مضخات معتمدة بكفاءة وعمر تشغيلي طويل." },
  { title: "خدمة 24 ساعة", desc: "تدخل سريع في حالات تجمع المياه الطارئة." },
  { title: "ضمان على الخدمة", desc: "ضمان على التركيب والمكائن لراحة بالك." },
];

const steps = [
  { title: "المعاينة", desc: "نعاين السرداب ونحدد قدرة المضخة المناسبة." },
  { title: "اختيار المكينة", desc: "نوصي بأنسب نوع حسب كمية المياه ومساحة السرداب." },
  { title: "التركيب", desc: "نركّب المكينة والعوامات وخطوط التصريف بإتقان." },
  { title: "التشغيل والاختبار", desc: "نشغّل المضخة ونتأكد من السحب الأوتوماتيكي." },
  { title: "الصيانة الدورية", desc: "نوفر متابعة وصيانة للحفاظ على كفاءة المكينة." },
];

const searchTerms = [
  "شركة تركيب مكينة سرداب الكويت",
  "أفضل مكينة سرداب الكويت",
  "أسعار تركيب مكينة سرداب",
  "صيانة مكينة سرداب",
  "مضخة سحب مياه السرداب",
  "فني مكينة سرداب الكويت",
];

const faqs = [
  {
    question: "ما هي مكينة السرداب ولماذا أحتاجها؟",
    answer:
      "مكينة السرداب هي مضخة تقوم بسحب المياه المتجمعة في السرداب وطردها للخارج تلقائياً، وهي ضرورية لحماية السرداب من الغرق وتلف المحتويات خاصة في الكويت.",
  },
  {
    question: "كيف أختار قدرة مكينة السرداب المناسبة؟",
    answer:
      "تعتمد القدرة على مساحة السرداب وكمية المياه المتوقعة، ويقوم الفني بمعاينة الموقع للتوصية بأنسب نوع وقدرة للمضخة.",
  },
  {
    question: "هل تقدمون صيانة لمكائن السرداب؟",
    answer:
      "نعم، نوفر صيانة وإصلاح مكائن السرداب وتغيير العوامات والحساسات للحفاظ على عملها بكفاءة على مدار العام.",
  },
  {
    question: "هل الخدمة متوفرة في جميع مناطق الكويت؟",
    answer:
      "نعم، نقدم خدمة تركيب وصيانة مكينة السرداب في جميع مناطق الكويت مع سرعة استجابة وخدمة طوارئ 24 ساعة.",
  },
  {
    question: "كم تستغرق عملية تركيب مكينة السرداب؟",
    answer:
      "غالباً يتم التركيب والتشغيل خلال ساعات قليلة حسب حالة السرداب ونوع المكينة، مع اختبار كامل قبل التسليم.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "تركيب مكينة سرداب الكويت",
      serviceType: "تركيب وصيانة مضخات السراديب",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "تركيب وصيانة مكائن سحب مياه السراديب في الكويت بأحدث الأنواع وضمان على الخدمة.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات مكائن السراديب",
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
        { "@type": "ListItem", position: 2, name: "تركيب مكينة سرداب الكويت", item: PAGE_URL },
      ],
    },
  ],
};

export default function BasementPumpKuwaitPage() {
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
            تركيب مكينة سرداب الكويت
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-bold text-slate-700 sm:text-2xl">
            مضخات سحب مياه السراديب بضمان 24 ساعة
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            تركيب مكينة سرداب الكويت لسحب المياه المتجمعة وحماية السرداب من الغرق،
            توريد وتركيب وصيانة مضخات المياه بأحدث الأنواع مع فريق متخصص يصل إليك
            في جميع مناطق الكويت.
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
            أهمية تركيب مكينة سرداب في الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تعاني الكثير من السراديب في الكويت من تجمع المياه نتيجة تسرب المياه
            الجوفية أو ارتجاع الصرف أو الأمطار، مما يهدد سلامة المبنى ومحتويات
            السرداب. ويُعد تركيب مكينة سرداب (مضخة سحب مياه) الحل الأمثل لطرد
            المياه تلقائياً وحماية المكان من الغرق. نقوم بتوريد وتركيب مكائن
            عالية الجودة تعمل بنظام العوامة الأوتوماتيكية، بحيث تبدأ المضخة في
            السحب فور ارتفاع منسوب المياه وتتوقف عند انتهائها، دون أي تدخل يدوي.
            كما نوفر صيانة دورية وقطع غيار أصلية لضمان عمل المكينة بكفاءة على
            مدار العام، مع خدمة طوارئ سريعة في حالات تجمع المياه المفاجئ.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
            <h3 className="text-base font-bold text-slate-900">
              متى تحتاج إلى مكينة سرداب؟
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              تجمع المياه المتكرر في السرداب، وتسرب المياه الجوفية، وارتجاع مياه
              الصرف، وغياب نظام تصريف فعّال في الأدوار السفلية.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خدمات مكينة السرداب التي نقدمها
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
            لماذا تختارنا لتركيب مكينة السرداب؟
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
            خطوات تركيب مكينة السرداب
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
            تركيب مكينة سرداب الكويت — خدمة قريبة منك
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            إذا كنت تبحث عن خدمة تركيب مكينة سرداب الكويت موثوقة وسريعة، فنحن نوفر
            توريد وتركيب وصيانة مضخات السراديب بأسعار مناسبة وضمان على الخدمة.
            اتصل بنا أو راسلنا واتساب ونصل إليك في أي منطقة بالكويت.
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
            نصل إليك أينما كنت داخل الكويت لتركيب وصيانة مكينة السرداب في حولي
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
            <Link href="/roof-waterproofing-kuwait" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              عزل أسطح الكويت
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
            الأسئلة الشائعة عن تركيب مكينة السرداب
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
              احمِ سردابك من الغرق الآن
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              اتصل بنا الآن لتركيب مكينة سرداب احترافية بأسعار مناسبة وضمان على
              الخدمة.
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
