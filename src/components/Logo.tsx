import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Apex wordmark — the official white lockup, shown on the dark (#0e0e0e) header
 * and footer chrome. One of the only three things shared with Growth: logo, red,
 * fonts. (Travis can swap in a different lockup.)
 */
const LOGO_SRC = "/apex-logo-white.webp";
const ASPECT = 836 / 226;

export function Logo({
  height = 30,
  className,
  priority = false,
}: {
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  const width = Math.round(height * ASPECT);
  return (
    <Image
      src={LOGO_SRC}
      alt="Apex Aesthetics"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto", className)}
      style={{ height, width }}
    />
  );
}
