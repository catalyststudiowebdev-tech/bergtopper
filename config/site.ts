export const siteConfig = {
  name: "BergTopper",
  tagline: "Recruitment & Coaching",
  description:
    "BergTopper helpt professionals, leiders en organisaties om hun volledige potentieel te benutten. Met recruitment, coaching, team- en leiderschapsontwikkeling en VerticalIQ.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ctaLabel: "Plan een gesprek",
  ctaHref: "/contact",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Add new pages here as the site grows. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "VerticalIQ", href: "/verticaliq" },
  { label: "Contact", href: "/contact" },
];
