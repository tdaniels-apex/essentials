import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonial } from "@/components/Testimonial";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import {
  about,
  clients,
  closing,
  contact,
  figures,
  home,
  services,
  testimonials,
  whoWeServe,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero
        label={home.hero.label}
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        image={home.hero.image}
        imageAlt={home.hero.imageAlt}
      >
        <Button href={home.hero.cta.href} size="lg">
          {home.hero.cta.label}
        </Button>
        <Button href="/services" variant="light" size="lg">
          View Services
        </Button>
      </Hero>

      {/* Who we are — the About section (replaces a separate About page). */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-line">
              <Image
                src={about.image}
                alt={about.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className="mb-3 text-sm font-semibold text-apex-red">{about.label}</p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {about.heading}
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-muted">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <p className="mt-7 text-sm font-semibold text-foreground">
                {about.includesHeading}
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {about.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What we do — photo-led service cards (the gray band). */}
      <Section band>
        <Reveal>
          <SectionHeading
            label="What we do"
            title="Design that helps your business grow"
            lead="Four core services that work together to make your business look established and convert better."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 2) * 90}>
              <ServiceCard
                title={service.title}
                body={service.blurb}
                image={service.image}
                imageAlt={service.imageAlt}
              />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Button href="/services" variant="outline">
            View all services
          </Button>
        </Reveal>
      </Section>

      {/* Proof — static figures, reviews, and a tidy client set (no marquee). */}
      <Section>
        <Reveal>
          <SectionHeading
            centered
            label="Proof"
            title="Trusted by small businesses that wanted to grow"
          />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-6">
          {figures.map((f) => (
            <Reveal key={f.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-apex-red sm:text-4xl">
                {f.value}
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{f.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 90}>
              <Testimonial quote={t.quote} name={t.name} role={t.role} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="text-center text-sm font-semibold text-muted-foreground">
            A few of the businesses we&apos;ve worked with
          </p>
          <ul className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-2">
            {clients.map((name) => (
              <li key={name} className="text-sm font-medium text-muted">
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Who we serve — Fox-Trail service-area equivalent (gray band). */}
      <Section band>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {whoWeServe.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{whoWeServe.body}</p>
          </div>
        </Reveal>
      </Section>

      {/* Closing CTA + inline working contact form. */}
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {closing.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{closing.sub}</p>
              <p className="mt-6 text-sm text-muted-foreground">{contact.microcopy}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-line bg-background p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 shrink-0 text-apex-red"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
