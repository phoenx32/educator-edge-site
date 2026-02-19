

# Fix Dialog Anchor and Polish Tab Headers

## Overview

Two changes: (1) anchor the dialog to the top of the viewport so it expands downward when content grows, keeping the title and nav bar stable, and (2) add service icons to tab triggers and center the dialog header.

---

## 1. Top-Anchored Dialog

Currently the dialog uses `top-[50%] translate-y-[-50%]` which centers it vertically. When switching from a 4-item tab to a 7-item tab, the entire dialog shifts up/down to stay centered -- this is what causes the jarring experience.

**Fix**: Override the dialog positioning so it anchors near the top of the viewport. The title, description, and tab bar stay pinned in place, and only the content below grows downward.

On the `DialogContent` in `Services.tsx`, add classes to override the default centering:

```
top-[5vh] translate-y-0
```

This places the dialog 5% from the top and removes the vertical centering transform, so it always starts from the same position and expands downward.

## 2. Center Header Text

Add `text-center` to `DialogHeader`, `DialogTitle`, and `DialogDescription` so the title and subtitle are centered above the tabs.

## 3. Tab Trigger Icons

The tab triggers already show each service's icon (`<s.icon>`). The `shortTitle` text is hidden on mobile (`hidden sm:inline`). No change needed here -- icons are already present. The current implementation matches the request.

---

## Technical Changes

### File: `src/components/Services.tsx`

**Line 106** -- Update `DialogContent` className to anchor from top:

```tsx
<DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto top-[5vh] translate-y-0">
```

**Lines 107-110** -- Center the header:

```tsx
<DialogHeader className="text-center">
  <DialogTitle className="text-xl text-center">{activeService?.shortTitle ?? 'Portfolio'}</DialogTitle>
  <DialogDescription className="text-center">Selected projects and outcomes</DialogDescription>
</DialogHeader>
```

These are the only two edits needed. The tab icons are already in place from the previous implementation.
