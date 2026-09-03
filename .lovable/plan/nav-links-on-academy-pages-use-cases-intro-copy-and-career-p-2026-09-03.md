# Nav links on Academy pages, use-cases intro copy, and career-pathway asset fixes

## 1. Add "The Academy" / "Sample Projects" links to BootcampNav

`src/components/bootcamp/BootcampNav.tsx` is shared by `/bootcamp`, `/bootcamp/use-cases`, and all four use-case detail pages, so the links appear on all of them in one edit.

- Keep the existing CLP + COABE logos on the left and the Register button on the right.
- Add two React Router links between them: **The Academy** → `/bootcamp`, **Sample Projects** → `/bootcamp/use-cases`, styled like the homepage nav links (`text-foreground hover:text-primary`), with an active-state treatment (primary color + underline offset) for the section you're on.
- Mobile: links shrink to a compact row (smaller text, tighter gap) so logos, links, and Register still fit on one line; Register stays visible.

## 2. Use-cases index intro copy

In `src/pages/UseCases.tsx`, replace the paragraph "Each one follows the same shape, so you can move quickly. Pick the scenario closest to your own work — you can read the others later." with:

> Explore the types of projects you could develop through the AI Academy

## 3. Fix the broken career-pathway links (steps 1 and 2)

The career-pathways case study in `src/data/case-studies.json` still points at the source project's relative asset paths (`/__l5e/assets-v1/...pdf` and the `...webp` infographic), which 404 on this site. Replace them with the uploaded files:

- `/mnt/user-uploads/St._Louis_Metro_Adult_Education_Career_Pathway_Analysis.pdf` → new Lovable asset pointer at `src/assets/st-louis-career-pathway-report.pdf.asset.json` (the existing pointer file gets overwritten with a fresh upload).
- `/mnt/user-uploads/St._Louis_Career_Pathway_Guide.png` → new pointer at `src/assets/st-louis-career-pathway-guide.png.asset.json` (PNG per the uploaded file).
- Update the two URLs in `case-studies.json` to the new asset URLs, so "Open research report" (step 1, PDF modal + open-in-new-tab) and the infographic viewer (step 2, image modal) work.

## Verification

- Typecheck passes, then Playwright at desktop and mobile widths: nav shows both links on `/bootcamp`, `/bootcamp/use-cases`, and a detail page; intro copy updated; step 1 PDF modal and step 2 image modal both load the uploaded files.
