

# Replace Project Management and Curriculum Images

## Problem
Using `object-contain` caused the images to shrink to a tiny size floating in white space — completely unacceptable. The root issue was always that the original images had wrong aspect ratios for the card containers.

## Solution
Replace the source images entirely with the new uploads, and switch back to `object-cover` with `object-center` so they fill the card naturally like the other two cards.

## Steps

1. **Copy new images into the project**
   - `user-uploads://Project_Management_with_Community_Learning_Partners.png` to `src/assets/services-project-management.png`
   - `user-uploads://Curriculum_Instructional_Design_with_Community_Learning_Partners.png` to `src/assets/services-curriculum-design.png`

2. **Update `src/components/Services.tsx`**
   - Change the Project Management import from the old `.jpg` to the new `.png`
   - Change the Curriculum import from the old image to the new one
   - Set both `imagePosition` values back to `'object-center'` (standard `object-cover` behavior, matching the other two cards)

## Result
All four cards will use `object-cover` with `object-center`, and the new landscape-format images will fill the card frames naturally without awkward shrinking or aggressive cropping.

