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

## Build for production

```bash
npm run build
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Framework preset: `Vite`
4. Build command: `npm run build`
5. Output directory: `dist`

## Notes

- Update the email and resume placeholders in `src/data/portfolio.js`.
- Replace the GitHub search links and demo mail links in `src/data/portfolio.js` with your exact project URLs when available.
