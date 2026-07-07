import { motion } from "framer-motion";
import { Bot, Database, ScanLine, Wrench } from "lucide-react";
import { useState } from "react";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectOverlay } from "./components/ProjectOverlay";
import { Section } from "./components/Section";
import { SkillCard } from "./components/SkillCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { about, education, experience, projects, skills } from "./data/portfolio";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const valueItems = [
    {
      title: "Production Backends",
      copy: "Spring Boot, API integrations, scheduled ingestion jobs, and data models built for real operational use.",
      icon: Bot,
    },
    {
      title: "Automation",
      copy: "Workflow systems that scrape, score, summarize, and generate useful outputs with minimal manual effort.",
      icon: Wrench,
    },
    {
      title: "Data Products",
      copy: "Interfaces that turn messy information into searchable, inspectable, decision-ready tools.",
      icon: Database,
    },
    {
      title: "AI Systems",
      copy: "RAG, multi-agent orchestration, prompt engineering, and LLM application design for practical workflows.",
      icon: ScanLine,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-base text-ink">
      <div className="fixed inset-0 -z-10 bg-grid bg-[size:48px_48px] opacity-[0.035]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_14%_12%,rgba(59,130,246,0.14),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(139,92,246,0.12),transparent_20%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-40 bg-[linear-gradient(180deg,rgba(11,15,20,0.96),rgba(11,15,20,0))]" />

      <Navbar />
      <Hero />

      <main className="pb-20">
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[32px] border border-line bg-panel p-8 shadow-glow sm:p-10">
              <Section
                id="about"
                eyebrow="Focus"
                title="Structured around full-stack engineering, backend systems, and applied AI."
                description="A horizontal view of the technical areas behind the work."
                className="mb-0"
              >
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {valueItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45 }}
                        className="flex h-full flex-col rounded-[24px] border border-line bg-[rgba(255,255,255,0.02)] p-5"
                      >
                        <Icon size={20} className="text-accent" />
                        <p className="mt-4 text-lg font-semibold text-ink">{item.title}</p>
                        <p className="mt-3 text-sm leading-7 text-slate">{item.copy}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </Section>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-baseAlt/30 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <Section
              id="projects"
              eyebrow="Projects"
              title="Featured projects"
              description="Recent work across client websites, automation platforms, AI retrieval, scraping, and forecasting."
            >
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                    onOpen={setSelectedProject}
                  />
                ))}
              </div>
            </Section>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-16 xl:grid-cols-[0.75fr_1.25fr]">
            <Section
              id="about_story"
              eyebrow="About"
              title="A concise view of how I like to build."
              description=""
              className="max-w-2xl"
            >
              <div className="grid gap-4">
                <div className="rounded-[24px] border border-line bg-panel p-6 shadow-glow">
                  <p className="text-base leading-8 text-slate">{about}</p>
                </div>
              </div>
            </Section>

            <Section
              id="skills"
              eyebrow="Skills"
              title="Technical skills"
              description="Grouped for readability and shown as segmented blocks rather than plain lists."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {skills.map((skill, index) => (
                  <SkillCard key={skill.title} skill={skill} index={index} />
                ))}
              </div>
            </Section>
          </div>
        </section>

        <section className="border-y border-line bg-baseAlt/20 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <Section
              id="experience"
              eyebrow="Experience"
              title="Experience and achievements"
              description="Production engineering experience, client-facing technical work, and student leadership."
            >
              <div className="grid gap-8 lg:max-w-4xl">
                {experience.map((item, index) => (
                  <ExperienceCard key={item.title} item={item} index={index} />
                ))}
              </div>
            </Section>
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {education.map((item) => (
                <article key={item.school} className="rounded-[24px] border border-line bg-panel p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent">{item.period}</p>
                  <h3 className="mt-3 text-lg font-semibold text-ink">{item.school}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">{item.detail}</p>
                  <p className="mt-2 text-sm leading-7 text-slate">{item.location}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <ContactSection />
          </div>
        </section>
      </main>

      <Footer />
      <ProjectOverlay project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
