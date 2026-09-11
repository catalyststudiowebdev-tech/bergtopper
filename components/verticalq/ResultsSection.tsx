import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const individualResults = [
  "Inzicht in je natuurlijke kracht en waar je ongemerkt energie verliest.",
  "Duidelijkheid over welke rol of taak echt bij je past.",
  "Concrete handvatten voor persoonlijke ontwikkeling en loopbaanvragen.",
];

const teamResults = [
  "Een gemeenschappelijke taal om communicatie en samenwerking te versterken.",
  "Verdeling van taken op basis van aanwezige talenten, niet alleen functietitels.",
  "Meer begrip voor verschillen in werkstijl, tempo en besluitvorming.",
  "Hogere wendbaarheid bij complexe veranderingen.",
];

export function VerticalQResultsSection() {
  return (
    <section id="resultaat" className="bg-surface-warm py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.45fr] lg:gap-12">
          <div className="max-w-lg">
            <Reveal as="h2" className="bt-section-title text-foreground">
              Resultaat dat je
              <br />
              merkt en meet.
            </Reveal>
            <Reveal as="p" className="bt-body mt-6 text-muted" delay={70}>
              VerticalQ geeft geen labels, maar bruikbare inzichten. Voor meer
              impact, betere samenwerking en duurzame inzet van talent.
            </Reveal>
          </div>

          <div className="relative grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <div
              aria-hidden="true"
              className="absolute bottom-1 left-1/2 top-1 hidden w-px -translate-x-1/2 bg-border lg:block"
            />

            <Reveal delay={140}>
              <ResultColumn
                title="Voor jou als individu"
                items={individualResults}
                icon={<PersonIcon />}
                className="lg:pr-7"
              />
            </Reveal>
            <Reveal delay={210}>
              <ResultColumn
                title="Voor teams en organisaties"
                items={teamResults}
                icon={<TeamIcon />}
                className="lg:pl-7"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ResultColumn({
  title,
  items,
  icon,
  className = "",
}: {
  title: string;
  items: string[];
  icon: ReactNode;
  className?: string;
}) {
  return (
    <article className={className}>
      <div className="mb-3 text-accent/55">{icon}</div>
      <h3 className="font-heading text-2xl leading-tight text-foreground">{title}</h3>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-8 text-foreground/88">
            <span
              aria-hidden="true"
              className="mt-2 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent"
            >
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
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

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 20c0-3 2.3-5.2 5-5.2M21 20c0-3-2.3-5.2-5-5.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 14.2c1.1-.5 2.4-.8 4-.8s2.9.3 4 .8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
