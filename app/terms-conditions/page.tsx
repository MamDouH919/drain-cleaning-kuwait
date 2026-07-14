import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/areas";

const PAGE_PATH = "/terms-conditions";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const BUSINESS_NAME = "خدمات الكويت";
const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "الشروط والأحكام | خدمات تسليك المجاري وعزل الأسطح في الكويت",
  description:
    "الشروط والأحكام الخاصة باستخدام موقع وخدمات تسليك المجاري وعزل الأسطح في الكويت، تعرف على شروط طلب الخدمة والأسعار والضمان والمسؤوليات.",
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
    title: "الشروط والأحكام | خدمات الكويت",
    description:
      "شروط وأحكام استخدام خدمات تسليك المجاري وعزل الأسطح في الكويت، الأسعار والضمان والمسؤوليات.",
    siteName: BUSINESS_NAME,
  },
};

const sections = [
  {
    title: "قبول الشروط",
    body: [
      "باستخدامك لموقع خدمات الكويت أو طلب أي من خدماتنا في تسليك المجاري وعزل الأسطح والصيانة المنزلية، فإنك توافق على الالتزام بالشروط والأحكام الموضحة في هذه الصفحة. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع أو طلب الخدمة.",
    ],
  },
  {
    title: "نطاق الخدمة",
    body: [
      "نقدم خدمات تسليك المجاري وفتح الانسدادات وعزل الأسطح المائي والحراري وعزل الفوم وخدمات الصيانة المنزلية في جميع مناطق الكويت. نبذل قصارى جهدنا لتقديم خدمة احترافية وسريعة، ويتم تحديد تفاصيل كل خدمة بعد معاينة حالة العميل.",
    ],
  },
  {
    title: "الأسعار والدفع",
    body: [
      "نلتزم بتقديم تقييم وسعر واضح قبل بدء العمل بدون رسوم خفية. تختلف الأسعار حسب طبيعة العمل ودرجة المشكلة ونوع العقار. يتم الاتفاق على السعر النهائي مع العميل قبل تنفيذ الخدمة، ويكون الدفع بعد إنجاز العمل ما لم يتم الاتفاق على غير ذلك.",
    ],
  },
  {
    title: "الضمان على الخدمة",
    body: [
      "نقدم ضماناً على الخدمات التي نؤديها وفقاً لطبيعة كل خدمة، ويشمل الضمان جودة التنفيذ. لا يشمل الضمان أي أضرار ناتجة عن سوء الاستخدام أو مشاكل خارجة عن نطاق الخدمة المتفق عليها أو تدخل طرف آخر بعد تنفيذ العمل.",
    ],
  },
  {
    title: "مسؤوليات العميل",
    body: [
      "يلتزم العميل بتوفير معلومات صحيحة عن المشكلة ومكانها، وتسهيل وصول الفريق إلى موقع العمل. كما يلتزم العميل بإبلاغنا بأي ملاحظات فور انتهاء الخدمة حتى نتمكن من معالجتها ضمن الضمان.",
    ],
  },
  {
    title: "حدود المسؤولية",
    body: [
      "نحرص على تقديم خدماتنا بأعلى جودة ممكنة، إلا أننا لا نتحمل المسؤولية عن أي أضرار غير مباشرة أو ظروف خارجة عن إرادتنا. تقتصر مسؤوليتنا على نطاق الخدمة المتفق عليها مع العميل.",
    ],
  },
  {
    title: "الملكية الفكرية",
    body: [
      "جميع محتويات هذا الموقع من نصوص وصور وتصميم مملوكة لخدمات الكويت، ولا يجوز نسخها أو إعادة استخدامها دون إذن مسبق.",
    ],
  },
  {
    title: "تعديل الشروط",
    body: [
      "نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. يتم نشر أي تعديلات على هذه الصفحة، ويُعد استمرارك في استخدام الموقع أو طلب الخدمة موافقة على الشروط المحدثة.",
    ],
  },
  {
    title: "التواصل معنا",
    body: [
      "لأي استفسار حول الشروط والأحكام أو خدماتنا، يمكنك التواصل معنا مباشرة على الرقم 98890031 أو عبر واتساب على مدار 24 ساعة.",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}/#webpage`,
  name: "الشروط والأحكام",
  url: PAGE_URL,
  inLanguage: "ar",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "الشروط والأحكام", item: PAGE_URL },
    ],
  },
};

export default function TermsConditionsPage() {
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
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
            شفافية والتزام
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            الشروط والأحكام
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            تُوضح هذه الصفحة شروط وأحكام استخدام موقعنا وطلب خدمات تسليك المجاري
            وعزل الأسطح في الكويت، بما في ذلك الأسعار والضمان والمسؤوليات.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  {section.title}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-lg leading-relaxed text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>

          <p className="mt-12 text-base leading-relaxed text-slate-600">
            اطلع أيضاً على{" "}
            <Link href="/privacy-policy" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              سياسة الخصوصية
            </Link>
            ، وتعرف على أسعار خدماتنا في صفحتي{" "}
            <Link href="/drain-cleaning-prices-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              اسعار تسليك مجاري الكويت
            </Link>{" "}
            و
            <Link href="/roof-insulation-prices-kuwait" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
              {" "}اسعار عزل اسطح الكويت
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              لديك سؤال عن شروط الخدمة؟
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              تواصل معنا في أي وقت وسنوضح لك كل ما تحتاج معرفته قبل طلب الخدمة.
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
