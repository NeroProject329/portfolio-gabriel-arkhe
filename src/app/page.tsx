import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { Showcase3DSection } from "@/components/sections/Showcase3DSection";
import { CreationProcessSection } from "@/components/sections/CreationProcessSection";
import { AboutGabrielSection } from "@/components/sections/AboutGabrielSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ManifestoSection />
      <FeaturedProjectsSection />
      <Showcase3DSection />
      <CreationProcessSection />
      <AboutGabrielSection />
      <CallToActionSection />
       <Footer />
    </main>
  );
}