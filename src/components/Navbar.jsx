import { Github } from "lucide-react";
import { hero, navItems } from "../data/portfolio";
import { ExternalMark } from "./ExternalMark";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="trunk-gutter mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-6 px-4 sm:px-6 md:flex-nowrap">
        <a href="#top" className="type-heading inline-flex min-h-12 items-center text-lg">
          PO<span className="sr-only"> ({hero.name}), back to top</span>
        </a>
        <nav aria-label="Sections" className="order-last -mx-4 w-[calc(100%+2rem)] border-t border-rule md:order-none md:mx-0 md:w-auto md:border-0">
          <ul className="scrollbar-none flex overflow-x-auto px-2 md:gap-1 md:px-0">
            {navItems.map((item) => (
              <li key={item.label} className="shrink-0">
                <a
                  href={item.href}
                  className="draw-underline inline-flex min-h-11 items-center px-2 text-[0.9375rem] font-medium text-muted transition-colors [--u-bottom:0.55rem] after:!left-2 after:!right-2 hover:text-ink sm:px-3 sm:after:!left-3 sm:after:!right-3"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={hero.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-ink transition-colors hover:text-signal"
        >
          <Github size={16} aria-hidden="true" />
          GitHub
          <ExternalMark size={14} />
        </a>
      </div>
    </header>
  );
}
