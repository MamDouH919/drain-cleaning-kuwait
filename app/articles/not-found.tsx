import Link from "next/link";
import { CMS_BASE_PATH, CMS_SECTION_TITLE } from "@/lib/cms/seo";

export default function HubNotFound() {
  return (
    <main
      dir="rtl"
      className="flex flex-1 items-center justify-center bg-gradient-to-bl from-sky-50 via-white to-emerald-50 px-6 py-24"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="text-7xl font-extrabold text-sky-600">404</p>
        <h1 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          هذا المحتوى غير موجود
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          المقال الذي تبحث عنه غير منشور أو تم نقله.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={CMS_BASE_PATH}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-sky-600 to-sky-700 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-600/25 transition hover:from-sky-700 hover:to-sky-800"
          >
            تصفّح {CMS_SECTION_TITLE}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}
