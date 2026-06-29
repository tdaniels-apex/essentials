"use client";

import { useId, useState } from "react";
import type { Faq } from "@/lib/content";

/** Plain, accessible single-open accordion (button + region, keyboard support). */
export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-card border border-line bg-background">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              >
                <span className="text-base font-medium text-foreground">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-xl leading-none text-apex-red transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-5 text-muted sm:px-6"
            >
              <p className="leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
