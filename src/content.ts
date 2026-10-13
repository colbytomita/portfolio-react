// All site copy lives here so it can be edited without touching layout code.
// Work entries follow the NDA scope: employer named, internal projects described
// by what was built, never by what they were for.

export const site = {
  name: "Colby Tomita",
  location: "Honolulu, Hawaiʻi",
  email: "tomitacolby@gmail.com",
  linkedin: "https://www.linkedin.com/in/colbytomita",
  github: "https://github.com/colbytomita",
  source: "https://github.com/colbytomita/portfolio-react",
  // Drop a current PDF into /public and set this to "/resume.pdf" to show the link.
  resume: null as string | null,
};

export const sections = [
  { id: "top", label: "Index" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  lede: "I’m a software and cloud engineer. Most of my work is data pipelines and analytics on Azure and Microsoft Fabric.",
  now: "Currently at Kamehameha Schools",
};

export const about = {
  title: "I like building systems that make data easier to use.",
  paragraphs: [
    "I’m on the Cloud Services team at Kamehameha Schools. Most of what I build is analytics in Microsoft Fabric, PySpark and Power BI, plus apps and automations on the Power Platform.",
    "Lately I’ve been building more with AI, at work and on side projects. A few of those are below.",
  ],
};

export type Job = {
  dates: string;
  role: string;
  org: string;
  text: string;
  points?: string[];
};

export const jobs: Job[] = [
  {
    dates: "2024 – Now",
    role: "Cloud Engineer",
    org: "Kamehameha Schools",
    text: "I work with business owners from requirements through launch and support.",
    points: [
      "Shipped about 20 production solutions that replaced spreadsheets and paper processes.",
      "Got a 1,908-record LLM evaluation run that used to take days down to 5 hours 49 minutes, working with Microsoft engineers.",
      "Built an ETL pipeline with 34 validation checks. If any check fails, the whole load rolls back.",
      "Wrote 10 of the team’s 33 architecture design docs and the templates we use for them.",
    ],
  },
  {
    dates: "2023",
    role: "Backend Developer Intern",
    org: "Permiso Security",
    text: "Built REST ingestion for AWS resource data and a React and TypeScript page that 30+ people used daily.",
  },
  {
    dates: "2020 – 2024",
    role: "B.S. Computer Science",
    org: "Point Loma Nazarene University",
    text: "Software engineering track. I spent a semester at Korea University in Seoul.",
  },
];

export const tools: [string, string][] = [
  ["AI", "Claude API, OpenAI embeddings, RAG, pgvector, cross-encoder reranking"],
  ["Data", "Microsoft Fabric, PySpark, Power BI, PostgreSQL, pandas"],
  ["Cloud", "Azure, Entra ID, Power Apps, Power Automate, SharePoint"],
  ["Code", "TypeScript, Python, SQL, React, Next.js, Django"],
];

export type Project = {
  year: string;
  title: string;
  tagline: string;
  body: string;
  stack: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    year: "2026",
    title: "ARL",
    tagline: "Maps out the research on a topic.",
    body: "Pulls papers from arXiv, ranks them, groups them by sub-topic, and draws a map with citation links. On my test topics the ranking scores 0.859 nDCG@25.",
    stack: "Python · sentence-transformers · scikit-learn",
  },
  {
    year: "2026",
    title: "Sukui 救い",
    tagline: "A Japanese and English Christian resource site.",
    body: "The chatbot answers questions in either language and always cites a Bible verse. It runs on Claude with retrieval over Supabase pgvector.",
    stack: "Next.js · Claude API · Supabase",
    link: { label: "Live", href: "https://sukui.org" },
  },
  {
    year: "2026",
    title: "Finance Agent",
    tagline: "A dashboard for researching stocks and swing trades.",
    body: "Scores stocks from 1 to 10 and shows the reasons behind each score. It only places a trade when I confirm it.",
    stack: "Next.js · TypeScript · SQLite",
    link: { label: "Repo", href: "https://github.com/colbytomita/finance-agent" },
  },
  {
    year: "2023",
    title: "Reservoir Forecasting",
    tagline: "Predicts water levels for 16 reservoirs.",
    body: "My PLNU capstone. I used 13 years of data to compare six regression models, with a Django app for the predictions.",
    stack: "Python · Django · scikit-learn",
    link: { label: "Repo", href: "https://github.com/colbytomita/water_reservoir_ml_predictor" },
  },
];
