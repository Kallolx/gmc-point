import Image from "next/image";
import { Navbar } from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import { ServiceCards } from "../components/Landing/ServiceCards";
import { ProcessTimeline } from "../components/Landing/ProcessTimeline";
import { CtaBanner } from "../components/Landing/CtaBanner";
import { AboutSection } from "../components/Landing/AboutSection";
import { PartnershipSection } from "../components/Landing/PartnershipSection";
import { FaqSection } from "@/components/Landing/FaqSection";
import { Footer } from "@/components/Landing/Footer";
import { ScreenshotsSlider } from "@/components/Landing/ScreenshotsSlider";
import { Pricing } from "@/components/Landing/Pricing";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05070e]">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-[#05070e]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ServiceCards />     
        <ProcessTimeline />
        <ScreenshotsSlider />
        <Pricing />
        <CtaBanner />
        <AboutSection />
        <PartnershipSection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  );
}
