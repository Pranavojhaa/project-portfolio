import { Github } from "lucide-react";
import { hero, navItems } from "../data/portfolio";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 mx-auto mt-4 w-[min(1120px,calc(100%-1.25rem))]">
      <div className="flex items-center justify-between rounded-full border border-line bg-[rgba(17,24,39,0.82)] px-4 py-3 shadow-glow backdrop-blur-xl sm:px-6">
        <a href="#top" className="font-display text-sm font-semibold tracking-[0.16em] text-ink">
          PO
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={hero.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm text-ink transition hover:border-accent/40 hover:bg-[rgba(59,130,246,0.08)]"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    </header>
  );
}
