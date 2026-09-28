import { useSyncExternalStore } from "react";
import { skills } from "../data/portfolio";
import { journey } from "../lib/journey";
import { lines, stops } from "../lib/route";
import { LineBullet } from "./LineBullet";
import { SkillGroup } from "./SkillCard";

const stopTitle = Object.fromEntries(stops.map((stop) => [stop.id, stop.shortTitle]));

// Car 1: every skill line, where it stops and what it meant there, then the full toolkit as plain text.
export function SkillsCarriage() {
  const { collected } = useSyncExternalStore(journey.subscribe, journey.get, journey.getServer);

  return (
    <>
      <ul className="skill-lines">
        {lines.map((line) => {
          const onBoard = collected.includes(line.id);
          return (
            <li key={line.id} className={`skill-line ${onBoard ? "is-on-board" : ""}`}>
              <LineBullet line={line} />
              <div className="min-w-0">
                <h3 className="skill-line__name">
                  {line.name}
                  {onBoard ? <span className="skill-line__tag">On board</span> : null}
                </h3>
                <p className="skill-line__stops">
                  {Object.entries(line.stops).map(([id, via], index) => (
                    <span key={id}>
                      {index > 0 ? ", " : null}
                      <a href={`#stop-${id}`}>{stopTitle[id]}</a>
                      {via ? <span className="text-muted"> ({via})</span> : null}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <h3 className="type-heading mt-12 text-[1.375rem]">Full toolkit</h3>
      <dl className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {skills.map((skill) => (
          <SkillGroup key={skill.title} skill={skill} />
        ))}
      </dl>
    </>
  );
}
