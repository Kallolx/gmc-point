import Image from "next/image";
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import { ServiceCards } from "../components/Landing/ServiceCards";
import { ProcessTimeline } from "../components/Landing/ProcessTimeline";
import { ResultsSlider } from "../components/ui/ResultsSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <Navbar />
      <Hero />
      <ServiceCards />     
      <ResultsSlider />
      <ProcessTimeline />
      <div className="container mx-auto px-4">
        {/* Additional content sections will go here */}
      </div>
    </main>
  );
}
