"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";

const testimonials = [
  {
    quote:
      "Hele fijne benadering van Alain met een interessant instrument. Ik heb nieuwe inzichten opgedaan die me verder brengen in mijn werkend leven, omdat ik letterlijk meer in mijn kracht kan gaan staan. Bijzonder hoor.",
    name: "Elisabeth Hoitsma",
    role: "Coach",
    company: "Zelfstandig",
    initials: "EH",
  },
  {
    quote:
      "Hele prettige en warme begeleiding van Alain. Het instrument dat hij inzet is verhelderend en werkt verrassend diep door. Ik heb waardevolle inzichten gekregen die me niet alleen helpen in mijn werk, maar ook persoonlijk sterker maken.",
    name: "Wensley Alvares",
    role: "Ondernemer",
    company: "Creatieve sector",
    initials: "WA",
  },
  {
    quote:
      "Ontspannend, creatief, kritische denker, veelzijdig ... en veel meer. Of het zakelijk of privé betreft: altijd respectvol en met een luisterend oor. Een wandeling met hem is een ontdekkingsreis.",
    name: "Kin Sun Fong",
    role: "Professional",
    company: "Tech",
    initials: "KF",
  },
  {
    quote:
      "Alain heeft een zeldzame eigenschap: hij is echt geïnteresseerd in mensen, hun ambities en hun talenten. Toen ik door Alain werd geïnterviewd, voelde ik me niet zomaar een cv, maar een mens met inspirerende gesprekken.",
    name: "Irina Kosareva",
    role: "Leidinggevende",
    company: "Zakelijke dienstverlening",
    initials: "IK",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const total = testimonials.length;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);

    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % total);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, reduceMotion, total]);

  const active = testimonials[activeIndex];

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: heading */}
          <div className="max-w-md">
            <h2 className="bt-section-title text-accent">
              Echte verhalen van coaches, creators en experts die ik heb geholpen
            </h2>
            <p className="bt-body mt-6 text-muted">
              Elke stem vertelt een uniek traject, gevormd door helderheid,
              strategie en de moed om authentiek te groeien.
            </p>
          </div>

          {/* Right: testimonial card */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <div className="flex gap-5">
              {/* Avatar */}
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-section-olive text-sm font-bold text-surface"
              >
                {active.initials}
              </div>

              <blockquote className="flex min-h-[260px] flex-col sm:min-h-[240px]">
                <p className="text-lg leading-snug tracking-tight text-accent sm:text-xl lg:text-2xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <footer className="mt-auto pt-6">
                  <p className="text-base font-semibold text-foreground">
                    {active.name}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">
                    {active.role}
                    {active.company ? ` @ ${active.company}` : ""}
                  </p>
                </footer>
              </blockquote>
            </div>

            {/* Pagination dots */}
            <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start lg:pl-[68px]">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ga naar testimonial ${index + 1}`}
                  aria-current={index === activeIndex}
                  className={`rounded-full transition-all ${
                    index === activeIndex
                      ? "h-2 w-6 bg-accent"
                      : "h-2 w-2 bg-accent/25 hover:bg-accent/45"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
