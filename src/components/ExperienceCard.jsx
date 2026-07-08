import { motion } from "framer-motion";

export function ExperienceCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="relative pl-8"
    >
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_rgba(59,130,246,0.45)]" />
      <span className="absolute left-[5px] top-6 h-[calc(100%-0.25rem)] w-px bg-line" />
      <div className="rounded-[24px] border border-line bg-panel p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{item.org}</p>
          {item.period ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate">{item.period}</p>
          ) : null}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate">{item.detail}</p>
        {item.bullets?.length ? (
          <ul className="mt-4 grid gap-3 pl-5 text-sm leading-7 text-slate">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        {item.certificate ? (
          <a
            href={item.certificate}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent transition hover:opacity-80"
          >
            View certificate
            <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
