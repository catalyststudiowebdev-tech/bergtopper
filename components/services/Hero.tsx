import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function ServicesHero() {
  return (
    <section className="bt-section-shell relative flex min-h-[74vh] flex-col bg-surface-warm sm:min-h-[84vh]">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/diensten_mountainrange.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_58%]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(104deg, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0.8) 34%, rgba(255,255,255,0.52) 58%, rgba(255,255,255,0.34) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-36 sm:h-44"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,247,245,0) 0%, rgba(247,247,245,0.72) 62%, rgba(247,247,245,1) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-1 items-center">
        <Container className="pb-20 pt-20 sm:pb-28 sm:pt-28">
          <div className="max-w-2xl">
            <h1 className="bt-enter font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Diensten die mens{" "}
              <br className="hidden sm:block" />
              en organisatie{" "}
              <span style={{ color: "#8BAF72" }}>versterken.</span>
            </h1>

            <p className="bt-body bt-enter bt-enter-d1 mt-8 max-w-xl text-muted">
              Van betaalbare en snelle recruitment tot diepgaande
              coaching, loopbaanbegeleiding en talentontwikkeling op basis van
              VerticalQ.
            </p>

            <div className="bt-enter bt-enter-d2 mt-10 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-hover sm:w-auto"
              >
                Plan een gesprek
                <ArrowRight />
              </Link>
              <Link
                href="#recruitment"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/35 px-7 py-3.5 text-sm font-semibold text-accent transition-colors hover:border-accent/65 hover:bg-accent/5 sm:w-auto"
              >
                Bekijk diensten
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
