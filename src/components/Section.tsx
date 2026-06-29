import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";

/**
 * A standard stacked content block with even vertical padding — predictable and
 * tidy (the opposite of Growth's full-bleed cinematic flow). Set `band` to use
 * the single light-gray background that breaks up the white for rhythm.
 */
export function Section({
  children,
  band = false,
  className,
  containerClassName,
  id,
}: {
  children: ReactNode;
  band?: boolean;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20",
        band && "bg-band",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Simple section heading: optional small red label + title + optional lead. */
export function SectionHeading({
  label,
  title,
  lead,
  centered = false,
  className,
}: {
  label?: string;
  title: ReactNode;
  lead?: ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {label ? (
        <p className="mb-3 text-sm font-semibold text-apex-red">{label}</p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
      ) : null}
    </div>
  );
}
