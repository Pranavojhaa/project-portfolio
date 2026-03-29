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
import { about, experience, projects, skills } from "./data/portfolio";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const valueItems = [
    {
      title: "AI Applications",
      copy: "LLM-powered products designed to be useful, not just impressive in a demo.",
      icon: Bot,
    },
    {
      title: "Automation",
      copy: "Scraping and workflow systems that reduce manual effort and create structure.",
      icon: Wrench,
    },
    {
      title: "Data Products",
      copy: "Interfaces that turn messy information into something you can search, inspect, and act on.",
      icon: Database,
    },
    {
      title: "Information Retrieval",
      copy: "Systems that make notes, pages, and signals easier to query and reuse.",
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
                title="Structured around applied AI, automation, and data products."
                description="A horizontal view of the core areas behind the work."
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
              description="The main focus of the portfolio. Each project is presented as a structured build with clear purpose, technologies, and available links."
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
              description="A structured timeline of leadership, teaching, and technical community work."
            >
              <div className="grid gap-8 lg:max-w-3xl">
                {experience.map((item, index) => (
                  <ExperienceCard key={item.title} item={item} index={index} />
                ))}
              </div>
            </Section>
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
