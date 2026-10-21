import dashboardWithoutData from "@/content/articles/building-a-dashboard-with-ai-without-giving-ai-your-data.html?raw";

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  author: { name: string; photo: string };
  /** YYYY-MM-DD, shown as "Oct 16, 2026". */
  date: string;
  /** The article's own HTML, as published on the AI Leadership Academy site. */
  html: string;
};

export const articles: Article[] = [
  {
    slug: "building-a-dashboard-with-ai-without-giving-ai-your-data",
    title: "Building a Dashboard With AI, Without Giving AI Your Data",
    subtitle:
      "How AI can be used to build a Google Sheets dashboard, and how to ensure learner data stays protected by the same sharing settings as any Google Sheet.",
    author: { name: "Joey Lehrman", photo: "/media/authors/joey-lehrman.jpg" },
    date: "2026-10-16",
    html: dashboardWithoutData,
  },
];

export const findArticle = (slug: string | undefined) => articles.find((a) => a.slug === slug);
