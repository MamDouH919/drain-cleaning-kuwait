import Link from "next/link";
import { SITE_URL } from "@/lib/areas";

const BUSINESS_NAME = "خدمات الكويت";
const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

const quickLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/#services" },
  { label: "المناطق", href: "/areas" },
  { label: "المقالات", href: "/articles" },
  { label: "من نحن", href: "/about-us" },
  { label: "تواصل معنا", href: "/contact-us" },
];

const services = [
  { label: "تسليك مجاري الكويت", href: "/drain-cleaning-kuwait" },
  { label: "تسليك مجاري المطابخ والحمامات", href: "/kitchen-bathroom-drain-cleaning-kuwait" },
  { label: "عزل أسطح الكويت", href: "/roof-waterproofing-kuwait" },
  { label: "العزل المائي والحراري", href: "/thermal-waterproofing-kuwait" },
  { label: "تركيب مكينة سرداب", href: "/basement-pump-kuwait" },
  { label: "تركيب منهول الكويت", href: "/manhole-installation-kuwait" },
  { label: "غسيل تانكي الكويت", href: "/water-tank-cleaning-kuwait" },
  { label: "عزل أسطح جيتاروف", href: "/gitaroof-insulation-kuwait" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE_NUMBER,
  image: `${SITE_URL}/hero-service.svg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KW",
    addressRegion: "الكويت",
  },
  areaServed: {
    "@type": "Country",
    name: "الكويت",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "تسليك مجاري الكويت" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "عزل أسطح الكويت" },
    },
  ],
};

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative w-full bg-gradient-to-bl from-slate-950 via-slate-900 to-slate-950 text-slate-300"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="overflow-hidden border-b border-white/10 bg-gradient-to-l from-sky-700 to-emerald-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-8 text-center sm:px-8 lg:flex-row lg:justify-between lg:text-right">
          <p className="text-lg font-extrabold text-white sm:text-xl">
            نصل إليك أينما كنت داخل الكويت خلال 30 دقيقة
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="اتصل الآن"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-sky-700 shadow-lg transition hover:bg-sky-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
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

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-bl from-sky-600 to-emerald-600 text-white shadow-sm">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 2c-.55 0-1.05.3-1.32.78l-7.5 13A1.5 1.5 0 0 0 4.5 18h15a1.5 1.5 0 0 0 1.32-2.22l-7.5-13A1.51 1.51 0 0 0 12 2Zm-1 6h2v5h-2V8Zm0 6h2v2h-2v-2Z" />
                </svg>
              </span>
              <span className="text-xl font-extrabold text-white">
                {BUSINESS_NAME}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              نقدم خدمات تسليك المجاري وعزل الأسطح في جميع مناطق الكويت على مدار
              24 ساعة بأحدث المعدات وأفضل الأسعار.
            </p>
          </div>

          <nav aria-label="روابط سريعة" className="flex flex-col gap-4">
            <h2 className="text-base font-bold text-white">روابط سريعة</h2>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-sky-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="خدماتنا" className="flex flex-col gap-4">
            <h2 className="text-base font-bold text-white">خدماتنا</h2>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 transition-colors hover:text-sky-400"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="text-base font-bold text-white">تواصل معنا</h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-sky-400"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-sky-500"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                  </svg>
                  <span className="font-bold tabular-nums" dir="ltr">
                    {PHONE_DISPLAY}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-emerald-400"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-emerald-500"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.25.69-1.45 1.32-1.99 1.4-.53.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.36-5.16-4.57-.15-.2-1.23-1.63-1.23-3.12s.78-2.21 1.06-2.51c.28-.3.61-.38.81-.38l.58.01c.19.01.44-.07.69.53.25.6.85 2.08.92 2.23.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2.01.96.3.15.5.22.57.35.07.13.07.73-.18 1.42Z" />
                  </svg>
                  تواصل عبر واتساب
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-slate-400">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-500"
                >
                  <path d="M12 2a7 7 0 0 0-7 7c0 4.5 7 13 7 13s7-8.5 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
                جميع مناطق الكويت — خدمة 24 ساعة
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-slate-500 sm:px-8">
          © {new Date().getFullYear()} {BUSINESS_NAME} — جميع الحقوق محفوظة.
          خدمات تسليك مجاري الكويت وعزل أسطح الكويت.
        </div>
      </div>
    </footer>
  );
}
