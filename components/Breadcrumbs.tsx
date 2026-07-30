import Link from "next/link";

export type Crumb = {
  label: string;
  /** Omit on the current page — it renders as plain text with aria-current. */
  href?: string;
};

const HOME: Crumb = { label: "الرئيسية", href: "/" };

/**
 * Visible breadcrumb trail. "الرئيسية" is prepended automatically, so pages
 * pass only the trailing crumbs; the last one should have no `href`.
 *
 * Schema.org BreadcrumbList markup lives in each page's JSON-LD graph, so
 * nothing structured is emitted here.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs = [HOME, ...items];

  return (
    <nav
      aria-label="مسار التنقل"
      dir="rtl"
      className="w-full border-b border-slate-100 bg-slate-50/70"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm shadow-sm">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;

            return (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-x-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                )}
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    prefetch={false}
                    className="font-semibold text-slate-500 transition-colors hover:text-sky-700 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="font-bold text-slate-900"
                  >
                    {crumb.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
