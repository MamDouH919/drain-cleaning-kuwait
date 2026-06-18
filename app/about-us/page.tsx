import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/areas";

const PAGE_PATH = "/about-us";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const BUSINESS_NAME = "خدمات الكويت";
const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "من نحن | شركة تسليك مجاري وعزل أسطح في الكويت 24 ساعة",
  description:
    "تعرف على شركتنا المتخصصة في تسليك مجاري الكويت وعزل أسطح الكويت، فريق خبير وخدمة صيانة منزلية 24 ساعة بأسعار مناسبة وضمان في جميع مناطق الكويت.",
  keywords: [
    "تسليك مجاري الكويت",
    "عزل أسطح الكويت",
    "شركة صيانة في الكويت",
    "خدمات صيانة منزلية الكويت",
    "plumbing services Kuwait",
    "waterproofing Kuwait",
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
    title: "من نحن | شركة تسليك مجاري وعزل أسطح في الكويت",
    description:
      "شركة متخصصة في تسليك المجاري وعزل الأسطح وخدمات الصيانة المنزلية 24 ساعة في جميع مناطق الكويت.",
    siteName: BUSINESS_NAME,
    images: [
      {
        url: "/hero-service.svg",
        width: 720,
        height: 720,
        alt: "شركة تسليك مجاري وعزل أسطح في الكويت",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن | شركة تسليك مجاري وعزل أسطح في الكويت",
    description:
      "شركة متخصصة في تسليك المجاري وعزل الأسطح وخدمات الصيانة المنزلية 24 ساعة في جميع مناطق الكويت.",
    images: ["/hero-service.svg"],
  },
};

const whyUs = [
  { title: "خبرة طويلة في الكويت", desc: "سنوات من العمل الميداني في التسليك والعزل داخل الكويت." },
  { title: "خدمة 24 ساعة", desc: "متواجدون ليلاً ونهاراً طوال أيام الأسبوع." },
  { title: "سرعة استجابة", desc: "نصل إليك خلال وقت قصير في أي منطقة." },
  { title: "أسعار مناسبة", desc: "تقييم وسعر واضح قبل بدء العمل بدون رسوم خفية." },
  { title: "بدون تكسير", desc: "أجهزة حديثة تحل الانسداد دون إتلاف المكان." },
  { title: "ضمان على الخدمة", desc: "نضمن جودة العمل لراحة بالك وثقتك الكاملة." },
];

const steps = [
  { title: "استقبال الطلب", desc: "تواصل معنا عبر الاتصال أو واتساب على مدار الساعة." },
  { title: "تحديد المشكلة", desc: "نفهم طبيعة المشكلة ونحدد الحل المناسب." },
  { title: "إرسال الفني", desc: "يصل الفني المتخصص إليك بأسرع وقت." },
  { title: "تنفيذ الخدمة", desc: "ننفذ العمل بأحدث المعدات وأعلى جودة." },
  { title: "التأكد من الجودة", desc: "نختبر النتيجة للتأكد من حل المشكلة تماماً." },
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
    question: "من نحن؟",
    answer:
      "نحن شركة متخصصة في تسليك مجاري الكويت وعزل أسطح الكويت وخدمات الصيانة المنزلية، نعتمد على فريق مدرب وأحدث المعدات لتقديم خدمة احترافية وسريعة.",
  },
  {
    question: "هل الخدمة متوفرة 24 ساعة؟",
    answer:
      "نعم، نقدم خدماتنا على مدار 24 ساعة طوال أيام الأسبوع بما في ذلك الحالات الطارئة في جميع مناطق الكويت.",
  },
  {
    question: "هل تسليك المجاري يتم بدون تكسير؟",
    answer:
      "نعم، نستخدم أحدث الأجهزة التي تسمح بفتح المجاري وحل الانسدادات بدون أي تكسير أو إتلاف للمكان.",
  },
  {
    question: "أين تغطون داخل الكويت؟",
    answer:
      "نغطي جميع مناطق الكويت مثل حولي والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير.",
  },
  {
    question: "ما الخدمات التي تقدمونها؟",
    answer:
      "نقدم خدمات تسليك المجاري وفتح الانسدادات وعزل الأسطح المائي والحراري وعزل الفوم ومعالجة تسربات المياه.",
  },
  {
    question: "كيف يتم التواصل السريع؟",
    answer:
      "يمكنك الاتصال بنا مباشرة على الرقم 98890031 أو التواصل عبر واتساب لطلب الخدمة أو حجز معاينة سريعة.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BUSINESS_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/hero-service.svg`,
      logo: `${SITE_URL}/hero-service.svg`,
      telephone: PHONE_NUMBER,
      areaServed: { "@type": "Country", name: "الكويت" },
      knowsAbout: ["تسليك المجاري", "عزل الأسطح", "العزل المائي والحراري"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_NUMBER,
        contactType: "customer service",
        areaServed: "KW",
        availableLanguage: ["ar"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BUSINESS_NAME,
      inLanguage: "ar",
      publisher: { "@id": `${SITE_URL}/#organization` },
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
  ],
};

export default function AboutUsPage() {
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
            شركة موثوقة لخدمات الصيانة في الكويت
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            من نحن - خدمات احترافية في تسليك المجاري وعزل الأسطح في الكويت
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            نحن شركة متخصصة في تسليك مجاري الكويت وعزل أسطح الكويت وخدمات الصيانة
            المنزلية على مدار 24 ساعة، نجمع بين الخبرة والسرعة والأسعار المناسبة
            لنكون خيارك الأول في جميع مناطق الكويت.
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
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            قصتنا ورسالتنا
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            بدأنا مشوارنا في مجال خدمات الصيانة المنزلية بالكويت بهدف واضح: تقديم
            حلول موثوقة وسريعة لمشاكل انسداد المجاري وتسرب المياه وحرارة الأسطح
            التي يعاني منها الكثير من المنازل والمنشآت. ومع سنوات من الخبرة
            الميدانية، أصبحنا اسماً موثوقاً في تسليك مجاري الكويت وعزل أسطح
            الكويت، نخدم العملاء في مختلف المناطق بجودة عالية واحترافية. نؤمن أن
            جودة الخدمة تبدأ من فهم احتياج العميل، لذلك نحرص على معاينة دقيقة
            وتشخيص صحيح للمشكلة قبل تقديم الحل المناسب باستخدام أحدث المعدات ومواد
            العزل عالية الجودة. نعمل على مدار 24 ساعة طوال أيام الأسبوع، لأننا
            ندرك أن مشاكل الصرف الصحي وتسربات المياه قد تحدث في أي وقت وتحتاج إلى
            استجابة فورية. كما نغطي جميع مناطق الكويت بفريق متخصص وسيارات مجهزة
            تصل إليك بأسرع وقت ممكن. رضا عملائنا هو مقياس نجاحنا الحقيقي، ولذلك
            نلتزم بالشفافية في الأسعار وتقديم ضمان على الخدمة، ونسعى دائماً
            لتجاوز توقعات عملائنا من خلال خدمة احترافية تجمع بين السرعة والجودة
            والثقة. سواء كنت بحاجة إلى تسليك مجاري بدون تكسير أو عزل مائي وحراري
            متكامل لسطح منزلك، فنحن هنا لخدمتك في أي وقت داخل الكويت.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            لماذا تختارنا؟
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خدماتنا الرئيسية
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-3xl border border-slate-100 bg-slate-50/60 p-8 shadow-sm ring-1 ring-slate-900/5">
              <h3 className="text-xl font-bold text-slate-900">تسليك المجاري</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                خدمة تسليك مجاري الكويت وفتح الانسدادات بدون تكسير باستخدام أحدث
                الأجهزة، لحل مشاكل المطابخ والحمامات والمجاري الرئيسية بسرعة
                وكفاءة على مدار 24 ساعة.
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <li>• حل فوري لمشاكل الانسداد والروائح.</li>
                <li>• بدون تكسير ودون إتلاف للأرضيات.</li>
                <li>• خدمة طوارئ سريعة في كل المناطق.</li>
              </ul>
              <Link
                href="/drain-cleaning-kuwait"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-700"
              >
                تفاصيل خدمة تسليك المجاري
              </Link>
            </article>

            <article className="flex flex-col rounded-3xl border border-slate-100 bg-slate-50/60 p-8 shadow-sm ring-1 ring-slate-900/5">
              <h3 className="text-xl font-bold text-slate-900">عزل الأسطح</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                خدمة عزل أسطح الكويت المائي والحراري وعزل الفوم بأفضل المواد
                لحماية مبناك من الحرارة وتسربات المياه، مع ضمان على الخدمة
                وحماية طويلة الأمد.
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <li>• حماية من حرارة الصيف وخفض فاتورة التكييف.</li>
                <li>• منع تسربات المياه والرطوبة.</li>
                <li>• مواد عزل عالية الجودة وفريق متخصص.</li>
              </ul>
              <Link
                href="/roof-waterproofing-kuwait"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                تفاصيل خدمة عزل الأسطح
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-bl from-sky-700 to-sky-800 p-8 text-white shadow-xl">
              <h2 className="text-2xl font-extrabold">رسالتنا</h2>
              <p className="mt-3 text-base leading-relaxed text-sky-50/90">
                تقديم خدمات صيانة منزلية عالية الجودة في الكويت تجمع بين السرعة
                والاحترافية والأسعار المناسبة، لنكون الخيار الأكثر ثقة لعملائنا.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-bl from-emerald-700 to-emerald-800 p-8 text-white shadow-xl">
              <h2 className="text-2xl font-extrabold">رؤيتنا</h2>
              <p className="mt-3 text-base leading-relaxed text-emerald-50/90">
                أن نكون من أفضل مقدمي خدمات تسليك المجاري وعزل الأسطح في الكويت من
                خلال الابتكار المستمر والالتزام برضا العملاء.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            كيف نعمل؟
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
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
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            نخدم جميع مناطق الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نصل إليك أينما كنت داخل الكويت بخدمات تسليك المجاري وعزل الأسطح في
            حولي والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير وجميع
            المناطق الأخرى.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/drain-cleaning-${area.slug}`}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-sky-600 hover:text-white"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
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
              نحن جاهزون لخدمتك في أي وقت داخل الكويت
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              اتصل بنا الآن واحصل على خدمة احترافية وسريعة بأسعار مناسبة.
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
