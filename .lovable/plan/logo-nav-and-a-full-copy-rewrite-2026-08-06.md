# Logo, nav, and a full copy rewrite

## 1. Nav: logo mark replaces the wordmark

- Add the uploaded three-circle mark as `src/assets/logos/clp-mark.png` (bundled import, same as the other logos, so it loads on the custom domain).
- Top nav left becomes just the mark at icon scale (about 36px tall on mobile, 40px desktop), wrapped in a link to `#top` that scrolls to the top of the homepage. Accessible label: "Community Learning Partners — back to top".
- "Get in touch" button becomes **Contact** (desktop and mobile menu).
- Nav items stay: Services, Approach, Team, then the Contact button.

## 2. Where the name goes

Recommendation: not centered in the nav — a centered wordmark squeezes the links and reads like a template. Put it in the hero instead, as a small line above the H1:

```text
[  ]  COMMUNITY LEARNING PARTNERS      <- small mark + letterspaced name, muted
We are all teachers. We are all students.   <- H1, still the boldest thing
```

Small uppercase, letterspaced, muted color, above the headline. The name is then stated once, clearly, exactly where someone reads first, and the H1 keeps its weight. The footer already carries the full name too.

## 3. "Co-Founders" gets the same treatment

Every other section headline highlights one word with the gradient. Team becomes:

> Co-**Founders** — with "Founders" in the gradient accent, matching Services / Contact / Partners.

## 4. Copy audit

The rewrite rule: plain sentences, no "thrive / bridges / empower / solutions", no claims that we have the answers, no hype. We're partners who try things with teams, sometimes get it wrong, and keep learning. Trust people to decide what fits their program.

Hero body — replaces the "digital learning solutions... human, connected, accessible" paragraph:

> We work with adult education programs on the practical side of teaching with technology: courses to build, staff to train, projects to run. We don't arrive with a fixed answer. We try things with your team, see what holds up, and adjust.

Section-by-section changes:

- **Services** intro — drop the single 60-word sentence. Say who we work with (state agencies, colleges, adult education programs) and what the four services actually are, in short sentences.
- **Partners** — "Trusted by Leading Educational Organizations" becomes something plainer, e.g. "Who we work with", subhead names the kinds of organizations without the trust claim.
- **Approach** — keep the improvement cycle, rewrite the intro so it describes how we work rather than declaring "learning is never finished".
- **Values** cards — rewrite the three descriptions in first person and concrete terms; "Shared Learning / Collaborative Growth / Continuous Improvement" become less abstract labels.
- **Impact** — "By the Numbers" stays factual; the subhead loses "working together to support... across the country" filler.
- **Testimonials** — headline "Trusted by Adult Educators" reworded to something less self-congratulatory ("What people have said").
- **Contact** — "Let's Connect & Collaborate" and the "expert insights" newsletter line rewritten plainly: what the email is for, what the call is, what the newsletter actually contains.
- **Footer** — tagline and "Get Started" column language simplified; remove the globe-emoji line's marketing tone.
- **Team bios** — left as written; they're specific and factual already.

Anything asserting expertise we can't back ("expert insights", "trusted by leading") comes out.

## Technical notes

Files touched: `src/components/Navigation.tsx`, `Hero.tsx`, `Services.tsx`, `Clients.tsx`, `About.tsx`, `Testimonials.tsx`, `Contact.tsx`, `Footer.tsx`, `Team.tsx`, plus the new logo asset. Hero section gets `id="top"` so the logo link has a target. No structural or layout changes beyond the nav logo swap and the hero name line. The bootcamp page is untouched.
