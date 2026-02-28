

# Adjust Image Zoom and Update Description Text

Two small changes in `src/components/Services.tsx`, no design changes.

## 1. Zoom out on Project Management and Curriculum images

Currently both images use `object-cover` which crops aggressively. To "zoom out" and show more of each image, we use `object-contain` (or a scaled `object-fit` approach). However, since `object-contain` would leave gaps, the better approach is to reduce the image height slightly or use `object-[position]` adjustments. Actually, the most effective CSS-only way to "zoom out" while keeping `object-cover` is to use `object-scale-down` or increase the container size. But the simplest approach that preserves the current design: switch these two images from `object-cover` to `object-contain` with a background color match, or better yet, keep `object-cover` but use a custom `object-position` to show more of the image.

After reflection: the real fix is to keep `object-cover` but use `object-[50%_60%]` or similar positions to reveal more of the image content, OR increase the image height for just those cards. The cleanest approach: increase `h-44` to `h-52` would show more, but that changes all cards. Instead, the best minimal change is adjusting `imagePosition` values to show better focal areas:

- Project Management (line 65): change from `object-center` to `object-[50%_70%]` -- shifts the focal point down to show more of the full scene
- Curriculum (line 83): change from `object-[50%_38%]` to `object-[50%_30%]` -- shifts up slightly more to reveal more of the graphic

If these positions still feel too cropped, an alternative is switching to `object-contain` for these two specifically -- but that may leave letterbox gaps. We will try position adjustments first.

## 2. Update subtitle text

Replace the paragraph at line 161-163 with the exact text provided:

> We partner with state agencies, higher education institutions, and adult education programs to design and implement digital learning initiatives, professional development cohorts, instructional resources, and strategic projects that support effective teaching and help learners advance toward their academic and professional goals.

## Changes

**File: `src/components/Services.tsx`**

- Line 65: `imagePosition: 'object-center'` to `imagePosition: 'object-[50%_70%]'` (project management -- show more of the scene)
- Line 83: `imagePosition: 'object-[50%_38%]'` to `imagePosition: 'object-[50%_30%]'` (curriculum -- zoom out further)
- Lines 161-163: Replace paragraph text with exact copy provided

