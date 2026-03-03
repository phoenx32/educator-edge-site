

# Align Card Content Horizontally on Desktop

## Problem
The four service cards have titles and descriptions of varying lengths. Since each card's content flows naturally, the title row, description block, and image all start at different vertical positions across the row — creating visual misalignment.

## Solution
Set fixed minimum heights on the title and description areas (desktop only) so all cards' content sections align horizontally. This creates a consistent baseline for each content zone without affecting mobile stacking.

## Changes in `src/components/Services.tsx`

**Title row** (line 174): Add `lg:min-h-[3rem]` to ensure both single-line and two-line titles occupy the same vertical space:
```tsx
<div className="flex items-center gap-2 mb-3 lg:min-h-[3rem]">
```

**Description** (line 178): Add `lg:min-h-[7.5rem]` so descriptions align consistently regardless of length:
```tsx
<p className="text-sm text-muted-foreground leading-relaxed lg:min-h-[7.5rem]">
```

These `lg:` prefixes ensure the fixed heights only apply at the 4-column breakpoint. On mobile/tablet where cards stack, they flow naturally without forced heights.

The exact `min-h` values may need minor tuning after visual review — they're based on the longest title (2 lines: "Keynotes & Conference Workshops") and longest description (~4 lines at the card width).

