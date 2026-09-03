import type { UseCase } from "@/lib/use-cases";

/**
 * Category text colour, used where the label sits on the page background
 * (use-case cards and page headers) rather than on a tinted badge.
 */
export const UC_TEXT: Record<UseCase, string> = {
  Enrollment: "text-uc-en-foreground",
  "Career Pathways": "text-uc-cp-foreground",
  "Data Analysis": "text-uc-da-foreground",
  Instruction: "text-uc-in-foreground",
};
