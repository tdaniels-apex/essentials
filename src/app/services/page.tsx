import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { servicesPage, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity, web design, design systems, and creative support — custom-made for small businesses across Eastern North Carolina and beyond.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        label={servicesPage.label}
        title={servicesPage.heading}
        subtitle={servicesPage.lead}
        image={servicesPage.image}
        imageAlt={servicesPage.imageAlt}
      >
        <Button href="/contact" size="lg">
          Start a Project
        </Button>
      </Hero>

      {/* Each service as an alternating image / text row. */}
      <Section>
        <div className="space-y-16 sm:space-y-20">
          {services.map((service, i) => {
            const imageRight = i % 2 === 1;
            return (
              <Reveal key={service.slug}>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-line ${
                      imageRight ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted">
                      {service.blurb}
                    </p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {service.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-apex-red"
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* How we work — three plain steps (gray band, no animation/count-up). */}
      <Section band>
        <Reveal>
          <SectionHeading
            label="How we work"
            title="A clear, collaborative process"
            lead="Strategy first, then design and build — so every choice has a reason behind it and you're involved the whole way."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {servicesPage.process.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 90}>
              <div className="h-full rounded-2xl border border-line bg-background p-6 shadow-sm">
                <span className="text-sm font-semibold text-apex-red">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Let&apos;s build something clean and effective.
            </h2>
            <p className="mt-3 text-muted">
              Tell us about your project and we&apos;ll review it within 24 hours.
            </p>
            <div className="mt-6">
              <Button href="/contact" size="lg">
                Start a Project
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
