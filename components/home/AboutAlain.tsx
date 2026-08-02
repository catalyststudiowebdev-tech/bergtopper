import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function AboutAlain() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-16">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-xs lg:mx-0 lg:max-w-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:rounded-[2rem]">
              <Image
                src="/alain.jpg"
                alt="Alain — oprichter BergTopper"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 280px, 320px"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="bt-section-title text-foreground">
              De mens achter BergTopper.
            </h2>
            <div className="bt-body mt-6 space-y-5 text-muted">
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
              <p>
                VerticalIQ — zijn eigen methodiek — verbindt hoofd, hart en
                buik tot één helder kompas voor leiderschap en groei.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
