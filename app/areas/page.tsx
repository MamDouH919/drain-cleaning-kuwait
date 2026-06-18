import type { Metadata } from "next";
import Link from "next/link";
import {
  SITE_URL,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  areas,
  serviceConfigs,
} from "@/lib/areas";

const PAGE_PATH = "/areas";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "مناطق الخدمة | تسليك مجاري وعزل أسطح في جميع مناطق الكويت",
  description:
    "نقدم خدمات تسليك المجاري وعزل الأسطح في جميع مناطق الكويت مثل حولي والسالمية والفروانية والجهراء والأحمدي والفحيحيل بسرعة استجابة وخدمة 24 ساعة.",
  keywords: [
    "تسليك مجاري في الكويت",
    "عزل أسطح في الكويت",
    "مناطق الكويت خدمات",
    "drain cleaning Kuwait areas",
    "roof waterproofing Kuwait locations",
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
    title: "مناطق الخدمة | تسليك مجاري وعزل أسطح في جميع مناطق الكويت",
    description:
      "خدمات تسليك المجاري وعزل الأسطح في جميع مناطق الكويت بسرعة استجابة وخدمة 24 ساعة.",
    siteName: "خدمات الكويت",
    images: [{ url: "/hero-service.svg", width: 720, height: 720, alt: "مناطق الخدمة في الكويت" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "مناطق الخدمة | تسليك مجاري وعزل أسطح في جميع مناطق الكويت",
    description:
      "خدمات تسليك المجاري وعزل الأسطح في جميع مناطق الكويت بسرعة استجابة وخدمة 24 ساعة.",
    images: ["/hero-service.svg"],
  },
};

const drain = serviceConfigs["drain-cleaning"];
const roof = serviceConfigs["roof-waterproofing"];

export default function AreasPage() {
  return (
    <main className="flex-1" dir="rtl">
      <section className="relative w-full overflow-hidden bg-gradient-to-bl from-sky-50 via-white to-emerald-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
            تغطية شاملة لجميع مناطق الكويت
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            مناطق خدمة تسليك المجاري وعزل الأسطح في الكويت
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            نصل إليك أينما كنت داخل الكويت بخدمات تسليك المجاري وعزل الأسطح
            المائي والحراري، مع سرعة استجابة وخدمة طوارئ على مدار 24 ساعة في جميع
            المناطق.
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
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:py-16">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            خدمات منزلية في كل مناطق الكويت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نوفر خدمة تسليك مجاري في الكويت وعزل أسطح في الكويت تغطي جميع المناطق
            السكنية والتجارية. اختر منطقتك من القائمة بالأسفل للانتقال إلى صفحة
            الخدمة الخاصة بها ومعرفة التفاصيل وطلب الخدمة بسرعة. نعمل على مدار
            الساعة بفريق متخصص وأحدث المعدات لضمان حل سريع وموثوق لأي مشكلة في
            الصرف الصحي أو عزل الأسطح.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            تسليك المجاري حسب المنطقة
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/${drain.prefix}${area.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg"
                >
                  <span className="flex flex-col">
                    <span className="text-base font-bold text-slate-900 group-hover:text-sky-700">
                      تسليك مجاري {area.name}
                    </span>
                    <span className="text-xs text-slate-500">خدمة 24 ساعة بدون تكسير</span>
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-slate-400 transition group-hover:-translate-x-1 group-hover:text-sky-600"
                    aria-hidden="true"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            عزل الأسطح حسب المنطقة
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/${roof.prefix}${area.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-5 shadow-sm ring-1 ring-slate-900/5 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg"
                >
                  <span className="flex flex-col">
                    <span className="text-base font-bold text-slate-900 group-hover:text-emerald-700">
                      عزل أسطح {area.name}
                    </span>
                    <span className="text-xs text-slate-500">عزل مائي وحراري بضمان</span>
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-slate-400 transition group-hover:-translate-x-1 group-hover:text-emerald-600"
                    aria-hidden="true"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              منطقتك غير موجودة؟ نصل إليك أينما كنت
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              اتصل بنا الآن ونصل إليك في أي منطقة داخل الكويت خلال وقت قصير.
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
