import { motion } from "framer-motion";

export function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="rounded-[24px] border border-line bg-panel p-5"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{skill.title}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm text-slate"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
