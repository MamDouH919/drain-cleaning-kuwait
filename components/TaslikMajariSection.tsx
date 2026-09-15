import Image from "next/image";
import Link from "next/link";

const features = [
  "تسليك بالوعات المطابخ من الدهون والشحوم",
  "تسليك مجاري الحمامات من الشعر والترسبات",
  "تنظيف المجاري الرئيسية وخطوط الصرف المشتركة",
  "فحص الانسداد بالكاميرا عند تكرار المشكلة",
  "فريق فني متخصص في تسليك مجاري الكويت",
  "خدمة تسليك مجاري متوفرة على مدار 24 ساعة",
];

export default function TaslikMajariSection() {
  return (
    <section
      id="taslik-majari"
      dir="rtl"
      aria-labelledby="taslik-majari-heading"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 flex flex-col lg:order-1">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              تسليك مجاري الكويت
            </span>

            <h2
              id="taslik-majari-heading"
              className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              تسليك مجاري الكويت بخدمة سريعة واحترافية
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600">
              من أكثر مشاكل الصرف الصحي شيوعًا في المنازل والشقق الكويتية
              انسداد المجاري المفاجئ، سواء في بالوعة المطبخ أو الحمام أو خط
              الصرف الرئيسي. يبدأ فنيونا دائمًا بفحص مصدر الانسداد وتحديد
              موقعه بدقة، قبل اختيار الأداة المناسبة لحل المشكلة، سواء كانت
              سوستة التسليك اليدوية أو جهاز ضغط الماء، وذلك لتفادي أي تكسير
              غير ضروري في الأرضيات أو الجدران.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              نتعامل مع تسليك بالوعات المطابخ المسدودة بالدهون، وتسليك مجاري
              الحمامات المتأثرة بالشعر والترسبات، إضافة إلى تنظيف المجاري
              الرئيسية وخطوط الصرف المشتركة بين عدة وحدات. وعند تكرار الانسداد
              أو صعوبة تحديد سببه، نلجأ إلى فحص الخط بالكاميرا لمعرفة الحالة
              الداخلية للمواسير بدقة قبل اتخاذ قرار التنفيذ المناسب.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              ولأن انسداد المجاري غالبًا ما يحدث دون سابق إنذار، نوفر خدمة
              تسليك مجاري الكويت على مدار 24 ساعة طوال أيام الأسبوع، بحيث
              يصلك فريقنا لمعالجة الحالات الطارئة بنفس مستوى الدقة
              والاحترافية.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-0.5 h-5 w-5 shrink-0 text-sky-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42.001l-3.75-3.77a1 1 0 0 1 1.418-1.41l3.04 3.057 6.541-6.605a1 1 0 0 1 1.415-.006Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/drain-cleaning-kuwait"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-sky-600 to-sky-700 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-600/25 transition hover:from-sky-700 hover:to-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
              >
                خدمة تسليك مجاري الكويت
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-gradient-to-tr from-sky-200/60 to-emerald-200/60 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-slate-300/50 ring-1 ring-slate-900/5">
              <Image
                src="/drain-cleaning/تسليك-مجاري.webp"
                alt="فني يقوم بتسليك مجاري الكويت بأحدث الأجهزة"
                width={720}
                height={640}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
