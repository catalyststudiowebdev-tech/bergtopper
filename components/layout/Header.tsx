import Link from "next/link";
import { mainNav, siteConfig } from "@/config/site";
import { LogoMark } from "@/components/brand/LogoMark";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="relative z-40 border-b border-border bg-surface/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-75"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-stone-light">
            <LogoMark className="h-5 w-7 text-accent" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-[0.12em] uppercase text-foreground">
              {siteConfig.name}
            </span>
            <span className="text-[10px] tracking-[0.14em] uppercase text-muted">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Hoofdnavigatie" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.ctaHref}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-hover lg:block"
          >
            {siteConfig.ctaLabel}
          </Link>

          <MobileNav
            items={mainNav}
            ctaLabel={siteConfig.ctaLabel}
            ctaHref={siteConfig.ctaHref}
          />
        </div>
      </Container>
    </header>
  );
}
