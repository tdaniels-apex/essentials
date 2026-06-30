import type { Metadata } from "next";
import { Michroma, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { site } from "@/lib/site";

// Apex brand system: Michroma (heading + wordmark) + Figtree (body), self-hosted by
// next/font. Michroma ships at weight 400 ONLY (non-variable) — heading hierarchy comes
// from size / letter-spacing / color, never weight. Figtree is variable (300–900).
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Websites & Branding for Small Businesses`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  icons: { icon: "/Icon-1---Black.png", apple: "/Icon-1---Black.png" },
  // Demo clones live content — keep it out of search to avoid duplicate-content
  // competition with apex-aesthetics.co. (Part 5 default; Travis can flip this.)
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Websites & Branding for Small Businesses`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${michroma.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
