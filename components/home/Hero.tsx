import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="bt-section-shell relative flex min-h-[78vh] flex-col bg-hero-bg sm:min-h-[88vh]">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/Gemini_Generated_Image_mya7o8mya7o8mya7.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[56%_22%] sm:object-[58%_24%] lg:object-[62%_26%]"
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
        <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-surface sm:text-6xl lg:text-7xl">
              Iedereen verdient{" "}
              <br className="hidden sm:block" />
              zijn eigen{" "}
              <span style={{ color: "#8BAF72" }}>bergtop.</span>
            </h1>

            <p className="bt-body mt-8 max-w-xl text-surface/75">
              BergTopper helpt professionals, leiders en organisaties om hun
              volledige potentieel te benutten. Met recruitment, coaching,
              team- en leiderschapsontwikkeling en VerticalIQ.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={siteConfig.ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
              >
                {siteConfig.ctaLabel}
                <ArrowRight />
              </Link>
              <Link
                href="/verticaliq"
                className="inline-flex items-center gap-2 rounded-full border border-surface/30 px-7 py-3.5 text-sm font-semibold text-surface transition-colors hover:border-surface/60"
              >
                Ontdek VerticalIQ
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
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
