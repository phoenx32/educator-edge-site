

# Rebuild "Our Services" Section

## Overview

Redesign the Services section to match the reference UI pattern with a modern, horizontal tab navigation that has inline descriptions, connected to a larger content card below.

## Key Design Changes

### 1. Tab Trigger Redesign

**Current:** Icon stacked above short title, separated by a border-bottom accent

**New Pattern (from reference):**
- Icon and title on the SAME LINE (horizontal layout)
- One-line description beneath each tab
- Active tab has subtle visual highlight
- Tabs are wider with better spacing
- Border only on the content card, not separate from tabs

### 2. Tab Descriptions

Each tab will include a short, action-oriented description:

| Tab | Description |
|-----|-------------|
| Professional Development | Support staff growth |
| Project Management | Move initiatives from plans to practice |
| Keynotes and Workshops | Turn complexity into action |
| Curriculum and Design | Build effective digital learning |

### 3. Layout Changes

- **Section width:** Expand from `max-w-5xl` to `max-w-6xl` for more breathing room
- **Tab row:** Horizontal grid layout with equal-width columns (4 columns)
- **Content card:** Connected directly to tabs (no gap), rounded only at bottom
- **Image placement:** Larger area due to wider section, better visual balance

### 4. Visual Styling

**Tab triggers:**
- Light background on hover
- Active state: subtle primary color border on bottom or left edge, or highlighted background
- Muted text for descriptions, stronger weight for titles

**Content card:**
- Rounded bottom corners only (top connects to tab row)
- Subtle border around entire card area
- Same internal layout (float pattern for image/text)

---

## Technical Implementation

### File to Modify

`src/components/Services.tsx`

### Data Structure Update

Add `tagline` field to each service object:

```tsx
const services = [
  {
    id: 'professional-development',
    title: 'Professional Development Cohorts',
    shortTitle: 'Professional Development',
    tagline: 'Support staff growth',
    // ... rest
  },
  {
    id: 'project-management',
    shortTitle: 'Project Management',
    tagline: 'Move initiatives from plans to practice',
    // ...
  },
  {
    id: 'keynotes',
    shortTitle: 'Keynotes and Workshops',
    tagline: 'Turn complexity into action',
    // ...
  },
  {
    id: 'curriculum',
    shortTitle: 'Curriculum and Design',
    tagline: 'Build effective digital learning',
    // ...
  }
];
```

### Desktop Tab Structure

```text
+----------------+----------------+----------------+----------------+
| [Icon] Title   | [Icon] Title   | [Icon] Title   | [Icon] Title   |
| Description    | Description    | Description    | Description    |
+----------------+----------------+----------------+----------------+
|                                                                    |
|                    Content Card (rounded bottom)                   |
|                                                                    |
+--------------------------------------------------------------------+
```

### CSS/Tailwind Approach

**TabsList wrapper:**
- Use `grid grid-cols-4` for equal-width tabs
- Remove bottom border (border moves to content card)
- Remove gap/margin between tabs and content

**TabsTrigger:**
- `flex flex-col items-start` for vertical stacking of title line + description
- First line: `flex items-center gap-2` for icon + title
- Second line: small muted text for tagline
- `border-b-2 border-transparent` with `data-[state=active]:border-primary` for active indicator
- Padding adjustments for comfortable touch/click targets

**TabsContent:**
- Remove `mt-0` gap
- `rounded-t-none rounded-b-2xl` to connect with tabs
- Full border around content area

### Mobile Accordion (unchanged approach)

Keep the accordion pattern for mobile but update trigger to show the new tagline in a more compact format if space allows.

---

## Summary of Changes

1. Add `tagline` property to services data array
2. Update tab triggers to horizontal icon+title layout with description below
3. Change container from `max-w-5xl` to `max-w-6xl`
4. Restructure tabs to use CSS grid with 4 equal columns
5. Remove gap between tab row and content card
6. Apply rounded corners only to bottom of content card
7. Add subtle border styling to create connected appearance
8. Update mobile accordion to include tagline

