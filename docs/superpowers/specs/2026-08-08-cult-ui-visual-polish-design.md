# Cult UI visual polish — design

**Date:** 2026-08-08
**Status:** Approved by user ("Injerto curado" approach, "Mandale mecha" to proceed)

## Context

`landing/` is a Vite + React + Tailwind + shadcn/ui personal portfolio with a hand-built
"pop-art / editorial brutalist" identity: thick `border-2 border-foreground` outlines, hard
offset shadows (`shadow-pop`), a muted pop palette (`--pop-yellow/coral/cobalt/mint/lilac`),
grain texture, marker/sticker doodle accents, and framer-motion character-level reveals in
`Hero.tsx`. Comment in the code: "Recruiters decide in seconds" — the whole design is already
tuned for a fast, confident first impression.

The user asked to install the shadcn MCP server configured with the `@cult-ui` registry
(`https://cult-ui.com/r/{name}.json`) and use it to make the landing page "ultra llamativo"
while keeping it professional for recruiters — better buttons, an animated hero, better project
cards, and some rich effects.

Cult UI's own default look (rounded corners, glass/dark neumorphic surfaces) does not match
this codebase's sharp-border brutalist system. Swapping components wholesale would fight the
existing identity, so the chosen approach is a curated graft: pull specific *mechanics* from
cult-ui and restyle them fully with this project's existing tokens.

## Approach (chosen: "Injerto curado")

Two alternatives were presented and rejected:
- **Component swap** — drop in cult-ui components with their default styling. Rejected: clashes
  with the sharp/hard-shadow brutalist look, higher risk of diluting the existing brand.
- **Effects-only layer** — background atmosphere only, no button/card changes. Rejected: doesn't
  satisfy the explicit ask for better buttons and cards.

## What ships

1. **Border Beam** (from cult-ui `border-beam`) — animated light chasing the border of primary
   CTA buttons, color-mapped to each button's existing pop tone. Layered on top of the existing
   `.btn-pop` class, not a replacement. Applied to: Hero's 3 CTAs (Ver la obra / CV ES / CV EN),
   the Contact submit button, and Projects' "Archivo en GitHub" link.
2. **Squiggle Arrow** (from cult-ui `squiggle-arrow`) — a hand-drawn SVG arrow accent near the
   Hero's primary CTA, matching the existing marker/sticker doodle motif.
3. **Grid Beam** (from cult-ui `grid-beam`) — a low-opacity animated beam traveling along the
   existing `hero-bg-grid` lines in the Hero background, cobalt-tinted, behind the color blobs.
4. **Shine sweep** (mechanic adapted from cult-ui `shift-card`) — a soft diagonal light sweep on
   hover, applied only to the *featured* project card image (not the grid cards, to avoid noise),
   layered with the existing tilt + color-overlay hover behavior.

Out of scope: Navbar structural changes beyond adding Border Beam to its CTA if one exists;
non-featured project cards; any change to copy, layout, or the existing color palette.

## Technical approach

- Fetch real source for `border-beam`, `squiggle-arrow`, `grid-beam` from
  `https://cult-ui.com/r/{name}.json` (same content the shadcn MCP/CLI would install).
- Land components under `landing/src/components/ui/`, following the existing shadcn alias
  conventions in `components.json`.
- Strip/replace every hardcoded color, radius, and blur/glass surface from the fetched source
  with this project's existing CSS variables and utility classes (`--pop-cobalt`, `--foreground`,
  `border-2 border-foreground`, `shadow-pop`) so corners stay sharp and shadows stay hard.
- Animations respect `prefers-reduced-motion`.
- No new dependencies expected beyond what's already installed (framer-motion, inline SVG).

## Verification

- Browser preview: screenshot Hero, project card hover, button hover, in both light and dark
  theme, and at mobile width.
- Console/network check for errors during preview.
- Animations restricted to `transform`/`opacity` to avoid layout thrash or perf regressions.

## MCP installation (companion change, already applied)

- `.mcp.json` at repo root registers the `shadcn` MCP server (`npx shadcn@latest mcp`).
- `landing/components.json` gained a `registries.@cult-ui` entry pointing at
  `https://cult-ui.com/r/{name}.json`.
- Takes effect on the next Claude Code session/restart; this session applies the visual polish
  above by fetching the same registry endpoints directly.
