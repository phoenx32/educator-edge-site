import { useEffect, useRef, useState } from 'react';
import { Check, Share } from 'lucide-react';

/** Copies text to the clipboard, with the older way as a fallback for browsers that refuse the newer one. */
async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}

/** How long "Copied to clipboard" shows before the button comes back. */
const SHOWN_MS = 2400;

/**
 * "Share this article" (Joey, 2026-10-21): one click copies the article's
 * address, and the button turns into a green "Copied to clipboard" badge with a
 * check that pops in, then eases back to the button. Both labels share one
 * spot, so the button never changes size. Screen readers hear "Copied to
 * clipboard". Under reduced motion it swaps without moving.
 */
const ShareButton = ({ url, className = '' }: { url: string; className?: string }) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onClick = async () => {
    if (!(await copy(url))) return;
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), SHOWN_MS);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      data-copied={copied || undefined}
      className={`share-btn ${className}`}
      aria-label={copied ? 'Copied to clipboard' : 'Share this article: copy its link'}
    >
      <span className="share-btn__face share-btn__face--share" aria-hidden={copied}>
        <Share size={16} strokeWidth={2} aria-hidden="true" />
        Share this article
      </span>
      <span className="share-btn__face share-btn__face--copied" aria-hidden={!copied}>
        <span className="share-btn__check"><Check size={13} strokeWidth={3} aria-hidden="true" /></span>
        Copied to clipboard
      </span>
      <span className="sr-only" aria-live="polite">{copied ? 'Copied to clipboard' : ''}</span>
    </button>
  );
};

export default ShareButton;
