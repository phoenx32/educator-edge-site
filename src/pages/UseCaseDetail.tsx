import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  Check,
  ClipboardList,
  ChevronDown,
  Copy,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Sparkles,
  Table2,
} from "lucide-react";
import UseCasesShell from "@/components/usecases/UseCasesShell";
import { UseCaseDot } from "@/components/UseCaseTag";
import { UC_TEXT } from "@/lib/use-case-text";
import { caseTagForSlug } from "@/lib/use-cases";
import { WorkbookViewer, type WorkbookKey } from "@/components/WorkbookViewer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { caseBySlug, type CaseStudy } from "@/lib/static-data";

const SLUG_HEADING: Record<string, string> = {
  "instructional-support": "Instructional Infrastructure",
  "data-analysis": "Data Analysis and Student Persistence",
};

/** Slugs whose `what_changed` copy renders as a "How the results can be used" section. */
const RESULTS_SLUGS = new Set(["data-analysis"]);


const LEAD_SECTIONS: { key: keyof CaseStudy; label: string }[] = [
  { key: "situation", label: "The situation" },
  { key: "challenge", label: "The challenge" },
];

const AFTER_SECTIONS: { key: keyof CaseStudy; label: string }[] = [
  { key: "what_they_built", label: "What they built" },
  { key: "how_ai_helped", label: "How AI helped" },
];

type StepAction = {
  kind?: "pdf" | "image" | "external";
  label: string;
  url: string;
  title?: string;
};

/**
 * A step in "Explore the solution". Older rows carry a flat {label,url,...}
 * link; newer rows carry a titled step with bullets and an action.
 */
/** True for empty or placeholder strings like "", " ", or a literal "\n". */
const isBlank = (s?: string | null) => !s || s.replace(/\\n/g, "").trim().length === 0;

type SolutionLink = {
  kind?: "workbook";
  label?: string;
  url?: string;
  title?: string;
  description?: string;
  lead?: string;
  note?: string;
  bridge?: string;

  bullets?: string[];
  notice?: string[];
  action?: StepAction;
  disclosure?: { label?: string; body: string };
};

