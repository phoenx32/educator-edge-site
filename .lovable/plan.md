# Add Google × ISTE+ASCD AI Training Initiative to the PD Portfolio Modal

## What
Add a fifth portfolio card to the **Professional Development** tab of the "View Portfolio" dialog in `src/components/Services.tsx` (`portfolioItems['professional-development']`, around line 24).

## The new card
- **Title:** "Google × ISTE+ASCD National AI Training Initiative"
- **Icon:** `Award` (badge/micro-credential icon; not yet used in this tab — GraduationCap, Monitor, Sparkles, BookOpen are taken)
- **Description (same style and length as the other cards, first-person lead PM framing):**
  "Lead project manager for ISTE+ASCD's landmark partnership with Google for Education — the largest initiative of its kind, providing free Gemini and NotebookLM AI literacy training to all 6 million U.S. K-12 and higher education faculty, with micro-credentials aligned to the Profile of an AI-Ready Graduate."
- **No external link** (the user didn't provide a URL; the card supports an optional `link` field if they later want one).

## Notes
- The existing "AI-Ready Graduate Initiative with Google" card stays in the **Project Management** tab — it covers events/operations; the new card covers the educator training commitment. No duplication in the same tab.
- No other files change. Icons are already imported from lucide-react.
