import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Demo mirrors live content — kept out of search to avoid duplicate-content
// competition with apex-aesthetics.co (Part 5). Flip to allow if Travis wants.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
