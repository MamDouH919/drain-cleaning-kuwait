import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { SITE_URL } from "@/lib/areas";

const PAGE_PATH = "/contact-us";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const BUSINESS_NAME = "خدمات الكويت";
const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "تواصل معنا | تسليك مجاري وعزل أسطح في الكويت 24 ساعة",
  description:
    "تواصل معنا الآن لخدمة تسليك مجاري الكويت وعزل أسطح الكويت برد سريع وخدمة طوارئ 24 ساعة في جميع المناطق. اتصل أو راسلنا واتساب على 98890031.",
  keywords: [
    "تواصل معنا الكويت",
    "تسليك مجاري الكويت",
    "عزل أسطح الكويت",
    "رقم تسليك مجاري الكويت",
    "plumber Kuwait contact",
    "waterproofing Kuwait contact",
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
    title: "تواصل معنا | تسليك مجاري وعزل أسطح في الكويت 24 ساعة",
    description:
      "رد سريع وخدمة طوارئ 24 ساعة لتسليك المجاري وعزل الأسطح في جميع مناطق الكويت. اتصل أو راسلنا واتساب.",
    siteName: BUSINESS_NAME,
    images: [
      {
        url: "/hero-service.svg",
        width: 720,
        height: 720,
        alt: "تواصل معنا لخدمات تسليك المجاري وعزل الأسطح في الكويت",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا | تسليك مجاري وعزل أسطح في الكويت 24 ساعة",
    description:
      "رد سريع وخدمة طوارئ 24 ساعة لتسليك المجاري وعزل الأسطح في جميع مناطق الكويت.",
    images: ["/hero-service.svg"],
  },
};

const whyContact = [
  { title: "رد سريع خلال دقائق", desc: "نرد على طلبك فور وصوله ونحدد موعد الوصول." },
  { title: "خدمة 24 ساعة", desc: "متواجدون ليلاً ونهاراً طوال أيام الأسبوع." },
  { title: "فنيون متخصصون", desc: "فريق مدرب على أحدث تقنيات التسليك والعزل." },
  { title: "أسعار مناسبة", desc: "تقييم وسعر واضح قبل بدء العمل بدون رسوم خفية." },
  { title: "بدون تكسير", desc: "حل الانسدادات بأحدث الأجهزة دون إتلاف المكان." },
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
    question: "كيف أتواصل بسرعة؟",
    answer:
      "أسرع طريقة هي الاتصال المباشر على الرقم 98890031 أو إرسال رسالة عبر واتساب، ويتم الرد عليك فوراً على مدار الساعة.",
  },
  {
    question: "هل يوجد خدمة طوارئ؟",
    answer:
      "نعم، نوفر خدمة طوارئ 24 ساعة للتعامل مع انسداد المجاري أو تسربات المياه بشكل فوري في جميع مناطق الكويت.",
  },
  {
    question: "كم وقت الوصول إليّ؟",
    answer:
      "نحرص على الوصول إليك خلال وقت قصير حسب موقعك داخل الكويت، وغالباً خلال 30 دقيقة.",
  },
  {
    question: "هل الخدمة متوفرة 24 ساعة؟",
    answer:
      "نعم، خدمات تسليك المجاري وعزل الأسطح متوفرة على مدار 24 ساعة طوال أيام الأسبوع.",
  },
  {
    question: "هل يوجد تسليك مجاري بدون تكسير؟",
    answer:
      "نعم، نستخدم أحدث الأجهزة التي تسمح بفتح المجاري وحل الانسدادات بدون أي تكسير أو إتلاف للمكان.",
  },
  {
    question: "هل تغطون جميع مناطق الكويت؟",
    answer:
      "نعم، نغطي جميع مناطق الكويت مثل حولي والسالمية والفروانية والجهراء والأحمدي ومبارك الكبير.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${PAGE_URL}/#contactpage`,
      url: PAGE_URL,
      name: "تواصل معنا",
      inLanguage: "ar",
      about: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "ContactPoint",
      telephone: PHONE_NUMBER,
      contactType: "customer service",
      areaServed: "KW",
      availableLanguage: ["ar"],
      url: WHATSAPP_URL,
      parentOrganization: { "@id": `${SITE_URL}/#business` },
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

export default function ContactUsPage() {
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
            رد سريع وخدمة طوارئ 24 ساعة
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            تواصل معنا الآن لخدمة سريعة في الكويت 24 ساعة
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            نحن على استعداد لخدمتك في أي وقت برد سريع وخدمة طوارئ على مدار الساعة
            لتسليك المجاري وعزل الأسطح في جميع مناطق الكويت. اتصل بنا أو راسلنا
            واتساب وسنصل إليك بأسرع وقت.
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
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="sr-only">معلومات التواصل</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-center shadow-sm ring-1 ring-slate-900/5 transition hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-bl from-sky-600 to-emerald-600 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
              </span>
              <span className="text-sm font-bold text-slate-900">اتصل بنا</span>
              <span className="text-sm font-bold tabular-nums text-sky-700" dir="ltr">
                {PHONE_DISPLAY}
              </span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-center shadow-sm ring-1 ring-slate-900/5 transition hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 8.23 8.24c0 4.54-3.7 8.23-8.24 8.23Z" />
                </svg>
              </span>
              <span className="text-sm font-bold text-slate-900">واتساب</span>
              <span className="text-sm font-medium text-emerald-700">راسلنا الآن</span>
            </a>

            <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-center shadow-sm ring-1 ring-slate-900/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-bl from-sky-600 to-emerald-600 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10a1 1 0 0 1-.29.71l-3 3-1.42-1.42L11 11.59V6h2v6Z" />
                </svg>
              </span>
              <span className="text-sm font-bold text-slate-900">ساعات العمل</span>
              <span className="text-sm font-medium text-slate-600">24 ساعة / 7 أيام</span>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-center shadow-sm ring-1 ring-slate-900/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-bl from-sky-600 to-emerald-600 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 4.5 7 13 7 13s7-8.5 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
              </span>
              <span className="text-sm font-bold text-slate-900">مناطق الخدمة</span>
              <span className="text-sm font-medium text-slate-600">جميع مناطق الكويت</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                أرسل لنا طلبك
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                املأ النموذج وسيتواصل معك فريقنا في أقرب وقت، أو راسلنا مباشرة عبر
                واتساب لخدمة أسرع.
              </p>
              <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8">
                <ContactForm />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                لماذا تتواصل معنا؟
              </h2>
              <ul className="flex flex-col gap-4">
                {whyContact.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ring-1 ring-slate-900/5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42.001l-3.75-3.77a1 1 0 0 1 1.418-1.41l3.04 3.057 6.541-6.605a1 1 0 0 1 1.415-.006Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-base font-bold text-slate-900">{item.title}</span>
                      <span className="text-sm leading-relaxed text-slate-600">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
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
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-sky-600 hover:text-white"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            موقعنا داخل الكويت
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            نغطي جميع مناطق الكويت بخدمة متنقلة تصل إليك أينما كنت.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <iframe
              title="موقع الخدمة في الكويت"
              src="https://www.google.com/maps?q=Kuwait&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            الأسئلة الشائعة عن التواصل
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
              لا تنتظر المشكلة تكبر — تواصل الآن
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              فريقنا جاهز لخدمتك على مدار الساعة بأسعار مناسبة وضمان على الخدمة.
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
