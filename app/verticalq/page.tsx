import type { Metadata } from "next";
import { VerticalQHero } from "@/components/verticalq/Hero";
import { VerticalQWhySection } from "@/components/verticalq/WhySection";
import { VerticalQIntelligenceCenters } from "@/components/verticalq/IntelligenceCenters";
import { VerticalQTalentsModel } from "@/components/verticalq/TalentsModel";
import { VerticalQResultsSection } from "@/components/verticalq/ResultsSection";
import { VerticalQOffer } from "@/components/verticalq/Offer";
import { VerticalQClosingCTA } from "@/components/verticalq/ClosingCTA";

export const metadata: Metadata = {
  title: "VerticalQ",
  description:
    "Ontdek je natuurlijke talenten met VerticalQ. Een fysieke en verdiepende meting die hoofd, hart en buik samenbrengt voor duurzame groei.",
};

export default function VerticalQPage() {
  return (
    <main>
      <VerticalQHero />
      <VerticalQWhySection />
      <VerticalQIntelligenceCenters />
      <VerticalQTalentsModel />
      <VerticalQResultsSection />
      <VerticalQOffer />
      <VerticalQClosingCTA />
    </main>
  );
}
