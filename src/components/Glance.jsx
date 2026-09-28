import { contactCards, education, hero, skills } from "../data/portfolio";
import { evidenceFor, lines, stops } from "../lib/route";
import { ExternalMark, externalProps } from "./ExternalMark";
import { LineBullet } from "./LineBullet";
import { SkillGroup } from "./SkillCard";

const range = (period) => period.replace(/(\d)\s*[-–]\s*(\d)/g, "$1–$2");

function EvidenceLinks({ stop }) {
  return evidenceFor(stop).map((link) => (
    <a key={link.kind} href={link.href} {...externalProps(link.href)} className="timetable__proof">
      {link.kind === "live"
        ? "Live demo"
        : link.kind === "code"
          ? "Code"
          : link.kind === "document"
            ? "Certificate"
            : stop.github
              ? "Demo on request"
              : "Private: ask me"}
      {link.href.startsWith("http") || link.href.endsWith(".jpg") ? <ExternalMark size={13} /> : null}
      <span className="sr-only"> for {stop.title}</span>
    </a>
  ));
}

// The quick scan: the whole picture as a timetable, every line linked to its evidence and its full story.
export function Glance() {
  const nova = stops.find((stop) => stop.id === "nova");
  const metlife = stops.find((stop) => stop.kind === "role");
  const built = stops.filter((stop) => stop.kind === "project" && stop.id !== "nova");
  const [university] = education;
  const quickLinks = contactCards.filter((card) => ["Email", "GitHub", "Resume"].includes(card.label));

  return (
    <section id="glance" aria-labelledby="glance-title" className="px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
      <div className="timetable mx-auto max-w-page">
        <h2 id="glance-title" className="type-section">
          The 30-second version
        </h2>
        <p className="mt-3 max-w-[62ch] text-muted">
          Everything on one card. Each line links to the proof and to the full story further down.
        </p>

        <dl className="timetable__rows">
          <div className="timetable__row">
            <dt>Now building</dt>
            <dd>
              <a href="#stop-nova" className="timetable__title">
                {nova.title}
              </a>
              , a persistent personal delegate.{" "}
              <strong>
                Stage {nova.roadmap.currentStage + 1} of {nova.roadmap.stages.length}: {nova.roadmap.stages[nova.roadmap.currentStage]}.
              </strong>
              <span className="timetable__links">
                <EvidenceLinks stop={nova} />
              </span>
            </dd>
          </div>

          <div className="timetable__row">
            <dt>In production</dt>
            <dd>
              <a href="#stop-metlife" className="timetable__title">
                {metlife.title}, {metlife.org}
              </a>{" "}
              <span className="text-muted">({range(metlife.period)})</span>. Rebuilt a backend pipeline now running in production.
              <span className="timetable__links">
                <EvidenceLinks stop={metlife} />
              </span>
            </dd>
          </div>

          <div className="timetable__row">
            <dt>Built</dt>
            <dd>
              <ul className="timetable__list">
                {built.map((stop) => (
                  <li key={stop.id}>
                    <a href={`#stop-${stop.id}`} className="timetable__title">
                      {stop.title}
                    </a>
                    <span className="text-muted"> {stop.highlight.toLowerCase()}</span>
                    <span className="timetable__links">
                      <EvidenceLinks stop={stop} />
                    </span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          <div className="timetable__row">
            <dt>Skills</dt>
            <dd>
              <ul className="timetable__skills">
                {lines.map((line) => (
                  <li key={line.id}>
                    <LineBullet line={line} />
                    {line.name}
                    <span className="text-muted">
                      {" "}
                      {line.count} {line.count === 1 ? "stop" : "stops"}
                    </span>
                  </li>
                ))}
              </ul>
              <details className="timetable__toolkit">
                <summary>Full toolkit</summary>
                <dl className="mt-3 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                  {skills.map((skill) => (
                    <SkillGroup key={skill.title} skill={skill} />
                  ))}
                </dl>
              </details>
            </dd>
          </div>

          <div className="timetable__row">
            <dt>Education</dt>
            <dd>
              {university.detail}, {university.school} <span className="text-muted">({range(university.period)})</span>
            </dd>
          </div>

          <div className="timetable__row">
            <dt>Contact</dt>
            <dd className="timetable__links timetable__links--contact">
              {quickLinks.map((card) => (
                <a key={card.label} href={card.href} {...externalProps(card.href)} className="timetable__proof">
                  {card.label === "Resume" ? "Résumé (DOCX)" : card.label === "Email" ? hero.email : "GitHub"}
                  {card.href.startsWith("http") ? <ExternalMark size={13} /> : null}
                </a>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
