# Make the AI Leadership Academy banner a true top sticky banner

## Problem
The current homepage banner sits *below* the fixed navigation and uses a very subtle gradient, so it reads like a secondary strip rather than an announcement banner. It also scrolls away with the page content.

## Goal
Turn the banner into a distinct, top-of-page announcement bar that stays visible while scrolling, with the navigation sitting just beneath it.

## Changes

### 1. Move the banner above the navigation in `src/pages/Index.tsx`
- Render the clickable banner as the first child of the page wrapper, before `<Navigation />`.
- Remove the `mt-16` offset currently used to clear the fixed nav.

### 2. Make the banner sticky
- Apply `sticky top-0 z-50` to the banner so it remains in view as the user scrolls.
- Keep it clickable via `<Link to="/bootcamp">`.

### 3. Reposition the navigation below the sticky banner
- Change `Navigation` from `fixed top-0` to `sticky top-[banner-height]` so it naturally sits under the banner.
- Because banner height varies with text wrapping, use a wrapper approach: place both banner and nav inside a single `sticky top-0 z-50` flex-column container, with banner first and nav second. This guarantees the nav always appears directly below the banner without hardcoded offsets.

### 4. Make the banner visually distinct
- Replace the ultra-subtle gradient with a clearer banner treatment:
  - `bg-primary/10` or `bg-muted` background.
  - A `border-b border-border` separator.
  - A small left accent bar or a "New" pill/badge in primary color.
  - Slightly stronger icon color and hover state.
- Keep the copy exactly as currently approved:
  > Introducing the AI Leadership Academy for Adult Education Administrators | Starting October 12, 2026 | Learn more and Register!
- Maintain compact vertical padding (`py-2.5` / `py-3`) so it does not dominate the hero.

### 5. Verify no overlap or layout shift
- Confirm the hero no longer needs a top margin to clear a fixed nav; the sticky header group will push content down naturally.
- Check desktop and mobile: ensure wrapped text in the banner doesn't overlap the nav or hero.
- Confirm clicking the banner still navigates to `/bootcamp`.

## Files to modify
- `src/pages/Index.tsx` — banner placement, sticky behavior, and visual treatment.
- `src/components/Navigation.tsx` — remove `fixed top-0` in favor of the shared sticky header wrapper.
