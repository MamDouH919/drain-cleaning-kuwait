"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PHONE_NUMBER = "+96598890031";
const PHONE_DISPLAY = "98890031";
const WHATSAPP_URL = "https://wa.me/96598890031";

const services = [
    { label: "تسليك مجاري الكويت", href: "/drain-cleaning-kuwait" },
    { label: "تسليك مجاري المطابخ والحمامات", href: "/kitchen-bathroom-drain-cleaning-kuwait" },
    { label: "عزل أسطح الكويت", href: "/roof-waterproofing-kuwait" },
    { label: "العزل المائي والحراري", href: "/thermal-waterproofing-kuwait" },
    { label: "تركيب مكينة سرداب", href: "/basement-pump-kuwait" },
    { label: "تركيب منهول الكويت", href: "/manhole-installation-kuwait" },
    { label: "غسيل تانكي الكويت", href: "/water-tank-cleaning-kuwait" },
    { label: "عزل أسطح جيتاروف", href: "/gitaroof-insulation-kuwait" },
    { label: "اسعار تسليك مجاري الكويت", href: "/drain-cleaning-prices-kuwait" },
    { label: "اسعار عزل اسطح الكويت", href: "/roof-insulation-prices-kuwait" },
];

const navLinks = [
    { label: "المناطق", href: "/areas" },
    { label: "المقالات", href: "/blog" },
    { label: "من نحن", href: "/about-us" },
    { label: "اتصل بنا", href: "/contact-us" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <div className="hidden bg-slate-900 text-white md:block">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-sm">
                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="inline-flex items-center gap-2 font-semibold transition hover:text-sky-300"
                    >
                        <span aria-hidden="true">📞</span>
                        {PHONE_DISPLAY}
                    </a>
                    <span className="inline-flex items-center gap-2 text-slate-200">
                        <span aria-hidden="true">🕒</span>
                        خدمة 24 ساعة
                    </span>
                    <span className="inline-flex items-center gap-2 text-slate-200">
                        <span aria-hidden="true">📍</span>
                        جميع مناطق الكويت
                    </span>
                </div>
            </div>

            <header
                className={`sticky top-0 z-50 w-full border-b border-slate-100 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md shadow-slate-200/60" : "shadow-none"
                    }`}
            >
                <nav
                    aria-label="التنقل الرئيسي"
                    className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8"
                >
                    <Link
                        href="/"
                        aria-label="تسليك وعزل الكويت — الصفحة الرئيسية"
                        className="flex items-center gap-2 rounded-xl px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                    >
                        {/* Logo */}
                        <Image
                            src="/تسليك-مجاري-الكويت.webp" // حط اللوجو هنا في public folder
                            alt="تسليك وعزل الكويت"
                            width={100}
                            height={100}
                            className="h-full w-full object-contain"
                            preload
                        />
                    </Link>

                    <ul className="hidden items-center gap-1 lg:flex">
                        <li className="group relative">
                            <button
                                type="button"
                                aria-haspopup="true"
                                className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-sky-700 group-focus-within:text-sky-700"
                            >
                                خدماتنا
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                            <div className="invisible absolute right-0 top-full z-50 w-72 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                <ul className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl ring-1 ring-slate-900/5">
                                    {services.map((service) => (
                                        <li key={service.href}>
                                            <Link
                                                href={service.href}
                                                className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-sky-50 hover:text-sky-700"
                                            >
                                                {service.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-sky-700"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden items-center gap-3 lg:flex">
                        
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-sky-600 to-sky-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-600/25 transition hover:from-sky-700 hover:to-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                            </svg>
                            <span className="font-extrabold tabular-nums">{PHONE_DISPLAY}</span>
                            <span className="opacity-60">|</span>
                            اتصل الآن
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 lg:hidden"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            className="h-6 w-6"
                        >
                            {menuOpen ? (
                                <path d="M6 6 18 18M18 6 6 18" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                <div
                    id="mobile-menu"
                    className={`overflow-y-auto border-t border-slate-100 bg-white transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <ul className="flex flex-col gap-1 px-4 py-4">
                        <li className="px-4 pb-1 pt-2 text-xs font-bold text-slate-400">
                            خدماتنا
                        </li>
                        {services.map((service) => (
                            <li key={service.href}>
                                <Link
                                    href={service.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                                >
                                    {service.label}
                                </Link>
                            </li>
                        ))}
                        <li className="my-1 border-t border-slate-100" />
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-3 border-t border-slate-100 px-4 py-4">
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            onClick={() => setMenuOpen(false)}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-sky-600 to-sky-700 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-600/25 transition hover:from-sky-700 hover:to-sky-800"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                            </svg>
                            {PHONE_DISPLAY} | اتصل الآن
                        </a>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3.5 text-base font-bold text-emerald-700 transition hover:bg-emerald-50"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.25.69-1.45 1.32-1.99 1.4-.53.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.36-5.16-4.57-.15-.2-1.23-1.63-1.23-3.12s.78-2.21 1.06-2.51c.28-.3.61-.38.81-.38l.58.01c.19.01.44-.07.69.53.25.6.85 2.08.92 2.23.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2.01.96.3.15.5.22.57.35.07.13.07.73-.18 1.42Z" />
                            </svg>
                            واتساب
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}
