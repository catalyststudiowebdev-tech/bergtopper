import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const points = [
  {
    number: "01",
    title: "Gemeenschappelijke taal",
    text: "Teams leren elkaars talenten en voorkeuren in tempo en ritme beter begrijpen.",
  },
  {
    number: "02",
    title: "Van frictie naar aanvulling",
    text: "Verschillen in aanpak worden niet langer gezien als obstakel, maar als noodzakelijke kracht.",
  },
  {
    number: "03",
    title: "Balans in Zijn en Doen",
    text: "Naast actie en resultaat ontstaat ruimte voor reflectie en anticiperen op verandering.",
  },
] as const;

export function ServicesTeamOrg() {
  return (
    <section id="team-organisatie" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal as="h2" className="bt-section-title text-foreground">
            Team- en organisatieontwikkeling.
          </Reveal>
          <Reveal as="p" className="bt-body mt-6 text-muted" delay={70}>
            In een snel veranderende wereld is inzicht in gedrag alleen niet
            meer genoeg. BergTopper helpt teams beter samenwerken door talenten
            bewust in te zetten en de adaptieve intelligentie van de
            organisatie te vergroten.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {points.map((point, index) => (
            <Reveal
              key={point.title}
              as="article"
              delay={Math.min(index, 3) * 70}
              className="relative border-t border-border pt-6"
            >
              <span className="text-xs font-semibold tracking-[0.22em] text-muted/70">
                {point.number}
              </span>
              <h3 className="mt-3 font-heading text-xl leading-tight text-foreground">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {point.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mt-8 max-w-3xl text-sm leading-7 text-muted" delay={210}>
          In trajecten voor reguliere teams en projectteams leren teamleden
          vanuit verschillende talenten samenwerken aan gedeelde doelen. Dat
          voorkomt ingesleten patronen en maakt besluitvorming soepeler en
          wendbaarder.
        </Reveal>
      </Container>
    </section>
  );
}
