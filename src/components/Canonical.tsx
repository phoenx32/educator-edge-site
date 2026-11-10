import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://communitylearningpartners.com";

/**
 * Tells search engines each page's one address: the path on the main domain,
 * without the query, the #section or a trailing slash. Without it, Google
 * guesses between variants such as /articles and /articles/ (Search Console:
 * "Duplicate without user-selected canonical", 2026-11-09).
 */
const Canonical = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${SITE}${path}`;
  }, [pathname]);
  return null;
};

export default Canonical;
