import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const offers = [
  {
    title: "Individuele VerticalQ Talentenmeting",
    details:
      "Een persoonlijke sessie van twee uur waarin je via een assessment met onder andere negen eenvoudige houdingen ervaart waar je talenten liggen. Inclusief een uitgebreid rapport met inzicht in je profiel, drijfveren, valkuilen en ontwikkeltips.",
    price: "Vanaf €350,- excl. BTW",
  },
  {
    title: "Teamontwikkeling & Workshops",
    details:
      "We brengen het talentenprofiel en coherentiemodel van je team in kaart. Zo worden oververtegenwoordigde talenten en blinde vlekken zichtbaar, met een praktische aanpak voor betere samenwerking.",
    price: "Prijs op maat",
  },
  {
    title: "Loopbaantrajecten",
    details:
      "VerticalQ als verdieping binnen een loopbaantraject. Ideaal voor professionals die zoeken naar een logische vervolgstap, heroriëntatie of verdere leiderschapsontwikkeling.",
    price: "Prijs op maat",
  },
] as const;

export function VerticalQOffer() {
  return (
    <section id="aanbod" className="bg-surface-warm py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal as="h2" className="bt-section-title text-foreground">
            Mogelijkheden en trajecten.
          </Reveal>
          <Reveal as="p" className="bt-body mt-6 text-muted" delay={70}>
            Kies een vorm die past bij jouw vraag of die van je team. Elk
            traject is gericht op duurzame groei vanuit natuurlijke kracht.
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <Reveal
              key={offer.title}
              as="article"
              delay={Math.min(index, 3) * 70}
              className="group flex flex-col rounded-3xl bg-surface p-7 shadow-sm ring-1 ring-border transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_34px_-18px_rgba(45,62,47,0.45)] hover:ring-accent/30"
            >
              <h3 className="font-heading text-xl leading-tight text-foreground">
                {offer.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                {offer.details}
              </p>
              <p className="mt-5 text-sm font-semibold text-accent transition-colors duration-300 group-hover:text-accent-hover">
                {offer.price}
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_8px_22px_-10px_rgba(45,62,47,0.6)]"
              >
                Vraag dit traject aan
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight />
                </span>
              </Link>
            </Reveal>
          ))}
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
