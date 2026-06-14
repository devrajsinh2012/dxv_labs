import HeroSection from "@/components/hero/HeroSection";
import SpecStrip from "@/components/home/SpecStrip";
import ServicesBento from "@/components/home/ServicesBento";
import WorkPreview from "@/components/home/WorkPreview";
import ProcessStrip from "@/components/home/ProcessStrip";
import ClientsPreview from "@/components/home/ClientsPreview";
import CtaBand from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SpecStrip />
      <ServicesBento />
      <WorkPreview />
      <ProcessStrip />
      <ClientsPreview />
      <CtaBand />
    </>
  );
}
