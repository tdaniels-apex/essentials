import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { contact, faqs } from "@/lib/content";
import { site, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project and we'll review your application within 24 hours. Apex Aesthetics — websites and branding for small businesses.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        label={contact.label}
        title={contact.heading}
        subtitle={contact.sub}
        image={contact.image}
        imageAlt={contact.imageAlt}
      />

      {/* Info + working form. */}
      <Section>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Apply to work with us
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{contact.microcopy}</p>

              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-sm font-semibold text-foreground">Where we work</dt>
                  <dd className="mt-1 text-muted">
                    Eastern North Carolina &amp; clients nationwide
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">Response time</dt>
                  <dd className="mt-1 text-muted">Within 24 hours</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">Follow</dt>
                  <dd className="mt-1 flex gap-5">
                    {socialLinks.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground transition-colors hover:text-apex-red"
                      >
                        {social.label}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-sm text-muted-foreground">{site.tagline}</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-line bg-background p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Condensed FAQ (gray band). */}
      <Section band>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading centered label="FAQ" title={contact.faqHeading} className="mb-8" />
          </Reveal>
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
