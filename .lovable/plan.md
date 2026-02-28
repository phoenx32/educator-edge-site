
# Redesign Services Section: Tab Layout to 2x2 Card Grid

## Overview

Replace the current tabbed services layout with a 2x2 grid of cards. Each card shows the service image at top, icon + title, a concise 2-3 sentence description focused on real problems educators face, and a "View Portfolio" button at the bottom. The portfolio dialog system stays intact.

---

## New Card Layout

Inspired by the reference image: each card is a bordered, rounded container with:
1. **Image** at top (rounded top corners, full-width, fixed height)
2. **Icon** below the image (small, colored)
3. **Title** (bold)
4. **Description** (2-3 sentences, problem-focused)
5. **"View Portfolio" button** at the bottom

Grid: `grid-cols-1 md:grid-cols-2` with gap, max-w-5xl centered. Cards use `flex flex-col` with the button pushed to the bottom via `mt-auto`.

## Simplified Descriptions

Current descriptions are internally focused ("We collaborate...", "We support initiatives..."). New descriptions lead with the problem the audience feels:

| Service | New Description |
|---------|----------------|
| **Professional Development** | "Practical, multi-week cohorts that help educators build confidence with new tools and strategies. Topics include digital literacy, AI, online instruction, and math -- customized to your team's needs." |
| **Project Management** | "From grant deliverables to statewide rollouts, we keep complex initiatives on track. We handle timelines, reporting, stakeholder coordination, and capacity building so your team can focus on impact." |
| **Keynotes & Workshops** | "Engaging presentations for state and national conferences on digital learning, AI, workforce readiness, and instructional innovation. Sessions connect research to practice and spark action." |
| **Curriculum & Design** | "We design flexible, workforce-aligned learning materials for digital delivery. From interactive modules to media production, we build content that meets learners where they are." |

## What Gets Removed

- The `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` imports and usage for the main services layout (kept for the portfolio dialog)
- `ServiceContent` and `MobileServiceContent` sub-components
- The `features` array from each service (bullet lists removed -- the card description replaces them)
- The `isMobile` check and separate mobile/desktop rendering (the grid is responsive by default)
- `tagline` field (no longer needed)
- `useIsMobile` import (if not used elsewhere -- but the portfolio dialog doesn't use it, so it can be removed)

## What Stays

- The `PortfolioDialog` component and all `portfolioItems` data -- unchanged
- The section header ("Our Services", heading, subheading)
- The "Schedule a Consultation" CTA at the bottom
- All service images and icons

---

## Technical Changes

### File: `src/components/Services.tsx`

### 1. Remove unused imports
- Remove `Tabs, TabsContent, TabsList, TabsTrigger` from the main layout (keep them imported since `PortfolioDialog` still uses them)
- Remove `useIsMobile` import and usage

### 2. Update service data
- Remove `features`, `tagline`, `shortTitle` fields (keep `shortTitle` since portfolio dialog uses it)
- Actually keep `shortTitle` -- used in portfolio dialog title
- Remove `features` and `tagline`
- Update `description` for each service with the simplified text

### 3. Replace the entire rendering block (lines 220-274)

Remove the `isMobile` ternary with desktop/mobile tab layouts. Replace with a single responsive 2x2 grid:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
  {services.map((service) => (
    <div
      key={service.id}
      className="bg-card rounded-2xl border border-border/40 overflow-hidden flex flex-col"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-48 md:h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-1">
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
    </div>
  ))}
</div>
```

### 4. Remove sub-components
- Delete `ServiceContent` component (lines 156-180)
- Delete `MobileServiceContent` component (lines 182-202)
