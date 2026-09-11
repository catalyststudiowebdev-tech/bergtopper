import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const centers = [
  {
    name: "Hoofdintelligentie",
    text: "Analyse, logica en strategie. Je denkt na, plant vooruit en overziet het grotere geheel.",
    icon: "head",
  },
  {
    name: "Hartintelligentie",
    text: "Gevoel, verbinding en betekenis. Je voelt aan wat klopt, motiveert en brengt mensen samen.",
    icon: "heart",
  },
  {
    name: "Buikintelligentie",
    text: "Intuïtie, daadkracht en timing. Je handelt, beslist en beweegt wanneer het ertoe doet.",
    icon: "gut",
  },
] as const;

type IconName = (typeof centers)[number]["icon"];

export function VerticalQIntelligenceCenters() {
  return (
    <section id="centra" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal as="h2" className="bt-section-title text-foreground">
            De intelligentie van
            <br />
            <span style={{ color: "#8BAF72" }}>hoofd, hart en buik.</span>
          </Reveal>
          <Reveal
            as="p"
            className="bt-body mx-auto mt-6 max-w-3xl text-muted"
            delay={70}
          >
            Het menselijke talent bestaat uit drie essentiële intelligenties die
            samen bepalen hoe je keuzes maakt, contact legt en in beweging
            komt. VerticalQ maakt deze drie intelligenties zichtbaar.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-0">
          {centers.map((center, index) => (
            <Reveal
              key={center.name}
              as="article"
              delay={Math.min(index, 3) * 70}
              className="relative rounded-2xl p-3 lg:px-8 lg:py-4 lg:[&:not(:first-child)]:before:absolute lg:[&:not(:first-child)]:before:bottom-2 lg:[&:not(:first-child)]:before:left-0 lg:[&:not(:first-child)]:before:top-2 lg:[&:not(:first-child)]:before:w-px lg:[&:not(:first-child)]:before:bg-border"
            >
              <div className="mb-4">
                <CenterIcon name={center.icon} />
              </div>
              <h3 className="font-heading text-xl leading-tight text-foreground">
                {center.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {center.text}
              </p>

            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CenterIcon({ name }: { name: IconName }) {
  const src = name === "head" ? "/icons/brain.png" : name === "heart" ? "/icons/heart.png" : "/icons/stomach.png";
  const sizeClass = "h-6 w-6";
  const weightClass = name === "heart" ? "" : "scale-[1.06]";

  return (
    <Image
      src={src}
      alt=""
      width={24}
      height={24}
      aria-hidden="true"
      className={`${sizeClass} ${weightClass} object-contain opacity-85 [filter:brightness(0)_saturate(100%)_invert(50%)_sepia(20%)_saturate(520%)_hue-rotate(44deg)_brightness(87%)_contrast(92%)]`}
    />
  );
}
