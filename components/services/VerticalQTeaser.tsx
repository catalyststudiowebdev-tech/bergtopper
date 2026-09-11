import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function ServicesVerticalQTeaser() {
  return (
    <section id="verticalq" className="relative overflow-hidden bg-hero-bg py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 bt-fade-hero opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 bt-dots-dark opacity-50" />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Reveal as="h2" className="bt-section-title text-surface">
            VerticalQ talentmeting en assessments.
          </Reveal>
          <Reveal as="p" className="bt-body mt-6 text-surface/75" delay={70}>
            Kennis, ervaring en competenties vertellen niet het hele verhaal.
            VerticalQ brengt talenten in kaart vanuit drie autonome
            intelligentiecentra in het lichaam. Zo wordt zichtbaar waar jouw
            natuurlijke kracht moeiteloos stroomt en waar energie weglekt.
          </Reveal>
        </div>

        <Reveal as="p" className="mt-8 text-sm leading-7 text-surface/70" delay={140}>
          Een assessment duurt ongeveer twee uur en wordt afgerond met een
          uitgebreid rapport over jouw unieke talentenprofiel.
        </Reveal>

        <Reveal className="mt-8 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center sm:gap-4" delay={210}>
          <Link
            href="/vq"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Ontdek VerticalQ
            <ArrowRight />
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-surface/30 px-7 py-3.5 text-sm font-semibold text-surface transition-colors hover:border-surface/60 sm:w-auto"
          >
            Plan een gesprek
            <ArrowRight />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
