"use client";

import { Fragment, useEffect, useState } from "react";

type ArticleRatingProps = {
  postId: number;
  average: number;
  count: number;
};

export default function ArticleRating({ postId, average, count }: ArticleRatingProps) {
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");
  const storageKey = `article-rating-${postId}`;

  useEffect(() => {
    const saved = Number(window.localStorage.getItem(storageKey));
    if (saved >= 1 && saved <= 5) {
      setValue(saved);
      setMessage("تم تسجيل تقييمك مسبقاً، شكراً لك.");
    }
  }, [storageKey]);

  function submit() {
    if (!value) {
      setMessage("اختر عدد النجوم أولاً.");
      return;
    }
    window.localStorage.setItem(storageKey, String(value));
    setMessage("شكراً لك، تم إرسال تقييمك.");
  }

  return (
    <div className="rating-widget" id={`rating-widget-${postId}`} data-post-id={postId}>
      <div className="rating-summary">
        <div className="rating-avg" aria-label={`متوسط التقييم ${average} من 5`}>
          <span className="rating-num">{average}</span>
          <div className="rating-stars-display" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < average ? "star star-full" : "star"}>
                ★
              </span>
            ))}
          </div>
          <span className="rating-count">({count} تقييم)</span>
        </div>
      </div>

      <div className="rating-form-wrap">
        <p className="rating-prompt">قيّم هذا المقال:</p>
        <div className="star-rating-input" role="radiogroup" aria-label="تقييم المقال">
          {[5, 4, 3, 2, 1].map((star) => (
            <Fragment key={star}>
              <input
                type="radio"
                id={`star-${postId}-${star}`}
                name={`rating-${postId}`}
                value={star}
                checked={value === star}
                onChange={() => setValue(star)}
              />
              <label
                htmlFor={`star-${postId}-${star}`}
                title={`${star} نجوم`}
                aria-label={`${star} نجوم`}
              >
                ★
              </label>
            </Fragment>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-primary btn-sm rating-submit"
          data-post-id={postId}
          onClick={submit}
        >
          إرسال التقييم
        </button>
        <div className="rating-message" aria-live="polite">
          {message}
        </div>
      </div>
    </div>
  );
}
