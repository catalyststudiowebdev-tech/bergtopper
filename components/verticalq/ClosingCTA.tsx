import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LogoMark } from "@/components/brand/LogoMark";
import { Reveal } from "@/components/motion/Reveal";

export function VerticalQClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-hero-bg py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 bt-fade-hero opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 bt-dots-dark opacity-50" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <LogoMark className="mx-auto mb-8 h-9 w-auto text-surface/40" />
          </Reveal>
          <Reveal as="h2" className="bt-section-title text-surface" delay={70}>
            Klaar om je natuurlijke kracht te ontdekken?
          </Reveal>
          <Reveal as="p" className="bt-body mx-auto mt-6 max-w-lg text-surface/75" delay={140}>
            Boek een VerticalQ-meting en ontdek in twee uur waar jouw talenten
            en energie werkelijk liggen.
          </Reveal>

          <Reveal className="mt-10 flex justify-center" delay={210}>
            <Link
              href="/contact"
              className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 sm:w-auto sm:max-w-none"
            >
              Boek een VerticalQ-meting
              <ArrowRight />
            </Link>
          </Reveal>
        </div>
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
