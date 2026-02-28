

# Compact Service Cards with Nested Image Thumbnails

## Overview

Reduce the visual footprint of the service cards by replacing the full-width banner images with smaller, square thumbnails nested inside a subtle inner container. This matches the reference pattern (image-54) where images sit inside a rounded, lightly-shaded inner card at the top of each card.

## Visual Change

**Current**: Full-width rectangular image spanning the entire card top (`h-48 md:h-56 object-cover`) -- visually heavy, takes up most of the card.

**New**: A square image thumbnail (~120x120px) centered inside a rounded, lightly-shaded inner container at the top of the card. The inner container acts as a "stage" for the image, creating visual hierarchy without dominating the card.

```text
+---------------------------+
|  +---------------------+  |
|  |                     |  |  <-- inner bg container (bg-muted/50, rounded-xl, padding)
|  |    [ square img ]   |  |  <-- square image, centered, ~28-32 w/h
|  |                     |  |
|  +---------------------+  |
|  [icon]                    |
|  Title                     |
|  Description text...       |
|  [View Portfolio]          |
+---------------------------+
```

## Technical Changes

### File: `src/components/Services.tsx`

**Lines 161-186** -- Update the card rendering. Replace the full-width `<img>` with a nested container + square image:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
  {services.map((service) => (
    <div
      key={service.id}
      className="bg-card rounded-2xl border border-border/40 overflow-hidden flex flex-col p-6"
    >
      {/* Nested image container */}
      <div className="bg-muted/50 rounded-xl p-6 flex items-center justify-center mb-5">
        <img
          src={service.image}
          alt={service.title}
          className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-lg"
        />
      </div>
      <service.icon className="w-6 h-6 text-primary mb-3" />
      <h3 className="text-lg font-bold text-foreground mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {service.description}
      </p>
      <div className="mt-auto">
        <PortfolioDialog serviceId={service.id} serviceTitle={service.title} />
      </div>
    </div>
  ))}
</div>
```

Key differences from current:
- Card gets `p-6` padding (image is no longer edge-to-edge)
- New `div` wrapping the image with `bg-muted/50 rounded-xl p-6` creates the nested "stage"
- Image is now `w-28 h-28 md:w-32 md:h-32 object-cover rounded-lg` (square, compact)
- Everything below (icon, title, description, button) stays the same

This cuts the card height roughly in half and creates better visual balance across the page.

