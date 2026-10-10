import Link from "next/link";
import { coreServices, priceLinks } from "@/lib/services";

const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

// أيقونة لكل خدمة، بمفتاح `id` من `coreServices`.
const serviceIcons: Record<(typeof coreServices)[number]["id"], string> = {
  "drain": "M7 2a1 1 0 0 0-1 1v6a6 6 0 0 0 5 5.917V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-5.083A6 6 0 0 0 18 9V3a1 1 0 0 0-1-1H7Zm1 2h8v2H8V4Zm0 4h8v1a4 4 0 0 1-8 0V8Z",
  "roof": "M12 2 2 9h2v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9h2L12 2Zm0 6.5 5 3.75V19h-3v-4a2 2 0 0 0-4 0v4H7v-6.75l5-3.75Z",
  "kitchen-bathroom": "M5 2a1 1 0 0 0-1 1v5a4 4 0 0 0 3 3.874V21a1 1 0 1 0 2 0v-9.126A4 4 0 0 0 12 8V3a1 1 0 1 0-2 0v4H9V3a1 1 0 0 0-2 0v4H6V3a1 1 0 0 0-1-1Zm13 0a3 3 0 0 0-3 3v6h-1a1 1 0 0 0-1 1v3a3 3 0 0 0 3 3h.5a1 1 0 0 0 1-1v-2h.5a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z",
  "thermal": "M12 2c-.5 0-.96.26-1.22.69C9.3 5.06 6 10.73 6 14a6 6 0 0 0 12 0c0-3.27-3.3-8.94-4.78-11.31A1.43 1.43 0 0 0 12 2Zm0 16a4 4 0 0 1-4-4c0-.55.45-1 1-1s1 .45 1 1a2 2 0 0 0 2 2c.55 0 1 .45 1 1s-.45 1-1 1Z",
  "basement": "M4 21a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4V8a1 1 0 0 1 1-1h2V5h-1a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v2h1a1 1 0 0 1 1 1v3h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4Zm6-14v2h2V7h-2Zm-5 9v3h14v-2h-2a1 1 0 0 1-1-1v-3h-8v3a1 1 0 0 1-1 1H5Z",
  "manhole": "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 0 1 7.75 6H4.25A8 8 0 0 1 12 4Zm-7.75 8h15.5A8 8 0 0 1 12 20a8 8 0 0 1-7.75-8Z",
  "tank": "M5 3h14a1 1 0 0 1 1 1v15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1Zm1 2v3h12V5H6Zm12 5H6v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9Zm-6 2c1.7 1.9 3 3.5 3 5a3 3 0 0 1-6 0c0-1.5 1.3-3.1 3-5Z",
  "gitaroof": "M12 2 2 9h2v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9h2L12 2Zm-5 9h10a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2Zm0 4h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Z",
};

export default function Services() {
  return (
    <section
      id="services"
      dir="rtl"
      aria-labelledby="services-heading"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42.001l-3.75-3.77a1 1 0 0 1 1.418-1.41l3.04 3.057 6.541-6.605a1 1 0 0 1 1.415-.006Z"
                clipRule="evenodd"
              />
            </svg>
            خدمات احترافية في جميع مناطق الكويت
          </span>

          <h2
            id="services-heading"
            className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            خدماتنا
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            ثماني خدمات صيانة منزلية ينفذها فريق متخصص في جميع مناطق الكويت،
            اختر الخدمة التي تحتاجها لمعرفة تفاصيلها.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service) => (
            <li
              key={service.href}
              className="group relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/50"
            >
              <span
                aria-hidden="true"
                className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-tr from-sky-100 to-emerald-100 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />

              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-bl from-sky-600 to-emerald-600 text-white shadow-lg shadow-sky-600/25 transition-transform duration-300 group-hover:scale-105">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d={serviceIcons[service.id]} />
                </svg>
              </span>

              <div className="relative flex flex-col gap-2">
                <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-sky-700">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>

              <Link
                href={service.href}
                className="relative mt-auto inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2.5 text-sm font-bold text-sky-700 transition-colors hover:bg-sky-600 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
              >
                {service.anchor}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-base text-slate-700">
          للاطلاع على الأسعار التقريبية:{" "}
          {priceLinks.map((link, index) => (
            <span key={link.href}>
              {index > 0 && " و"}
              <Link
                href={link.href}
                className="font-bold text-sky-700 underline decoration-sky-300 underline-offset-4 transition-colors hover:text-sky-900"
              >
                {link.anchor}
              </Link>
            </span>
          ))}
          .
        </p>

        <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 shadow-xl sm:p-12">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-right">
            <div className="max-w-xl">
              <p className="text-2xl font-extrabold text-white sm:text-3xl">
                تحتاج إلى خدمة سريعة؟
              </p>
              <p className="mt-3 text-base leading-relaxed text-sky-50/90 sm:text-lg">
                تواصل معنا الآن واحصل على خدمة احترافية بأسرع وقت.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                  <span aria-hidden="true">🕒</span>
                  خدمة 24 ساعة
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                  <span aria-hidden="true">⚡</span>
                  سرعة استجابة
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER}`}
                aria-label="اتصل الآن"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-sky-700 shadow-lg transition hover:bg-sky-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
                {PHONE_DISPLAY} | اتصل الآن
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل عبر واتساب"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-bold text-white shadow-lg transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.25.69-1.45 1.32-1.99 1.4-.53.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.36-5.16-4.57-.15-.2-1.23-1.63-1.23-3.12s.78-2.21 1.06-2.51c.28-.3.61-.38.81-.38l.58.01c.19.01.44-.07.69.53.25.6.85 2.08.92 2.23.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2.01.96.3.15.5.22.57.35.07.13.07.73-.18 1.42Z" />
                </svg>
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
