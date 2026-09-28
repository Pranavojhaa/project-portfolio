import { ArrowDown, Github, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { routeStops, skillLines } from "../data/portfolio";
import { lineColor, lines, stops } from "../lib/route";
import { stationIndex, stations } from "../lib/stations";
import { ExternalMark } from "./ExternalMark";
import { LineBullet } from "./LineBullet";
import { NovaRoadmap } from "./NovaRoadmap";
import { usePointerTilt } from "./usePointerTilt";

export function ProjectRoute() {
  const [activeLine, setActiveLine] = useState(null);
  const dim = (line) => (activeLine && activeLine !== line.id ? "is-dim" : "");
  const toggle = (id) => setActiveLine((current) => (current === id ? null : id));

  return (
    <>
      <RouteOverview activeLine={activeLine} dim={dim} onToggle={toggle} />
      <ol className="route" style={{ "--lanes": lines.length }}>
        {stops.map((stop, index) => (
          <li key={stop.id} id={`stop-${stop.id}`} className="stop" data-stop={stop.id}>
            <StopRails index={index} dim={dim} />
            <article className="stop__body" aria-labelledby={`stop-${stop.id}-title`}>
              <StopStory stop={stop} sign={<StopSign stop={stop} />} />
              <StopLinks stop={stop} />
              <NextStop index={index} />
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}

const LANE = 36;

// When a line is chosen, a train runs along it on the map, pausing at each stop. With reduced motion it simply
// waits at the line's first stop.
function useLineTrain(activeLine) {
  const wrapRef = useRef(null);
  const trainRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const train = trainRef.current;
    if (!wrap || !train) {
      return;
    }
    train.getAnimations().forEach((animation) => animation.cancel());
    const line = lines.find((item) => item.id === activeLine);
    const width = wrap.clientWidth;
    if (!line || !width) {
      train.classList.remove("is-on");
      return;
    }

    const y = lines.indexOf(line) * LANE + LANE / 2;
    const xs = Object.keys(line.stops)
      .map((id) => routeStops.indexOf(id))
      .sort((a, b) => a - b)
      .map((index) => ((index + 0.5) / stops.length) * width);
    const at = (px) => `translate(${px - 19}px, ${y - 8}px)`;

    train.style.setProperty("--c", `var(--line-${line.id})`);
    train.style.transform = at(xs[0]);
    train.classList.add("is-on");
    if (xs.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const travel = "cubic-bezier(0.45, 0, 0.25, 1)";
    const frames = [{ transform: at(xs[0]), offset: 0 }];
    let time = 250;
    frames.push({ transform: at(xs[0]), offset: time, easing: travel });
    xs.slice(1).forEach((px, i) => {
      time += Math.max(380, (px - xs[i]) / 0.55);
      frames.push({ transform: at(px), offset: time });
      if (i < xs.length - 2) {
        time += 320;
        frames.push({ transform: at(px), offset: time, easing: travel });
      }
    });
    frames.forEach((frame) => (frame.offset /= time));
    train.animate(frames, { duration: time, fill: "forwards" });
  }, [activeLine]);

  return { wrapRef, trainRef };
}

function RouteOverview({ activeLine, dim, onToggle }) {
  const lane = LANE;
  const height = lines.length * lane;
  const x = (index) => ((index + 0.5) / stops.length) * 100;
  const { wrapRef, trainRef } = useLineTrain(activeLine);
  const boardRef = usePointerTilt(4);

  return (
    <div className="route-overview" ref={boardRef}>
      <ul className="route-lines" role="group" aria-label="Highlight a skill line">
        {lines.map((line) => (
          <li key={line.id} style={lineColor(line)}>
            <button
              type="button"
              className="route-line-toggle"
              aria-pressed={activeLine === line.id}
              onClick={() => onToggle(line.id)}
            >
              <LineBullet line={line} />
              {line.name}{" "}
              <span className="route-line-toggle__count">
                {line.count} {line.count === 1 ? "stop" : "stops"}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="route-diagram" data-reveal style={{ "--stops": stops.length }}>
        <ol className="route-stop-labels" aria-label="Jump to a stop">
          {stops.map((stop) => {
            const off = activeLine && !skillLines.find((line) => line.id === activeLine).stops.hasOwnProperty(stop.id);
            return (
              <li key={stop.id}>
                <a href={`#stop-${stop.id}`} className={off ? "is-off" : ""}>
                  {stop.shortTitle}
                </a>
              </li>
            );
          })}
        </ol>

        <div className="route-svg-wrap" ref={wrapRef}>
          <svg className="route-svg" height={height} aria-hidden="true" focusable="false">
            {stops.map((stop, index) => (
              <line key={stop.id} className="route-guide" x1={`${x(index)}%`} x2={`${x(index)}%`} y1="0" y2={height} />
            ))}
            {lines.map((line, laneIndex) => {
              const y = laneIndex * lane + lane / 2;
              const spur = line.first === line.last;
              const start = spur ? x(line.first) - 4 : x(line.first);
              const width = spur ? 8 : x(line.last) - x(line.first);
              const stagger = Math.min(laneIndex, 4) * 70;

              return (
                <g key={line.id} style={lineColor(line)}>
                  <rect
                    className={`route-track ${dim(line)}`}
                    style={{ "--i": Math.min(laneIndex, 4) }}
                    x={`${start}%`}
                    y={y - 3}
                    width={`${width}%`}
                    height="6"
                    rx="3"
                  />
                  {Object.keys(line.stops).map((id) => {
                    const index = routeStops.indexOf(id);
                    const along = spur ? 0.5 : (index - line.first) / (line.last - line.first);
                    return (
                      <circle
                        key={id}
                        className={`route-dot ${dim(line)}`}
                        style={{ "--d": `${Math.round(stagger + along * 480)}ms` }}
                        cx={`${x(index)}%`}
                        cy={y}
                        r="7"
                      />
                    );
                  })}
                </g>
              );
            })}
          </svg>
          <span className="route-train" ref={trainRef} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>
      </div>
    </div>
  );
}

// The coloured rails beside each story: lines pass through, and a dot marks each line that stops here.
function StopRails({ index, dim }) {
  const stopId = routeStops[index];

  return (
    <div className="stop__rails" aria-hidden="true">
      {lines.map((line, laneIndex) => {
        if (index < line.first || index > line.last) {
          return null;
        }
        const spur = line.first === line.last;
        const style = {
          ...lineColor(line),
          "--lane-i": laneIndex,
          top: spur ? "calc(var(--dot-y) - 1.25rem)" : line.first < index ? 0 : "var(--dot-y)",
          ...(spur ? { height: "2.5rem" } : { bottom: index < line.last ? 0 : "calc(100% - var(--dot-y))" }),
        };

        return (
          <span key={line.id}>
            <span className={`rail ${dim(line)}`} style={style} />
            {stopId in line.stops ? (
              <span className={`rail-dot ${dim(line)}`} style={{ ...lineColor(line), "--lane-i": laneIndex }} />
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

// Nova's vision repeats its summary's opening, so the stop shows the vision from the second clause on.
function visionAfterSummary(vision) {
  const lead = "Nova is a persistent personal delegate: ";
  if (!vision.startsWith(lead)) {
    return vision;
  }
  const rest = vision.slice(lead.length);
  return rest.charAt(0).toUpperCase() + rest.slice(1);
}

const range = (period) => period.replace(/(\d)\s*[-–]\s*(\d)/g, "$1–$2");

function StopStory({ stop, sign }) {
  const titleId = `stop-${stop.id}-title`;

  if (stop.kind === "role") {
    return (
      <>
        <h3 id={titleId} className="stop__title">
          {stop.title} at MetLife
        </h3>
        <p className="type-label mt-2 text-muted">
          {stop.org}, {range(stop.period)}
        </p>
        {sign}
        <p className="stop__hook">{stop.hook}</p>
        <p className="mt-5 max-w-[62ch] text-muted">{stop.detail}</p>
        <ul className="mt-4 max-w-[62ch] list-disc space-y-2 pl-5 text-muted marker:text-ink">
          {stop.bullets.map((bullet) => (
            <li key={bullet} className="pl-1">
              {bullet}
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (stop.roadmap) {
    const constraints = stop.designConstraints ?? [];
    const builtWith = stop.stack.filter((item) => !constraints.includes(item));

    return (
      <>
        <h3 id={titleId} className="stop__title">
          {stop.title}
        </h3>
        <p className="type-label mt-2 text-muted">What I’m building now</p>
        {sign}
        <p className="stop__hook max-w-[48ch]">{stop.summary}</p>
        <p className="mt-5 max-w-[62ch] text-muted">{visionAfterSummary(stop.vision)}</p>
        <NovaRoadmap roadmap={stop.roadmap} />
        <p className="mt-6 max-w-[62ch] text-[0.9375rem] text-muted">
          Built with {builtWith.join(", ")}.{" "}
          {constraints.length ? <>Design constraints: {constraints.join(" and ")}.</> : null}
        </p>
      </>
    );
  }

  return (
    <>
      <h3 id={titleId} className="stop__title">
        {stop.title}
      </h3>
      <p className="type-label mt-2 text-muted">{stop.highlight}</p>
      {sign}
      <p className="stop__hook">{stop.hook}</p>
      <dl className="stop__facts">
        <div>
          <dt>The problem</dt>
          <dd>{stop.problem}</dd>
        </div>
        <div>
          <dt>What I built</dt>
          <dd>{stop.solution}</dd>
        </div>
        <div>
          <dt>Result</dt>
          <dd>{stop.outcome}</dd>
        </div>
      </dl>
      <p className="mt-6 max-w-[62ch] text-[0.9375rem] text-muted">Built with {stop.stack.join(", ")}.</p>
    </>
  );
}

// The station sign under each title: every line that stops here, and what it meant at this stop.
function StopSign({ stop }) {
  const here = lines.filter((line) => stop.id in line.stops);

  return (
    <ul className="stop__sign" aria-label="Lines that stop here">
      {here.map((line, index) => (
        <li key={line.id} data-line={line.id} style={{ "--n": index }}>
          <LineBullet line={line} />
          <span>
            {line.name}
            {line.stops[stop.id] ? <span className="stop__via"> ({line.stops[stop.id]})</span> : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

function NextStop({ index }) {
  const here = stationIndex(stops[index].id);
  const next = stations[here + 1];
  if (!next) {
    return null;
  }

  return (
    <a href={`#${next.anchor}`} className="next-stop">
      {next.stopId ? `Next stop: ${next.label}` : `Next: ${next.label}`}
      <ArrowDown size={16} aria-hidden="true" />
    </a>
  );
}

function StopLinks({ stop }) {
  const links = [];
  const name = <span className="sr-only">: {stop.title}</span>;

  if (stop.github) {
    links.push(
      <a key="github" href={stop.github} target="_blank" rel="noreferrer" className="text-link inline-flex min-h-11 items-center gap-1.5">
        <Github size={16} aria-hidden="true" />
        View code on GitHub{name}
        <ExternalMark size={14} />
      </a>,
    );
  }

  if (stop.demo?.startsWith("mailto:")) {
    links.push(
      <a key="demo" href={stop.demo} className="text-link inline-flex min-h-11 items-center gap-1.5">
        <Mail size={16} aria-hidden="true" />
        Email me about this build{name}
      </a>,
    );
  } else if (stop.demo) {
    links.push(
      <a key="demo" href={stop.demo} target="_blank" rel="noreferrer" className="text-link inline-flex min-h-11 items-center gap-1.5">
        Open live demo{name}
        <ExternalMark size={14} />
      </a>,
    );
  }

  if (stop.certificate) {
    links.push(
      <a key="certificate" href={stop.certificate} target="_blank" rel="noreferrer" className="text-link inline-flex min-h-11 items-center gap-1.5">
        View internship certificate
        <ExternalMark size={14} />
      </a>,
    );
  }

  if (stop.kind === "role") {
    links.push(
      <a key="role" href="#experience" className="text-link inline-flex min-h-11 items-center">
        See all my roles
      </a>,
    );
  }

  return links.length ? <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1">{links}</div> : null;
}
