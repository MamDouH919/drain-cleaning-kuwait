import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import ServiceAreas from "@/components/ServiceAreas";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import ArticlesSection from "@/components/ArticlesSection";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/areas";
import { HOME_DESCRIPTION, HOME_TITLE, OG_IMAGE } from "@/lib/home";

// الرئيسية صفحة عامة (بوابة) تعرّف بالشركة وتوزّع على صفحات الخدمات؛ كل كلمة
// مستهدفة لها صفحة خدمة واحدة فقط، فلا تستهدف الرئيسية أيًّا منها مباشرة.
export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: `${SITE_URL}/`,
    siteName: "دار الصيانة الكويتية",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <ServiceAreas />
      <Gallery />
      <Faq />
      <ArticlesSection />
      <StructuredData />
    </main>
  );
}
