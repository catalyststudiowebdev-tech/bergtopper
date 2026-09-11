import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="bt-section-shell relative flex min-h-[78vh] flex-col bg-hero-bg sm:min-h-[88vh]">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/HeroAlain.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_22%] sm:object-[58%_24%] lg:object-[62%_26%]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(8,10,8,0.74) 12%, rgba(8,10,8,0.52) 38%, rgba(8,10,8,0.34) 58%, rgba(8,10,8,0.5) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.42) 100%)" }}
      />

      <div className="relative z-10 flex flex-1 items-center">
        <Container className="pb-24 pt-20 sm:pb-32 sm:pt-28">
          <div className="max-w-2xl">
            <h1 className="bt-enter font-display text-4xl leading-[1.08] tracking-tight text-surface sm:text-6xl lg:text-7xl">
              Iedereen verdient{" "}
              <br className="hidden sm:block" />
              zijn eigen{" "}
              <span style={{ color: "#8BAF72" }}>bergtop.</span>
            </h1>

            <p className="bt-body bt-enter bt-enter-d1 mt-8 max-w-xl text-surface/75">
              BergTopper helpt professionals, leiders en organisaties om hun
              volledige potentieel te benutten. Met recruitment, coaching,
              team- en leiderschapsontwikkeling en VerticalQ.
            </p>

            <div className="bt-enter bt-enter-d2 mt-10 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={siteConfig.ctaHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                {siteConfig.ctaLabel}
                <ArrowRight />
              </Link>
              <Link
                href="/vq"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-surface/30 px-7 py-3.5 text-sm font-semibold text-surface transition-colors hover:border-surface/60 sm:w-auto"
              >
                Ontdek VerticalQ
                <ArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </div>
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
