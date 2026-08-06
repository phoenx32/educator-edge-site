# Add an "Our Team" section and rethink the top navigation

## 1. New Team section

A new `Team` section on the homepage, placed between Testimonials and Contact (matching the reference layout).

Structure:
- Small "Our Team" badge, matching the badge styling already used in Services/About/Contact.
- Headline: "The People Behind the Work" with the same gradient-accent word treatment used elsewhere.
- One-line subhead: two people leading every project, workshop, and partnership.
- Two cards side by side on desktop, stacked on mobile. Each card: circular photo, name, role, bio.

People:
- **Joey Lehrman** — Co-Founder, Community Learning Partners. Bio as provided.
- **Christin Smith** — Co-Founder, Community Learning Partners. Bio as provided.

Photos: the two uploaded headshots, circular-cropped (round mask, centered, consistent size across both cards). Uploaded as CDN assets rather than committed binaries.

Roles: using "Co-Founder, Community Learning Partners" for both, consistent with how they are already described on the bootcamp page. Tell me if you'd prefer distinct titles (e.g. Learning Design Lead / Program Director).

## 2. Top navigation

Current items: Services, About, Contact, plus a Newsletter button.

Recommendation — the labels are fine but the set is incomplete and slightly mismatched:
- "Services" is accurate and is the highest-value link. Keep.
- "About" currently points to a section that is mostly the Continuous Improvement Cycle and values — that reads as "Our Approach", not "About". Rename the nav item to **Approach**.
- Add **Team** so the new section is reachable.
- "Contact" as a nav link duplicates the Newsletter button sitting next to it. Drop the Contact text link and change the button to **Get in touch** pointing at the contact section, since booking a consultation is the real conversion action and the newsletter form lives inside that same section.

Proposed nav: Services · Approach · Team, then a "Get in touch" button.

## Technical notes

- New `src/components/Team.tsx` with `id="team"`, rendered in `src/pages/Index.tsx` between `Testimonials` and `Contact`.
- Headshots uploaded via the asset CLI to `src/assets/team/` as `.asset.json` pointers; rendered with `rounded-full object-cover` at a fixed square size.
- Section reuses existing semantic tokens and the `section-spacing` / `section-badge-*` utilities; alternates background tone against its neighbors to keep the zebra rhythm.
- `src/components/Navigation.tsx`: update `navItems` and the button label/href on both desktop and mobile.
- Bootcamp page and its facilitator cards are untouched.
