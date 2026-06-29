import type { MetadataRoute } from "next";

// This is a PoC demo, not a site we want in search — the real site is
// apex-aesthetics.co. Crawling is intentionally ALLOWED so Googlebot can read
// the `noindex, nofollow` meta (set in layout.tsx) and drop these pages; a
// `disallow: "/"` here would block the crawl and the noindex would never be
// seen, which can leave the URL indexable. No sitemap — nothing to advertise.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
  };
}
