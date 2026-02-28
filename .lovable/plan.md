

# Service Cards: Match Reference Exactly

## Problem

The current image area has `px-6 pt-6 pb-4` padding, creating a large gap between the image and the card edges. The reference (image-59) shows the image filling nearly the entire width of the card with only a thin frame/margin around it.

## Solution

Reduce the padding around the image to create a tight frame effect. The image should stretch to fill the background area with only minimal padding (like `p-3`), and be full-width with no `max-w` constraint.

## Changes to `src/components/Services.tsx` (lines 165-173)

```tsx
{/* Current */}
<div className="bg-muted/30 px-6 pt-6 pb-4 flex items-center justify-center">
  <img ... className="w-full max-w-[280px] h-36 object-cover rounded-xl" />
</div>

{/* New -- tight frame, image fills the area */}
<div className="bg-muted/30 p-3 flex items-center justify-center">
  <img ... className="w-full h-40 object-cover rounded-xl" />
</div>
```

Key changes:
- Padding reduced from `px-6 pt-6 pb-4` to `p-3` -- creates the thin frame effect matching the reference
- Removed `max-w-[280px]` -- image now fills the full width minus the small padding
- Height adjusted to `h-40` for good proportions at full width
- Grid stays at `max-w-5xl` with 2 columns, so each card is naturally narrower and the image fills it edge-to-edge with just a slim border of background color showing

