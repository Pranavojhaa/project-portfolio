export const navItems = [
  { label: "At a glance", href: "#glance" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#experience" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "Pranav Ojha",
  tagline: "Building production-ready web, backend, and AI/data systems end to end.",
  intro:
    "Data Science and Computer Science undergraduate at Krea University with hands-on experience shipping a production Spring Boot engineering dashboard, a Next.js client website, and multi-agent automation pipelines.",
  github: "https://github.com/Pranavojhaa",
  email: "Pranav.ojha2006@gmail.com",
  phone: "+919217179182",
  location: "Greater Noida, India",
  website: "https://pranavojha.com/",
  resume: "/Pranav_Ojha_Resume_2026.docx",
};

export const about =
  "I like building software that connects messy inputs to reliable action: backend ingestion jobs, APIs, web products, AI retrieval systems, and automation workflows. My work spans Java, Python, and TypeScript, with a bias toward systems that are maintainable enough to run in production and clear enough for real users to operate.";

export const skills = [
  {
    title: "Languages",
    items: ["Java", "TypeScript", "Python", "C", "SQL", "Pyret", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "Spring Boot", "React", "Payload CMS", "LangChain", "Streamlit", "BeautifulSoup"],
  },
  {
    title: "Databases & Cloud",
    items: ["PostgreSQL", "Azure Cosmos DB", "Supabase", "SQL", "Vercel", "Cloudinary"],
  },
  {
    title: "AI & Automation",
    items: ["OpenAI API", "LLM Apps", "RAG", "Multi-Agent Orchestration", "Prompt Engineering", "n8n", "Apify"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "GitHub Enterprise API", "Azure DevOps API", "Playwright", "Linux"],
  },
  {
    title: "Systems",
    items: ["Backend Architecture", "REST APIs", "Data Pipelines", "Job Scheduling", "Web Scraping"],
  },
];

export const projects = [
  {
    id: "nova",
    title: "Nova",
    shortTitle: "Nova",
    summary:
      "Nova is a persistent personal delegate: tell it what you want taken care of, and its vision is to carry the task through, verify the outcome, and report back.",
    vision:
      "Nova is a persistent personal delegate: you describe an outcome in plain language, and Nova takes responsibility for seeing it through. It should plan the work, act only through capabilities you have authorised, wait for the world to respond, verify what happened, and tell you when it is done. Imagine asking it to coordinate a meeting with Rahul and getting a confirmed update back—not a list of instructions to follow yourself. The ambition is simple: make real work as easy to delegate as sending a message, without giving up the control needed to trust the result.",
    stack: ["TypeScript", "Postgres", "Exactly-Once Actions", "Bounded Authorization", "Vitest"],
    // Stack entries that describe how Nova is designed rather than a shipped feature.
    designConstraints: ["Exactly-Once Actions", "Bounded Authorization"],
    github: "https://github.com/Pranavojhaa/Nova",
    demo: "",
    highlight: "Featured product",
    featured: true,
    roadmap: {
      currentStage: 0,
      stages: ["In development", "Production", "Ready to use", "Landing page"],
    },
  },
  {
    id: "trout-house",
    title: "The Himalayan Trout House",
    shortTitle: "Trout House",
    hook: "A website for a real client. When the owners need a change, they text me and I hard-code it.",
    summary:
      "A client website built with Next.js and deployed on Vercel, with Cloudinary images, Resend enquiry emails, and Google Places reviews. The owners text me changes and I hard-code them.",
    problem:
      "The client needed a polished web presence with optimized media, an enquiry flow, and trustworthy social proof.",
    solution:
      "Built a Next.js React 19 site with Cloudinary image optimization, Resend enquiry emails, and Google Places review integration, deployed on Vercel. When the owners need a change, they text me and I hard-code it.",
    outcome:
      "Delivered a production client website that I keep up to date by hand as the owners' needs change.",
    stack: ["Next.js", "TypeScript", "Cloudinary", "Resend", "Vercel"],
    github: "",
    demo: "mailto:Pranav.ojha2006@gmail.com?subject=The%20Himalayan%20Trout%20House%20Project",
    highlight: "Client website",
    featured: true,
  },
  {
    id: "job-search",
    title: "Automated Job-Search & Application Platform",
    shortTitle: "Job search",
    hook: "Comparing job posts by hand is slow and inconsistent. This 51-node pipeline reads, ranks, and drafts the applications.",
    summary:
      "A private 51-node n8n automation that scrapes senior-role postings, scores opportunities with Claude agents, and generates tailored application materials.",
    problem:
      "Manual job search workflows are slow, repetitive, and hard to compare consistently across seniority, risk, fit, and application quality.",
    solution:
      "Built an n8n pipeline using Claude API, Apify, Supabase, and LaTeX to scrape postings, score them through five agent lenses plus risk analysis, and generate tailored resumes and cover letters.",
    outcome:
      "Converted a time-intensive search process into a ranked daily report with customized PDF application materials generated automatically.",
    stack: ["n8n", "Claude API", "Apify", "Supabase", "LaTeX", "Automation"],
    github: "",
    demo: "mailto:Pranav.ojha2006@gmail.com?subject=Automated%20Job%20Search%20Platform",
    highlight: "Multi-agent automation",
    featured: true,
  },
  {
    id: "second-brain",
    title: "AI Second Brain",
    shortTitle: "Second Brain",
    hook: "Notes get less useful as they pile up. This lets you ask an Obsidian vault questions in plain language.",
    summary:
      "A natural-language assistant for querying Obsidian notes with retrieval-augmented generation over custom markdown parsing and vector retrieval.",
    problem:
      "Personal notes become less useful as they grow unless they can be searched semantically and revisited through natural questions.",
    solution:
      "Built an assistant that parses markdown notes, embeds the knowledge base, retrieves relevant context, and answers through an OpenAI-powered RAG workflow.",
    outcome:
      "Turned a note vault into a conversational knowledge interface, showing practical LLM application design beyond a simple chat wrapper.",
    stack: ["Python", "OpenAI API", "RAG", "Vector Retrieval", "Markdown Parsing"],
    github: "https://github.com/Pranavojhaa/Second_Brain",
    demo: "mailto:Pranav.ojha2006@gmail.com?subject=AI%20Second%20Brain%20Demo",
    highlight: "Knowledge retrieval",
    featured: true,
  },
  {
    id: "webscrapeai",
    title: "WebscrapeAI",
    shortTitle: "WebscrapeAI",
    hook: "Web pages rarely agree on structure. This pipeline pulls the data out and gives it a shape you can reuse.",
    summary:
      "An intelligent web scraping pipeline that extracts structured web data and uses LangChain workflows to clean, summarize, and structure results.",
    problem:
      "Useful web data often arrives in inconsistent page structures, making simple scraping brittle and downstream processing messy.",
    solution:
      "Built a Python scraping workflow with BeautifulSoup and LangChain to extract page data, clean it, summarize it, and prepare structured outputs for reuse.",
    outcome:
      "Demonstrates practical automation thinking across extraction, transformation, and LLM-assisted structuring.",
    stack: ["Python", "LangChain", "BeautifulSoup", "Web Scraping", "LLM Workflows"],
    github: "https://github.com/Pranavojhaa/WebscrapeAI",
    demo: "https://webscrapeai.pranavojha.com/",
    highlight: "Scraping pipeline",
    featured: false,
  },
  {
    id: "smart-stock",
    title: "Smart Stock",
    shortTitle: "Smart Stock",
    hook: "A forecast isn’t a decision. Smart Stock turns 7‑day and 28‑day demand forecasts into reorder logic.",
    summary:
      "A Streamlit demand-forecasting tool that predicts 7-day and 28-day retail demand and turns forecasts into reorder logic.",
    problem:
      "Forecasting projects often stop at model outputs, while inventory teams need clear safety-stock and reorder decisions.",
    solution:
      "Built a multi-horizon forecasting app that benchmarks against baselines, validates outputs, and automates safety-stock and reorder calculations.",
    outcome:
      "Packages forecasting, business logic, and interface design into a usable end-to-end retail analytics product.",
    stack: ["Python", "Streamlit", "Forecasting", "Inventory Logic", "Testing"],
    github: "https://github.com/Pranavojhaa/Smart_stock",
    demo: "https://smartstock.pranavojha.com/",
    highlight: "Forecasting product",
    featured: false,
  },
];

export const experience = [
  {
    id: "metlife",
    shortTitle: "MetLife",
    hook: "I rebuilt the backend behind an engineering-metrics dashboard, and it now runs in production.",
    title: "Software Engineering Intern",
    org: "MetLife, US Technology",
    period: "May – Jun 2026",
    detail:
      "Worked on Codenoesis, a Spring Boot engineering-metrics dashboard for Copilot usage, commits, sprint velocity, and story points.",
    bullets: [
      "Rebuilt the legacy entity, job, and service layer into a maintainable Spring Boot backend pipeline now running in production.",
      "Designed four Azure Cosmos DB entities fed by a custom Excel streaming job with dedicated schedulers.",
      "Integrated Azure DevOps APIs for program-increment date refinement and migrated commit ingestion to GitHub Enterprise APIs.",
      "Applied TypeScript, Java, Spring Boot, Playwright, Gen AI programming, and multi-agent orchestration in production.",
    ],
    certificate: "/metlife-certificate.jpg",
  },
  {
    title: "Technical Head",
    org: "Sync Ideas",
    period: "2022-2023",
    detail:
      "Led Wix website development and management with a focus on user experience, visual design, digital marketing, and client relations.",
  },
  {
    title: "Technical Intern",
    org: "Marching Bots, Robotic Process Automation",
    period: "2023",
    detail:
      "Built and maintained the RPA document repository and knowledge-management system, improving search and library structure for project teams.",
  },
  {
    title: "Founder",
    org: "Krea Data Science Club",
    period: "2025-2026",
    detail:
      "Founded and lead the club, organizing technical talks, workshops, and events on data science and machine learning.",
  },
  {
    title: "Peer Tutor",
    org: "Krea Python for Data Science",
    period: "2025",
    detail:
      "Selected as the first peer tutor for the course while concurrently enrolled; supported students with Python and debugging.",
  },
];

export const education = [
  {
    school: "Krea University",
    detail: "B.Sc., Data Science and Computer Science",
    period: "2024-2026",
    location: "Sri City, Andhra Pradesh",
  },
  {
    school: "Jayshree Periwal International School",
    detail: "IB Diploma Programme, HL Computer Science, Physics, Math AA; IGCSE",
    period: "2024 | 2022",
    location: "Jaipur",
  },
];

export const contactCards = [
  {
    label: "Website",
    value: "pranavojha.com",
    href: "https://pranavojha.com/",
  },
  {
    label: "GitHub",
    value: "Pranavojhaa",
    href: "https://github.com/Pranavojhaa",
  },
  {
    label: "Email",
    value: "Pranav.ojha2006@gmail.com",
    href: "mailto:Pranav.ojha2006@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 9217179182",
    href: "tel:+919217179182",
  },
  {
    label: "Resume",
    value: "Download 2026 DOCX",
    href: "/Pranav_Ojha_Resume_2026.docx",
  },
];

// The Projects route map. Stops run in this order; each line is a skill that recurs across stops.
// `stops` maps a stop id to the evidence for that skill there (empty when the line name says it all).
export const routeStops = ["nova", "metlife", "trout-house", "job-search", "second-brain", "webscrapeai", "smart-stock"];

export const skillLines = [
  {
    id: "typescript",
    code: "TS",
    name: "TypeScript",
    stops: { nova: "", metlife: "", "trout-house": "Next.js" },
  },
  {
    id: "databases",
    code: "DB",
    name: "Databases",
    stops: { nova: "Postgres", metlife: "Azure Cosmos DB", "job-search": "Supabase" },
  },
  {
    id: "java",
    code: "JV",
    name: "Java and Spring Boot",
    stops: { metlife: "" },
  },
  {
    id: "pipelines",
    code: "PL",
    name: "Pipelines and automation",
    stops: {
      metlife: "Excel streaming job and schedulers",
      "job-search": "n8n and Apify",
      webscrapeai: "BeautifulSoup scraping",
    },
  },
  {
    id: "llm",
    code: "AI",
    name: "LLMs and agents",
    stops: {
      metlife: "Gen AI programming and multi-agent orchestration",
      "job-search": "Claude API agents",
      "second-brain": "OpenAI API and RAG",
      webscrapeai: "LangChain",
    },
  },
  {
    id: "python",
    code: "PY",
    name: "Python",
    stops: { "second-brain": "", webscrapeai: "", "smart-stock": "Streamlit" },
  },
  {
    id: "testing",
    code: "QA",
    name: "Testing",
    stops: { nova: "Vitest", metlife: "Playwright", "smart-stock": "" },
  },
];
