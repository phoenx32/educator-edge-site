

# Refined Service Cards -- Emulate Reference Design

## Problem

The current cards are too tall and the square images look awkward. The reference screenshot (image-56) shows a much more compact, polished pattern: a **wide rectangular image** sitting inside a lightly-shaded inner container, with compact text below. Everything feels tight and balanced.

## Target Design (from reference)

The reference cards have:
- A **short, wide inner container** with subtle background (like `bg-muted/30`) and rounded corners
- A **rectangular image** inside that container, centered, with rounded corners -- landscape orientation, not square
- Compact spacing below: small icon, title, 2-3 line description, button
- The inner container is NOT tall -- roughly 140-160px total height including padding
- The overall card feels compact and airy, not towering

## Changes to `src/components/Services.tsx` (lines 161-187)

Update the card rendering:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
  {services.map((service) => (
    <div
      key={service.id}
      className="bg-card rounded-2xl border border-border/40 overflow-hidden flex flex-col p-5"
    >
      {/* Compact inner stage with rectangular image */}
      <div className="bg-muted/30 rounded-xl p-4 flex items-center justify-center mb-4">
        <img
          src={service.image}
          alt={service.title}
          className="w-44 h-28 md:w-52 md:h-32 object-cover rounded-lg shadow-sm"
        />
      </div>
      <div className="flex flex-col flex-1">
        <service.icon className="w-5 h-5 text-primary mb-2" />
        <h3 className="text-base font-bold text-foreground mb-1.5">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {service.description}
        </p>
        <div className="mt-auto">
          <PortfolioDialog ... />
        </div>
      </div>
    </div>
  ))}
</div>
```

### Key differences from current:

| Property | Current | New |
|----------|---------|-----|
| Card padding | `p-6` | `p-5` (tighter) |
| Inner container bg | `bg-muted/50` | `bg-muted/30` (subtler) |
| Inner container padding | `p-6` | `p-4` (shorter stage) |
| Inner container margin | `mb-5` | `mb-4` |
| Image size | `w-28 h-28 / w-32 h-32` (square) | `w-44 h-28 / w-52 h-32` (landscape rectangle) |
| Image extras | none | `shadow-sm` for subtle depth |
| Icon size | `w-6 h-6`, `mb-3` | `w-5 h-5`, `mb-2` |
| Title size | `text-lg`, `mb-2` | `text-base`, `mb-1.5` |
| Description margin | `mb-6` | `mb-4` |

This produces cards that are noticeably shorter, with a refined landscape thumbnail that echoes the reference pattern. The inner stage is compact, the text is tighter, and nothing dominates the view.

