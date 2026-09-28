import { evidenceFor, stops } from "../lib/route";
import { ExternalMark, externalProps } from "./ExternalMark";

const KIND = { live: "Live", code: "Code", document: "Document", request: "On request" };

// The claim each stop makes, in the data's own words: the role's production bullet, Nova's stage, a project's result.
function claimFor(stop) {
  if (stop.kind === "role") {
    return stop.bullets[0];
  }
  if (stop.roadmap) {
    const { currentStage, stages } = stop.roadmap;
    return `Stage ${currentStage + 1} of ${stages.length}: ${stages[currentStage]}.`;
  }
  return stop.outcome;
}

// Car 3: a ledger of what each stop claims and how a visitor can check it themselves.
export function ProofLedger() {
  return (
    <ol className="ledger">
      {stops.map((stop) => (
        <li key={stop.id} className="ledger__row">
          <h3 className="ledger__title">
            <a href={`#stop-${stop.id}`}>{stop.kind === "role" ? `${stop.title} at MetLife` : stop.title}</a>
          </h3>
          <p className="ledger__claim">{claimFor(stop)}</p>
          <ul className="ledger__evidence" aria-label={`How to check ${stop.shortTitle}`}>
            {evidenceFor(stop).map((link) => (
              <li key={link.kind}>
                <span className={`ledger__kind ledger__kind--${link.kind}`}>{KIND[link.kind]}</span>
                <a href={link.href} {...externalProps(link.href)} className="text-link inline-flex min-h-11 items-center gap-1">
                  {link.label}
                  {link.href.startsWith("http") || link.href.endsWith(".jpg") ? <ExternalMark size={14} /> : null}
                  <span className="sr-only">: {stop.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
