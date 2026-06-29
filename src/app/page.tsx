import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ManifestoSection />
    </main>
  );
}