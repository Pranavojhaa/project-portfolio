import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, description, children, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative scroll-mt-24 ${className}`}
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-accent">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate sm:text-base">{description}</p>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}
