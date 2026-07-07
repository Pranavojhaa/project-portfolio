export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "Pranav Ojha",
  tagline: "Building production-ready web, backend, and AI/data systems end to end.",
  intro:
    "Data Science and Computer Science undergraduate at Krea University with hands-on experience shipping a production Spring Boot engineering dashboard, full-stack Next.js client platforms, and multi-agent automation pipelines.",
  github: "https://github.com/Pranavojhaa",
  email: "pranavojha456@gmail.com",
  phone: "+919717360003",
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
    title: "The Himalayan Trout House",
    summary:
      "A full-stack client website built with Next.js, Payload CMS, Supabase, Cloudinary, Resend, Google Places reviews, and Vercel deployment.",
    problem:
      "The client needed a polished web presence that could stay maintainable after handoff, with content editing, optimized media, enquiry flow, and trustworthy social proof.",
    solution:
      "Built a Next.js React 19 site backed by a headless Payload CMS on PostgreSQL/Supabase, Cloudinary image optimization, Resend enquiry emails, and Google Places review integration.",
    outcome:
      "Delivered a production client platform that combines a modern frontend with self-service CMS workflows and deployment-ready infrastructure.",
    stack: ["Next.js", "TypeScript", "Payload CMS", "Supabase", "Cloudinary", "Resend", "Vercel"],
    github: "",
    demo: "mailto:pranavojha456@gmail.com?subject=The%20Himalayan%20Trout%20House%20Project",
    highlight: "Client website",
    featured: true,
  },
  {
    title: "Automated Job-Search & Application Platform",
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
    demo: "mailto:pranavojha456@gmail.com?subject=Automated%20Job%20Search%20Platform",
    highlight: "Multi-agent automation",
    featured: true,
  },
  {
    title: "AI Second Brain",
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
    demo: "mailto:pranavojha456@gmail.com?subject=AI%20Second%20Brain%20Demo",
    highlight: "Knowledge retrieval",
    featured: true,
  },
  {
    title: "WebscrapeAI",
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
    title: "Smart Stock",
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
    title: "Software Engineering Intern",
    org: "MetLife, US Technology",
    period: "2026",
    detail:
      "Worked on Codenoesis, a Spring Boot engineering-metrics dashboard for Copilot usage, commits, sprint velocity, and story points.",
    bullets: [
      "Rebuilt the legacy entity, job, and service layer into a maintainable Spring Boot backend pipeline now running in production.",
      "Designed four Azure Cosmos DB entities fed by a custom Excel streaming job with dedicated schedulers.",
      "Integrated Azure DevOps APIs for program-increment date refinement and migrated commit ingestion to GitHub Enterprise APIs.",
      "Applied TypeScript, Java, Spring Boot, Playwright, Gen AI programming, and multi-agent orchestration in production.",
    ],
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
    period: "2025-Present",
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
    period: "2024-2028",
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
    value: "pranavojha456@gmail.com",
    href: "mailto:pranavojha456@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 9717360003",
    href: "tel:+919717360003",
  },
  {
    label: "Resume",
    value: "Download 2026 DOCX",
    href: "/Pranav_Ojha_Resume_2026.docx",
  },
];
