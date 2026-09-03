/**
 * Static snapshot of the session content.
 *
 * This is the backup site: it never talks to a database. The case-study rows
 * below were exported from the live site and baked into the
 * bundle so the pages render with zero server work.
 */
import caseStudiesJson from "@/data/case-studies.json";

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  situation: string | null;
  challenge: string | null;
  what_they_built: string | null;
  how_ai_helped: string | null;
  what_changed: string | null;
  what_they_learned: string | null;
  ai_concepts: string[];
  ai_apps: string[] | null;
  reaction_options: string[];
  reflection_questions: string[] | null;
  solution_links: unknown;
  display_order: number | null;
};

export const CASE_STUDIES = caseStudiesJson as unknown as CaseStudy[];

export function caseBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
