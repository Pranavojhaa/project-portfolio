import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect } from "react";

export function ProjectOverlay({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-[rgba(4,8,20,0.82)] p-4 backdrop-blur-md sm:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/12 bg-[#101832] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.55)] sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate transition hover:border-white/20 hover:text-ink"
              aria-label="Close project details"
            >
              <X size={18} />
            </button>

            <div className="pr-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                {project.highlight}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
                {project.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate">{project.summary}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/82"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-[24px] border border-white/12 bg-white/[0.045] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Problem</p>
                <p className="mt-3 text-sm leading-7 text-slate">{project.problem}</p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/[0.045] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">What It Does</p>
                <p className="mt-3 text-sm leading-7 text-slate">{project.solution}</p>
              </div>
            </div>

            <div className="mt-5 rounded-[24px] border border-white/12 bg-white/[0.045] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Why It Matters</p>
              <p className="mt-3 text-sm leading-7 text-slate">{project.outcome}</p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-base transition hover:translate-y-[-1px] hover:bg-white"
              >
                <Github size={16} />
                View Repository
              </a>
              <a
                href={project.demo}
                target={project.demo.startsWith("http") ? "_blank" : undefined}
                rel={project.demo.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-ink transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <ExternalLink size={16} />
                Demo / Contact
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
