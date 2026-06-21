import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_URL, areas } from "@/lib/areas";

const PAGE_PATH = "/water-tank-cleaning-kuwait";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const COVER_IMAGE = "/services/غسيل-تانكي-الكويت.webp";
const COVER_ALT = "غسيل وتنظيف تانكي المياه في الكويت";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "غسيل تانكي الكويت | تنظيف وتعقيم خزانات المياه",
  description:
    "خدمة غسيل تانكي الكويت وتنظيف وتعقيم خزانات المياه من الرواسب والطحالب بمواد آمنة، فريق متخصص وخدمة سريعة وضمان نظافة مياه منزلك في جميع المناطق.",
  keywords: [
    "غسيل تانكي الكويت",
    "تنظيف خزانات المياه",
    "تعقيم تانكي المياه",
    "شركة غسيل خزانات",
    "water tank cleaning Kuwait",
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
    title: "غسيل تانكي الكويت | تنظيف وتعقيم خزانات المياه",
    description:
      "تنظيف وتعقيم خزانات المياه من الرواسب والطحالب بمواد آمنة وفريق متخصص في جميع مناطق الكويت.",
    siteName: "خدمات الكويت",
    images: [{ url: COVER_IMAGE, width: 1200, height: 630, alt: COVER_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "غسيل تانكي الكويت | تنظيف وتعقيم خزانات المياه",
    description:
      "تنظيف وتعقيم خزانات المياه من الرواسب والطحالب بمواد آمنة وفريق متخصص في جميع مناطق الكويت.",
    images: [COVER_IMAGE],
  },
};

const features = [
  "تنظيف خزانات المياه العلوية",
  "تنظيف الخزانات الأرضية",
  "تعقيم الخزانات بمواد آمنة",
  "إزالة الرواسب والطحالب",
  "كشف ومعالجة تسرب الخزانات",
];

const whyUs = [
  { title: "مواد تعقيم آمنة", desc: "نستخدم مواد معتمدة آمنة على مياه الشرب." },
  { title: "فريق متخصص", desc: "فنيون مدربون على تنظيف وتعقيم الخزانات." },
  { title: "خدمة سريعة", desc: "ننجز الغسيل والتعقيم في وقت قصير." },
  { title: "أسعار مناسبة", desc: "سعر واضح قبل بدء العمل بدون رسوم خفية." },
];

const steps = [
  { title: "تفريغ الخزان", desc: "نفرّغ المياه المتبقية والرواسب من الخزان." },
  { title: "إزالة الترسبات", desc: "نزيل الطحالب والرواسب من الجدران والأرضية." },
  { title: "الغسيل والتنظيف", desc: "نغسل الخزان بالكامل بأدوات متخصصة." },
  { title: "التعقيم", desc: "نعقّم الخزان بمواد آمنة على مياه الشرب." },
  { title: "إعادة التشغيل", desc: "نملأ الخزان ونتأكد من جاهزيته للاستخدام." },
];

const searchTerms = [
  "شركة غسيل تانكي الكويت",
  "أفضل تنظيف خزانات الكويت",
  "أسعار غسيل التانكي",
  "تعقيم خزانات المياه",
  "تنظيف تانكي المياه",
  "فني غسيل تانكي الكويت",
];

const faqs = [
  {
    question: "كم مرة يجب غسيل خزان المياه؟",
    answer:
      "يُنصح بتنظيف وتعقيم خزان المياه كل 6 أشهر تقريباً للحفاظ على نظافة المياه وخلوها من الرواسب والطحالب.",
  },
  {
    question: "هل المواد المستخدمة آمنة على مياه الشرب؟",
    answer:
      "نعم، نستخدم مواد تعقيم معتمدة وآمنة تماماً على مياه الشرب ولا تترك أي أثر ضار بعد الشطف.",
  },
  {
    question: "كم تستغرق عملية غسيل التانكي؟",
    answer:
      "غالباً تستغرق العملية من ساعة إلى ساعتين حسب حجم الخزان وحالته.",
  },
  {
    question: "هل تنظفون الخزانات العلوية والأرضية؟",
    answer:
      "نعم، نقوم بتنظيف وتعقيم الخزانات العلوية والأرضية بمختلف الأحجام للمنازل والفلل والشركات.",
  },
  {
    question: "هل الخدمة متوفرة في جميع مناطق الكويت؟",
    answer:
      "نعم، نقدم خدمة غسيل وتعقيم خزانات المياه في جميع مناطق الكويت مع سرعة استجابة.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "غسيل تانكي الكويت",
      serviceType: "تنظيف وتعقيم خزانات المياه",
      url: PAGE_URL,
      image: `${SITE_URL}${COVER_IMAGE}`,
      areaServed: { "@type": "Country", name: "الكويت" },
      provider: { "@id": `${SITE_URL}/#business` },
      description:
        "غسيل تانكي الكويت وتنظيف وتعقيم خزانات المياه من الرواسب والطحالب بمواد آمنة وفريق متخصص.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات غسيل الخزانات",
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
        { "@type": "ListItem", position: 2, name: "غسيل تانكي الكويت", item: PAGE_URL },
      ],
    },
  ],
};

