"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "96598890031";

type Errors = {
  name?: string;
  phone?: string;
  message?: string;
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("تسليك مجاري");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "الرجاء إدخال الاسم الكامل.";
    if (!/^[0-9+\s]{6,15}$/.test(phone.trim()))
      next.phone = "الرجاء إدخال رقم هاتف صحيح.";
    if (message.trim().length < 5)
      next.message = "الرجاء كتابة تفاصيل طلبك.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `الاسم: ${name}\nالهاتف: ${phone}\nالخدمة: ${service}\nالرسالة: ${message}`
  )}`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="text-xl font-extrabold text-slate-900">تم استلام طلبك بنجاح</h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate-600">
          شكراً {name}، سيتواصل معك فريقنا في أقرب وقت. لخدمة أسرع يمكنك إرسال
          طلبك مباشرة عبر واتساب.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-emerald-700"
        >
          إرسال عبر واتساب
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-bold text-slate-800">
          الاسم الكامل
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="اكتب اسمك"
          className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:ring-4 ${
            errors.name
              ? "border-red-300 focus:ring-red-100"
              : "border-slate-200 focus:border-sky-400 focus:ring-sky-100"
          }`}
        />
        {errors.name && (
          <p id="name-error" className="text-xs font-medium text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-bold text-slate-800">
          رقم الهاتف
        </label>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          placeholder="98890031"
          className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:ring-4 ${
            errors.phone
              ? "border-red-300 focus:ring-red-100"
              : "border-slate-200 focus:border-sky-400 focus:ring-sky-100"
          }`}
        />
        {errors.phone && (
          <p id="phone-error" className="text-xs font-medium text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-bold text-slate-800">
          نوع الخدمة
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        >
          <option value="تسليك مجاري">تسليك مجاري</option>
          <option value="عزل أسطح">عزل أسطح</option>
          <option value="استفسار عام">استفسار عام</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-bold text-slate-800">
          الرسالة
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="اكتب تفاصيل طلبك أو مشكلتك"
          className={`w-full resize-y rounded-xl border bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:ring-4 ${
            errors.message
              ? "border-red-300 focus:ring-red-100"
              : "border-slate-200 focus:border-sky-400 focus:ring-sky-100"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs font-medium text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-sky-600 to-sky-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-sky-600/25 transition hover:from-sky-700 hover:to-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
      >
        إرسال الطلب
      </button>
    </form>
  );
}
