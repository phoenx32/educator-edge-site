/**
 * Optional use-case tag on a Chat post.
 *
 * A post is tagged only when the participant submits it while a use-case
 * detail route is active; the value is derived from the route, never from a
 * filter or a chip the participant picks.
 */
export const USE_CASES = ["Enrollment", "Career Pathways", "Data Analysis", "Instruction"] as const;

export type UseCase = (typeof USE_CASES)[number];

type UseCaseMeta = {
  /** Full category label — the only text ever shown for a use case. */
  label: string;
  /** Solid dot colour (background utility). */
  dot: string;
  /** Tinted badge surface: background + readable foreground. */
  tone: string;
  /** Selected filter treatment (tint + text + border/ring). */
  filterOn: string;
  /** Unselected filter treatment — neutral surface, colour stays in the dot. */
  filterOff: string;
};

export const USE_CASE_META: Record<UseCase, UseCaseMeta> = {
  Enrollment: {
    label: "Enrollment",
    dot: "bg-uc-en-foreground",
    tone: "bg-uc-en text-uc-en-foreground",
    filterOn:
      "bg-uc-en text-uc-en-foreground border-uc-en-foreground/50 ring-1 ring-uc-en-foreground/40",
    filterOff: "border-border bg-transparent text-muted-foreground hover:bg-secondary",
  },
  "Career Pathways": {
    label: "Career Pathways",
    dot: "bg-uc-cp-foreground",
    tone: "bg-uc-cp text-uc-cp-foreground",
    filterOn:
      "bg-uc-cp text-uc-cp-foreground border-uc-cp-foreground/50 ring-1 ring-uc-cp-foreground/40",
    filterOff: "border-border bg-transparent text-muted-foreground hover:bg-secondary",
  },
  "Data Analysis": {
    label: "Data Analysis",
    dot: "bg-uc-da-foreground",
    tone: "bg-uc-da text-uc-da-foreground",
    filterOn:
      "bg-uc-da text-uc-da-foreground border-uc-da-foreground/50 ring-1 ring-uc-da-foreground/40",
    filterOff: "border-border bg-transparent text-muted-foreground hover:bg-secondary",
  },
  Instruction: {
    label: "Instruction",
    dot: "bg-uc-in-foreground",
    tone: "bg-uc-in text-uc-in-foreground",
    filterOn:
      "bg-uc-in text-uc-in-foreground border-uc-in-foreground/50 ring-1 ring-uc-in-foreground/40",
    filterOff: "border-border bg-transparent text-muted-foreground hover:bg-secondary",
  },
};

/** Use-case detail route slug -> tag value. */
const SLUG_TO_USE_CASE: Record<string, UseCase> = {
  "recruitment-intake": "Enrollment",
  "career-pathways": "Career Pathways",
  "data-analysis": "Data Analysis",
  "instructional-support": "Instruction",
};

export function asUseCase(value: string | null | undefined): UseCase | null {
  return value && (USE_CASES as readonly string[]).includes(value) ? (value as UseCase) : null;
}

/** The shared category for a use-case page slug (never `case_studies.category`). */
export function caseTagForSlug(slug: string | null | undefined): UseCase | null {
  return (slug && SLUG_TO_USE_CASE[slug]) || null;
}

/**
 * The tag a post made right now should carry, from the active pathname.
 * Anything that is not a use-case detail page yields `null`.
 */
export function useCaseFromPathname(pathname: string | undefined): UseCase | null {
  if (!pathname) return null;
  const match = /^\/use-cases\/([^/?#]+)/.exec(pathname);
  return caseTagForSlug(match?.[1]);
}
