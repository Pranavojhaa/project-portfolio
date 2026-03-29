import { motion } from "framer-motion";
import { ArrowRight, FileText, Github } from "lucide-react";
import { hero, projects } from "../data/portfolio";

export function Hero() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <section id="top" className="px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-accent"
          >
            AI + Systems Builder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.04 }}
            className="max-w-4xl font-display text-5xl font-semibold tracking-[-0.07em] text-ink sm:text-6xl lg:text-7xl"
          >
            {hero.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-6 max-w-3xl text-2xl font-medium tracking-[-0.04em] text-ink sm:text-3xl"
          >
            {hero.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate sm:text-lg"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-base transition hover:translate-y-[-1px] hover:bg-white"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={hero.github}
              target="_blank"
              rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/75 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={hero.resume}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-transparent px-6 py-3 text-sm font-semibold text-slate transition hover:bg-white/60 hover:text-ink"
            >
              <FileText size={16} />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="rounded-[32px] border border-line bg-white/72 p-6 shadow-glow backdrop-blur-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
            Live projects
          </p>
          <div className="mt-6 space-y-4">
            {featuredProjects.map((project) => (
              <a
                key={project.title}
                href="#projects"
                className="block rounded-[24px] border border-line bg-white/70 p-5 transition hover:bg-white"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">{project.highlight}</p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink">{project.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate">{project.summary}</p>
              </a>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
