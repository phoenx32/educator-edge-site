import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NotFound from './NotFound';
import ShareButton from '@/components/ShareButton';
import { findArticle } from '@/data/articles';

const longDate = (ymd: string) =>
  new Date(`${ymd}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

/**
 * An article at /articles/:slug: the site's header and footer (no Academy
 * banner or menu link), the title and subtitle, a byline like Substack's
 * (round photo, name, date) with Share this article, the article as written,
 * and Share this article again at the end (Joey, 2026-10-21). No comments or
 * reactions.
 */
const Article = () => {
  const { slug } = useParams();
  const article = findArticle(slug);

  useEffect(() => {
    if (!article) return;
    const before = document.title;
    document.title = `${article.title} · Community Learning Partners`;
    window.scrollTo(0, 0);
    return () => { document.title = before; };
  }, [article]);

  if (!article) return <NotFound />;
  // The address to share is always the live one, wherever the page is open.
  const url = `https://communitylearningpartners.com/articles/${article.slug}`;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50">
        <Navigation page />
      </header>

      <main className="flex-1 py-12 md:py-16">
        <article className="mx-auto max-w-[728px] px-6">
          <h1 className="text-3xl md:text-[40px] md:leading-[1.15] font-bold tracking-tight text-foreground">{article.title}</h1>
          <p className="mt-3 text-lg md:text-xl leading-relaxed text-muted-foreground">{article.subtitle}</p>

          <div className="mt-7 mb-9 flex flex-wrap items-center gap-x-3 gap-y-3 border-y border-border py-3.5">
            <img src={article.author.photo} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
            <div className="leading-tight">
              <div className="text-[15px] font-semibold text-foreground">{article.author.name}</div>
              <div className="mt-0.5 text-sm text-muted-foreground">{longDate(article.date)}</div>
            </div>
            <ShareButton url={url} className="sm:ml-auto" />
          </div>

          <div className="clp-article" dangerouslySetInnerHTML={{ __html: article.html }} />

          {/* At the end, the same button again. */}
          <div className="mt-12 flex justify-center border-t border-border pt-8">
            <ShareButton url={url} />
          </div>
        </article>
      </main>

      <Footer page />
    </div>
  );
};

export default Article;
