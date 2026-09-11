import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/Hero";
import { ServicesRecruitment } from "@/components/services/Recruitment";
import { ServicesVerticalQTeaser } from "@/components/services/VerticalQTeaser";
import { ServicesLoopbaan } from "@/components/services/Loopbaan";
import { ServicesTeamOrg } from "@/components/services/TeamOrg";
import { ServicesClosingCTA } from "@/components/services/ClosingCTA";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Dienstverlening van BergTopper voor recruitment, coaching, loopbaantrajecten, teamontwikkeling en VerticalQ talentontwikkeling.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesRecruitment />
      <ServicesVerticalQTeaser />
      <ServicesLoopbaan />
      <ServicesTeamOrg />
      <ServicesClosingCTA />
    </main>
  );
}
