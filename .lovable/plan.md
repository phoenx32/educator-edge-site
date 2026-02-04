

# Fix Mobile Services Layout

## Overview

Based on the reference image, convert the mobile layout from accordion to horizontal tabs matching the desktop pattern, with these key differences:

1. Replace accordion with horizontal tabs on mobile
2. Use icon-only triggers in the tab bar (no text)
3. Move image to bottom of content on mobile
4. Remove teal background from selected state - use same styling as desktop

---

## Changes

### 1. Remove Accordion, Use Tabs for Both Desktop and Mobile

**Current Issue:** Mobile uses accordion with teal `bg-primary` on open state

**Solution:** Use the same Tabs component for mobile, just with different styling:
- Icon-only triggers in a horizontal row
- Same transparent/white background treatment as desktop

### 2. Mobile Tab Triggers - Icon Only

The reference shows 4 icons in a row with subtle borders. Selected tab has white background.

**Mobile TabsTrigger:**
```tsx
className="flex items-center justify-center p-4 rounded-none 
  bg-transparent border border-border/40 
  first:rounded-tl-xl last:rounded-tr-xl 
  transition-all duration-200
  hover:bg-card/50
  data-[state=active]:bg-card data-[state=active]:border-b-transparent"
```

### 3. Mobile Content Layout - Image at Bottom

Create a separate `MobileServiceContent` component that:
- Shows icon + title at top
- Description text
- Bullet points
- Image at the very bottom (full width)

### 4. Unified Approach

Since both mobile and desktop now use tabs, simplify by removing the `isMobile` conditional for the component type, and instead use responsive classes within the same Tabs structure.

---

## Technical Implementation

### File to Modify
`src/components/Services.tsx`

### Create MobileServiceContent Component (after ServiceContent)

```tsx
const MobileServiceContent = ({ service }: { service: typeof services[0] }) => (
  <div>
    {/* Icon + Title */}
    <div className="flex items-center gap-3 mb-4">
      <service.icon className="w-6 h-6 text-primary flex-shrink-0" />
      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
    </div>
    
    {/* Description */}
    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
    
    {/* Features */}
    <ul className="space-y-2 mb-6">
      {service.features.map((feature, idx) => (
        <li key={idx} className="flex items-start text-foreground/80 text-sm">
          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    
    {/* Image at bottom */}
    <img 
      src={service.image} 
      alt={service.title}
      className="w-full h-48 object-cover rounded-xl shadow-lg"
    />
  </div>
);
```

### Replace Mobile Accordion with Tabs (lines 152-176)

```tsx
{/* Mobile: Horizontal Tabs with Icon Only */}
<div className="max-w-full mx-auto">
  <Tabs defaultValue="professional-development" className="flex flex-col">
    {/* Tab Row - Icon Only */}
    <TabsList className="grid grid-cols-4 h-auto bg-transparent p-0 gap-0 rounded-none">
      {services.map((service) => (
        <TabsTrigger
          key={service.id}
          value={service.id}
          className="flex items-center justify-center p-4 rounded-none 
            bg-transparent border border-border/40 
            first:rounded-tl-xl last:rounded-tr-xl 
            transition-all duration-200
            hover:bg-card/50
            data-[state=active]:bg-card data-[state=active]:border-b-transparent data-[state=active]:z-10 data-[state=active]:relative"
        >
          <service.icon className="w-5 h-5" />
        </TabsTrigger>
      ))}
    </TabsList>

    {/* Content Card */}
    {services.map((service) => (
      <TabsContent
        key={service.id}
        value={service.id}
        className="-mt-px p-4 bg-card border border-border/40 border-t-border/40 rounded-b-2xl"
      >
        <MobileServiceContent service={service} />
      </TabsContent>
    ))}
  </Tabs>
</div>
```

### Remove Accordion Import

Since we're no longer using accordion on mobile, we can remove the Accordion import (optional cleanup).

---

## Summary

| Element | Before | After |
|---------|--------|-------|
| Mobile navigation | Accordion | Horizontal tabs |
| Mobile tab content | Text labels | Icon only |
| Selected state | Teal background | White background (matches desktop) |
| Image position | Above content (awkward) | Bottom of content card |
| Pattern consistency | Different on mobile/desktop | Same tabs pattern everywhere |

