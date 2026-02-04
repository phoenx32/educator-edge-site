

# Refine Services Section UI

## Overview

Three targeted improvements to the Services section based on the reference image:

1. Align images to start at the top of the content card
2. Add smooth hover effects to tab triggers
3. Fix tab background styling - transparent for inactive, white for active (connected to content)

---

## Changes

### 1. Image Vertical Alignment

**Current Issue:** Images use float positioning which can cause them to extend past the bullet list

**Solution:** Switch from float layout to a flexbox/grid layout where the image is positioned at the top-right and the text content is in its own column. This ensures the image starts aligned with the title and doesn't extend past the content.

**Implementation:**
- Replace the float-based layout with a flex row layout on desktop
- Image container uses `self-start` to align to top
- Text content in left column, image in right column
- On mobile, stack vertically with image above content

### 2. Tab Hover Effects

**Current Issue:** Minimal hover feedback (`hover:bg-muted/60`)

**Solution:** Add more visible hover effects:
- Subtle scale transform on hover
- Smoother transition timing
- Slight shadow lift effect

**Implementation:**
```
hover:scale-[1.02] hover:shadow-md transition-all duration-200
```

### 3. Tab Background Styling (Key Visual Fix)

**Current Issue:** 
- All tabs have `bg-card` (white background)
- Active tab uses `bg-primary` (teal fill)

**Reference Image Shows:**
- Inactive tabs are transparent (showing the section's muted background)
- Active tab is white with bottom border removed, creating visual connection to content card

**Solution:**
- Inactive tabs: `bg-transparent` 
- Active tabs: `bg-card` (white) with a border-bottom that matches the card to create seamless connection
- Add left/top/right borders to all tabs, only bottom border on inactive
- Active tab's bottom border becomes transparent or same color as card

**Tab styling approach:**
```tsx
// Inactive state: transparent background, shows section bg-muted/40
// Active state: white background (bg-card), border-bottom-color matches card
className="bg-transparent border border-border/40 border-b-border/40
  data-[state=active]:bg-card data-[state=active]:border-b-transparent data-[state=active]:relative data-[state=active]:z-10"
```

---

## Technical Details

### File to Modify
`src/components/Services.tsx`

### ServiceContent Layout Change (lines 62-95)

Replace the float-based layout with a flex row:

```tsx
const ServiceContent = ({ service }: { service: typeof services[0] }) => (
  <div className="h-full">
    {/* Title - Full Width with Icon */}
    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
      <service.icon className="w-6 h-6 text-primary flex-shrink-0" />
      {service.title}
    </h3>
    
    {/* Two-column layout: Text left, Image right aligned to top */}
    <div className="flex flex-col md:flex-row gap-6">
      {/* Text content */}
      <div className="flex-1">
        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
        
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-foreground/80">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Image - Aligned to top */}
      <div className="md:w-80 flex-shrink-0 self-start">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 md:h-80 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  </div>
);
```

### TabsTrigger Styling Update (lines 120-133)

```tsx
<TabsTrigger
  key={service.id}
  value={service.id}
  className="flex flex-col items-start gap-1 px-5 py-4 rounded-none 
    bg-transparent border border-border/40 border-b-border/40 
    first:rounded-tl-xl last:rounded-tr-xl 
    transition-all duration-200
    hover:bg-card/50 hover:shadow-sm
    data-[state=active]:bg-card data-[state=active]:border-b-transparent data-[state=active]:shadow-md data-[state=active]:z-10 data-[state=active]:relative"
>
```

### TabsContent Border Adjustment (lines 138-145)

Ensure the content card's top border aligns with inactive tabs but appears seamlessly connected to the active tab:

```tsx
className="mt-0 p-8 bg-card border border-border/40 border-t-border/40 rounded-b-2xl shadow-lg min-h-[420px] -mt-px ..."
```

The `-mt-px` ensures the content card's top border overlaps slightly to create a seamless connection with the active tab.

---

## Summary

| Change | Before | After |
|--------|--------|-------|
| Image alignment | Float right, can extend past content | Flex layout, aligned to top |
| Tab hover | Minimal `bg-muted/60` | Scale + shadow lift effect |
| Inactive tabs | White background | Transparent (shows section bg) |
| Active tab | Teal fill | White, connected to content card |

