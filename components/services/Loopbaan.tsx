import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  {
    number: "01",
    title: "Wie ben ik en wat doe ik",
    text: "We brengen je huidige situatie in kaart: werkgeluk, kernwaarden en loopbaanankers.",
  },
  {
    number: "02",
    title: "Wat kan ik",
    text: "We onderzoeken vaardigheden, kwaliteiten, natuurlijke talenten en kernkwadranten.",
  },
  {
    number: "03",
    title: "Wat wil ik",
    text: "We bepalen je loopbaanperspectief, prioriteiten en de werkomgeving waarin je het best tot je recht komt.",
  },
  {
    number: "04",
    title: "Actie",
    text: "We vertalen inzichten naar concrete doelen, inclusief optimalisatie van cv, LinkedIn en netwerkstrategie.",
  },
] as const;

export function ServicesLoopbaan() {
  return (
    <section id="loopbaan" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal as="h2" className="bt-section-title text-foreground">
            Loopbaantrajecten: bewandel je loopbaan.
          </Reveal>
          <Reveal as="p" className="bt-body mt-6 text-muted" delay={70}>
            Duurzame groei begint bij zelfinzicht. Een loopbaantraject bij
            BergTopper geeft verheldering over waar je staat, wat je kunt en
            waar je het beste tot je recht komt.
          </Reveal>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              as="article"
              delay={Math.min(index, 3) * 70}
              className="relative border-t border-border pt-6"
            >
              <span className="text-xs font-semibold tracking-[0.22em] text-muted/70">
                {step.number}
              </span>
              <h3 className="mt-3 font-heading text-xl leading-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
