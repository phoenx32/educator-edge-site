# Fix /bootcamp 404 on communitylearningpartners.com

## What's actually happening

Checked the live domain directly:

- `communitylearningpartners.com` is served by Vercel (`server: Vercel` in the response headers), and `www` 307-redirects to the root domain. So yes, the domain runs through Vercel, not Lovable hosting.
- The deployed JavaScript bundle **already contains the bootcamp page** — the course title and route are in the live build. Vercel is building current code from this project.
- `https://communitylearningpartners.com/bootcamp` returns **404**, while the homepage returns 200.

That combination points to one cause: Vercel has no SPA fallback configured for this project. This is a single-page app — the server only has `index.html` and asset files on disk. There is no file at `/bootcamp`, so Vercel returns 404 before React Router ever runs. The homepage works because `/` maps to a real file. Lovable's own hosting does this fallback automatically; Vercel does not unless the project is detected as Vite or told explicitly.

## The fix

Add a `vercel.json` at the repo root with a catch-all rewrite that sends any non-asset path to `index.html`, letting React Router resolve the route client-side:

```text
/bootcamp        -> index.html -> React Router -> Bootcamp page
/anything-else   -> index.html -> React Router -> NotFound page
/assets/*.js     -> served as real files (unchanged)
```

The rewrite is scoped so real files (assets, favicon, og-image, robots.txt, the RSS feed under `/feeds`) keep serving directly and are not swallowed by the fallback.

Once that file lands and Vercel rebuilds, `communitylearningpartners.com/bootcamp` will load the course page. The `noindex` tag stays, so it remains unlisted and out of search results.

## If it still 404s after the rebuild

Then Vercel is building from a stale source rather than this project, and the next step is checking the Vercel project's connected Git repo and last deployment commit. The bundle check above suggests that isn't the case, but it's the fallback diagnosis.

## Technical notes

- New file: `vercel.json` with a `rewrites` entry — source a negative-lookahead pattern excluding `assets/`, `feeds/`, `lovable-uploads/`, and root-level static files; destination `/index.html`.
- No changes to app code, routing, or the bootcamp components.
- Nothing here affects Lovable's own published URL, which already serves `/bootcamp` correctly.
