import { motion } from "framer-motion";

export function ProjectFilters({ filters, activeFilter, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {filters.map((filter) => {
        const active = activeFilter === filter;

        return (
          <motion.button
            key={filter}
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active
                ? "rotate-[-1deg] border-accentHot/35 bg-[linear-gradient(135deg,rgba(110,123,255,0.16),rgba(255,107,159,0.14),rgba(255,200,87,0.12))] text-ink"
                : "border-white/10 bg-white/[0.04] text-slate hover:-translate-y-0.5 hover:border-accent/25 hover:text-ink"
            }`}
          >
            {filter}
          </motion.button>
        );
      })}
    </div>
  );
}
