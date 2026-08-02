import { Hero } from "@/components/home/Hero";
import { WhyBergTopper } from "@/components/home/WhyBergTopper";
import { AboutAlain } from "@/components/home/AboutAlain";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyBergTopper />
      <AboutAlain />
      <Testimonials />
      <CTA />
    </main>
  );
}
