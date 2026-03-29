import { Github, Mail } from "lucide-react";
import { hero } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold text-ink">{hero.name}</p>
          <p className="mt-1 text-sm text-slate">
            Building AI applications, automation systems, and sharp little products for real use cases.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate">
          <a
            href={hero.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-ink"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={`mailto:${hero.email}`}
            className="inline-flex items-center gap-2 transition hover:text-ink"
          >
            <Mail size={16} />
            {hero.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
