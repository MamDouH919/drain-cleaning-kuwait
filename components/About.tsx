import Link from "next/link";

const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

export default function About() {
  return (
    <section
      id="about"
      dir="rtl"
      aria-labelledby="about-heading"
      className="relative w-full overflow-hidden bg-gradient-to-bl from-sky-50 via-white to-emerald-50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm-1.2 14.6L7 11.8l1.4-1.4 2.4 2.4 5.2-5.2L17.4 9l-6.6 6.6Z" />
              </svg>
              شركة موثوقة في الكويت
            </span>

            <h2
              id="about-heading"
              className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              من نحن
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              <strong className="font-bold text-slate-800">دار الصيانة الكويتية</strong> شركة
              متخصصة في{" "}
              <Link href="/drain-cleaning-kuwait" className="font-bold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900">
                تسليك مجاري الكويت
              </Link>{" "}
              و
              <Link href="/roof-waterproofing-kuwait" className="font-bold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900">
                عزل أسطح الكويت
              </Link>
              ، نعتمد على فريق من الفنيين المدربين
              وأحدث المعدات والتقنيات لحل جميع مشاكل انسداد المجاري والصرف الصحي
              وعزل الأسطح المائي والحراري بأعلى جودة وبدون تكسير. نقدم خدمة سريعة
              على مدار 24 ساعة طوال أيام الأسبوع، ونصل إليك في جميع مناطق الكويت
              مع ضمان حقيقي على جودة الخدمة.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              هدفنا هو تقديم خدمة احترافية تجمع بين السرعة والجودة والأسعار
              المناسبة، لنكون خيارك الأول لخدمات الصيانة المنزلية في الكويت.
            </p>

            <div className="mt-9 overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 shadow-xl">
              <p className="text-2xl font-extrabold text-white">
                جاهز نساعدك؟
              </p>
              <p className="mt-2 text-base leading-relaxed text-sky-50/90">
                تواصل معنا الآن واحصل على خدمة احترافية بأسرع وقت.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
      </div>
    </section>
  );
}
