import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * A service shown Fox-Trail style: a real photo on top, then title + a warm
 * benefit-led paragraph, and (optionally) a short "what's included" list. No
 * numbered 01–04 pillars — that's a banned Growth pattern.
 */
export function ServiceCard({
  title,
  body,
  image,
  imageAlt,
  points,
  className,
}: {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  points?: string[];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-background shadow-sm",
        className,
      )}
    >
      <div className="relative aspect-[16/10] bg-band">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold tracking-tight text-foreground">{title}</h3>
        <p className="mt-2.5 leading-relaxed text-muted">{body}</p>

        {points && points.length ? (
          <ul className="mt-5 grid gap-2 border-t border-line pt-5 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-muted">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-apex-red"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
