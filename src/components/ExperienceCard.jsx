import { motion } from "framer-motion";

export function ExperienceCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="rounded-[24px] border border-line bg-white/72 p-5 shadow-glow"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{item.org}</p>
      <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{item.detail}</p>
    </motion.article>
  );
}
