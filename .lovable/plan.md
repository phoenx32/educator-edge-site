

# Fix Image Zoom: Show Full Images for Project Management and Curriculum

## Problem
`object-cover` always crops to fill the container. Changing `object-position` just moves the crop window — it doesn't zoom out. The Project Management image now shows mostly the laptop, and the Curriculum image didn't visibly change.

## Solution
Switch these two images from `object-cover` to `object-contain`. This scales the image down to fit entirely within the container without cropping. The card's white background will show on the sides or top/bottom if the aspect ratio doesn't match exactly, which is fine since the cards are already white.

## Changes in `src/components/Services.tsx`

1. **Project Management** (line 65): change `imagePosition` from `'object-[50%_70%]'` to `'object-contain'`
2. **Curriculum** (line 83): change `imagePosition` from `'object-[50%_30%]'` to `'object-contain'`

The `cn()` call on line 176 already merges `object-cover` with the `imagePosition` class — since `object-contain` comes after `object-cover` in the class list, Tailwind merge will resolve the conflict correctly and `object-contain` will win.

No other changes needed. The other two cards (Professional Development and Keynotes) keep `object-cover` with `object-center` as they look fine.

