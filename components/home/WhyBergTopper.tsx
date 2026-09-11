import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const services = [
  {
    icon: "recruitment",
    title: "Recruitment",
    description:
      "We vinden leiders en specialisten die niet alleen passen op papier, maar het verschil maken in de praktijk.",
    href: "/services#recruitment",
  },
  {
    icon: "coaching",
    title: "Executive Coaching",
    description:
      "1-op-1 coaching voor leiders die willen groeien, scherp blijven en met meer impact willen leiden.",
    href: "/services#loopbaan",
  },
  {
    icon: "team",
    title: "Team & Leadership",
    description:
      "We versterken teams en leiderschapscapaciteit voor duurzame samenwerking en resultaat.",
    href: "/services#team-organisatie",
  },
  {
    icon: "verticaliq",
    title: "VerticalQ",
    description:
      "Ons bewezen model dat hoofd, hart en buik met elkaar verbindt voor authenticiteit en effectief leiderschap.",
    href: "/services#verticalq",
  },
] as const;

const processSteps = [
  {
    number: "01",
    title: "Kennismaking",
    description:
      "We leren elkaar kennen en verkennen de vraag achter de vraag.",
  },
  {
    number: "02",
    title: "Analyse",
    description: "We brengen de situatie, doelen en kansen in kaart.",
  },
  {
    number: "03",
    title: "Maatwerk aanpak",
    description:
      "We ontwerpen een aanpak die past bij jou of je organisatie.",
  },
  {
    number: "04",
    title: "Transformatie",
    description: "Samen realiseren we blijvende groei en impact.",
  },
] as const;

type ServiceIconName = (typeof services)[number]["icon"];

export function WhyBergTopper() {
  return (
    <section className="-mt-px">
      <div className="relative overflow-hidden bg-hero-bg py-16 sm:py-20">
        <div aria-hidden="true" className="absolute inset-0 bt-fade-hero opacity-70" />
        <div aria-hidden="true" className="absolute inset-0 bt-dots-dark opacity-50" />
        <Container className="relative z-10">
          <Reveal as="h2" className="bt-section-title max-w-xl text-surface">
            Diensten die blijvend verschil maken.
          </Reveal>

          <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                as="article"
                delay={Math.min(index, 3) * 70}
                className="flex h-full flex-col rounded-2xl bg-surface/8 p-6 text-surface shadow-sm ring-1 ring-white/10 backdrop-blur-sm"
              >
                <div className="mb-5 text-surface/60">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="font-heading text-xl leading-tight text-surface">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-surface/75">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-surface/80 transition-colors hover:text-surface"
                >
                  Meer ontdekken
                  <ArrowRight />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-surface py-16 sm:py-20">
        <Container>
          <Reveal as="h3" className="bt-section-title max-w-xl text-foreground">
            Een aanpak die werkt.
          </Reveal>

          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} as="article" delay={Math.min(index, 3) * 70}>
                <div className="mb-5 flex items-center">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted">
                    {step.number}
                  </span>
                  {index < processSteps.length - 1 && (
                    <>
                      <span className="mx-3 hidden h-px flex-1 bg-border xl:block" />
                      <span className="hidden text-muted/40 xl:inline">→</span>
                    </>
                  )}
                </div>
                <h4 className="font-heading text-xl leading-tight text-foreground">
                  {step.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

function ServiceIcon({ name }: { name: ServiceIconName }) {
  if (name === "recruitment") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "coaching") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6.5 20c0-2.9 2.4-5.2 5.5-5.2s5.5 2.3 5.5 5.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "team") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3 20c0-3 2.3-5.2 5-5.2M21 20c0-3-2.3-5.2-5-5.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 4 L20 20 H4 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
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
