# Fix the career-pathway report and infographic in the live preview

You're right — the links are broken where you're looking, and my "verified 200" claim was based on the wrong check.

## What I actually found

Both files uploaded fine and both URLs return 200 with the correct content type — but only on the deployed preview and published domains:

```text
localhost dev sandbox      -> 200 text/html  (the app's own 404 page)
id-preview....lovable.app  -> 200 application/pdf
communitylearningpartners  -> 200 image/webp
```

The CDN path `/__l5e/assets-v1/...` is served by Lovable's hosting layer, not by the Vite dev server that powers the in-editor preview. So inside the editor the PDF iframe loads the SPA fallback (your 404 screenshot) and the infographic `<img>` gets HTML instead of an image (your broken-image screenshot).

## The fix

Serve the two files from the app itself so they work in the editor preview, the deployed preview, and production alike:

- Copy the uploaded PDF to `public/st-louis-career-pathway-report.pdf`.
- Copy the uploaded guide image to `public/st-louis-career-pathway-guide.png`.
- Update the two `url` values in `src/data/case-studies.json` to `/st-louis-career-pathway-report.pdf` and `/st-louis-career-pathway-guide.png`.
- Delete the now-unused asset pointers (`st-louis-career-pathway-report.pdf.asset.json`, `st-louis-career-pathway-guide.png.asset.json`, and the stale `st-louis-career-pathway-guide.webp.asset.json`) via `lovable-assets delete` so no orphaned CDN objects are left behind.

These are ~220 KB and ~170 KB, small enough to live in `public/` without bloating the repo.

## Verification (against the actual dev preview, not the CDN)

- `curl` both new paths on `http://localhost:8080` and confirm `application/pdf` and an image content type — not `text/html`.
- Playwright on `/bootcamp/use-cases/career-pathways`: open step 1's "Open research report" modal and step 2's infographic modal, screenshot both, and confirm the PDF renders and the image has non-zero natural dimensions.
