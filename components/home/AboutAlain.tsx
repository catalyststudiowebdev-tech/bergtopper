import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";

export function AboutAlain() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-16">
          {/* Photo */}
          <Reveal
            className="relative mx-auto w-full max-w-[17rem] sm:max-w-xs lg:mx-0 lg:max-w-sm"
            delay={70}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:rounded-[2rem]">
              <Image
                src="/AlainOnTop.jpeg"
                alt="Alain — oprichter BergTopper"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 272px, (max-width: 1024px) 320px, 384px"
                quality={90}
              />
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal as="h2" className="bt-section-title text-foreground">
              De mens achter BergTopper.
            </Reveal>
            <Reveal className="bt-body mt-6 space-y-5 text-muted" delay={140}>
              <p>
                Alain is oprichter van BergTopper en begeleidt professionals
                en teams al meer dan tien jaar in hun groei. Zijn aanpak
                combineert scherpe analytische inzichten met een oprechte
                verbinding met de mens achter de functie.
              </p>
              <p>
                Als gecertificeerd coach en recruiter weet hij als geen ander
                dat duurzame verandering begint bij zelfkennis. Niet bij
                snelle oplossingen of mooie modellen, maar bij de bereidheid
                om te kijken naar wie je werkelijk bent.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <a
                href={siteConfig.linkedinArticles}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Lees zijn artikelen op LinkedIn
                <ArrowRight />
              </a>
            </Reveal>
          </div>
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
