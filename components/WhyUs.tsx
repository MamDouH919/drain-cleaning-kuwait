const trustPoints = [
  {
    title: "خبرة طويلة في مجال تسليك المجاري والعزل",
    desc: "سنوات من العمل الميداني في تسليك المجاري وعزل الأسطح داخل الكويت.",
    Icon: ({ className }: { className?: string }) => (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm-1.2 14.6L7 11.8l1.4-1.4 2.4 2.4 5.2-5.2L17.4 9l-6.6 6.6Z" />
      </svg>
    ),
  },
  {
    title: "خدمة 24 ساعة في جميع مناطق الكويت",
    desc: "فريقنا متواجد على مدار الساعة لخدمتك في أي منطقة داخل الكويت.",
    Icon: ({ className }: { className?: string }) => (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10a1 1 0 0 1-.29.71l-3 3-1.42-1.42L11 11.59V6h2v6Z" />
      </svg>
    ),
  },
  {
    title: "استخدام أحدث المعدات والتقنيات",
    desc: "أجهزة حديثة لتسليك الانسدادات ومواد عزل عالية الجودة بدون تكسير.",
    Icon: ({ className }: { className?: string }) => (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M21.7 6.3a1 1 0 0 0-1.4 0l-2.1 2.1-2.6-2.6 2.1-2.1a1 1 0 0 0-1.32-1.5 5 5 0 0 0-6.06 6.36l-7.04 7.03a1 1 0 0 0 0 1.42l2.7 2.7a1 1 0 0 0 1.42 0l7.03-7.04a5 5 0 0 0 6.37-6.06 1 1 0 0 0-.5-.34Z" />
      </svg>
    ),
  },
  {
    title: "ضمان على جودة الخدمة",
    desc: "نقدم ضمانًا حقيقيًا على كل خدمة لراحة بالك وثقتك الكاملة.",
    Icon: ({ className }: { className?: string }) => (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Z" />
      </svg>
    ),
  },
  {
    title: "سرعة الاستجابة والوصول للعميل",
    desc: "نصل إليك بأسرع وقت ممكن مع استجابة فورية لطلبك في أي وقت.",
    Icon: ({ className }: { className?: string }) => (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M13 2 4.5 12.5a1 1 0 0 0 .8 1.6H10l-1 7.9 8.5-12.4a1 1 0 0 0-.83-1.6H12l1-6Z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      dir="rtl"
      aria-labelledby="why-us-heading"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="why-us-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            لماذا تختار دار الصيانة الكويتية؟
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <li
              key={point.title}
              className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm ring-1 ring-slate-900/5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-bl from-sky-600 to-emerald-600 text-white shadow-md shadow-sky-600/25 transition-transform duration-300 group-hover:scale-105">
                <point.Icon className="h-6 w-6" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-base font-bold text-slate-900">
                  {point.title}
                </span>
                <span className="text-sm leading-relaxed text-slate-600">
                  {point.desc}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
