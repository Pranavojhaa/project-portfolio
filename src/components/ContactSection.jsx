import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contactCards, hero } from "../data/portfolio";
import { Section } from "./Section";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Everything important, in one place."
      description="Live demos, GitHub, the latest resume, and a direct way to get in touch."
    >
      <div className="rounded-[32px] border border-line bg-[linear-gradient(135deg,rgba(59,130,246,0.12),rgba(139,92,246,0.10))] p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Open to opportunities</p>
          <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Looking for internships, AI product work, and systems-heavy builder roles.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate sm:text-base">
            Especially interested in applied AI, developer tools, automation, and data products
            that turn raw information into something interactive and useful.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={hero.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-base transition hover:translate-y-[-1px] hover:bg-white"
            >
              Explore GitHub
              <ArrowUpRight size={16} />
            </a>
            <a
              href={`mailto:${hero.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-[rgba(255,255,255,0.03)] px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent/40 hover:bg-[rgba(255,255,255,0.06)]"
            >
              Send an Email
            </a>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card, index) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group rounded-[24px] border border-line bg-[rgba(17,24,39,0.75)] p-5 text-left transition hover:border-accent/30 hover:bg-[rgba(17,24,39,0.9)]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate">{card.label}</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <p className="text-base font-medium text-ink">{card.value}</p>
                <ArrowUpRight size={18} className="text-slate transition group-hover:text-ink" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
