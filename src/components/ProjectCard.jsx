import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      onClick={() => onOpen(project)}
      className={`group relative cursor-pointer overflow-hidden rounded-[28px] border p-6 backdrop-blur-xl transition ${
        project.featured
          ? "border-accent/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,247,255,0.92))] shadow-glow"
          : "border-line bg-white/72"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(49,94,251,0.10),transparent_36%)] opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              {project.highlight}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight className="mt-1 text-slate transition group-hover:text-ink" size={18} />
        </div>

        <p className="mt-5 text-sm leading-7 text-slate">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-slate"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-sm font-medium text-ink transition hover:text-accent"
          >
            Open Case Study
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate transition hover:text-ink"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
