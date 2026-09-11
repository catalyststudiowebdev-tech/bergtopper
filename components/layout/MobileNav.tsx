"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/config/site";

type MobileNavProps = {
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
};

export function MobileNav({ items, ctaLabel, ctaHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    function getFocusable() {
      const root = rootRef.current;
      if (!root) return [];
      return Array.from(
        root.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]'),
      );
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      const root = rootRef.current;
      if (!root?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <div ref={rootRef} className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? "Menu sluiten" : "Menu openen"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md"
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
        <div
          id={panelId}
          className="absolute inset-x-0 top-full z-50 border-t border-border bg-surface px-4 py-6 shadow-lg sm:px-6"
        >
          <nav aria-label="Mobiele navigatie">
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
    </div>
  );
}
