
Goal: make the Services cards visually match your reference (image-61) with a clean white card, tighter image framing, and more natural image crop/scale.

1) What is currently wrong (confirmed from `src/components/Services.tsx`)
- The image wrapper still uses `bg-muted/30` (`line 167`), which creates a separate gray “band” behind the image.
- Image is currently `w-full h-40 object-cover` in a wide card; this causes aggressive horizontal feel and heavy cropping (especially the curriculum image).
- Card width (`max-w-5xl`) plus short image height produces a too-wide image ratio compared with your reference.

2) Exact design adjustments to match the sample
A. Remove the gray image band so card appears as one white surface
- Change image wrapper from:
  - `bg-muted/30 p-3 flex items-center justify-center`
- To:
  - `p-3 pt-4 flex items-center justify-center bg-card`
- Result: no visual split (gray top + white bottom). Entire card reads as white, like your example.

B. Make cards slightly narrower and image slightly taller (better proportion)
- Grid container:
  - from `max-w-5xl` to `max-w-[1040px]` (or `max-w-4xl` if needed after visual check)
- Image:
  - from `w-full h-40 object-cover rounded-xl`
  - to `w-full h-44 object-cover rounded-xl`
- This reduces awkward “letterbox” feeling and improves perceived balance.

C. Reduce over-cropping for specific images (especially curriculum)
- Add optional per-service image positioning in the `services` data:
  - e.g. `imagePosition: "object-center"` (default)
  - curriculum: `imagePosition: "object-[50%_38%]"` (or close variant after visual check)
- Apply class as:
  - `className={cn("w-full h-44 object-cover rounded-xl", service.imagePosition)}`
- This keeps consistent card structure while correcting focal crop per image.

D. Keep the two-level structure only
- Maintain:
  - outer card container
  - image + content inside same white card
- No inner colored panel, no nested “card within card.”

3) File-level implementation plan
- File: `src/components/Services.tsx`
  1. Update `services` array to include optional image positioning metadata.
  2. Update grid max width for better card proportions.
  3. Replace image wrapper classes to remove muted background split.
  4. Increase image height and apply per-service object-position support.
  5. Keep text/icon/button spacing mostly unchanged unless needed for final 1:1 alignment.

4) Validation checklist (must pass before finishing)
- Visual hierarchy checks:
  - No gray band behind image; top and bottom of card are the same white card surface.
  - Image appears almost card-width with a subtle, even frame.
  - Cards are not overly wide; proportions feel close to reference.
- Content/crop checks:
  - Curriculum image no longer feels excessively zoomed.
  - All four cards have consistent image height and corner radius.
- Responsive checks:
  - Desktop (current view): cards align with reference rhythm.
  - Mobile: image still readable, no clipping artifacts.
- Interaction regression:
  - “View Portfolio” button still works on all cards.
  - Dialog + internal tabs unaffected.

5) Acceptance criteria
- The services section visually matches reference structure:
  - Single white card look (no gray top panel split),
  - Thoughtful image crop/focus,
  - Balanced card dimensions that avoid awkwardly wide thumbnails.
- If mismatch remains, do one final tuning pass limited to:
  - card max width,
  - image height,
  - per-image object-position values.

Technical note
- This is a styling-only pass in `Services.tsx`; no dependency or architecture changes needed.
