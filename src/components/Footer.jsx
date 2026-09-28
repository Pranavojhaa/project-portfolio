import { Github, Mail } from "lucide-react";
import { hero } from "../data/portfolio";
import { ExternalMark } from "./ExternalMark";

export function Footer() {
  return (
    <footer className="trunk-gutter px-4 pb-10 pt-8 sm:px-6">
      <div className="mx-auto flex max-w-page flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="type-heading text-lg">{hero.name}</p>
          <p className="mt-1 max-w-[52ch] text-[0.9375rem] text-muted">
            Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 text-[0.9375rem] font-medium text-muted">
          <li>
            <a
              href={hero.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-ink"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
              <ExternalMark size={14} />
            </a>
          </li>
          <li>
            <a
              href={hero.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-ink"
            >
              Website
              <ExternalMark size={14} />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${hero.email}`}
              className="inline-flex min-h-11 items-center gap-2 break-all transition-colors hover:text-ink"
            >
              <Mail size={16} aria-hidden="true" />
              {hero.email}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