export default function WaterTankCleaningKuwaitPage() {
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
            خدمة سريعة في جميع مناطق الكويت
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            غسيل تانكي الكويت
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-bold text-slate-700 sm:text-2xl">
            تنظيف وتعقيم خزانات المياه بمواد آمنة
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            غسيل تانكي الكويت وتنظيف وتعقيم خزانات المياه العلوية والأرضية من
            الرواسب والطحالب بمواد آمنة على الشرب، مع فريق متخصص يصل إليك في جميع
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
            أهمية غسيل خزانات المياه في الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            تتراكم في خزانات المياه مع مرور الوقت الرواسب والأتربة والطحالب،
            وقد تتكوّن بكتيريا تؤثر على جودة المياه وصحة الأسرة. لذلك يُعد غسيل
            وتعقيم التانكي بشكل دوري ضرورياً للحفاظ على نظافة المياه وسلامتها،
            خاصة في مناخ الكويت الحار الذي يسرّع من نمو الطحالب. نقوم بتنظيف
            الخزانات العلوية والأرضية بأدوات متخصصة، وإزالة كافة الرواسب والترسبات
            من الجدران والأرضية، ثم تعقيم الخزان بمواد معتمدة وآمنة تماماً على مياه
            الشرب. كما نكشف عن أي تسرب أو تشققات في الخزان ونعالجها للحفاظ على
            المياه. ومع فريقنا المتخصص وسرعة استجابتنا في جميع مناطق الكويت،
            نضمن لك مياهاً نظيفة وصحية بأسعار مناسبة وضمان على الخدمة.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
            <h3 className="text-base font-bold text-slate-900">
              متى تحتاج إلى غسيل التانكي؟
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              تغيّر لون أو طعم المياه، وجود رواسب في الماء، مرور أكثر من 6 أشهر
              على آخر تنظيف، أو ملاحظة طحالب داخل الخزان.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خدمات غسيل الخزانات التي نقدمها
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
            لماذا تختارنا لغسيل التانكي؟
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
            خطوات غسيل وتعقيم الخزان
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
            غسيل تانكي الكويت — خدمة قريبة منك
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            إذا كنت تبحث عن خدمة غسيل تانكي الكويت موثوقة، فنحن نوفر تنظيف وتعقيم
            خزانات المياه بمواد آمنة وأسعار مناسبة. اتصل بنا أو راسلنا واتساب
            ونصل إليك في أي منطقة بالكويت.
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
            نصل إليك أينما كنت داخل الكويت لغسيل وتعقيم خزانات المياه في حولي
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
            <Link href="/basement-pump-kuwait" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              تركيب مكينة سرداب
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
            الأسئلة الشائعة عن غسيل التانكي
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
              مياه نظيفة لعائلتك تبدأ بخزان نظيف
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              اتصل بنا الآن لغسيل وتعقيم خزان المياه باحترافية وبأسعار مناسبة.
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
