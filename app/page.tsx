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
import { HOME_DESCRIPTION, HOME_TITLE } from "@/lib/home";
import { pageMetadata } from "@/lib/metadata";

// الرئيسية صفحة عامة (بوابة) تعرّف بالشركة وتوزّع على صفحات الخدمات؛ كل كلمة
// مستهدفة لها صفحة خدمة واحدة فقط، فلا تستهدف الرئيسية أيًّا منها مباشرة.
export const metadata: Metadata = pageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
});

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
