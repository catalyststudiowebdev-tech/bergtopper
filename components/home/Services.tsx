import Link from "next/link";
import { Container } from "@/components/layout/Container";

const services = [
  {
    icon: "person",
    title: "De juiste mens",
    tagline: "Recruitment",
    description:
      "Meer dan een CV. Wij kijken naar talent, drijfveren en waarden. Zodat de match niet alleen op papier klopt, maar ook in de praktijk.",
    href: "/services/recruitment",
  },
  {
    icon: "coach",
    title: "Sterke groei",
    tagline: "Coaching",
    description:
      "Persoonlijke begeleiding die raakt. Coaching die uitgaat van wie jij bent en jou helpt om te worden wie je wilt zijn.",
    href: "/services/coaching",
  },
  {
    icon: "team",
    title: "Sterke teams",
    tagline: "Team & Leiderschap",
    description:
      "Samenwerken vanuit begrip, vertrouwen en energie. Teams die niet alleen presteren, maar ook floreren.",
    href: "/services/team-leiderschap",
  },
  {
    icon: "verticaliq",
    title: "Hoofd. Hart. Buik.",
    tagline: "VerticalIQ",
    description:
      "Met VerticalIQ verbinden we denken, voelen en intuïtie. Het geheel maakt het verschil.",
    href: "/verticaliq",
  },
] as const;

type IconName = (typeof services)[number]["icon"];

export function Services() {
  return (
    <section className="relative bg-surface-warm py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "linear-gradient(180deg, rgba(53,78,48,0.08) 0%, rgba(53,78,48,0) 100%)",
        }}
      />
      <Container>
        <div className="mb-14 max-w-xl">
          <h2 className="bt-section-title">
            Vier pijlers. Eén richting.
          </h2>
          <p className="bt-body mt-6 text-muted">
            Alles wat BergTopper doet, is gericht op duurzame groei — voor
            mensen, teams en organisaties.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-3xl bg-surface/95 p-7 shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-stone-light text-accent ring-1 ring-accent/10">
                <ServiceIcon name={service.icon} />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
                {service.tagline}
              </p>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                {service.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-gap group-hover:gap-2">
                Meer lezen
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceIcon({ name }: { name: IconName }) {
  if (name === "person") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "coach") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 3 L12 7 M7 5.3 L9.5 8 M17 5.3 L14.5 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5 14c0-3.9 3.1-7 7-7s7 3.1 7 7c0 2.5-1.3 4.7-3.3 6H8.3C6.3 18.7 5 16.5 5 14Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 21h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "team") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17 14c2.2.4 4 2.3 4 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 3 L20 19 H4 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
