import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LogoMark } from "@/components/brand/LogoMark";
import { Container } from "@/components/layout/Container";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-hero-bg py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 bt-fade-hero opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 bt-dots-dark opacity-50" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          {/* Mountain icon */}
          <LogoMark className="mx-auto mb-8 h-9 w-auto text-surface/40" />

          <h2 className="bt-section-title text-surface">
            Klaar om jouw bergtop te bereiken?
          </h2>
          <p className="bt-body mx-auto mt-6 max-w-lg text-surface/75">
            Plan een vrijblijvend kennismakingsgesprek. We luisteren eerst,
            stellen de juiste vragen en kijken samen wat past.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link
              href={siteConfig.ctaHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              {siteConfig.ctaLabel}
              <ArrowRight />
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-surface/40 px-7 py-3.5 text-sm font-semibold text-surface transition-colors hover:border-surface/70 hover:bg-surface/5 sm:w-auto"
            >
              Bekijk alle services
              <ArrowRight />
            </Link>
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
