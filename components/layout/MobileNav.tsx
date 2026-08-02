"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/config/site";

type MobileNavProps = {
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
};

export function MobileNav({ items, ctaLabel, ctaHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label={open ? "Menu sluiten" : "Menu openen"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md lg:hidden"
      >
        <span
          className={`block h-0.5 w-5 bg-foreground transition-all duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-foreground transition-all duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-foreground transition-all duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 border-t border-border bg-surface px-6 py-6 shadow-lg lg:hidden">
          <nav>
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-stone-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-border pt-4">
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-accent-fg"
              >
                {ctaLabel}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
