import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const traditional = [
  "Meten wat je zelf inschat of observeerbaar gedrag.",
  "Beperkt tot ratio en zichtbare voorkeuren.",
  "Laten ruimte over voor interpretatie.",
];

const verticalQ = [
  "Brengt de diepere laag in beeld via fysieke ervaring.",
  "Meet onbewuste voorkeuren, bewegingspatronen en stressreacties.",
  "Laat weinig ruimte voor interpretatie: het is wie je van nature bent.",
];

export function VerticalQWhySection() {
  return (
    <section id="waarom" className="bg-surface-warm py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.45fr] lg:gap-12">
          <div className="max-w-lg">
            <Reveal as="h2" className="bt-section-title text-foreground">
              Voorbij vragenlijsten.
              <br />
              <span style={{ color: "#8BAF72" }}>Zichtbaar gedrag.</span>
            </Reveal>
            <Reveal className="bt-body mt-6 space-y-5 text-muted" delay={70}>
              <p>
                De meeste testen meten wat je kunt of wat je laat zien.
                VerticalQ kijkt dieper. In plaats van alleen een digitale
                vragenlijst te geven, ervaar je tijdens de meting fysiek waar
                je natuurlijke kracht zit.
              </p>
            </Reveal>
          </div>

          <div className="relative grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <div
              aria-hidden="true"
              className="absolute bottom-1 left-1/2 top-1 hidden w-px -translate-x-1/2 bg-border lg:block"
            />
            <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:flex">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-xs font-semibold text-surface">
                vs.
              </span>
            </div>

            <Reveal as="article" className="lg:pr-7" delay={140}>
              <h3 className="font-heading text-2xl text-foreground">
                Traditionele tests
              </h3>
              <ul className="mt-5 space-y-4 text-base leading-8 text-foreground/90">
                {traditional.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-1 text-lg text-foreground/45">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="article" className="lg:pl-7" delay={210}>
              <h3 className="font-heading text-2xl text-foreground">VerticalQ</h3>
              <ul className="mt-5 space-y-4 text-base leading-8 text-foreground/90">
                {verticalQ.map((item) => (
                  <li key={item} className="flex gap-3">
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
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
