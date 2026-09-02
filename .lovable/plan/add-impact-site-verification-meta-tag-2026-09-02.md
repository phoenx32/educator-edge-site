# Add Impact site verification meta tag

## What
Add the Impact site-verification meta tag to the site:

```html
<meta name="impact-site-verification" value="60308e01-f7ca-43d9-8ae5-d2512c63d07e" />
```

## Where
Place it in `index.html` inside `<head>`, alongside the existing meta tags.

## Why this is safe
- This is a non-rendered metadata tag used only by Impact's crawler to verify site ownership.
- It will not be visible to users, will not shift layout, and will not affect SEO beyond the verification purpose.
- Placing it in `index.html` makes it available on every route of the static SPA.

## Acceptance
- Tag appears exactly as provided in the rendered `<head>`.
- No visual changes anywhere on the site.
