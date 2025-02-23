import Image from "next/image";
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import { ServiceCards } from "../components/Landing/ServiceCards";
import { ProcessTimeline } from "../components/Landing/ProcessTimeline";
import { ResultsSlider } from "../components/ui/ResultsSlider";
import { CtaBanner } from "../components/Landing/CtaBanner";
import { AboutSection } from "../components/Landing/AboutSection";
import { PartnershipSection } from "../components/Landing/PartnershipSection";
import { FaqSection } from "@/components/Landing/FaqSection";
import { Footer } from "@/components/Landing/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <Navbar />
      <Hero />
      <ServiceCards />     
      <ResultsSlider />
      <ProcessTimeline />
      <CtaBanner />
      <AboutSection />
      <PartnershipSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
