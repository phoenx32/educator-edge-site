import { Link } from 'react-router-dom';
import UseCasesShell from '@/components/usecases/UseCasesShell';
import { CASE_STUDIES } from '@/lib/static-data';
import { USE_CASE_OVERVIEWS } from '@/lib/use-case-overviews';
import { UseCaseDot } from '@/components/UseCaseTag';
import { UC_TEXT } from '@/lib/use-case-text';
import { caseTagForSlug } from '@/lib/use-cases';

const TITLE = 'Sample Projects and Use Cases | AI Leadership Academy';
const DESCRIPTION =
  'Four adult education administration use cases: intake and onboarding, career pathways, data analysis, and instructional infrastructure.';

const UseCases = () => (
  <UseCasesShell title={TITLE} description={DESCRIPTION}>
    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Sample projects</p>
    <h1 className="mt-3 text-3xl md:text-[2.75rem] md:leading-tight font-bold tracking-tight">Use cases</h1>
    <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
      Explore the types of projects you could develop through the AI Academy
    </p>

    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      {CASE_STUDIES.map((c) => {
        const overview = USE_CASE_OVERVIEWS[c.slug];
        const tag = caseTagForSlug(c.slug);
        return (
          <Link
            key={c.id}
            to={`/bootcamp/use-cases/${c.slug}`}
            className="flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            {tag ? (
              <p className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${UC_TEXT[tag]}`}>
                <UseCaseDot useCase={tag} />
                {tag}
              </p>
            ) : (
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{c.category}</p>
            )}
            <h2 className="mt-2 text-xl font-semibold tracking-tight">{c.title}</h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
              {overview?.description ?? c.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {(overview?.chips ?? c.ai_concepts.slice(0, 3)).map((tagName) => (
                <span key={tagName} className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                  {tagName}
                </span>
              ))}
            </div>
          </Link>
        );
      })}
    </div>
  </UseCasesShell>
);

export default UseCases;
