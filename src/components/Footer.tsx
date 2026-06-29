import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Container";
import { navItems, site, socialLinks } from "@/lib/site";

/** Compact, single light band — logo, tagline, nav, socials, copyright. */
export function Footer() {
  const year = new Date().getFullYear();
  const copyrightRange =
    year > site.foundedYear ? `${site.foundedYear}–${year}` : `${site.foundedYear}`;

  return (
    <footer className="bg-apex-night text-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" aria-label="Apex Aesthetics — home">
              <Logo height={26} />
            </Link>
            <p className="mt-3 max-w-sm text-sm text-white/60">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
          © {copyrightRange} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
