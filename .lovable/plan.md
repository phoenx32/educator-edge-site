

# Fix Service Cards: Remove Extra Nesting Level

## Problem

There are currently **3 visual layers**: outer white card > inner grey rounded container > image with rounded corners + shadow. The reference (image-58) shows only **2 layers**: outer card > colored background area with image on top.

## Solution

Remove the intermediate `bg-muted/30 rounded-xl` wrapper. Instead, make the top portion of the card itself act as the colored background, with the image sitting directly on it. This eliminates the "card within a card" look.

## Changes to `src/components/Services.tsx` (lines 165-173)

Replace the current nested structure:

```tsx
{/* Current: 3 levels */}
<div className="bg-card rounded-2xl border ... p-5">
  <div className="bg-muted/30 rounded-xl p-4 ...">  {/* REMOVE THIS */}
    <img className="w-44 h-28 ... rounded-lg shadow-sm" />
  </div>
```

With a flat 2-level structure where the background area is part of the card flow:

```tsx
<div className="bg-card rounded-2xl border border-border/40 overflow-hidden flex flex-col">
  {/* Top area: subtle background with image */}
  <div className="bg-muted/30 px-6 pt-6 pb-4 flex items-center justify-center">
    <img
      src={service.image}
      alt={service.title}
      className="w-full max-w-[280px] h-36 object-cover rounded-xl"
    />
  </div>
  {/* Bottom area: text content */}
  <div className="p-5 flex flex-col flex-1">
    ...
  </div>
</div>
```

Key differences:
- The background div is **not rounded** -- it spans edge-to-edge within the card (the card's own `rounded-2xl overflow-hidden` clips the top corners)
- No `shadow-sm` on the image -- cleaner, matches reference
- Image is larger (`max-w-[280px] h-36`) and uses `rounded-xl` for softer corners
- Padding moves from card-level `p-5` to section-level: `px-6 pt-6 pb-4` on top, `p-5` on bottom
- Only 2 visual layers: white card and colored background band

