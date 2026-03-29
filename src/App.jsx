import { motion } from "framer-motion";
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

  return (
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#0a1230_0%,#101937_45%,#0b1430_100%)] text-ink">
      <div className="fixed inset-0 -z-10 bg-grid bg-[size:48px_48px] opacity-[0.035]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_14%_12%,rgba(137,150,255,0.26),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(47,243,199,0.12),transparent_20%),radial-gradient(circle_at_50%_58%,rgba(255,255,255,0.06),transparent_28%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-40 bg-[linear-gradient(180deg,rgba(10,18,48,0.92),rgba(10,18,48,0))]" />

      <Navbar />
      <Hero />

      <main className="px-4 pb-16 sm:px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-24">
          <Section
            id="about"
            eyebrow="About"
            title="Building tools where AI meets usable systems."
            description={about}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="grid gap-4 md:grid-cols-3"
            >
              {[
                ["AI Applications", "LLM-powered products designed to be useful, not just impressive in a demo."],
                ["Automation", "Scraping and workflow systems that reduce manual effort and create structure."],
                ["Data Products", "Interfaces that turn messy information into something you can search, inspect, and act on."],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.025] p-5"
                >
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate">{copy}</p>
                </div>
              ))}
            </motion.div>
          </Section>

          <Section
            id="projects"
            eyebrow="Projects"
            title="Projects that feel like products."
            description="Each one is built to show working systems, not just isolated code: clear purpose, thoughtful implementation, and an obvious reason to exist."
          >
            <div className="grid gap-6 lg:grid-cols-2">
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

          <Section
            id="skills"
            eyebrow="Skills"
            title="The technical stack behind the work."
            description="A compact snapshot of the languages, frameworks, tools, and concepts showing up across the projects."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {skills.map((skill, index) => (
                <SkillCard key={skill.title} skill={skill} index={index} />
              ))}
            </div>
          </Section>

          <Section
            id="experience"
            eyebrow="Experience"
            title="Leadership, teaching, and community."
            description="A short view of the places where I have built communities, helped other students level up, and taken ownership outside project work."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {experience.map((item, index) => (
                <ExperienceCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </Section>

          <ContactSection />
        </div>
      </main>

      <Footer />
      <ProjectOverlay project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
