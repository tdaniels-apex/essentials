/**
 * Site-wide config (single source of truth for chrome).
 * Values mirror the live site apex-aesthetics.co — see docs/essentials-demo-task.md.
 * Essentials tier = 3 pages only (Home, Services, Contact). No Projects, no About.
 */

export const site = {
  name: "Apex Aesthetics",
  /** Used in <title> templates and the footer copyright. */
  shortName: "Apex Aesthetics",
  url: "https://essentials.apex-aesthetics.co",
  description:
    "Custom websites and branding for growing businesses. Clean, professional design — brand identity, web design, and design systems built to perform.",
  tagline:
    "Proudly Serving Eastern North Carolina & Clients Nationwide Since 2023",
  /** Year the business started — drives the copyright range. */
  foundedYear: 2023,
} as const;

/** Primary navigation — the three Essentials-tier pages, in header order. */
export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

/** Header/footer primary CTA. */
export const primaryCta = {
  label: "WORK WITH US",
  href: "/contact",
} as const;

/** Social links — sampled from the live site footer. */
export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/apexaesthetics.co",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/apexaesthetics.inc",
  },
] as const;
