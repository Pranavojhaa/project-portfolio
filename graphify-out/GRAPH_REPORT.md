# Graph Report - project-portfolio  (2026-09-28)

## Corpus Check
- Corpus is ~15,621 words - fits in a single context window. You may not need a graph.

## Summary
- 191 nodes · 331 edges · 17 communities (10 shown, 7 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.82)
- Token cost: 180,595 input · 0 output

## Community Hubs (Navigation)
- Site Shell, SEO and Resume
- Main Line Train and Data
- Package Scripts and Deps
- Page Sections and Components
- Prerender and SEO Scripts
- Project Route and Journey UI
- Build Tooling Dev Deps
- OG Image Nova Card
- Hero Line Bundle and Tilt
- MetLife Internship Certificate
- OG Image Generator
- Row Wash (Unused)
- Overpass Font
- Theme Color Meta

## God Nodes (most connected - your core abstractions)
1. `ExternalMark()` - 13 edges
2. `App()` - 12 edges
3. `Pranav Ojha Portfolio (README)` - 12 edges
4. `react` - 10 edges
5. `Pranav Ojha Resume (PDF)` - 10 edges
6. `ProjectRoute()` - 9 edges
7. `lucide-react` - 7 edges
8. `ContactSection()` - 6 edges
9. `LineBullet()` - 6 edges
10. `RouteOverview()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `React (resume skill)` --semantically_similar_to--> `React`  [INFERRED] [semantically similar]
  public/Pranav_Ojha_Resume.pdf → README.md
- `Pranav Ojha Portfolio (README)` --conceptually_related_to--> `Pranav Ojha Resume (PDF)`  [INFERRED]
  README.md → public/Pranav_Ojha_Resume.pdf
- `Opt-in Scroll Reveal (window.__reveal, IntersectionObserver)` --semantically_similar_to--> `Framer Motion`  [INFERRED] [semantically similar]
  index.html → README.md
- `Pranav Ojha Resume (PDF)` --references--> `Canonical URL https://www.pranavojha.com/`  [INFERRED]
  public/Pranav_Ojha_Resume.pdf → index.html
- `Person JSON-LD Structured Data` --references--> `Krea University (B.Sc Data Science and Computer Science, 2024-28)`  [INFERRED]
  index.html → public/Pranav_Ojha_Resume.pdf

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Search and Social Preview Metadata Bundle** — index_canonical_url, index_open_graph_tags, index_twitter_card_tags, index_person_json_ld, public_robots_crawler_policy, readme_sitemap_xml, readme_og_image_generator [EXTRACTED 1.00]
- **Build, Prerender, SEO Check and Deploy Pipeline** — readme_server_side_prerender, readme_vite, readme_seo_check, readme_vercel_deployment [EXTRACTED 1.00]
- **LLM Application Projects** — public_pranav_ojha_resume_ai_second_brain, public_pranav_ojha_resume_webscrapeai, public_pranav_ojha_resume_openai_api, public_pranav_ojha_resume_langchain [INFERRED 0.75]
- **MetLife internship credential (intern, employer, project, signatory)** — public_metlife_certificate_pranav_ojha, public_metlife_certificate_metlife_global_capability_center, public_metlife_certificate_codenoesis, public_metlife_certificate_aparajeeta_sarmah [EXTRACTED 1.00]
- **Nova Reliability and Safety Guarantees** — public_og_image_nova_featured_product, public_og_image_exactly_once_actions, public_og_image_bounded_authorization, public_og_image_postgres_58_tests [EXTRACTED 1.00]

## Communities (17 total, 7 thin omitted)

### Community 0 - "Site Shell, SEO and Resume"
Cohesion: 0.09
Nodes (32): Canonical URL https://www.pranavojha.com/, index.html App Shell, Open Graph Meta Tags (og-image.png 1200x630), Person JSON-LD Structured Data, #root Mount Point + /src/main.jsx Entry, Opt-in Scroll Reveal (window.__reveal, IntersectionObserver), Twitter summary_large_image Card Tags, AI Second Brain (+24 more)

### Community 1 - "Main Line Train and Data"
Cohesion: 0.12
Nodes (21): easeInOut(), MainLine(), measureStations(), SECTIONS, shortTitle, about, education, experience (+13 more)

### Community 2 - "Package Scripts and Deps"
Cohesion: 0.09
Nodes (22): dependencies, framer-motion, lucide-react, react, react-dom, name, private, scripts (+14 more)

### Community 3 - "Page Sections and Components"
Cohesion: 0.24
Nodes (14): lucide-react, App(), ContactSection(), CopyEmailButton(), ExperienceCard(), ExternalMark(), externalProps(), Footer() (+6 more)

### Community 4 - "Prerender and SEO Scripts"
Cohesion: 0.10
Nodes (17): ref_node_assert, ref_node_fs, ref_node_path, ref_node_url, react, react-dom, indexPath, prerenderedHtml (+9 more)

### Community 5 - "Project Route and Journey UI"
Cohesion: 0.19
Nodes (15): FlapText(), JourneyBoard(), LineBullet(), NovaRoadmap(), NextStop(), ProjectRoute(), RouteOverview(), StopLinks() (+7 more)

### Community 6 - "Build Tooling Dev Deps"
Cohesion: 0.25
Nodes (8): devDependencies, autoprefixer, postcss, tailwindcss, @types/react, @types/react-dom, vite, @vitejs/plugin-react

### Community 7 - "OG Image Nova Card"
Cohesion: 0.38
Nodes (7): Open Graph Social Preview Image, Bounded Authorization, Dark Grid Theme with Lime Accent, Exactly-once Actions, Nova - Persistent Personal Delegation Agent, Postgres Backend with 58 Tests, Pranav Ojha Personal Brand (AI + Systems Builder)

### Community 8 - "Hero Line Bundle and Tilt"
Cohesion: 0.43
Nodes (5): Bundle(), bundlePaths(), LineBundle(), variants, usePointerTilt()

### Community 9 - "MetLife Internship Certificate"
Cohesion: 0.53
Nodes (6): MetLife Internship Completion Certificate, Aparajeeta Sarmah (AVP - Talent Acquisition), Codenoesis (Internship Project), MetLife Global Capability Center (Noida), MetLife Internship (May 5, 2026 - June 25, 2026), Pranav Ojha

## Knowledge Gaps
- **53 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+48 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 67 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Prerender and SEO Scripts` to `Main Line Train and Data`, `Package Scripts and Deps`, `Page Sections and Components`, `Project Route and Journey UI`, `Hero Line Bundle and Tilt`?**
  _High betweenness centrality (0.187) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Build Tooling Dev Deps` to `Package Scripts and Deps`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `Page Sections and Components` to `Package Scripts and Deps`, `Project Route and Journey UI`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Pranav Ojha Resume (PDF)` (e.g. with `Canonical URL https://www.pranavojha.com/` and `Pranav Ojha Portfolio (README)`) actually correct?**
  _`Pranav Ojha Resume (PDF)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _53 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Site Shell, SEO and Resume` be split into smaller, more focused modules?**
  _Cohesion score 0.0928030303030303 - nodes in this community are weakly interconnected._
- **Should `Main Line Train and Data` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._