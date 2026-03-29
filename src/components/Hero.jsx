import { motion } from "framer-motion";
import { ArrowRight, Braces, DatabaseZap, FileText, Github, ScanSearch } from "lucide-react";
import { hero, projects } from "../data/portfolio";

export function Hero() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <section id="top" className="px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-[rgba(255,255,255,0.02)] px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent/40 hover:bg-[rgba(59,130,246,0.08)]"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={hero.resume}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-transparent px-6 py-3 text-sm font-semibold text-slate transition hover:border-accentSoft/40 hover:bg-[rgba(139,92,246,0.08)] hover:text-ink"
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
          className="grid gap-4 rounded-[32px] border border-line bg-panel p-6 shadow-glow"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Search", value: "Notes, pages, and signals", icon: ScanSearch },
              { label: "Model", value: "Forecasts to decisions", icon: DatabaseZap },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[24px] border border-line bg-[rgba(255,255,255,0.02)] p-5">
                  <Icon size={18} className="text-accent" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-slate">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">{item.value}</p>
                </div>
              );
            })}
          </div>
          <div className="rounded-[24px] border border-line bg-[linear-gradient(135deg,rgba(59,130,246,0.10),rgba(139,92,246,0.08))] p-5">
            <div className="flex items-center gap-3">
              <Braces size={18} className="text-accentSoft" />
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate">
                Featured Builds
              </p>
            </div>
            <div className="mt-4 grid gap-3">
              {featuredProjects.map((project) => (
                <a
                  key={project.title}
                  href="#projects"
                  className="rounded-[20px] border border-line bg-[rgba(11,15,20,0.35)] p-4 transition hover:border-accent/30 hover:bg-[rgba(17,24,39,0.9)]"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-slate">{project.highlight}</p>
                  <h2 className="mt-2 text-lg font-semibold text-ink">{project.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate">{project.summary}</p>
                </a>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
