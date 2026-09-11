export const siteConfig = {
  name: "BergTopper",
  tagline: "Recruitment & Coaching",
  description:
    "BergTopper helpt professionals, leiders en organisaties om hun volledige potentieel te benutten. Met recruitment, coaching, team- en leiderschapsontwikkeling en VerticalQ.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "alain@bergtopper.nl",
  linkedinArticles:
    "https://www.linkedin.com/in/alain-van-den-berg-b6b4552/recent-activity/articles/",
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
  { label: "Diensten", href: "/services" },
  { label: "VerticalQ", href: "/verticalq" },
  { label: "Contact", href: "/contact" },
];
