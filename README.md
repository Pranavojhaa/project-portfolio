# Pranav Ojha Portfolio

Modern personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## File structure

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components
    │   ├── ExperienceCard.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Navbar.jsx
    │   ├── ProjectCard.jsx
    │   ├── Section.jsx
    │   ├── SkillCard.jsx
    │   └── TypeTagline.jsx
    └── data
        └── portfolio.js
```

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the local Vite URL shown in the terminal.

## Build and search previews

```bash
npm run build
npm run seo:check
```

The production build server-renders the portfolio into `dist/index.html` before Vite bundles the client assets. This keeps the portfolio text available in the initial HTML while React hydrates the page in the browser. The build includes the canonical URL, Open Graph and Twitter tags, Person JSON-LD, `robots.txt`, `sitemap.xml`, and the 1200×630 social image.

Regenerate the social preview image with Pillow installed:

```bash
python3 scripts/generate-og-image.py
```

This project is currently served by Vercel. From the project root, deploy it with `npx vercel --prod`; the first CLI run may ask you to link this directory to the existing Vercel project. The build output is `dist`.
