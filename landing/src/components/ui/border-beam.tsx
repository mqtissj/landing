"use client";

import { useState, type HTMLAttributes, type ReactNode } from "react";
import { BorderBeam } from "border-beam";
import { cn } from "@/lib/utils";

interface BeamCtaProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: ReactNode;
  className?: string;
  /**
   * Keep the beam animating at rest instead of only on hover/focus. Reserve
   * for the single most important call to action on a view — everything
   * else here stays quiet until interacted with, matching the site's
   * "one restrained accent" rule (see Projects.tsx).
   */
  alwaysActive?: boolean;
}

/**
 * Wraps a CTA in cult-ui's `border-beam` package, tuned to this site's flat,
 * hard-edged pop-art system: zero border radius and a restrained strength.
 * At `size="sm"` the beam renders as a crisp white specular sweep around
 * the border rather than a colored glow (`colorVariant`/theme mainly affect
 * the larger "md"/pulse presets) — which, for a button-sized accent, reads
 * as a premium glint rather than a neon gimmick, so it was kept as-is
 * instead of fighting the upstream default.
 */
export function BeamCta({
  children,
  className,
  alwaysActive = false,
  ...props
}: BeamCtaProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <BorderBeam
      size="sm"
      colorVariant="ocean"
      theme="auto"
      duration={3.2}
      strength={0.85}
      borderRadius={0}
      active={alwaysActive || hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={cn(
        "overflow-visible! inline-flex w-fit min-w-0 flex-col items-stretch leading-none",
        className
      )}
      {...props}
    >
      {children}
    </BorderBeam>
  );
}
