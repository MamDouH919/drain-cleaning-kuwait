import type { ReactNode } from "react";
import type { FaqItem } from "@/components/Faq";
import type { ServiceId } from "@/lib/areas";

/**
 * صفحة منطقة مكتوبة يدويًا بدل قالب `lib/areas.ts`. لما يبقى للـ slug صفحة هنا،
 * `app/[slug]/page.tsx` بيرندرها بـ `AreaServicePage` ويسيب القالب القديم.
 */
export type CustomAreaPage = {
  service: ServiceId;
  /** الكلمة المستهدفة بالحرف: اسم الـ breadcrumb والـ Service في الـ schema. */
  label: string;
  title: string;
  description: string;
  h1: string;
  /** تاريخ أول نشر للنسخة المكتوبة يدويًا (`YYYY-MM-DD`)، لـ `datePublished` في الـ Article. */
  datePublished: string;
  intro: ReactNode;
  /** سطر الخبرة (يتذكر مرة واحدة في الصفحة). */
  experience: string;
  cover: { src: string; alt: string; width: number; height: number };
  /** أسماء الأماكن لـ `areaServed` في الـ schema. */
  areaServed: { type: "City" | "AdministrativeArea"; name: string }[];
  faqs: FaqItem[];
  faqTitle: string;
  Body: () => ReactNode;
};
