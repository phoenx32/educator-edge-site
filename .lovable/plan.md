

# Place Design Cycle on White Background

## Current Background Pattern
Hero (white) → Services (muted) → Clients (white) → **About (muted)** → Testimonials (white) → Contact (muted)

## Approach
Split the About section into two visual zones to keep the alternating rhythm:

1. **Design Cycle area** — standalone `<section>` with `bg-background` (white), containing the "Our Approach" heading, description, and the animation
2. **Values + Stats area** — remains in `bg-muted/40` (grey), containing "Our Values" cards and "By the Numbers" stats

This preserves the alternating rhythm: Clients (white) → Design Cycle (white is fine since Clients is small/different) → Values+Stats (muted) → Testimonials (white). Actually, to avoid two consecutive whites, we can make Clients `bg-muted/40` instead.

**Revised pattern**: Services (muted) → Clients (muted — subtle transition) → Design Cycle (white) → Values+Stats (muted) → Testimonials (white)

Alternatively, the simplest cohesive approach: keep About as one section but change to `bg-background` (white), and swap Testimonials to `bg-muted/40` to maintain alternation.

**Simplest clean pattern**: Services (muted) → Clients (white) → About (white) → Testimonials (muted) → Contact (white or muted)

## Recommended Plan

### File: `src/components/About.tsx`
- Change section background from `bg-muted/40` to `bg-background` (white)

### File: `src/components/Testimonials.tsx`
- Change from `bg-background` to `bg-muted/40` to maintain alternation

### File: `src/components/Contact.tsx`
- Change from `bg-muted/40` to `bg-background` to continue alternation

**Final pattern**: Hero (white) → Services (muted) → Clients (white) → About (white) → Testimonials (muted) → Contact (white) → Footer

Two consecutive whites (Clients → About) is acceptable since Clients is a compact logo strip that reads differently from a full content section. If preferred, we can also give the Values+Stats sub-area a subtle `bg-muted/20` inner container to add visual separation within the About section.

## Technical Details
- Three single-line class changes across three files
- No structural changes to any component

