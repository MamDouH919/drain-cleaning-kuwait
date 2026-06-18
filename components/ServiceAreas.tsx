import Link from "next/link";

const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

const areas = [
  { name: "حولي", slug: "hawalli" },
  { name: "السالمية", slug: "salmiya" },
  { name: "الفروانية", slug: "farwaniya" },
  { name: "الجهراء", slug: "jahra" },
  { name: "الأحمدي", slug: "ahmadi" },
  { name: "مبارك الكبير", slug: "mubarak-kabeer" },
];

export default function ServiceAreas() {
  return (
    <section
      id="areas"
      dir="rtl"
      aria-labelledby="areas-heading"
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 4.5 7 13 7 13s7-8.5 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
            </svg>
            خدمة في جميع مناطق الكويت
          </span>

          <h2
            id="areas-heading"
            className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            المناطق التي نخدمها
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            نقدم خدمات تسليك المجاري وعزل الأسطح في جميع مناطق الكويت مع سرعة
            استجابة عالية وخدمة 24 ساعة.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <li
              key={area.slug}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-2xl hover:shadow-slate-300/50"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-bl from-sky-50 to-emerald-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-bl from-sky-600 to-emerald-600 text-white shadow-md shadow-sky-600/25 transition-transform duration-300 group-hover:scale-105">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 2a7 7 0 0 0-7 7c0 4.5 7 13 7 13s7-8.5 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                </span>

                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-sky-700">
                    {area.name}
                    <span className="sr-only">
                      {" "}
                      — تسليك مجاري {area.name} وعزل أسطح {area.name}
                    </span>
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    خدمات تسليك مجاري الكويت وعزل الأسطح في {area.name} بسرعة
                    واستجابة فورية.
                  </p>
                </div>
              </div>

              <div className="mt-auto grid grid-cols-2 gap-2">
                <Link
                  href={`/drain-cleaning-${area.slug}`}
                  aria-label={`تسليك مجاري ${area.name}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-sky-50 px-3 py-2.5 text-sm font-bold text-sky-700 transition-colors hover:bg-sky-600 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M7 2a1 1 0 0 0-1 1v6a6 6 0 0 0 5 5.917V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-5.083A6 6 0 0 0 18 9V3a1 1 0 0 0-1-1H7Zm1 2h8v2H8V4Zm0 4h8v1a4 4 0 0 1-8 0V8Z" />
                  </svg>
                  تسليك مجاري
                </Link>
                <Link
                  href={`/roof-waterproofing-${area.slug}`}
                  aria-label={`عزل أسطح ${area.name}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 px-3 py-2.5 text-sm font-bold text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M12 2 2 9h2v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9h2L12 2Zm0 6.5 5 3.75V19h-3v-4a2 2 0 0 0-4 0v4H7v-6.75l5-3.75Z" />
                  </svg>
                  عزل أسطح
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-bl from-slate-900 via-slate-800 to-sky-900 p-8 shadow-xl sm:p-12">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-right">
            <div className="max-w-xl">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                مش لاقي منطقتك؟
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
                اتصل بنا الآن ونصل إليك أينما كنت داخل الكويت خلال وقت قصير.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                  <span aria-hidden="true">⚡</span>
                  استجابة خلال 30 دقيقة داخل الكويت
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER}`}
                aria-label="اتصل الآن"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-slate-900 shadow-lg transition hover:bg-slate-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
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
