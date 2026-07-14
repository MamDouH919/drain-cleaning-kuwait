import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/areas";

const PAGE_PATH = "/privacy-policy";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const BUSINESS_NAME = "خدمات الكويت";
const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "سياسة الخصوصية | خدمات تسليك المجاري وعزل الأسطح في الكويت",
  description:
    "سياسة الخصوصية الخاصة بموقع خدمات تسليك المجاري وعزل الأسطح في الكويت، تعرف على كيفية جمع بياناتك واستخدامها وحمايتها عند طلب خدماتنا.",
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
    title: "سياسة الخصوصية | خدمات الكويت",
    description:
      "سياسة الخصوصية وكيفية جمع بياناتك واستخدامها وحمايتها عند طلب خدمات تسليك المجاري وعزل الأسطح في الكويت.",
    siteName: BUSINESS_NAME,
  },
};

const sections = [
  {
    title: "مقدمة",
    body: [
      "نحن في خدمات الكويت نحترم خصوصية زوار موقعنا وعملائنا، ونلتزم بحماية أي بيانات شخصية تشاركها معنا عند طلب خدمات تسليك المجاري أو عزل الأسطح أو أي من خدمات الصيانة المنزلية. توضح سياسة الخصوصية هذه أنواع المعلومات التي نجمعها وكيفية استخدامها وحمايتها.",
    ],
  },
  {
    title: "المعلومات التي نجمعها",
    body: [
      "قد نجمع بعض المعلومات الأساسية التي تساعدنا على تقديم الخدمة لك، مثل الاسم ورقم الهاتف والمنطقة أو العنوان الذي تطلب فيه الخدمة، بالإضافة إلى تفاصيل المشكلة التي تحتاج حلها. نجمع هذه المعلومات فقط عندما تتواصل معنا عبر الهاتف أو واتساب أو نموذج التواصل في الموقع.",
    ],
  },
  {
    title: "كيفية استخدام المعلومات",
    body: [
      "نستخدم بياناتك لأغراض تقديم الخدمة والتواصل معك وتحديد موعد الزيارة وإعطائك تصوراً واضحاً عن السعر. كما قد نستخدمها لتحسين جودة خدماتنا والرد على استفساراتك. لا نستخدم بياناتك لأي أغراض أخرى دون علمك.",
    ],
  },
  {
    title: "حماية البيانات",
    body: [
      "نتخذ إجراءات معقولة للحفاظ على سرية معلوماتك وحمايتها من الوصول غير المصرح به. لا نبيع أو نؤجر بياناتك الشخصية لأي طرف ثالث، ولا نشاركها إلا في الحدود اللازمة لتقديم الخدمة المطلوبة أو عند وجود التزام قانوني.",
    ],
  },
  {
    title: "ملفات تعريف الارتباط (الكوكيز) والإحصاءات",
    body: [
      "قد يستخدم موقعنا أدوات تحليلية مثل Google Analytics لفهم كيفية استخدام الزوار للموقع بهدف تحسين تجربتك. هذه الأدوات قد تستخدم ملفات تعريف الارتباط لجمع بيانات إحصائية عامة لا تحدد هويتك الشخصية. يمكنك ضبط متصفحك لرفض ملفات تعريف الارتباط في أي وقت.",
    ],
  },
  {
    title: "روابط لمواقع أخرى",
    body: [
      "قد يحتوي موقعنا على روابط لمواقع خارجية مثل واتساب. لسنا مسؤولين عن سياسات الخصوصية الخاصة بتلك المواقع، وننصحك بمراجعة سياسات الخصوصية الخاصة بكل موقع تزوره.",
    ],
  },
  {
    title: "التعديلات على سياسة الخصوصية",
    body: [
      "قد نقوم بتحديث سياسة الخصوصية من وقت لآخر لتواكب التغييرات في خدماتنا أو المتطلبات القانونية. سيتم نشر أي تعديلات على هذه الصفحة، ويُعد استمرارك في استخدام الموقع موافقة على السياسة المحدثة.",
    ],
  },
  {
    title: "التواصل معنا",
    body: [
      "إذا كان لديك أي استفسار حول سياسة الخصوصية أو طريقة تعاملنا مع بياناتك، يمكنك التواصل معنا مباشرة على الرقم 98890031 أو عبر واتساب، وسنكون سعداء بالرد على استفساراتك.",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}/#webpage`,
  name: "سياسة الخصوصية",
  url: PAGE_URL,
  inLanguage: "ar",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "سياسة الخصوصية", item: PAGE_URL },
    ],
  },
};

export default function PrivacyPolicyPage() {
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
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
            خصوصيتك تهمنا
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            سياسة الخصوصية
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            نلتزم بحماية بياناتك الشخصية عند استخدامك لموقعنا أو طلب خدمات تسليك
            المجاري وعزل الأسطح في الكويت. توضح هذه الصفحة كيفية جمع بياناتك
            واستخدامها وحمايتها.
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
            <Link href="/terms-conditions" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              الشروط والأحكام
            </Link>{" "}
            الخاصة باستخدام خدماتنا، أو تعرف على{" "}
            <Link href="/about-us" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              من نحن
            </Link>{" "}
            و
            <Link href="/contact-us" className="font-bold text-sky-700 underline-offset-4 hover:underline">
              {" "}تواصل معنا
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              لديك استفسار عن خصوصيتك؟
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              تواصل معنا في أي وقت وسنكون سعداء بالرد على استفساراتك.
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
