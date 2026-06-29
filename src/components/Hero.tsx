import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

/**
 * Split hero: text on the left, a real image on the right (rounded, soft shadow).
 * Every page leads with one — never a bare text block on white (Part 0 rule 4).
 */
export function Hero({
  label,
  title,
  subtitle,
  image,
  imageAlt,
  children,
}: {
  label?: string;
  title: ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-apex-night text-white">
      <Container className="py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="max-w-xl">
              {label ? (
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-apex-red-bright" aria-hidden="true" />
                  <p className="text-sm font-semibold text-apex-red-bright">{label}</p>
                </div>
              ) : null}
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/70">{subtitle}</p>
              {children ? (
                <div className="mt-8 flex flex-wrap gap-3">{children}</div>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/10">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
