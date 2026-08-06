# Team section fixes: bundled headshots, simpler headline, new titles

## 1. Headshots not appearing in production

The photos are currently CDN asset pointers served from Lovable's `/__l5e/assets-v1/...` path. That path is served by the Lovable preview and Lovable hosting, but the site is also deployed through the custom-domain setup (`vercel.json` SPA rewrite), where that path does not resolve — so the images 404 in production.

Fix: bring the two headshots into the repo as regular bundled images.

- Add `src/assets/team/joey-lehrman.jpg` and `src/assets/team/christin-smith.jpg` (JPEG, resized to ~800px square and compressed, so they're small).
- Import them normally in `Team.tsx` (`import joey from '@/assets/team/joey-lehrman.jpg'`) so Vite fingerprints and bundles them — works on every host.
- Remove the two `.asset.json` pointers and delete the CDN objects.

## 2. Copy changes

- Remove the subhead line "Two people leading every project, workshop, and partnership."
- Replace the headline "The People Behind the Work" with a plain one: **"Co-Founders"**. The "Our Team" badge stays above it.
- Titles under each name:
  - Joey Lehrman — Managing Director
  - Christin Smith — Director of Curriculum and Professional Learning

## Technical notes

Only `src/components/Team.tsx` and the files under `src/assets/team/` change. Spacing tightens slightly under the headline now that the subhead is gone.
