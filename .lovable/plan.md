# Add AI Leadership Academy navigation item and homepage announcement banner

## 1. Navigation update

Add a new nav item labeled **"AI Leadership Academy"** in `src/components/Navigation.tsx`:
- Place it between **Team** and the **Contact** button.
- Link it to `/bootcamp` using React Router's `<Link>` (or equivalent internal navigation) so it routes without a full page reload.
- Apply the same hover/tap styling as the existing text links.
- Include it in both the desktop nav and the mobile menu.

## 2. Homepage announcement banner

Add a thin, clickable announcement banner at the top of the homepage in `src/pages/Index.tsx`, directly below `<Navigation />` and above `<Hero />`.

**Copy:**
> Introduce the AI Leadership Academy for Adult Education Administrators | Starting October 12, 2026 | Learn more and Register!

**Design direction:**
- Light and unobtrusive: use a subtle gradient from `background` to `muted/40` or a very soft primary/secondary tint.
- Thematic but restrained: include a small icon (sparkles, lightbulb, or graduation-cap style) in the brand primary color.
- Centered, readable type at `text-sm`/`md:text-base`.
- Add a discreet arrow/chevron to signal clickability.
- Wrap the entire banner in a `<Link to="/bootcamp">` so clicking anywhere on it navigates to the bootcamp page.
- Keep vertical padding compact (e.g., `py-2.5` or `py-3`) so it does not dominate the hero.
- Optional: a subtle top/bottom border or shadow using `border-border` / `shadow-card` for separation.

## 3. Verification

- Confirm the nav order renders correctly on desktop and mobile.
- Confirm the banner is visible on the homepage preview and clicking it navigates to `/bootcamp`.
- Ensure no layout shift or overlap with the fixed navigation.
