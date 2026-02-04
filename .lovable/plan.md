

# Fix Services Section Styling

## Overview

Three refinements to match the reference UI:

1. Remove excess padding in content cards so they fit content naturally
2. Fix selected tab scaling issue - remove hover scale effect from active tabs
3. Remove shadow from overall section and content card for a flat design

---

## Changes

### 1. Remove Extra Padding/White Space

**Current Issue:** `min-h-[420px]` forces a fixed minimum height, creating whitespace when content is shorter

**Solution:** Remove minimum height - let content determine card size naturally

**Change in TabsContent (line 145):**
- Remove: `min-h-[420px]`
- Keep padding reasonable: `p-6` instead of `p-8` for tighter fit

### 2. Fix Tab Scale/Spilling Issue

**Current Issue:** Active tabs have `hover:scale-[1.02]` and `shadow-md` which makes them appear larger and "spill" beyond the container

**Solution:** 
- Remove `hover:scale-[1.02]` from all tabs (or only apply to inactive)
- Remove `shadow-md` from active state
- Keep background color change as the visual signal

**Change in TabsTrigger (lines 124-129):**
- Remove: `hover:scale-[1.02]`
- Remove: `data-[state=active]:shadow-md`
- Keep: `data-[state=active]:bg-card` and `data-[state=active]:border-b-transparent`

### 3. Remove Offset Shadow for Flat Design

**Current Issue:** Content card has `shadow-lg` which creates a floating/lifted appearance

**Solution:** Remove shadows from the content card, use only borders for definition

**Change in TabsContent (line 145):**
- Remove: `shadow-lg`
- Keep: border styling for visual definition

Also remove `hover:shadow-sm` from tab triggers for consistency.

---

## Technical Implementation

### File to Modify
`src/components/Services.tsx`

### TabsTrigger (lines 121-137)
```tsx
<TabsTrigger
  key={service.id}
  value={service.id}
  className="flex flex-col items-start gap-1 px-5 py-4 rounded-none 
    bg-transparent border border-border/40 
    first:rounded-tl-xl last:rounded-tr-xl 
    transition-all duration-200
    hover:bg-card/50
    data-[state=active]:bg-card data-[state=active]:border-b-transparent data-[state=active]:z-10 data-[state=active]:relative"
>
```

Removed:
- `hover:shadow-sm`
- `hover:scale-[1.02]`
- `data-[state=active]:shadow-md`

### TabsContent (lines 142-149)
```tsx
<TabsContent
  key={service.id}
  value={service.id}
  className="-mt-px p-6 bg-card border border-border/40 border-t-border/40 rounded-b-2xl data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-300"
>
```

Removed:
- `shadow-lg`
- `min-h-[420px]`
- Changed `p-8` to `p-6`

---

## Summary

| Element | Before | After |
|---------|--------|-------|
| Content card height | `min-h-[420px]` | Auto (fits content) |
| Content card padding | `p-8` | `p-6` |
| Content card shadow | `shadow-lg` | None |
| Tab hover | `scale-[1.02]` + shadow | Background color only |
| Active tab | Shadow + scale | Background color only |

