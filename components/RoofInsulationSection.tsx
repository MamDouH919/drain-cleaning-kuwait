import Image from "next/image";
import Link from "next/link";

const features = [
  "العزل المائي لحماية السطح من تسرب المياه",
  "العزل الحراري لتقليل الحرارة داخل المبنى",
  "عزل أسطح المنازل والفلل والمباني",
  "اختيار مادة العزل حسب حالة السطح",
  "معاينة السطح قبل تحديد نوع العزل",
  "اختبار العزل بعد التنفيذ للتأكد من فعاليته",
];

export default function RoofInsulationSection() {
  return (
    <section
      id="roof-insulation"
      dir="rtl"
      aria-labelledby="roof-insulation-heading"
      className="relative w-full overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute inset-0 -z-10 -translate-x-4 translate-y-4 rounded-[2rem] bg-gradient-to-tr from-emerald-200/60 to-sky-200/60 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-slate-300/50 ring-1 ring-slate-900/5">
              <Image
                src="/roof-waterproofing/عزل-اسطح-الكويت.webp"
                alt="عزل أسطح الكويت المائي والحراري لحماية المباني"
                width={720}
                height={640}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              عزل أسطح الكويت
            </span>

            <h2
              id="roof-insulation-heading"
              className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              عزل أسطح الكويت لحماية المباني من المياه والحرارة
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600">
              يتعرض سطح أي مبنى في الكويت لضغط مضاعف من حرارة الصيف الشديدة
              وأمطار الشتاء المتقطعة، ما يجعل عزل الأسطح ضرورة لحماية المبنى
              وليس مجرد إضافة اختيارية. نبدأ عملنا دائمًا بمعاينة السطح
              وتحديد نقاط الضعف ومصادر التسرب المحتملة، ثم نوصي بنوع العزل
              الأنسب لحالة السطح ونوع المبنى.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              يشمل عزل أسطح الكويت لدينا نوعين رئيسيين: العزل المائي الذي
              يمنع تسرب مياه الأمطار والخزانات إلى داخل الجدران والأسقف،
              والعزل الحراري الذي يقلل من انتقال الحرارة إلى داخل المبنى
              ويخفف العبء على أجهزة التكييف. وتختلف مادة العزل المناسبة
              باختلاف حالة السطح القائمة ونوع الاستخدام، سواء لمنزل أو فيلا
              أو مبنى تجاري.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              نقدم عزل أسطح المنازل والفلل والمباني في مختلف مناطق الكويت،
              مع تنفيذ العزل وفق طبقات مدروسة تضمن ثباته لفترة طويلة، واختبار
              السطح بعد التنفيذ للتأكد من فعالية العزل ضد المياه والحرارة.
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
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
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
                href="/roof-waterproofing-kuwait"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-emerald-600 to-emerald-700 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:from-emerald-700 hover:to-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
              >
                خدمة عزل أسطح الكويت
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
        </div>
      </div>
    </section>
  );
}
