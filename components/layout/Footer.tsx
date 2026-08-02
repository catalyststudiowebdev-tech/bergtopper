import Link from "next/link";
import { mainNav, siteConfig } from "@/config/site";
import { LogoMark } from "@/components/brand/LogoMark";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg text-surface/75">
      <Container className="py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-75"
          >
            <LogoMark className="h-5 w-7 text-surface/70" />
            <span className="text-sm font-bold tracking-[0.14em] uppercase text-surface">
              BergTopper
            </span>
          </Link>

          <nav aria-label="Footer navigatie">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface/60 transition-colors hover:text-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-surface/10 pt-6">
          <p className="text-xs text-surface/40">
            &copy; {year} {siteConfig.name}. Alle rechten voorbehouden.
          </p>
        </div>
      </Container>
    </footer>
  );
}
