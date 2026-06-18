import Link from "next/link";

const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="flex flex-1 items-center justify-center bg-gradient-to-bl from-sky-50 via-white to-emerald-50 px-6 py-24"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="text-7xl font-extrabold text-sky-600">404</p>
        <h1 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          الصفحة غير موجودة
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          عذراً، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها. يمكنك العودة
          للرئيسية أو تصفح خدماتنا في الكويت.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-sky-600 to-sky-700 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-600/25 transition hover:from-sky-700 hover:to-sky-800"
          >
            العودة للرئيسية
          </Link>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            {PHONE_DISPLAY} | اتصل الآن
          </a>
        </div>
        <nav aria-label="روابط مفيدة" className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <Link href="/drain-cleaning-kuwait" className="font-bold text-sky-700 underline-offset-4 hover:underline">
            تسليك مجاري الكويت
          </Link>
          <Link href="/roof-waterproofing-kuwait" className="font-bold text-emerald-700 underline-offset-4 hover:underline">
            عزل أسطح الكويت
          </Link>
          <Link href="/areas" className="font-bold text-slate-700 underline-offset-4 hover:underline">
            المناطق
          </Link>
          <Link href="/blog" className="font-bold text-slate-700 underline-offset-4 hover:underline">
            المدونة
          </Link>
        </nav>
      </div>
    </main>
  );
}
