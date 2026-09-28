import { FileDown } from "lucide-react";
import { education, hero } from "../data/portfolio";
import { LineBundle } from "./LineBundle";

export function Hero() {
  const nameWords = hero.name.split(" ");
  const [university] = education;

  return (
    <section id="top" aria-labelledby="hero-name" className="px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-20">
      <div className="mx-auto grid max-w-page lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-10">
        <div className="hero-copy min-w-0">
          <h1 id="hero-name" className="type-name text-ink">
            {nameWords.map((word, index) => (
              <span key={word}>
                {index > 0 ? " " : null}
                <span className="hero-word">
                  <span style={{ "--i": index }}>{word}</span>
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-[34ch] text-[1.375rem] font-semibold leading-snug sm:text-[1.875rem]">
            I rebuilt a backend that now runs in production at MetLife. I keep a client’s website current by hand.
            And I’m building Nova, a personal delegate that is still in development.
          </p>
          <p className="mt-5 max-w-[60ch] text-muted">
            {university.detail} at {university.school}, {university.period.replace("-", "–")}. Based in {hero.location}.
          </p>

          <p className="mt-8 font-semibold">Two ways through:</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a href="#glance" className="btn btn-primary">
              Scan in 30 seconds
            </a>
            <a href="#projects" className="btn btn-secondary">
              Ride the line
            </a>
          </div>
          <p className="mt-4 text-[0.9375rem] text-muted">
            Or just scroll: everything is on this page.{" "}
            <a href={hero.resume} download className="text-link inline-flex items-center gap-1">
              <FileDown size={15} aria-hidden="true" />
              Download résumé (DOCX)
            </a>
          </p>
        </div>

        <LineBundle />
      </div>
    </section>
  );
}
