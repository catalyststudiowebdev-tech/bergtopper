import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const groups = [
  {
    name: "Hoofdtalenten",
    talents: [
      "De Denker (kennis en onderzoek)",
      "De Vernieuwer (ideeën en mogelijkheden)",
      "De Perfector (precisie en hoge lat)",
    ],
  },
  {
    name: "Harttalenten",
    talents: [
      "De Inspirator (inspiratie en inzicht)",
      "De Visionair (richting en voorgevoel)",
      "De Integreerder (harmonie en sfeer)",
    ],
  },
  {
    name: "Buiktalenten",
    talents: [
      "De Bruggenbouwer (verbinding en relatie)",
      "De Validator (rust en proces)",
      "De Doener (actie en resultaat)",
    ],
  },
] as const;

export function VerticalQTalentsModel() {
  return (
    <section id="talenten" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal as="h2" className="bt-section-title text-foreground">
            Natuurlijke talenten in samenhang.
          </Reveal>
          <Reveal as="p" className="bt-body mt-6 text-muted" delay={70}>
            VerticalQ onderscheidt negen talenten, verdeeld over de drie
            intelligentiecentra. Iedereen gebruikt alle negen talenten, maar
            vier specifieke talenten vormen vaak jouw unieke profiel.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {groups.map((group, groupIndex) => (
            <Reveal
              key={group.name}
              delay={Math.min(groupIndex, 3) * 70}
              className="relative border-t border-border pt-6"
            >
              <span className="text-xs font-semibold tracking-[0.22em] text-muted/70">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-xl leading-tight text-foreground">
                {group.name}
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-muted marker:text-muted">
                {group.talents.map((talent) => (
                  <li key={talent}>{talent}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 max-w-4xl" delay={210}>
          <h3 className="font-heading text-2xl text-foreground">
            Coherentie en tempo.
          </h3>
          <p className="bt-body mt-4 text-muted">
            Coherentie betekent dat talenten uit hoofd, hart en buik op elkaar
            zijn afgestemd. Dan ontstaat flow en betere besluitvorming.
            Tegelijk heeft ieder talent een eigen tempo: een Bruggenbouwer
            floreert vaak in afwisseling en snelheid, terwijl een Denker rust
            nodig heeft om de diepte in te gaan.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
