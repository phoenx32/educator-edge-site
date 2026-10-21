/**
 * Everything Joey has written, for the Articles gallery (src/pages/Articles.tsx), newest first.
 * Compiled 2026-10-21 from his Substack, LinkedIn, Medium, the AI Leadership Academy, SkillRise,
 * COABE, ATLAS, World Education, The EvoLLLution, Delgado and eLearning Industry.
 *
 * path: on this site (opens here). url: on the original site (opens in a new tab).
 * dek: the piece's own opening line. label: a date to show in place of date
 * (date is YYYY-MM-DD, YYYY-MM or YYYY).
 */
export type Writing = {
  date: string;
  label?: string;
  title: string;
  outlet: string;
  kind: "article" | "newsletter" | "journal";
  topic: Topic;
  dek?: string;
  with?: string;
  path?: string;
  url?: string;
};

export const TOPICS = ["AI", "Digital learning", "Professional development", "Skills & hiring", "Conferences", "Newsletter"] as const;
export type Topic = (typeof TOPICS)[number];

export const writings: Writing[] = [
  {
    date: "2026-10-16",
    title: "Building a Dashboard With AI, Without Giving AI Your Data",
    outlet: "Community Learning Partners",
    kind: "article",
    topic: "AI",
    dek: "How AI can be used to build a Google Sheets dashboard, and how to ensure learner data stays protected by the same sharing settings as any Google Sheet.",
    path: "/articles/building-a-dashboard-with-ai-without-giving-ai-your-data"
  },
  {
    date: "2026-10-13",
    title: "What Early Electric Factories Can Tell Us About AI in Adult Education",
    outlet: "AI Leadership Academy",
    kind: "article",
    topic: "AI",
    dek: "Electricity took decades to change how factories worked. The reasons may help us think about how AI could change our programs.",
    url: "https://academy.communitylearningpartners.com/articles/what-early-electric-factories-can-tell-us"
  },
  {
    date: "2026-08-20",
    title: "Introducing the AI Leadership Academy",
    outlet: "Substack",
    kind: "newsletter",
    topic: "Newsletter",
    dek: "A 10-week professional development cohort presented by Community Learning Partners and COABE.",
    url: "https://joeylehrman.substack.com/p/introducing-the-ai-leadership-academy"
  },
  {
    date: "2026-02-24",
    title: "Will AI take all the jobs?",
    outlet: "Substack",
    kind: "article",
    topic: "AI",
    dek: "History may offer clues, and what it means for the future of teaching and learning.",
    url: "https://joeylehrman.substack.com/p/will-ai-take-all-the-jobs"
  },
  {
    date: "2025-04-30",
    title: "New AI reasoning models, \"Learning Mode\" from Claude, and Reflections from COABE 2025",
    outlet: "Substack",
    kind: "newsletter",
    topic: "Newsletter",
    dek: "Updates from OpenAI, Anthropic, Meta, and Google, plus some new AI features from Canva.",
    url: "https://joeylehrman.substack.com/p/new-ai-reasoning-models-learning"
  },
  {
    date: "2025-04-02",
    title: "Five Reflections from COABE 2025",
    outlet: "LinkedIn",
    kind: "article",
    topic: "Conferences",
    dek: "Educators shared how they’re rethinking professional development, shifting from one-time workshops to sustained cohorts.",
    url: "https://www.linkedin.com/pulse/five-reflections-from-coabe-2025-joey-lehrman-kmarc"
  },
  {
    date: "2025-03-28",
    title: "New AI tools, free resources, and where to find us at COABE 2025",
    outlet: "Substack",
    kind: "newsletter",
    topic: "Newsletter",
    url: "https://joeylehrman.substack.com/p/new-ai-tools-free-resources-and-where-25-03-28"
  },
  {
    date: "2025-03-19",
    title: "Synchronous or Asynchronous? Maybe We're Asking the Wrong Question",
    outlet: "LinkedIn",
    kind: "article",
    topic: "Digital learning",
    dek: "The quick shift to online education in recent years forced educators to reconsider how to design accessible and effective courses.",
    url: "https://www.linkedin.com/pulse/synchronous-asynchronous-maybe-were-asking-wrong-question-lehrman-pjdlc"
  },
  {
    date: "2024-12-16",
    title: "What does digital literacy mean when AI does the browsing?",
    outlet: "Substack",
    kind: "article",
    topic: "AI",
    url: "https://joeylehrman.substack.com/p/what-does-digital-literacy-mean-when-24-12-16"
  },
  {
    date: "2024-11-14",
    title: "Building a free mail merge with ChatGPT!",
    outlet: "Substack",
    kind: "newsletter",
    topic: "Newsletter",
    url: "https://joeylehrman.substack.com/p/building-a-free-mail-merge-with-chatgpt-24-11-14"
  },
  {
    date: "2024-10-08",
    title: "My favorite AI prompt and Google Docs gets tabs!",
    outlet: "Substack",
    kind: "newsletter",
    topic: "Newsletter",
    url: "https://joeylehrman.substack.com/p/my-favorite-ai-prompt-and-google-24-10-08"
  },
  {
    date: "2024-03-21",
    title: "Five Reflections from COABE 2024",
    outlet: "LinkedIn",
    kind: "article",
    topic: "Conferences",
    dek: "COABE 2024 is officially a wrap, and this year's conference saw a historic level of growth and enthusiasm.",
    url: "https://www.linkedin.com/pulse/five-reflections-from-coabe-2024-joey-lehrman-v8qbf"
  },
  {
    date: "2024-02-05",
    title: "Skills-Based Hiring: The Life of a Credential",
    outlet: "SkillRise",
    kind: "article",
    topic: "Skills & hiring",
    dek: "Instead of looking at someone's education or past jobs, skills-based hiring focuses on what skills a person has. But how exactly does that work?",
    url: "https://skillrise.org/article/skills-based-hiring-life-credential"
  },
  {
    date: "2023",
    title: "On the Ethical Questions of AI in Adult Education",
    outlet: "COABE",
    kind: "article",
    topic: "AI",
    dek: "Artificial Intelligence offers the promise of transformative change in education, creating new opportunities for teachers and students alike.",
    with: "Ryan Stivers",
    url: "https://web.archive.org/web/20250323151228/https://coabe.org/on-the-ethical-questions-of-ai-in-adult-education/"
  },
  {
    date: "2023",
    title: "Streamline Lesson Planning with Artificial Intelligence: A Step-by-Step Guide for Adult Educators",
    outlet: "COABE",
    kind: "article",
    topic: "AI",
    dek: "Lesson planning can be a complicated process, especially for adult educators meeting diverse needs.",
    with: "Ryan Stivers",
    url: "https://web.archive.org/web/20250322185439/https://coabe.org/streamline-lesson-planning-with-artificial-intelligence-a-step-by-step-guide-for-adult-educators/"
  },
  {
    date: "2023-09",
    label: "Fall 2023",
    title: "Unlocking the Power of Technology: A Professional Development (PD) Approach for Adult Educators in the Digital Age",
    outlet: "COABE Journal",
    kind: "journal",
    topic: "Professional development",
    dek: "Why adult educators need to adapt to a constantly evolving digital landscape, and a professional development approach for doing it.",
    url: "https://eric.ed.gov/?id=EJ1408586"
  },
  {
    date: "2023-05-18",
    title: "Do Learning Management Systems Limit Learning?",
    outlet: "LinkedIn",
    kind: "article",
    topic: "Digital learning",
    dek: "Learning management systems have been essential for educators in the digital age, especially given the quick shift to distance learning in 2020.",
    url: "https://www.linkedin.com/pulse/do-learning-management-systems-limit-joey-lehrman"
  },
  {
    date: "2023-05-03",
    title: "Getting started with ChatGPT and a unique way to use Google Images",
    outlet: "Substack",
    kind: "newsletter",
    topic: "Newsletter",
    url: "https://joeylehrman.substack.com/p/getting-started-with-chatgpt-and-23-05-03"
  },
  {
    date: "2023-04-25",
    title: "Exploring the Potential of ChatGPT: A Guide for Lifelong Learners",
    outlet: "Medium",
    kind: "article",
    topic: "AI",
    dek: "If it seems like everyone is talking about ChatGPT and other new artificial intelligence tools, you aren’t imagining it.",
    url: "https://joeylehrman.medium.com/exploring-the-potential-of-chatgpt-a-guide-for-lifelong-learners-4929ce9861f8"
  },
  {
    date: "2023-04-20",
    title: "Welcome (back) to adult edtech!",
    outlet: "Substack",
    kind: "newsletter",
    topic: "Newsletter",
    url: "https://joeylehrman.substack.com/p/welcome-back-to-adult-edtech-23-04-20"
  },
  {
    date: "2023-04-17",
    title: "Making Learning Visible: The Potential of Progress Tracking in Adult Education",
    outlet: "Medium",
    kind: "article",
    topic: "Digital learning",
    dek: "One time I made a progress tracker in Google Sheets.",
    url: "https://joeylehrman.medium.com/making-learning-visible-the-potential-of-progress-tracking-in-adult-education-413f62b1b5c"
  },
  {
    date: "2023-04-17",
    title: "The Importance of Digital Skills in Education",
    outlet: "The EvoLLLution",
    kind: "article",
    topic: "Digital learning",
    dek: "Lifelong learning is essential for college and career success in the 21st century.",
    url: "https://evolllution.com/programming/teaching-and-learning/the-importance-of-digital-skills-in-education/"
  },
  {
    date: "2023-04-10",
    title: "Five Lessons and Reflections from COABE 2023",
    outlet: "Medium",
    kind: "article",
    topic: "Conferences",
    dek: "COABE 2023 from Atlanta is a wrap.",
    url: "https://joeylehrman.medium.com/five-lessons-and-reflections-from-coabe-2023-8ac8eb02fee5"
  },
  {
    date: "2023-04-06",
    title: "Non-Linear Learning Examples: For Teachers and Students in the Digital Age",
    outlet: "World Education",
    kind: "article",
    topic: "Digital learning",
    dek: "In grade school, many of us learned about the assembly line.",
    with: "Jose Adorno",
    url: "https://web.archive.org/web/20230529153324/https://edtech.worlded.org/non-linear-learning-examples-for-teachers-and-students-in-the-digital-age/"
  },
  {
    date: "2023-04-02",
    title: "Unlocking the Power of Technology: A PD Approach for Adult Educators in the Digital Age",
    outlet: "Medium",
    kind: "article",
    topic: "Professional development",
    url: "https://joeylehrman.medium.com/unlocking-the-power-of-technology-a-pd-approach-for-adult-educators-in-the-digital-age-1d3b5071cabc"
  },
  {
    date: "2023-02-08",
    title: "How employers, educators, and policymakers can help to advance skills-based hiring",
    outlet: "SkillRise",
    kind: "article",
    topic: "Skills & hiring",
    dek: "Part three in a series on Verified Credentials.",
    with: "the SkillRise team",
    url: "https://skillrise.org/article/how-employers-educators-and-policymakers-can-help-advance-skills-based-hiring"
  },
  {
    date: "2022-12-08",
    title: "How a Verified Credential works and how we built and deployed our first credential",
    outlet: "SkillRise",
    kind: "article",
    topic: "Skills & hiring",
    dek: "Part two in a series on Verified Credentials.",
    with: "the SkillRise team",
    url: "https://skillrise.org/article/how-verified-credential-works-and-how-we-built-and-deployed-our-first-credential"
  },
  {
    date: "2022-10-07",
    title: "The role of Verified Credentials in an equitable future of work",
    outlet: "SkillRise",
    kind: "article",
    topic: "Skills & hiring",
    dek: "Part one in a series on Verified Credentials.",
    with: "the SkillRise team",
    url: "https://skillrise.org/article/role-verified-credentials-equitable-future-work"
  },
  {
    date: "2021-02-25",
    title: "Digital literacy tips: How to help everyone build new tech skills",
    outlet: "Medium",
    kind: "article",
    topic: "Digital learning",
    dek: "The digital literacy gap is well-documented.",
    url: "https://joeylehrman.medium.com/digital-literacy-tips-how-to-help-everyone-build-new-tech-skills-c67cc9f0392a"
  },
  {
    date: "2021-02-25",
    title: "Adult Edtech | February 2021",
    outlet: "Substack",
    kind: "newsletter",
    topic: "Newsletter",
    url: "https://joeylehrman.substack.com/p/adult-edtech-february-2021-21-02-25"
  },
  {
    date: "2021-01-14",
    title: "Adult Edtech | January 2021",
    outlet: "Substack",
    kind: "newsletter",
    topic: "Newsletter",
    url: "https://joeylehrman.substack.com/p/adult-edtech-january-2021-21-01-14"
  },
  {
    date: "2021-01-11",
    title: "Re-Imagining Instruction Part 2: Flipping the Classroom",
    outlet: "ATLAS",
    kind: "article",
    topic: "Digital learning",
    url: "https://atlasabe.org/news/re-imagining-instruction-part-2-flipping-the-classroom/"
  },
  {
    date: "2021-01-04",
    title: "Re-Imagining Instruction Part 1: Independent Learning with Technology",
    outlet: "ATLAS",
    kind: "article",
    topic: "Digital learning",
    url: "https://atlasabe.org/news/re-imagining-instruction-part-1-independent-learning-with-technology/"
  },
  {
    date: "2020-10-21",
    title: "Digital resilience is a compass for navigating digital challenges and learning",
    outlet: "SkillRise",
    kind: "article",
    topic: "Digital learning",
    with: "the SkillRise team",
    url: "https://skillrise.org/article/digital-resilience-compass-navigating-digital-challenges-and-learning"
  },
  {
    date: "2020-09-18",
    title: "Creating a company culture that values lifelong learning",
    outlet: "SkillRise",
    kind: "article",
    topic: "Skills & hiring",
    with: "the SkillRise team",
    url: "https://skillrise.org/article/creating-company-culture-values-lifelong-learning"
  },
  {
    date: "2020-07",
    title: "Lifelong learning is the antidote to the shifting workforce",
    outlet: "SkillRise",
    kind: "article",
    topic: "Skills & hiring",
    with: "the SkillRise team",
    url: "https://skillrise.org/article/lifelong-learning-antidote-shifting-workforce"
  },
  {
    date: "2020-04-17",
    title: "The Digital Learning Mindset",
    outlet: "SkillRise",
    kind: "article",
    topic: "Digital learning",
    url: "https://skillrise.org/article/digital-learning-mindset"
  },
  {
    date: "2020-03",
    title: "Breaking down the SkillRise framework",
    outlet: "SkillRise",
    kind: "article",
    topic: "Digital learning",
    dek: "New technologies, processes and pathways are transforming the skill sets required from middle-skilled workers and job seekers.",
    with: "the SkillRise team",
    url: "https://skillrise.org/article/breaking-down-skillrise-framework"
  },
  {
    date: "2020-01",
    title: "Advancing edtech in adult learning: the SkillRise framework",
    outlet: "SkillRise",
    kind: "article",
    topic: "Digital learning",
    with: "the SkillRise team",
    url: "https://skillrise.org/article/advancing-edtech-adult-learning-skillrise-framework"
  },
  {
    date: "2019-04-16",
    title: "How we built an automated practice test",
    outlet: "Delgado eLearn",
    kind: "article",
    topic: "Digital learning",
    url: "https://elearnclass.blogspot.com/2019/04/how-we-built-automated-practice-test.html"
  },
  {
    date: "2016-01-13",
    title: "5 Tips For Effective Distance Learning With Adult Learners",
    outlet: "eLearning Industry",
    kind: "article",
    topic: "Digital learning",
    dek: "Building great distance learning experiences for adult learners studying to earn a GED or HiSET.",
    url: "https://elearningindustry.com/5-tips-effective-distance-learning-adult-learners"
  }
];
