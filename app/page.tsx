import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ServiceAreas from "@/components/ServiceAreas";
import About from "@/components/About";
import Faq from "@/components/Faq";
import ArticlesSection from "@/components/ArticlesSection";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <Gallery />
      <ServiceAreas />
      <About />
      <Faq />
      <ArticlesSection />
      <StructuredData />
    </main>
  );
}
