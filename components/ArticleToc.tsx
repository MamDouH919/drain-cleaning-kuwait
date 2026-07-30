"use client";

import { useState } from "react";
import type { Heading } from "@/lib/drain-article";

export default function ArticleToc({ headings }: { headings: Heading[] }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`baytak-toc${open ? "" : " is-collapsed"}`}
      aria-label="محتويات المقال"
    >
      <div className="baytak-toc-head">
        <div className="baytak-toc-title-wrap">
          <span className="baytak-toc-icon" aria-hidden="true">
            ≡
          </span>
          <span className="baytak-toc-title">محتويات المقال</span>
        </div>
        <button
          type="button"
          className="baytak-toc-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="baytak-toc-toggle-open">إخفاء</span>
          <span className="baytak-toc-toggle-close">إظهار</span>
        </button>
      </div>
      <div className="baytak-toc-body">
        <ol className="baytak-toc-list">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`baytak-toc-item baytak-toc-h${heading.level}`}
            >
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
