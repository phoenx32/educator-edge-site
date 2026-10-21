import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Search, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TOPICS, writings, type Writing } from '@/data/writing';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** "Oct 16, 2026", "Nov 2023" or "2023", as precise as the date is known. */
const when = (w: Writing) => {
  if (w.label) return w.label;
  const [y, m, d] = w.date.split('-');
  return d ? `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}` : m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
};
/** What a card is: an article or newsletter, or the organization it lives with. */
const kind = (w: Writing) =>
  w.kind === 'newsletter' ? 'newsletter' : w.path || ['Substack', 'LinkedIn', 'Medium', 'AI Leadership Academy', 'Delgado eLearn'].includes(w.outlet) ? 'article' : 'elsewhere';

/** One piece. On this site it opens here; anywhere else it opens in a new tab, and says where it goes. */
const Card = ({ w }: { w: Writing }) => {
  const k = kind(w);
  const label = k === 'elsewhere' ? w.outlet : k === 'newsletter' ? 'Newsletter' : 'Article';
  const body = (
    <>
      <span className="wg-meta">
        <span className={`wg-dot wg-dot--${k}`} aria-hidden="true" />
        <span className="wg-src">{label}</span>
        <span aria-hidden="true">·</span>
        <span>{when(w)}</span>
      </span>
      <h3 className="wg-title">{w.title}</h3>
      {w.dek ? <p className="wg-dek">{w.dek}</p> : null}
      <span className="wg-foot">
        <span className="wg-with">{w.with ? `With ${w.with}` : ''}</span>
        <span className="wg-go">
          {w.path ? (
            <>Read <ArrowRight size={14} aria-hidden="true" /></>
          ) : (
            <>Read on {w.outlet} <ArrowUpRight size={14} aria-hidden="true" /></>
          )}
        </span>
      </span>
    </>
  );
  const cls = `wg-card${w.kind === 'newsletter' ? ' wg-card--note' : ''}`;
  return w.path ? (
    <Link to={w.path} className={cls}>{body}</Link>
  ) : (
    <a href={w.url} className={cls} target="_blank" rel="noopener noreferrer" aria-label={`${w.title}, ${label}, ${when(w)} (opens ${w.outlet} in a new tab)`}>
      {body}
    </a>
  );
};

/**
 * Articles (Joey, 2026-10-21): everything Joey has written, in one place. The newest piece leads,
 * large; then search and topics; then every piece by year, newest first. A piece on another site
 * opens there in a new tab, and its card says so; the ones on this site open here. Searching or
 * choosing a topic folds the newest piece into the list, so every match is counted and shown.
 */
const Articles = () => {
  const [topic, setTopic] = useState<string>('All');
  const [q, setQ] = useState('');

  useEffect(() => {
    const before = document.title;
    document.title = 'Articles · Community Learning Partners';
    return () => { document.title = before; };
  }, []);

  // On a computer the search bar sticks just under the header, whatever its height. On a phone it stays put (index.css).
  const headerRef = useRef<HTMLElement>(null);
  const [headerH, setHeaderH] = useState(64);
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setHeaderH(Math.round(el.getBoundingClientRect().height)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const [latest, ...rest] = writings;
  const browsing = topic === 'All' && !q.trim();
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return (browsing ? rest : writings).filter(
      (w) => (topic === 'All' || w.topic === topic) && (!needle || `${w.title} ${w.dek ?? ''} ${w.outlet} ${w.with ?? ''}`.toLowerCase().includes(needle)),
    );
  }, [topic, q, browsing, rest]);
  const count = browsing ? writings.length : shown.length;
  const years = [...new Set(shown.map((w) => w.date.slice(0, 4)))];
  const countOf = (t: string) => writings.filter((w) => t === 'All' || w.topic === t).length;

  return (
    <div className="min-h-screen flex flex-col">
      <header ref={headerRef} className="sticky top-0 z-50">
        <Navigation page current="/articles" />
      </header>

      <main className="flex-1 py-12 md:py-14">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-[34px] md:text-[44px] leading-tight font-bold tracking-tight text-foreground">Articles</h1>
              <p className="mt-3 max-w-[620px] text-lg text-muted-foreground">Writing on AI, digital learning, and adult education.</p>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <img src="/media/authors/joey-lehrman.jpg" alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
              <div className="leading-tight">
                <div className="text-[14.5px] font-semibold text-foreground">Joey Lehrman</div>
                Co-founder, Community Learning Partners
              </div>
            </div>
          </div>

          {browsing ? (
            <Link to={latest.path ?? '/articles'} className="wg-feature">
              <span className="wg-feature__img">
                <img src="/media/articles/building-a-dashboard-with-ai-without-giving-ai-your-data/figure-2.png" alt="" loading="eager" />
              </span>
              <span className="wg-feature__body">
                <span className="wg-kick"><span className="wg-new">Latest</span>{when(latest)}</span>
                <span className="wg-feature__title">{latest.title}</span>
                {latest.dek ? <span className="wg-feature__dek">{latest.dek}</span> : null}
                <span className="wg-go wg-feature__go">Read the article <ArrowRight size={16} aria-hidden="true" /></span>
              </span>
            </Link>
          ) : null}

          <div className="wg-tools" role="search" style={{ top: headerH }}>
            <label className="wg-search">
              <span className="sr-only">Search articles</span>
              <Search size={18} aria-hidden="true" />
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles" autoComplete="off" />
            </label>
            <div className="wg-chips" role="group" aria-label="Topics">
              {['All', ...TOPICS].map((t) => (
                <button key={t} type="button" className="wg-chip" aria-pressed={topic === t} onClick={() => setTopic(t)}>
                  {t}<span>{countOf(t)}</span>
                </button>
              ))}
            </div>
            <span className="wg-count" aria-live="polite">{count} {count === 1 ? 'piece' : 'pieces'}</span>
          </div>

          {shown.length ? (
            years.map((y) => (
              <section key={y} aria-labelledby={`y${y}`}>
                <h2 className="wg-year" id={`y${y}`}>{y}</h2>
                <div className="wg-grid">
                  {shown.filter((w) => w.date.startsWith(y)).map((w) => <Card key={`${w.date}${w.title}${w.outlet}`} w={w} />)}
                </div>
              </section>
            ))
          ) : (
            <div className="wg-empty">
              Nothing matches that yet.
              <button type="button" onClick={() => { setQ(''); setTopic('All'); }}>
                <X size={14} aria-hidden="true" /> Show everything
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer page />
    </div>
  );
};

export default Articles;
