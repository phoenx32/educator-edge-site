

# Redesign Services Section: 4-Column Vertical Card Layout

## Overview
Transition from a 2×2 grid of horizontal cards to a single-row 4-column layout with taller, vertical cards — similar to the reference image. Content stays the same, just restructured.

## Layout Changes

**Grid**: `grid-cols-1 md:grid-cols-2` → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`, remove the `max-w-4xl` constraint (use `max-w-6xl` or `max-w-7xl` instead).

**Card structure reorder** (currently: image → icon → title → description → button):
- New order: icon + title (same row) → description → image → portfolio button
- Icon and title sit together horizontally at the top
- Description below
- Image at the bottom, filling the card width with rounded corners
- Portfolio button below image or overlaid

**Image sizing**: Change from `h-44` landscape to `h-48` or `h-56` — the taller card format gives room for a naturally sized image at the bottom.

## File: `src/components/Services.tsx`

### Card grid (line 167)
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
```

### Card interior (lines 169-192) — restructure to:
```tsx
<div className="bg-card rounded-2xl border border-border/40 overflow-hidden flex flex-col">
  <div className="p-5 pb-3">
    <div className="flex items-center gap-2 mb-3">
      <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
      <h3 className="text-base font-bold text-foreground">{service.title}</h3>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">
      {service.description}
    </p>
  </div>
  <div className="mt-auto px-3 pb-3">
    <img
      src={service.image}
      alt={service.title}
      className={cn("w-full h-48 object-cover rounded-xl", service.imagePosition)}
    />
  </div>
  <div className="px-5 pb-4 pt-2">
    <PortfolioDialog serviceId={service.id} serviceTitle={service.title} />
  </div>
</div>
```

### Responsive behavior
- **Mobile**: 1 column, cards stack vertically
- **sm (640px+)**: 2 columns
- **lg (1024px+)**: 4 columns in a single row

No changes to the portfolio dialog, service data, or any other section.

