import Link from "next/link";

/**
 * Prev / next pagination built from plain `<Link>`s so it works without JS.
 * `basePath` is the route; `extraQuery` keeps filters like `category` intact.
 */
export default function HubPagination({
  basePath,
  page,
  totalPages,
  extraQuery = {},
}: {
  basePath: string;
  page: number;
  totalPages: number;
  extraQuery?: Record<string, string | undefined>;
}) {
  if (totalPages <= 1) return null;

  const href = (target: number) => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(extraQuery)) {
      if (value) params.set(key, value);
    }
    if (target > 1) params.set("page", String(target));
    const qs = params.toString();
    return qs ? `${basePath}?${qs}` : basePath;
  };

  const linkClass =
    "rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50";
  const disabledClass =
    "rounded-full border border-slate-100 bg-slate-50 px-5 py-2.5 text-sm font-bold text-slate-300";

  return (
    <nav
      aria-label="ترقيم الصفحات"
      className="flex items-center justify-center gap-3"
    >
      {page > 1 ? (
        <Link href={href(page - 1)} rel="prev" className={linkClass}>
          السابق
        </Link>
      ) : (
        <span className={disabledClass} aria-disabled="true">
          السابق
        </span>
      )}

      <span className="text-sm font-semibold text-slate-500">
        صفحة {page} من {totalPages}
      </span>

      {page < totalPages ? (
        <Link href={href(page + 1)} rel="next" className={linkClass}>
          التالي
        </Link>
      ) : (
        <span className={disabledClass} aria-disabled="true">
          التالي
        </span>
      )}
    </nav>
  );
}
