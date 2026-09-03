import { useEffect, useMemo, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Cell = { v?: string; b?: number; n?: number };
type Sheet = { name: string; rows: Cell[][]; widths: number[]; merges: string[] };

type ChartSpec = {
  title: string;
  kind: "bar" | "line";
  categories: string[];
  series: { name: string; data: (number | null)[] }[];
  pct?: boolean;
  domain?: [number, number];
};

type Summary = {
  org: string;
  title: string;
  note: string;
  stats: { label: string; value: string }[];
  lead: string;
  blocks: { heading: string; items: string[]; ordered?: boolean }[];
  tableHeading: string;
  tableHeaders: string[];
  table: { class: string; data: string; decide: string }[];
  blocks2: { heading: string; items: string[]; ordered?: boolean }[];
  sources: string;
  charts: ChartSpec[];
};

type Instrument = {
  org: string;
  title: string;
  note: string;
  scale: string;
  rating: string[];
  open: string[];
  meta: string[];
};

type Source = {
  sheets: Sheet[];
  summary?: Summary;
  instrument?: Instrument;
};

export type WorkbookKey = "before" | "after" | "survey";

const SOURCE_LABELS: [WorkbookKey, string][] = [
  ["before", "Original Workbook"],
  ["after", "AI Analysis"],
  ["survey", "Student Survey"],
];

const SUMMARY_TAB = "Mid-Term Summary";
const QUESTIONS_TAB = "Questions";
const CHUNK = 120;

const SERIES_COLORS = ["hsl(var(--primary))", "hsl(var(--highlight))", "#0f766e", "#b45309", "#6d28d9"];

async function loadSource(key: WorkbookKey): Promise<Source> {
  const mod =
    key === "before"
      ? await import("@/data/attendance-before.json")
      : key === "after"
        ? await import("@/data/attendance-after.json")
        : await import("@/data/student-survey.json");
  return (mod as unknown as { default: Source }).default;
}

function fmtVal(v: number | null, pct?: boolean) {
  if (v === null || v === undefined) return "—";
  return pct ? `${(v * 100).toFixed(1)}%` : v.toFixed(2);
}

function ChartCard({ chart }: { chart: ChartSpec }) {
  const data = chart.categories.map((c, i) => {
    const row: Record<string, string | number | null> = { name: c };
    chart.series.forEach((s, si) => {
      row[`s${si}`] = s.data[i] ?? null;
    });
    return row;
  });
  const tickFmt = (v: number) => (chart.pct ? `${Math.round(v * 100)}%` : String(v));

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-sm font-semibold">{chart.title}</p>
      <div className="mt-3 h-56">
        <ResponsiveContainer width="100%" height="100%">
          {chart.kind === "line" ? (
            <LineChart data={data} margin={{ top: 4, right: 12, bottom: 4, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} height={30} />
              <YAxis
                tickFormatter={tickFmt}
                tick={{ fontSize: 11 }}
                width={48}
                domain={chart.domain ?? [0, 1]}
              />
              <Tooltip formatter={(v) => fmtVal(Number(v), chart.pct)} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              {chart.series.map((s, si) => (
                <Line
                  key={s.name}
                  type="monotone"
                  dataKey={`s${si}`}
                  name={s.name}
                  stroke={SERIES_COLORS[si % SERIES_COLORS.length]}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
            </LineChart>
          ) : (
            <BarChart data={data} margin={{ top: 4, right: 12, bottom: 4, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10 }}
                interval={0}
                angle={-12}
                dy={8}
                height={44}
              />
              <YAxis
                tickFormatter={tickFmt}
                tick={{ fontSize: 11 }}
                width={48}
                domain={chart.domain ?? [0, 1]}
              />
              <Tooltip formatter={(v) => fmtVal(Number(v), chart.pct)} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              {chart.series.map((s, si) => (
                <Bar
                  key={s.name}
                  dataKey={`s${si}`}
                  name={s.name}
                  fill={SERIES_COLORS[si % SERIES_COLORS.length]}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Block({ block }: { block: { heading: string; items: string[]; ordered?: boolean } }) {
  return (
    <section>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
        {block.heading}
      </h3>
      <ul className="mt-3 space-y-2">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-foreground/90">
            <span className="mt-[2px] shrink-0 text-sm font-semibold text-muted-foreground">
              {block.ordered ? `${i + 1}.` : "•"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SummaryReport({ summary }: { summary: Summary }) {
  return (
    <div className="min-h-0 flex-1 overflow-auto bg-surface">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-5 sm:p-7">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {summary.org}
          </p>
          <h2 className="mt-1 text-2xl font-semibold">{summary.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{summary.note}</p>
        </header>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {summary.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {s.label}
              </p>
              <p className="mt-1 text-2xl font-semibold tabular-nums">{s.value}</p>
            </div>
          ))}
        </div>

        <p className="text-[15px] leading-relaxed text-foreground/90">{summary.lead}</p>

        <div className="grid gap-4">
          {summary.charts.map((c) => (
            <ChartCard key={c.title} chart={c} />
          ))}
        </div>

        {summary.blocks.map((b) => (
          <Block key={b.heading} block={b} />
        ))}

        <section>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
            {summary.tableHeading}
          </h3>
          <div className="mt-3 overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  {summary.tableHeaders.map((h) => (
                    <th
                      key={h}
                      className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {summary.table.map((r) => (
                  <tr key={r.class} className="border-b border-border last:border-0 align-top">
                    <td className="px-4 py-3 font-semibold">{r.class}</td>
                    <td className="px-4 py-3 text-foreground/90">{r.data}</td>
                    <td className="px-4 py-3 text-foreground/90">{r.decide}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {summary.blocks2.map((b) => (
          <Block key={b.heading} block={b} />
        ))}

        <p className="border-t border-border pt-4 text-xs text-muted-foreground">
          {summary.sources}
        </p>
      </div>
    </div>
  );
}

function InstrumentView({ instrument }: { instrument: Instrument }) {
  return (
    <div className="min-h-0 flex-1 overflow-auto bg-surface">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-7 p-5 sm:p-7">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {instrument.org}
          </p>
          <h2 className="mt-1 text-2xl font-semibold">{instrument.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{instrument.note}</p>
        </header>

        <section className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
            Rating questions
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{instrument.scale}</p>
          <ol className="mt-4 space-y-3">
            {instrument.rating.map((q, i) => (
              <li key={q}>
                <p className="text-[15px] font-medium">
                  {i + 1}. {q}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className="inline-flex size-7 items-center justify-center rounded-full border border-border text-xs text-muted-foreground"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
            Open-ended questions
          </h3>
          <ol className="mt-3 space-y-2">
            {instrument.open.map((q, i) => (
              <li key={q} className="text-[15px]">
                {instrument.rating.length + i + 1}. {q}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
            Also collected
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {instrument.meta.map((m) => (
              <span
                key={m}
                className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
              >
                {m}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function SheetGrid({ sheet }: { sheet: Sheet }) {
  const [limit, setLimit] = useState(CHUNK);
  useEffect(() => setLimit(CHUNK), [sheet.name]);

  const colCount = useMemo(() => sheet.rows.reduce((m, r) => Math.max(m, r.length), 0), [sheet]);
  const rows = sheet.rows.slice(0, limit);

  return (
    <div className="min-h-0 flex-1 overflow-auto">
      <table className="border-separate border-spacing-0 text-[13px]">
        <tbody>
          {rows.map((row, ri) => {
            const filled = row.filter((c) => c?.v).length;
            const titleRow = filled === 1 && !!row[0]?.v;
            return (
              <tr key={ri}>
                <th className="sticky left-0 z-10 w-10 border-b border-r border-border bg-surface px-2 py-1 text-right text-[11px] font-normal text-muted-foreground">
                  {ri + 1}
                </th>
                {titleRow ? (
                  <td
                    colSpan={colCount}
                    className={`border-b border-r border-border px-2 py-1 text-left ${
                      row[0]?.b ? "bg-surface font-semibold" : ""
                    }`}
                  >
                    {row[0]?.v}
                  </td>
                ) : (
                  Array.from({ length: colCount }).map((_, ci) => {
                    const cell = row[ci];
                    return (
                      <td
                        key={ci}
                        style={{ minWidth: Math.min(Math.max(sheet.widths[ci] ?? 72, 52), 260) }}
                        className={`whitespace-pre border-b border-r border-border px-2 py-1 ${
                          cell?.n ? "text-right tabular-nums" : "text-left"
                        } ${cell?.b ? "bg-surface font-semibold" : ""}`}
                      >
                        {cell?.v ?? ""}
                      </td>
                    );
                  })
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {sheet.rows.length > limit && (
        <div className="sticky left-0 p-3">
          <button
            type="button"
            onClick={() => setLimit((l) => l + 400)}
            className="rounded-full border border-input bg-background px-4 py-1.5 text-sm font-semibold hover:border-foreground/30"
          >
            Show more rows ({sheet.rows.length - limit} remaining)
          </button>
        </div>
      )}
    </div>
  );
}

const TAB_BASE =
  "shrink-0 rounded-t-md border border-b-0 px-3 py-1.5 text-[13px] font-medium transition-colors";

export function WorkbookViewer({
  open,
  onOpenChange,
  initialWorkbook,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  initialWorkbook: WorkbookKey;
}) {
  const [sourceKey, setSourceKey] = useState<WorkbookKey>(initialWorkbook);
  const [sources, setSources] = useState<Partial<Record<WorkbookKey, Source>>>({});
  const [tab, setTab] = useState<string | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setSourceKey(initialWorkbook);
  }, [open, initialWorkbook]);

  useEffect(() => {
    if (!open || sources[sourceKey]) return;
    let cancelled = false;
    void loadSource(sourceKey).then((s) => {
      if (!cancelled) setSources((prev) => ({ ...prev, [sourceKey]: s }));
    });
    return () => {
      cancelled = true;
    };
  }, [open, sourceKey, sources]);

  const source = sources[sourceKey];

  const tabs = useMemo(() => {
    if (!source) return [];
    if (sourceKey === "after") return [SUMMARY_TAB, ...source.sheets.map((s) => s.name)];
    if (sourceKey === "survey") return [QUESTIONS_TAB, "Responses"];
    return source.sheets.map((s) => s.name);
  }, [source, sourceKey]);

  useEffect(() => {
    if (tabs.length) setTab(tabs[0] ?? null);
  }, [tabs]);

  const activeTab = tab && tabs.includes(tab) ? tab : (tabs[0] ?? null);
  const sheet =
    sourceKey === "survey" ? source?.sheets[0] : source?.sheets.find((s) => s.name === activeTab);

  function onTabKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const i = tabs.indexOf(activeTab ?? "");
    const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
    if (next) {
      setTab(next);
      const btns = tabsRef.current?.querySelectorAll<HTMLButtonElement>("button");
      btns?.[tabs.indexOf(next)]?.focus();
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-[92vh] max-w-6xl flex-col gap-0 overflow-hidden p-0">
        <DialogHeader className="border-b border-border p-4 pr-12 text-left sm:p-5">
          <DialogTitle className="text-lg">
            Fall 2026 attendance and survey data
          </DialogTitle>
          <DialogDescription className="sr-only">
            Compare the original attendance workbook, the analysis Claude returned, and the student
            survey.
          </DialogDescription>
          <div className="mt-3 inline-flex flex-wrap rounded-full border border-input bg-background p-1">
            {SOURCE_LABELS.map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setSourceKey(key)}
                aria-pressed={sourceKey === key}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  sourceKey === key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </DialogHeader>

        {!source ? (
          <p className="p-6 text-sm text-muted-foreground">Loading data…</p>
        ) : (
          <>
            <div
              ref={tabsRef}
              role="tablist"
              aria-label="Sheets"
              onKeyDown={onTabKeyDown}
              className="flex gap-1 overflow-x-auto border-b border-border bg-surface px-3 pt-2"
            >
              {tabs.map((name) => (
                <button
                  key={name}
                  type="button"
                  role="tab"
                  aria-selected={name === activeTab}
                  tabIndex={name === activeTab ? 0 : -1}
                  onClick={() => setTab(name)}
                  className={`${TAB_BASE} ${
                    name === activeTab
                      ? "border-border bg-card text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {sourceKey === "after" && activeTab === SUMMARY_TAB && source.summary ? (
              <SummaryReport summary={source.summary} />
            ) : sourceKey === "survey" && activeTab === QUESTIONS_TAB && source.instrument ? (
              <InstrumentView instrument={source.instrument} />
            ) : sheet ? (
              <SheetGrid sheet={sheet} />
            ) : null}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
