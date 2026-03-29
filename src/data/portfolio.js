export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "Pranav Ojha",
  tagline: "Building AI tools that scrape, search, forecast, and actually do something useful.",
  intro:
    "Computer Science and Data Science student building practical AI systems across web scraping, knowledge retrieval, and forecasting, with a bias for tools that feel useful the moment you open them.",
  github: "https://github.com/Pranavojhaa",
  email: "pranavojha456@gmail.com",
  website: "https://pranavojha.com/",
  resume: "/Pranav_Ojha_Resume.pdf",
};

export const about =
  "I like building software that sits between raw information and clear action. Most of my work blends AI, automation, and lightweight product design so notes become searchable, websites become structured data, and forecasts become decisions instead of charts.";

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
      "A forecasting app that turns retail demand predictions into reorder decisions, stockout signals, and inventory actions.",
    problem:
      "Forecasting projects often stop at model outputs, while the real business question is what inventory action to take next. Teams need demand estimates that translate directly into stocking decisions.",
    solution:
      "SmartStock predicts 7-day and 28-day retail demand, compares model performance against baselines, estimates safety stock, and converts forecasts into reorder quantities through an interactive Streamlit app.",
    outcome:
      "It reads more like a compact analytics product than a notebook project, combining modeling, business logic, tests, and a Streamlit UI into one usable system.",
    stack: ["Python", "Streamlit", "Forecasting", "Inventory Logic", "Testing"],
    github: "https://github.com/Pranavojhaa/Smart_stock",
    demo: "https://smartstock.pranavojha.com/",
    highlight: "Forecasting product",
    featured: true,
  },
  {
    title: "AI Second Brain",
    summary:
      "An Obsidian-powered knowledge assistant that lets you query markdown notes in natural language through CLI and Streamlit chat.",
    problem:
      "Personal notes are useful only if they stay searchable and easy to revisit. Static folders and scattered markdown files make recall slow, especially when notes grow over time.",
    solution:
      "Second Brain loads notes from an Obsidian vault, embeds only new files, and lets users query their notes through a CLI or Streamlit interface using retrieval-backed responses.",
    outcome:
      "It turns personal knowledge into a system you can actually talk to, showing how retrieval and LLM workflows can make notes feel more like an interface than a folder.",
    stack: ["Python", "OpenAI API", "LangChain", "Chroma", "Streamlit"],
    github: "https://github.com/Pranavojhaa/Second_Brain",
    demo: "mailto:pranavojha456@gmail.com?subject=AI%20Second%20Brain%20Demo",
    highlight: "Knowledge systems",
    featured: true,
  },
  {
    title: "WebscrapeAI",
    summary:
      "A web scraping pipeline that inspects page structure, extracts useful elements, and switches to Selenium when static scraping is not enough.",
    problem:
      "Many websites expose useful information inconsistently. Some pages are easy to scrape statically, while others need rendering before tables, links, or content become usable.",
    solution:
      "WebscrapeAI inspects a page, reports what elements are available, scrapes content like tables or headings, and switches to Selenium when the page appears too dynamic for a simple request flow.",
    outcome:
      "It shows practical automation thinking: inspect first, scrape intelligently, and escalate to a heavier rendering path only when the page actually needs it.",
    stack: ["Python", "BeautifulSoup", "Requests", "Selenium"],
    github: "https://github.com/Pranavojhaa/WebscrapeAI",
    demo: "https://webscrapeai.pranavojha.com/",
    highlight: "Automation pipeline",
    featured: false,
  },
  {
    title: "Floor is Lava",
    summary:
      "A Pyret platformer with moving platforms, continuous motion, score logic, and restartable failure states.",
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
      "A learning-in-public repo documenting early C and C++ practice while building lower-level programming fundamentals.",
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
    title: "Founder",
    org: "Krea Data Science Club",
    detail:
      "Founded the club and help organize technical discussions, workshops, and events around data science and machine learning.",
  },
  {
    title: "Peer Tutor",
    org: "Python for Data Science Forum",
    detail:
      "Selected as the first peer tutor for the course while taking it, supporting students with Python concepts, debugging, and coursework.",
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
    label: "Resume",
    value: "Download PDF",
    href: "/Pranav_Ojha_Resume.pdf",
  },
];
