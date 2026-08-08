import { cn } from "@/lib/utils";

// A restrained take on cult-ui's shift-card hover mechanic: the upstream
// component owns its own rounded/glass card shell, which doesn't fit this
// project's flat bordered cards, so only the *sweep* idea was kept and
// rebuilt as a standalone overlay using plain CSS transitions — the same
// technique already used for the color-wash hover in Projects.tsx, just a
// diagonal light streak instead of a flat tint.
export function ShineSweep({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 -skew-x-12",
        "bg-gradient-to-r from-transparent via-background/50 to-transparent",
        "mix-blend-overlay opacity-0 -translate-x-[120%] transition-[transform,opacity] duration-700 ease-out",
        "group-hover:opacity-100 group-hover:translate-x-[420%]",
        className
      )}
    />
  );
}
