

# Revert About Section Background to Muted

The reference image shows the About section (Approach + Values) with the original muted/light grey background. We need to revert it and re-fix the alternating pattern.

## Changes

### `src/components/About.tsx` (line 25)
- Change `bg-background` back to `bg-muted/40`

### `src/components/Testimonials.tsx` (line 62)
- Change `bg-muted/40` back to `bg-background` to maintain alternation

### `src/components/Contact.tsx` (line 22)
- Change `bg-background` back to `bg-muted/40` to maintain alternation

**Resulting pattern**: Hero (W) → Services (M) → Clients (W) → About (M) → Testimonials (W) → Contact (M)

This is the original background pattern, just reverting the three swaps made earlier. The Design Cycle animation labels/spacing remain untouched.

