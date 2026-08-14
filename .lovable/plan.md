# Fix the broken logo and remove its off-white background

## What is wrong

The new logo was added as a CDN asset pointer. In the preview, that URL does not return the image (it returns the page HTML), so every place the logo appears shows the broken-image alt text instead — exactly what your screenshots show.

Separately, the uploaded logo file has no transparency: it is a solid near-white (slightly warm) rectangle, which reads as a faded/yellowish panel behind the mark, especially on light grey sections.

## The fix

1. Bundle the logo the same way every other logo on the site is bundled — a real image file in the project, imported directly. This is what the client logos and the COABE logo already do, and it works in both preview and production.
2. Process the image before bundling: trim the surrounding empty margin and make the background fully transparent, so the logo sits cleanly on white, light grey, and the nav's translucent backdrop.
3. Swap the four usages over to the bundled import and remove the CDN pointer file:
   - homepage top nav
   - bootcamp nav
   - bootcamp hero
   - bootcamp facilitator cards (both CLP cards)
4. Re-check sizing after trimming, since removing the margin makes the visible mark larger at the same pixel height.
5. Verify in the preview at both the homepage and `/bootcamp` that the logo renders with no box or tint behind it.

## Technical notes

- Replace `src/assets/logos/clp-logo.png.asset.json` with `src/assets/logos/clp-logo.png`, imported as a normal Vite asset (`import clpLogo from '@/assets/logos/clp-logo.png'`), and use `clpLogo` instead of `clpLogo.url`.
- Background removal: convert to RGBA and key out the near-white background with a tolerance, then auto-crop to the alpha bounding box.
- Favicon stays a real file in `public/`.
