export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "Pranav Ojha",
  tagline: "Building intelligent systems for search, automation, and structured data.",
  intro:
    "Computer Science and Data Science student focused on AI applications, web scraping, and practical systems that make messy information easier to retrieve, process, and use.",
  github: "https://github.com/Pranavojhaa",
  email: "pranavojha456@gmail.com",
  resume: "/Pranav_Ojha_Resume.pdf",
};

export const about =
  "I like building tools that sit between raw information and useful output. My work usually combines AI, scraping, and lightweight interfaces so data is easier to search, clean, and act on.";

export const skills = [
  {
    title: "Languages",
    items: ["Python", "C", "SQL", "Java", "React"],
  },
  {
    title: "Libraries & Frameworks",
    items: ["BeautifulSoup", "LangChain", "OpenAI API"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Linux", "VS Code", "Jupyter Notebook"],
  },
  {
    title: "Concepts",
    items: ["Web Scraping", "LLM Applications", "Automation", "Data Processing"],
  },
];

export const projects = [
  {
    title: "SmartStock",
    summary:
      "A demand forecasting and inventory intelligence app that turns retail predictions into reorder decisions and stockout risk signals.",
    problem:
      "Forecasting projects often stop at model outputs, while the real business question is what inventory action to take next. Teams need demand estimates that translate directly into stocking decisions.",
    solution:
      "SmartStock predicts 7-day and 28-day retail demand, compares model performance against baselines, estimates safety stock, and converts forecasts into reorder quantities through an interactive Streamlit app.",
    outcome:
      "The project shows product thinking as much as data science skill by connecting feature engineering, supervised forecasting, business rules, testing, and a usable interface in one end-to-end workflow.",
    stack: ["Python", "Streamlit", "Forecasting", "Inventory Logic", "Testing"],
    github: "https://github.com/Pranavojhaa/Smart_stock",
    demo: "https://smartstock.pranavojha.com/",
    highlight: "Forecasting product",
    featured: true,
  },
  {
    title: "Second Brain",
    summary:
      "An AI note assistant for Obsidian that makes a markdown vault searchable through terminal and Streamlit chat.",
    problem:
      "Personal notes are useful only if they stay searchable and easy to revisit. Static folders and scattered markdown files make recall slow, especially when notes grow over time.",
    solution:
      "Second Brain loads notes from an Obsidian vault, embeds only new files, and lets users query their notes through a CLI or Streamlit interface using retrieval-backed responses.",
    outcome:
      "This project turns personal knowledge into something interactive and easier to reuse, while showing a practical application of LLMs, embeddings, and lightweight product design.",
    stack: ["Python", "OpenAI API", "LangChain", "Chroma", "Streamlit"],
    github: "https://github.com/Pranavojhaa/Second_Brain",
    demo: "mailto:pranavojha456@gmail.com?subject=AI%20Second%20Brain%20Demo",
    highlight: "Knowledge systems",
    featured: true,
  },
  {
    title: "WebscrapeAI",
    summary:
      "A scraping assistant that inspects page structure and falls back to Selenium when JavaScript-heavy pages need rendering.",
    problem:
      "Many websites expose useful information inconsistently. Some pages are easy to scrape statically, while others need rendering before tables, links, or content become usable.",
    solution:
      "WebscrapeAI inspects a page, reports what elements are available, scrapes content like tables or headings, and switches to Selenium when the page appears too dynamic for a simple request flow.",
    outcome:
      "The project demonstrates practical automation thinking: start simple, inspect the page, and escalate only when the content actually needs a heavier scraping path.",
    stack: ["Python", "BeautifulSoup", "Requests", "Selenium"],
    github: "https://github.com/Pranavojhaa/WebscrapeAI",
    demo: "mailto:pranavojha456@gmail.com?subject=WebscrapeAI%20Demo",
    highlight: "Automation pipeline",
    featured: false,
  },
  {
    title: "Floor is Lava",
    summary:
      "A 2D Pyret platformer with moving platforms, scoring logic, and restartable game-over states.",
    problem:
      "Games are a good way to test programming fundamentals because they require clean control flow, timing, collision rules, and user feedback all at once.",
    solution:
      "This project uses Pyret's Reactor model to build a scrolling platformer with jump controls, collision detection, score updates, lava failure states, and restart logic.",
    outcome:
      "It shows strong fundamentals in logic design and state updates while still feeling like a complete, playable project instead of a small isolated exercise.",
    stack: ["Pyret", "Reactors", "Game Logic", "Collision Detection"],
    github: "https://github.com/Pranavojhaa/Pyret_Game",
    demo: "mailto:pranavojha456@gmail.com?subject=Floor%20is%20Lava%20Demo",
    highlight: "Programming fundamentals",
  },
  {
    title: "Introduction to C Programming",
    summary:
      "A learning-in-public repository documenting early C and C++ practice and low-level programming fundamentals.",
    problem:
      "Building stronger systems intuition starts with understanding lower-level programming concepts, memory-aware thinking, and structured problem solving.",
    solution:
      "This repository collects early exercises and experiments in C and C++, giving a visible record of progress while building comfort with core language fundamentals.",
    outcome:
      "Even though it is intentionally simple, it supports the broader portfolio story by showing consistent learning habits and a willingness to build from fundamentals upward.",
    stack: ["C", "C++", "Foundations"],
    github: "https://github.com/Pranavojhaa/Introduction-to-C-Programming",
    demo: "mailto:pranavojha456@gmail.com?subject=Introduction%20to%20C%20Programming",
    highlight: "Learning in public",
  },
];

export const experience = [
  {
    title: "Representative",
    org: "Data Science Club, Krea University",
    detail:
      "Supported student-facing initiatives and community engagement around data science learning and collaboration.",
  },
  {
    title: "Peer Tutor",
    org: "Python for Data Science",
    detail:
      "Helped peers strengthen Python fundamentals for data work, problem-solving, and course assignments.",
  },
];

export const contactCards = [
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
    label: "Resume",
    value: "Download PDF",
    href: "/Pranav_Ojha_Resume.pdf",
  },
];
