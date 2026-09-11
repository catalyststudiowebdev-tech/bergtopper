import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Alain van BergTopper voor coaching, VerticalQ, loopbaantrajecten of teamontwikkeling.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero-bg py-20 sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 bt-fade-hero opacity-70" />
        <div aria-hidden="true" className="absolute inset-0 bt-dots-dark opacity-50" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="bt-enter font-display text-4xl leading-[1.08] tracking-tight text-surface sm:text-6xl lg:text-7xl">
              Plan een gesprek over{" "}
              <span style={{ color: "#8BAF72" }}>jouw vraag.</span>
            </h1>
            <p className="bt-body bt-enter bt-enter-d1 mt-8 max-w-2xl text-surface/75">
              Alain denkt mee over coaching, VerticalQ, loopbaan of
              teamgroei. Stuur een bericht via het formulier of mail hem
              rechtstreeks.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-warm py-20 sm:py-28">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
            <div>
              <Reveal as="h2" className="bt-section-title text-foreground">
                Stuur Alain een bericht.
              </Reveal>
              <Reveal as="p" className="bt-body mt-6 text-muted" delay={70}>
                Vertel kort waar je staat: een eerste kennismaking, een
                VerticalQ-meting, recruitment of groei in je team.
              </Reveal>

              <Reveal className="mt-8" delay={140}>
                <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                  Mail direct
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                  <MailArrow />
                </a>
              </Reveal>
            </div>

            <Reveal delay={210}>
              <ContactForm contactEmail={siteConfig.email} />
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}

function MailArrow() {
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
