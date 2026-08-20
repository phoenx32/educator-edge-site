# Nav scroll styling + mobile banner fix

## Goal
Give the sticky header a clear "scrolled" state so it reads as a distinct layer over the page, and stop the announcement banner from crowding or overlapping content on small screens.

## What changes

### 1. Scroll-aware navigation
- Track scroll position in `Navigation.tsx` with a small `useEffect` scroll listener (`window.scrollY > 8`).
- At top: current look (solid background, thin bottom border).
- Once scrolled: add a soft shadow and a slightly stronger border so the header separates from the content passing under it. Background stays fully opaque in both states.
- Transition the shadow/border with a short duration so it doesn't pop.

### 2. Mobile banner overlap
- Banner stays one line on mobile: allow text truncation instead of wrapping to two/three lines, keeping the header a predictable height.
- Shorten the mobile copy to "AI Leadership Academy — Starting Oct 12" with the arrow, and show the full sentence plus "Learn more and Register!" from `sm` upward.
- Reduce banner vertical padding and icon/gap sizing on mobile.

### 3. Mobile menu behaviour
- When the mobile menu is open, cap its height and allow internal scrolling so a long menu plus banner never pushes items off-screen on short viewports.

## Verification
- Playwright screenshots at 375px and 1280px: at top and scrolled ~600px, plus mobile menu open, to confirm no overlap and a visible scrolled header state.

## Technical notes
Files touched: `src/components/Navigation.tsx` (scroll state, classes, mobile menu max-height), `src/pages/Index.tsx` (banner responsive copy/padding). No layout change to the sticky `header` wrapper.
