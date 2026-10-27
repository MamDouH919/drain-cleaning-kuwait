import type { Metadata } from "next";
import Link from "next/link";
import { coreServices } from "@/lib/services";

const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";

const NOT_FOUND_TITLE = "الصفحة غير موجودة | دار الصيانة الكويتية";

// من غير canonical (الـ layout بيحط canonical الرئيسية)، وNext بيضيف noindex
// وstatus 404 لوحده.
export const metadata: Metadata = {
  title: { absolute: NOT_FOUND_TITLE },
  description: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
  alternates: { canonical: null },
  robots: { index: false, follow: true },
  openGraph: { title: NOT_FOUND_TITLE, url: null },
  twitter: { title: NOT_FOUND_TITLE },
};

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
          {coreServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="font-bold text-sky-700 underline-offset-4 hover:underline"
            >
              {service.anchor}
            </Link>
          ))}
          <Link href="/areas" className="font-bold text-slate-700 underline-offset-4 hover:underline">
            المناطق
          </Link>
          <Link href="/blogs" className="font-bold text-slate-700 underline-offset-4 hover:underline">
            المقالات
          </Link>
        </nav>
      </div>
    </main>
  );
}
