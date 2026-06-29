/** A plain review card — short quote + attribution. Used in the Home proof section. */
export function Testimonial({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-background p-6 shadow-sm sm:p-7">
      <Stars />
      <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold text-foreground">{name}</span>
        <span className="text-muted"> — {role}</span>
      </figcaption>
    </figure>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-apex-red" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
        </svg>
      ))}
    </div>
  );
}
