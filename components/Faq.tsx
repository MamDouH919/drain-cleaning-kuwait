"use client";

import { useState } from "react";

const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

const faqs = [
  {
    question: "كم سعر تسليك المجاري في الكويت؟",
    answer:
      "يختلف السعر حسب حالة الانسداد ومكانه، لكن نوفر أسعار مناسبة وتقييم مجاني قبل بدء العمل.",
  },
  {
    question: "هل يتم تسليك المجاري بدون تكسير؟",
    answer:
      "نعم، نستخدم أحدث الأجهزة التي تسمح بتسليك المجاري بدون أي تكسير أو إتلاف للمكان.",
  },
  {
    question: "هل تقدمون خدمة 24 ساعة؟",
    answer:
      "نعم، نوفر خدمة تسليك المجاري وعزل الأسطح على مدار 24 ساعة في جميع مناطق الكويت.",
  },
  {
    question: "ما أفضل نوع عزل للأسطح؟",
    answer:
      "العزل المائي والحراري والفوم من أفضل أنواع العزل لحماية الأسطح من التسربات والحرارة.",
  },
  {
    question: "هل تغطون جميع مناطق الكويت؟",
    answer:
      "نعم، نغطي جميع مناطق الكويت مثل حولي، السالمية، الفروانية، الجهراء، الأحمدي، ومبارك الكبير.",
  },
  {
    question: "كم يستغرق وقت تسليك المجاري؟",
    answer:
      "غالبًا يتم حل المشكلة خلال 30 إلى 60 دقيقة حسب حالة الانسداد ومكانه.",
  },
  {
    question: "هل خدماتكم تشمل المنازل والشركات؟",
    answer:
      "نعم، نقدم خدمات تسليك المجاري وعزل الأسطح للمنازل، الفلل، والشركات في جميع أنحاء الكويت.",
  },
  {
    question: "هل يوجد ضمان على خدمة العزل؟",
    answer:
      "نعم، نوفر ضمان على أعمال العزل المائي والحراري لضمان حماية طويلة الأمد للأسطح.",
  },
  {
    question: "هل يمكن الحجز عبر واتساب؟",
    answer:
      "نعم، يمكن التواصل عبر واتساب لحجز الخدمة أو طلب معاينة سريعة.",
  },
  {
    question: "هل الأسعار ثابتة أم حسب الحالة؟",
    answer:
      "الأسعار تختلف حسب المشكلة، لكن يتم تقديم تقييم وسعر واضح قبل بدء العمل بدون أي رسوم خفية.",
  },
  {
    question: "هل تعملون في الحالات الطارئة؟",
    answer:
      "نعم، نوفر خدمة طوارئ 24 ساعة للتعامل مع انسداد المجاري أو مشاكل العزل بشكل فوري.",
  },
];

export default function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggle = (index: number) =>
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );

  return (
    <section
      id="faq"
      dir="rtl"
      aria-labelledby="faq-heading"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 15a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 17Zm1.6-5.2c-.6.4-.6.5-.6.95V13h-2v-.5c0-1.32.62-1.95 1.4-2.45.5-.33.6-.5.6-.85a.95.95 0 0 0-1-.95c-.55 0-1 .45-1 1.1H9c0-1.7 1.35-3 3-3s3 1.2 3 2.8c0 1.1-.55 1.75-1.4 2.3Z" />
            </svg>
            الأسئلة الأكثر شيوعًا
          </span>

          <h2
            id="faq-heading"
            className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            الأسئلة الشائعة
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            كل ما تريد معرفته عن خدمات تسليك مجاري الكويت وعزل أسطح الكويت قبل
            طلب الخدمة.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-900/5 transition-shadow duration-300 hover:shadow-md"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300 sm:px-6"
                  >
                    <span className="text-base font-bold text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-sky-600 text-white"
                          : "bg-sky-50 text-sky-700"
                      }`}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-base leading-relaxed text-slate-600 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-bl from-sky-700 via-sky-800 to-emerald-700 p-8 text-center shadow-xl sm:p-12">
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
            لسه عندك سؤال؟
          </h3>
          <p className="mt-3 text-base leading-relaxed text-sky-50/90 sm:text-lg">
            اتصل بنا الآن وسنساعدك فوراً في حل مشكلتك داخل الكويت.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
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
    </section>
  );
}
