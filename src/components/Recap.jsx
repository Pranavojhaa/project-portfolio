import { Check, Copy, FileDown, Mail } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { about, contactCards, hero } from "../data/portfolio";
import { journey } from "../lib/journey";
import { lines, stops } from "../lib/route";
import { ExternalMark, externalProps } from "./ExternalMark";
import { LineBullet } from "./LineBullet";

function CopyEmailButton({ email }) {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status === "idle") {
      return undefined;
    }
    const timer = window.setTimeout(() => setStatus("idle"), 2400);
    return () => window.clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  const message =
    status === "copied" ? "Email address copied" : status === "failed" ? "Couldn't copy. Select the address below instead." : "";

  return (
    <>
      <button type="button" onClick={copy} className="btn btn-secondary">
        {status === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {status === "copied" ? "Copied" : "Copy email"}
      </button>
      <span role="status" aria-live="polite" className={status === "failed" ? "self-center text-[0.9375rem] text-muted" : "sr-only"}>
        {message}
      </span>
    </>
  );
}

// Which project stops this visitor has reached, from the session's stamps. Before hydration it simply counts the route.
function Progress() {
  const { visited } = useSyncExternalStore(journey.subscribe, journey.get, journey.getServer);
  const missed = stops.filter((stop) => !visited.includes(stop.id));

  if (!visited.length) {
    return null;
  }
  return (
    <p className="recap__progress">
      You’ve seen {visited.length} of {stops.length} stops.
      {missed.length ? (
        <>
          {" "}
          Still to see:{" "}
          {missed.map((stop, index) => (
            <span key={stop.id}>
              {index > 0 ? ", " : null}
              <a href={`#stop-${stop.id}`} className="text-link">
                {stop.shortTitle}
              </a>
            </span>
          ))}
          .
        </>
      ) : (
        " You rode the whole line."
      )}
    </p>
  );
}

// The end of the line: the whole case on one screen, then a way to get in touch.
export function Recap() {
  const [aboutLead] = about.split(/(?<=\.)\s+/);
  const byId = Object.fromEntries(stops.map((stop) => [stop.id, stop]));
  const nova = byId.nova;
  const [emailLocal, emailDomain] = hero.email.split("@");
  const direct = contactCards.filter((card) => ["Phone", "Website", "GitHub"].includes(card.label));

  return (
    <section id="contact" aria-labelledby="contact-title" className="recap px-4 sm:px-6">
      <div className="mx-auto max-w-page">
        <h2 id="contact-title" className="type-section">
          End of the line
        </h2>
        <p id="about" className="recap__intro">
          {aboutLead}
        </p>

        <div className="recap__cta">
          <a href={`mailto:${hero.email}`} className="btn btn-primary">
            <Mail size={16} aria-hidden="true" />
            Email me
          </a>
          <CopyEmailButton email={hero.email} />
          <a href={hero.resume} download className="btn btn-secondary">
            <FileDown size={16} aria-hidden="true" />
            Download résumé (DOCX)
          </a>
        </div>

        <ul className="recap__proof">
          <li>
            <strong>MetLife:</strong> rebuilt a backend pipeline now running in production.{" "}
            <a href={byId.metlife.certificate} target="_blank" rel="noreferrer" className="text-link inline-flex items-center gap-1">
              Certificate
              <ExternalMark size={13} />
            </a>
          </li>
          <li>
            <strong>{byId["trout-house"].shortTitle}:</strong> a production client website I keep up to date by hand.{" "}
            <a href="#stop-trout-house" className="text-link">
              The story
            </a>
          </li>
          <li>
            <strong>Live demos:</strong>{" "}
            {["webscrapeai", "smart-stock"].map((id, index) => (
              <span key={id}>
                {index > 0 ? " and " : null}
                <a href={byId[id].demo} {...externalProps(byId[id].demo)} className="text-link">
                  {byId[id].title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </span>
            ))}
            .
          </li>
        </ul>

        <p className="recap__now">
          Now building{" "}
          <a href="#stop-nova" className="text-link">
            {nova.title}
          </a>
          : {nova.roadmap.stages[nova.roadmap.currentStage].toLowerCase()}.
        </p>

        <ul className="recap__skills" aria-label="Skills on the route">
          {lines.map((line) => (
            <li key={line.id}>
              <LineBullet line={line} />
              {line.name}
            </li>
          ))}
        </ul>

        <Progress />

        <p className="recap__direct">
          <a href={`mailto:${hero.email}`} className="text-link [overflow-wrap:anywhere]">
            {emailLocal}
            <wbr />@{emailDomain}
          </a>
          {direct.map((card) => (
            <a key={card.label} href={card.href} {...externalProps(card.href)} className="text-link">
              {card.value}
              {card.href.startsWith("http") ? <ExternalMark size={13} /> : null}
            </a>
          ))}
        </p>
      </div>
    </section>
  );
}
