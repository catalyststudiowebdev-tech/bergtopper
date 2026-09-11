import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const strengths = [
  {
    number: "01",
    title: "Snelheid en automatisering",
    text: "Met slimme netwerken en zoekprogramma's ontstaat snel een eerste selectie. Dat bespaart kostbare tijd die anders opgaat aan handmatig cv-werk.",
  },
  {
    number: "02",
    title: "Focus op kwaliteit",
    text: "De gewonnen tijd wordt ingezet voor diepgaande analyses en assessments. Zo blijft de match scherp op inhoud en cultuurfit.",
  },
  {
    number: "03",
    title: "Maatwerk per sector",
    text: "Van financiële rollen tot office en legal profielen: iedere zoektocht wordt afgestemd op de context, cultuur en groeifase van het bedrijf.",
  },
  {
    number: "04",
    title: "Toegankelijk tarief",
    text: "Door een efficiënte werkwijze en lage overhead krijg je hoogwaardige recruitment tegen een tarief dat past bij uw organisatie.",
  },
] as const;

export function ServicesRecruitment() {
  return (
    <section id="recruitment" className="bg-surface-warm py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal as="h2" className="bt-section-title text-foreground">
            Recruitment.
          </Reveal>
          <Reveal className="bt-body mt-6 space-y-5 text-muted" delay={70}>
            <p>
              In de huidige arbeidsmarkt kan het voor kleine en middelgrote
              bedrijven lastig zijn om middelen te vinden voor een effectief
              recruitmentproces. Traditionele trajecten zijn vaak kostbaar en
              tijdrovend.
            </p>
            <p>
              BergTopper laat zien dat het anders kan: betaalbaar, efficiënt en
              persoonlijk. Door slim te automatiseren ontstaat ruimte voor
              verdieping, zodat je sneller en beter de juiste kandidaat vindt.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-4">
          {strengths.map((item, index) => (
            <Reveal
              key={item.title}
              as="article"
              delay={Math.min(index, 3) * 70}
              className="relative border-t border-border pt-6"
            >
              <span className="text-xs font-semibold tracking-[0.22em] text-muted/70">
                {item.number}
              </span>
              <h3 className="mt-3 font-heading text-xl leading-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 max-w-3xl" delay={210}>
          <p className="text-sm leading-7 text-muted">
            Talent vinden hoeft geen overweldigende taak te zijn. Met een
            combinatie van geautomatiseerde voorselectie en persoonlijke
            verdieping ontstaat een helder beeld van de kandidaat, zodat
            verkeerde matches worden voorkomen.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-hover sm:w-auto"
          >
            Bespreek mogelijkheden en tarieven
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
