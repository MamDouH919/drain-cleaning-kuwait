import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import { SITE_URL, PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_URL, serviceConfigs } from "@/lib/areas";
import { BUSINESS_ID } from "@/lib/schema";
import { coreServices } from "@/lib/services";
import type { CustomAreaPage } from "./types";

const hubByService = {
  "drain-cleaning": coreServices.find((s) => s.id === "drain")!,
  "roof-waterproofing": coreServices.find((s) => s.id === "roof")!,
};

export default function AreaServicePage({ page, path }: { page: CustomAreaPage; path: string }) {
  const url = `${SITE_URL}${path}`;
  const hub = hubByService[page.service];
  const { Body } = page;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.label,
        serviceType: serviceConfigs[page.service].shortName,
        url,
        description: page.description,
        provider: { "@id": BUSINESS_ID },
        areaServed: page.areaServed.map((a) => ({ "@type": a.type, name: a.name })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: hub.anchor, item: `${SITE_URL}${hub.href}` },
          { "@type": "ListItem", position: 3, name: page.label, item: url },
        ],
      },
    ],
  };

  return (
    <main className="flex-1" dir="rtl">
      <Breadcrumbs items={[{ label: hub.anchor, href: hub.href }, { label: page.label }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="relative w-full overflow-hidden bg-gradient-to-bl from-sky-50 via-white to-emerald-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-12 text-center sm:px-8 lg:py-16">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {page.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">{page.intro}</p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="اتصل الآن"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-sky-600 to-sky-700 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-sky-600/25 transition hover:from-sky-700 hover:to-sky-800"
            >
              {PHONE_DISPLAY} | اتصل الآن
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-white px-7 py-4 text-lg font-bold text-emerald-700 shadow-md transition hover:bg-emerald-50"
            >
              تواصل واتساب
            </a>
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-500">{page.experience}</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="relative -mt-2 mb-10 aspect-[16/9] overflow-hidden rounded-3xl border border-white/60 bg-white shadow-xl ring-1 ring-slate-900/5">
          <Image
            src={page.cover.src}
            alt={page.cover.alt}
            fill
            preload
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-4 sm:px-8">
        <Body />
      </div>

      {/* الـ CTA الوحيد في آخر الصفحة هو اللي جوه مكون Faq. */}
      <Faq items={page.faqs} title={page.faqTitle} />
    </main>
  );
}
