
# Fix Dialog Resize Jank and Add Keynote Items

## Overview

Two changes: (1) fix the jarring resize when switching tabs in the portfolio dialog by setting a minimum height on the content area, and (2) add 5 new keynote/workshop items, grouped into 2 additional cards with thoughtful framing.

---

## 1. Fix Tab Switch Resize

The content area resizes dramatically between tabs because Project Management has 7 items while Keynotes has 2. 

**Solution**: Set a `min-h-[400px]` on each `TabsContent` inner grid container. This prevents the dialog from collapsing too much on smaller tabs, while still allowing taller tabs to grow naturally. Combined with adding `transition-all duration-200` won't help since the dialog recalculates -- the min-height approach is the most reliable fix.

**Change**: On line 121, update `TabsContent` class to include `min-h-[400px]` on the grid wrapper div (line 122).

## 2. Add Keynote Items

The 5 new topics group naturally into two cards:

**Card 1: "Applied Technology Workshops"** (icon: `Wrench` or `Laptop`)
- Description: "Conference sessions on practical technology integration, including Desmos for teaching math, Google Sheets for data dashboards, and building digital intake systems to support adult education retention."

**Card 2: "AI and Digital Resilience in Adult Learning"** (icon: `Sparkles`)
- Description: "Sessions exploring emerging approaches, including getting started with AI for higher education and non-linear learning models that nurture digital resilience and lifelong learning."

This keeps the keynotes tab at 4 items (matching PD and Curriculum) and groups related topics logically.

---

## Technical Changes

### File: `src/components/Services.tsx`

### 1. Update keynotes data (lines 33-36)

Add two new entries to the `keynotes` array:

```ts
'keynotes': [
  { title: 'Arizona Teachers N Technology Day', description: 'Keynote presentation on digital learning and technology integration for adult educators.', icon: Presentation },
  { title: 'North Carolina CCR Professional Development Days', description: 'Conference sessions connecting research to practice for college and career readiness.', icon: Users },
  { title: 'Applied Technology Workshops', description: 'Conference sessions on practical technology integration, including Desmos for teaching math, Google Sheets for data dashboards, and building digital intake systems to support adult education retention.', icon: Laptop },
  { title: 'AI and Digital Resilience in Adult Learning', description: 'Sessions exploring emerging approaches, including getting started with AI for higher education and non-linear learning models that nurture digital resilience and lifelong learning.', icon: Sparkles }
],
```

### 2. Fix resize jank (line 122)

Add `min-h-[400px]` to the grid container inside each `TabsContent`:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[400px]">
```

This anchors the dialog height so switching between a 7-item tab and a 4-item tab doesn't cause a dramatic jump.
