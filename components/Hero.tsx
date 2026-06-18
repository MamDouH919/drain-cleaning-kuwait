import Image from "next/image";

const PHONE_NUMBER = "+96598890031";
const WHATSAPP_NUMBER = "96598890031";
const WHATSAPP_MESSAGE = encodeURIComponent(
    "مرحباً، أرغب في الاستفسار عن خدمات تسليك المجاري وعزل الأسطح في الكويت."
);

const trustFeatures = [
    { title: "خدمة 24 ساعة", desc: "متواجدون ليلاً ونهاراً" },
    { title: "ضمان على الخدمة", desc: "نضمن جودة العمل" },
    { title: "أسعار مناسبة", desc: "بدون رسوم خفية" },
    { title: "وصول سريع", desc: "في جميع المناطق" },
];

const serviceAreas = [
    "حولي",
    "السالمية",
    "الجهراء",
    "الفروانية",
    "الأحمدي",
];

export default function Hero() {
    return (
        <section
            dir="rtl"
            aria-labelledby="hero-heading"
            className="relative w-full overflow-hidden bg-gradient-to-bl from-sky-50 via-white to-emerald-50"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-emerald-200/40 blur-3xl"
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
                <div className="flex flex-col items-start text-right">
                    <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </span>
                        خدمة 24 ساعة في جميع مناطق الكويت
                    </span>

                    <h1
                        id="hero-heading"
                        className="mt-6 text-4xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                    >
                        تسليك مجاري الكويت وعزل أسطح الكويت{" "}
                        <span className="bg-gradient-to-l from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                            24 ساعة
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                        نقدم خدمات تسليك مجاري الكويت وشفط البيارات وعزل الأسطح المائي
                        والحراري بأحدث الأجهزة مع سرعة استجابة وخدمة 24 ساعة في جميع مناطق
                        الكويت.
                    </p>

                    <div className="mt-6 flex w-full max-w-xl flex-wrap items-center gap-x-2 gap-y-2 text-sm">
                        <span className="font-semibold text-slate-700">
                            خدمة متوفرة في:
                        </span>
                        {serviceAreas.map((area) => (
                            <span
                                key={area}
                                className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 font-medium text-slate-600 shadow-sm"
                            >
                                {area}
                            </span>
                        ))}
                    </div>

                    <ul className="mt-8 grid w-full max-w-xl grid-cols-2 gap-3 sm:gap-4">
                        {trustFeatures.map((feature) => (
                            <li
                                key={feature.title}
                                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:shadow-md"
                            >
                                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
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
                                </span>
                                <span className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-900">
                                        {feature.title}
                                    </span>
                                    <span className="text-xs text-slate-500">{feature.desc}</span>
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-9 flex w-full max-w-xl flex-col gap-4 sm:flex-row">
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            aria-label="اتصل الآن"
                            className="group inline-flex flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-l from-sky-600 to-sky-700 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-sky-600/25 transition hover:from-sky-700 hover:to-sky-800 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6 transition group-hover:rotate-12"
                            >
                                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                            </svg>
                            اتصل الآن
                        </a>
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="تواصل عبر واتساب"
                            className="group inline-flex flex-1 items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-white px-7 py-4 text-lg font-bold text-emerald-700 shadow-md transition hover:bg-emerald-50 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.25.69-1.45 1.32-1.99 1.4-.53.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.36-5.16-4.57-.15-.2-1.23-1.63-1.23-3.12s.78-2.21 1.06-2.51c.28-.3.61-.38.81-.38l.58.01c.19.01.44-.07.69.53.25.6.85 2.08.92 2.23.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2.01.96.3.15.5.22.57.35.07.13.07.73-.18 1.42Z" />
                            </svg>
                            تواصل واتساب
                        </a>
                    </div>
                </div>

                <div className="relative order-first lg:order-none">
                    <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-gradient-to-tr from-sky-200/60 to-emerald-200/60 blur-2xl" />
                    <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-slate-300/50 ring-1 ring-slate-900/5">
                        <Image
                            src="/hero/تسليك-الكويت.webp"
                            alt="فريق متخصص يقدم خدمة تسليك المجاري وعزل الأسطح في الكويت"
                            width={720}
                            height={720}
                            preload
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm-1.2 14.6L7 11.8l1.4-1.4 2.4 2.4 5.2-5.2L17.4 9l-6.6 6.6Z" />
                            </svg>
                        </span>
                        <span className="flex flex-col text-right">
                            <span className="text-sm font-bold text-slate-900">
                                ضمان موثوق
                            </span>
                            <span className="text-xs text-slate-500">خبرة وثقة</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