/** Modal holding the research report in the browser's built-in PDF viewer. */
function PdfModal({
  action,
  open,
  onOpenChange,
}: {
  action: StepAction | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-[90vh] max-w-5xl flex-col gap-3 p-4 sm:p-6">
        <DialogHeader className="pr-8 text-left">
          <DialogTitle className="text-lg">
            {action?.title ?? action?.label ?? "Research report"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Scroll through the report, or open it in a new tab.
          </DialogDescription>
        </DialogHeader>
        {action && (
          <>
            <iframe
              src={action.url}
              title={action.title ?? action.label}
              className="min-h-0 w-full flex-1 rounded-lg border border-border bg-surface"
            />
            <a
              href={action.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-sm font-medium text-primary hover:underline"
            >
              Open in a new tab
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

/** Modal showing the infographic large and centered. */
function ImageModal({
  action,
  open,
  onOpenChange,
}: {
  action: StepAction | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-6xl overflow-auto p-4 sm:p-6">
        <DialogHeader className="pr-8 text-left">
          <DialogTitle className="text-lg">
            {action?.title ?? action?.label ?? "Infographic"}
          </DialogTitle>
        </DialogHeader>
        {action && (
          <img
            src={action.url}
            alt={action.title ?? action.label}
            className="mt-2 w-full rounded-lg border border-border"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

const ACTION_CLASS =
  "mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** Opens a modal for pdf/image actions, or a new tab for external links. */
function ActionButton({
  action,
  onOpenPdf,
  onOpenImage,
}: {
  action: StepAction;
  onOpenPdf: () => void;
  onOpenImage: () => void;
}) {
  if (action.kind === "pdf" || action.kind === "image") {
    const isPdf = action.kind === "pdf";
    const Icon = isPdf ? FileText : ImageIcon;
    return (
      <button type="button" onClick={isPdf ? onOpenPdf : onOpenImage} className={ACTION_CLASS}>
        <Icon className="size-4" aria-hidden="true" />
        {action.label}
      </button>
    );
  }
  return (
    <a href={action.url} target="_blank" rel="noopener noreferrer" className={ACTION_CLASS}>
      {action.label}
      <ExternalLink className="size-4" aria-hidden="true" />
    </a>
  );
}

/** Collapsed, visually set-apart reference panel for a long prompt. */
function PromptDisclosure({ label, body }: { label?: string | undefined; body: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const name = label ?? "the prompt";

  async function copy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please select and copy manually.");
    }
  }

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {open ? `Hide ${name}` : `See ${name}`}
        <ChevronDown
          aria-hidden="true"
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="mt-3 rounded-lg border border-border bg-card p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Research prompt
            </p>
            <button
              type="button"
              onClick={copy}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-input bg-background px-3 py-1.5 text-xs font-semibold transition-colors hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {copied ? (
                <Check className="size-3.5" aria-hidden="true" />
              ) : (
                <Copy className="size-3.5" aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy prompt"}
            </button>
          </div>
          <div className="mt-3 max-w-prose space-y-3 border-l-2 border-primary/30 pl-4 text-[14.5px] leading-relaxed text-foreground/90">
            {body
              .split("\n\n")
              .filter((p) => p.trim().length > 0)
              .map((p, i) => (
                <p key={i} className="whitespace-pre-line">
                  {p}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

/** Render a text block, turning "- " lines into a bullet list. */
function Prose({ text }: { text: string }) {
  const blocks = text.split("\n\n").filter((b) => b.trim().length > 0);
  return (
    <div className="prose-session mt-2 max-w-2xl space-y-3 text-[15px] text-foreground/90">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => l.trim().startsWith("- "));
        if (isList) {
          return (
            <ul key={i} className="list-disc space-y-1 pl-5">
              {lines.map((l) => (
                <li key={l}>{l.trim().slice(2)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="whitespace-pre-line">
            {block}
          </p>
        );
      })}
    </div>
  );
}

function SectionList({
  study,
  sections,
}: {
  study: CaseStudy;
  sections: { key: keyof CaseStudy; label: string }[];
}) {
  const filled = sections.filter(({ key }) => String(study[key] ?? "").trim().length > 0);
  if (filled.length === 0) return null;
  return (
    <div className="space-y-8">
      {filled.map(({ key, label }) => (
        <section key={key as string}>
          <h2 className="text-xl font-semibold">{label}</h2>
          <Prose text={String(study[key] ?? "")} />
        </section>
      ))}
    </div>
  );
}

function CaseStudyPage() {
  const { slug = "" } = useParams();
  const [pdfAction, setPdfAction] = useState<StepAction | null>(null);
  const [imageAction, setImageAction] = useState<StepAction | null>(null);
  const [workbookOpen, setWorkbookOpen] = useState<WorkbookKey | null>(null);

  const study = caseBySlug(slug);
  if (!study) return <Navigate to="/bootcamp/use-cases" replace />;

  const aiApps = (study.ai_apps ?? []) as string[];
  const solutionLinks = (Array.isArray(study.solution_links) ? study.solution_links : []).filter(
    (l): l is SolutionLink => !!l && typeof l === "object" && !Array.isArray(l),
  );
  const workbookStep = solutionLinks.find((l) => l.kind === "workbook");
  /** Multi-step pathways get the "pathway" heading; a single enriched link stays "solution". */
  const isPathway =
    solutionLinks.length > 1 && solutionLinks.some((l) => Array.isArray(l.bullets) || !!l.action);

  const label =
    SLUG_HEADING[study.slug] ?? study.title;

  return (
    <UseCasesShell
      title={`${label} | AI Leadership Academy`}
      description="An adult education use case: the situation, the challenge, what was built, how AI helped, and what changed."
    >
      <section className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-surface px-5 py-3">
          <Link to="/bootcamp/use-cases" className="text-sm font-medium text-primary hover:underline">
            ← All use cases
          </Link>
        </div>

        <div className="flex flex-col gap-10 px-5 py-6 sm:px-8 sm:py-8">
          <header>
            {caseTagForSlug(study.slug) ? (
              <p
                className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${
                  UC_TEXT[caseTagForSlug(study.slug)!]
                }`}
              >
                <UseCaseDot useCase={caseTagForSlug(study.slug)!} />
                {caseTagForSlug(study.slug)}
              </p>
            ) : (
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {study.category}
              </p>
            )}
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">{study.title}</h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{study.subtitle}</p>
          </header>

          <SectionList study={study} sections={LEAD_SECTIONS} />

          {workbookStep && (
            <section className="rounded-xl border-2 border-primary/30 bg-card p-5 sm:p-6">
              <h2 className="text-2xl font-semibold">Explore the data</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Spend a few minutes moving through each view of the data.
              </p>
              <div className="mt-4 rounded-lg bg-surface p-4 sm:p-5">
                {!isBlank(workbookStep.lead) && (
                  <p className="text-[15px] text-foreground/90">{workbookStep.lead}</p>
                )}
                <div
                  className={`flex flex-wrap gap-3 ${!isBlank(workbookStep.lead) ? "mt-3" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setWorkbookOpen("before")}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Table2 className="size-4" aria-hidden="true" />
                    View original workbook
                  </button>
                  <button
                    type="button"
                    onClick={() => setWorkbookOpen("after")}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Sparkles className="size-4" aria-hidden="true" />
                    View AI analysis
                  </button>
                  <button
                    type="button"
                    onClick={() => setWorkbookOpen("survey")}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <ClipboardList className="size-4" aria-hidden="true" />
                    View survey questions
                  </button>
                </div>
              </div>

              {!isBlank(workbookStep.note) && (
                <p className="mt-4 text-sm text-muted-foreground">{workbookStep.note}</p>
              )}
              {workbookStep.disclosure && (
                <PromptDisclosure
                  label={workbookStep.disclosure.label}
                  body={workbookStep.disclosure.body}
                />
              )}
            </section>
          )}

          {workbookStep && !isBlank(workbookStep.bridge) && (
            <p className="text-[15px] leading-relaxed text-foreground/90">{workbookStep.bridge}</p>
          )}

          {!workbookStep && solutionLinks.length > 0 && (
            <section className="rounded-xl border-2 border-primary/30 bg-card p-5 sm:p-6">
              <h2 className="text-2xl font-semibold">
                {isPathway ? "Explore the pathway" : "Explore the solution"}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {isPathway
                  ? "Spend a few minutes moving through each step of the process."
                  : "Spend a few minutes exploring both parts of the system."}
              </p>
              <ol className="mt-4 space-y-3">
                {solutionLinks.map((link, i) => {
                  const action =
                    link.action ??
                    (link.url ? { label: link.label ?? "Open", url: link.url } : null);
                  return (
                    <li
                      key={`${i}-${link.title ?? link.url}`}
                      className="rounded-lg bg-surface p-4 sm:p-5"
                    >
                      <h3 className="text-lg font-semibold">
                        {i + 1}. {link.title ?? link.label}
                      </h3>
                      {(!isBlank(link.lead) || !isBlank(link.description)) && (
                        <p className="mt-1 text-[15px] text-foreground/90">
                          {!isBlank(link.lead) ? link.lead : link.description}
                        </p>
                      )}
                      {(() => {
                        const bullets = (link.bullets ?? []).filter((b) => !isBlank(b));
                        return bullets.length > 0 ? (
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-foreground/90">
                            {bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        ) : null;
                      })()}
                      {action && (
                        <ActionButton
                          action={action}
                          onOpenPdf={() => setPdfAction(action as StepAction)}
                          onOpenImage={() => setImageAction(action as StepAction)}
                        />
                      )}
                      {!isBlank(link.note) && (
                        <p className="mt-3 text-sm text-muted-foreground">{link.note}</p>
                      )}
                      {link.disclosure && (
                        <PromptDisclosure
                          label={link.disclosure.label}
                          body={link.disclosure.body}
                        />
                      )}
                      {(() => {
                        const notes = (link.notice ?? []).filter((n) => !isBlank(n));
                        return notes.length > 0 ? (
                          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/90">
                            {notes.map((n) => (
                              <li key={n}>{n}</li>
                            ))}
                          </ul>
                        ) : null;
                      })()}
                    </li>
                  );
                })}
              </ol>
            </section>
          )}

          <SectionList study={study} sections={AFTER_SECTIONS} />

          {RESULTS_SLUGS.has(study.slug) && (
            <SectionList
              study={study}
              sections={[{ key: "what_changed", label: "How the results can be used" }]}
            />
          )}

          {study.ai_concepts.length > 0 && (
            <section className="rounded-lg bg-surface p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wide">
                AI skills and concepts used
              </h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {study.ai_concepts.map((tag) => (
                  <span key={tag} className="rounded-full bg-card px-3 py-1 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {aiApps.length > 0 && (
            <section className="rounded-lg bg-surface p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wide">AI apps used</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {aiApps.map((app) => (
                  <span key={app} className="rounded-full bg-card px-3 py-1 text-sm">
                    {app}
                  </span>
                ))}
              </div>
            </section>
          )}

        </div>
      </section>

      <PdfModal
        action={pdfAction}
        open={!!pdfAction}
        onOpenChange={(v) => !v && setPdfAction(null)}
      />
      <ImageModal
        action={imageAction}
        open={!!imageAction}
        onOpenChange={(v) => !v && setImageAction(null)}
      />
      {workbookStep && (
        <WorkbookViewer
          open={!!workbookOpen}
          onOpenChange={(v) => !v && setWorkbookOpen(null)}
          initialWorkbook={workbookOpen ?? "before"}
        />
      )}
    </UseCasesShell>
  );
}

export default CaseStudyPage;
