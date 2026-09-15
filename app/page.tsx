import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import TaslikMajariSection from "@/components/TaslikMajariSection";
import RoofInsulationSection from "@/components/RoofInsulationSection";
import ServiceAreas from "@/components/ServiceAreas";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import ArticlesSection from "@/components/ArticlesSection";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <About />
      <TaslikMajariSection />
      <RoofInsulationSection />
      <ServiceAreas />
      <Gallery />
      <Faq />
      <ArticlesSection />
      <StructuredData />
    </main>
  );
}
