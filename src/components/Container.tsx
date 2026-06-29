import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Centered, contained column (~1180px) with consistent gutters. The whole site
 * lives inside this — deliberately NOT full-bleed, which is part of how the
 * Essentials tier reads as a simpler, more conventional build than Growth.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1180px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
