import { ExternalMark } from "./ExternalMark";

// One dated entry on the timeline: a role or a school.
export function ExperienceCard({ item }) {
  return (
    <li className="timeline__entry">
      <p className="timeline__period">{item.period.replace(/(\d)\s*[-–]\s*(\d)/, "$1–$2")}</p>
      <article className="min-w-0">
        <p className="timeline__kind">{item.kind}</p>
        <h3 className="type-heading text-[1.3125rem] sm:text-[1.5rem]">{item.title}</h3>
        <p className="mt-0.5 font-semibold text-ink">{item.org}</p>
        <p className="mt-2 max-w-[62ch] text-muted">{item.detail}</p>
        {item.id || item.certificate ? (
          <div className="mt-2 flex flex-wrap gap-x-6">
            {item.id ? (
              <a href={`#stop-${item.id}`} className="text-link inline-flex min-h-11 items-center text-[0.9375rem]">
                Read what I built there
              </a>
            ) : null}
            {item.certificate ? (
              <a
                href={item.certificate}
                target="_blank"
                rel="noreferrer"
                className="text-link inline-flex min-h-11 items-center gap-1 text-[0.9375rem]"
              >
                View certificate
                <ExternalMark size={14} />
              </a>
            ) : null}
          </div>
        ) : null}
      </article>
    </li>
  );
}
