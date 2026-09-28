import { useCallback, useEffect, useRef, useState } from "react";
import { journey } from "../lib/journey";
import { lineById, linesCollectedBy } from "../lib/route";
import { stations as journeyStations } from "../lib/stations";

/*
 * The main line: one railway track down the whole page, with a station at the name, at every section and at
 * every project stop. The train runs station to station on its own clock: when you scroll a new station up to
 * the reading line it departs, accelerates, brakes and docks there, then waits while you read. At each project
 * stop the skill badges on the station sign fly onto the train as new carriages, so the train grows with the
 * skills it has picked up (and sheds them again if you scroll back).
 *
 * The track is decorative (aria-hidden) and laid out from measured positions after hydration. Its stations are
 * the shared journey stations (src/lib/stations.js), plus a terminus at each end. With reduced motion the train
 * is hidden, nothing flies, and only the dock's text updates.
 */

function measureStations(root) {
  const base = root.getBoundingClientRect();
  const wide = window.matchMedia("(min-width: 1024px)").matches;
  const column = root.querySelector("#projects .max-w-page");
  const x = wide && column ? column.getBoundingClientRect().left - base.left - 48 : 7;
  const firstLine = (el) => el.getBoundingClientRect().top - base.top + parseFloat(getComputedStyle(el).fontSize) * 0.55;
  const stations = [];

  const name = root.querySelector("#hero-name");
  if (name) {
    stations.push({ y: firstLine(name), kind: "terminus", label: "The start of the line", id: null });
  }
  journeyStations.forEach((station) => {
    if (station.stopId) {
      const stop = root.querySelector(`.stop[data-stop="${station.stopId}"]`);
      const dot = stop?.querySelector(".rail-dot");
      const rails = stop?.querySelector(".stop__rails");
      if (!dot || !rails) {
        return;
      }
      const d = dot.getBoundingClientRect();
      stations.push({
        y: d.top - base.top + d.height / 2,
        kind: "stop",
        id: station.id,
        stopId: station.stopId,
        label: station.label,
        spurTo: rails.getBoundingClientRect().left - base.left - 4,
      });
      return;
    }
    const heading = root.querySelector(`#${station.heading}`);
    if (heading) {
      stations.push({ y: firstLine(heading), kind: "interchange", id: station.id, label: station.label });
    }
  });
  const contact = root.querySelector("#contact");
  if (contact) {
    stations.push({ y: contact.getBoundingClientRect().bottom - base.top - 56, kind: "terminus", label: "End of the line", id: "recap" });
  }

  // What the train should be carrying at each station: everything picked up at the stops so far.
  let lastStop = null;
  stations.forEach((station) => {
    lastStop = station.stopId ?? lastStop;
    station.carrying = lastStop ? linesCollectedBy(lastStop) : [];
  });

  return { x, wide, height: root.scrollHeight, stations };
}

const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export function MainLine({ containerRef }) {
  const [layout, setLayout] = useState(null);
  const [onBoard, setOnBoard] = useState([]);
  const trainRef = useRef(null);
  const stationRefs = useRef([]);
  const run = useRef({ pos: null, heading: 1, travel: null, target: -1, token: 0, onBoard: [] });

  useEffect(() => journey.restoreVisited(), []);

  useEffect(() => {
    run.current.onBoard = onBoard;
    journey.set({ collected: onBoard });
  }, [onBoard]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) {
      return undefined;
    }
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setLayout(measureStations(root)));
    };
    measure();
    document.fonts?.ready.then(measure);
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [containerRef]);

  // Positions the locomotive and every carriage behind it, relative to the direction of travel.
  const place = useCallback(() => {
    const train = trainRef.current;
    const { pos, heading } = run.current;
    if (!train || !layout || pos === null) {
      return;
    }
    const loco = layout.wide ? 62 : 36;
    const car = layout.wide ? 38 : 24;
    const gap = layout.wide ? 5 : 3;
    [...train.children].forEach((slot, index) => {
      const offset = index === 0 ? 0 : loco / 2 + gap + (index - 1) * (car + gap) + car / 2;
      const y = pos - heading * offset;
      slot.style.transform = `translate3d(${layout.x}px, ${y}px, 0) translate(-50%, -50%)`;
      slot.dataset.heading = heading > 0 ? "down" : "up";
    });
  }, [layout]);

  useEffect(place, [onBoard, place]);

  useEffect(() => {
    const root = containerRef.current;
    if (!layout || !root || layout.stations.length < 2) {
      return undefined;
    }
    const { stations } = layout;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const state = run.current;
    let raf = 0;

    const stationAtReadingLine = () => {
      // At the very bottom of the page there is nowhere left to scroll, so the train runs on to the terminus.
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        return stations.length - 1;
      }
      const line = window.innerHeight * 0.5 - root.getBoundingClientRect().top;
      let index = 0;
      stations.forEach((station, i) => {
        if (station.y <= line) {
          index = i;
        }
      });
      return index;
    };

    const markStations = () => {
      stationRefs.current.forEach((el, i) => {
        if (!el || !stations[i]) {
          return;
        }
        el.classList.toggle("is-passed", stations[i].y <= state.pos + 2);
        el.classList.toggle("is-here", !state.travel && i === state.target);
      });
    };

    // A skill badge on the station sign flies to the tail of the train, then couples on as a carriage.
    const board = (ids, token, stopId) => {
      const stopEl = root.querySelector(`.stop[data-stop="${stopId}"]`);
      ids.forEach((id, i) => {
        const couple = () => {
          if (run.current.token === token) {
            setOnBoard((current) => (current.includes(id) ? current : [...current, id]));
          }
        };
        const source = stopEl?.querySelector(`.stop__sign [data-line="${id}"] .line-bullet`);
        const tail = trainRef.current?.lastElementChild;
        if (reduce || !source || !tail) {
          couple();
          return;
        }
        const from = source.getBoundingClientRect();
        const to = tail.getBoundingClientRect();
        if (from.bottom < 0 || from.top > window.innerHeight) {
          couple();
          return;
        }
        const flyer = document.createElement("span");
        flyer.className = "line-bullet line-bullet--flying";
        flyer.textContent = lineById[id].code;
        flyer.style.setProperty("--c", `var(--line-${id})`);
        flyer.style.left = `${from.left}px`;
        flyer.style.top = `${from.top}px`;
        document.body.appendChild(flyer);
        const dx = to.left + to.width / 2 - (from.left + from.width / 2);
        const dy = to.top + to.height / 2 + state.heading * 28 - (from.top + from.height / 2);
        const flight = flyer.animate(
          [
            { transform: "translate(0, 0) scale(1)", opacity: 1 },
            { transform: `translate(${dx * 0.45}px, ${dy * 0.45 - 70}px) scale(1.35) rotate(-12deg)`, opacity: 1, offset: 0.45 },
            { transform: `translate(${dx}px, ${dy}px) scale(0.7) rotate(0deg)`, opacity: 0.2 },
          ],
          { duration: 720, delay: i * 150, easing: "cubic-bezier(0.45, 0, 0.25, 1)", fill: "both" },
        );
        flight.onfinish = () => {
          flyer.remove();
          couple();
        };
      });
    };

    const arrive = (index, { initial = false } = {}) => {
      const station = stations[index];
      state.travel = null;
      state.pos = station.y;
      state.token += 1;
      place();
      markStations();
      root.querySelectorAll(".stop.is-arrived").forEach((el) => el.classList.remove("is-arrived"));
      if (station.stopId) {
        root.querySelector(`.stop[data-stop="${station.stopId}"]`)?.classList.add("is-arrived");
      }
      journey.set({ visible: index > 0, arriving: false, label: station.label, stationId: station.id });
      // Scrolling keeps the address in step with where you are, without adding history entries.
      if (!initial) {
        const anchor = journeyStations.find((item) => item.id === station.id)?.anchor;
        const url = anchor ? `#${anchor}` : window.location.pathname + window.location.search;
        if (url !== window.location.hash && !(anchor === undefined && !window.location.hash)) {
          window.history.replaceState(window.history.state, "", url);
        }
      }

      const want = station.carrying;
      const have = state.onBoard;
      const extends_ = want.length > have.length && have.every((id, i) => want[i] === id);
      if (extends_ && station.stopId) {
        board(want.slice(have.length), state.token, station.stopId);
      } else if (want.join() !== have.join()) {
        setOnBoard(want);
      }
    };

    const tick = (now) => {
      raf = 0;
      const { travel } = state;
      if (!travel) {
        return;
      }
      const t = Math.min((now - travel.start) / travel.duration, 1);
      state.pos = travel.from + (travel.to - travel.from) * easeInOut(t);
      place();
      markStations();
      if (t >= 1) {
        arrive(state.target);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    // A stop is stamped as seen once a reader has stayed on it for a moment, however the train is doing.
    const stampAfterDwell = (index) => {
      window.clearTimeout(state.stampTimer);
      const stopId = stations[index]?.stopId;
      if (stopId) {
        state.stampTimer = window.setTimeout(() => {
          if (state.target === index) {
            journey.markVisited(stopId);
          }
        }, 1200);
      }
    };

    const depart = (index) => {
      state.target = index;
      stampAfterDwell(index);
      const to = stations[index].y;
      if (reduce || state.pos === null) {
        arrive(index);
        return;
      }
      const distance = Math.abs(to - state.pos);
      state.heading = to >= state.pos ? 1 : -1;
      state.travel = { from: state.pos, to, start: performance.now(), duration: Math.min(Math.max(500 + distance * 0.45, 700), 1800) };
      state.token += 1;
      root.querySelectorAll(".stop.is-arrived").forEach((el) => el.classList.remove("is-arrived"));
      journey.set({ visible: index > 0, arriving: true, label: stations[index].label, stationId: stations[index].id });
      if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };

    // The map board leans back until it reaches you, then lies flat to be read.
    const tiltBoard = () => {
      const boardEl = root.querySelector(".route-overview");
      if (!boardEl || !layout.wide || reduce) {
        return;
      }
      const rect = boardEl.getBoundingClientRect();
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight * 0.6), 0), 1);
      boardEl.style.setProperty("--tilt", `${((1 - progress) * 26).toFixed(2)}deg`);
    };

    let scrollFrame = 0;
    const onScroll = () => {
      if (scrollFrame) {
        return;
      }
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        tiltBoard();
        const index = stationAtReadingLine();
        if (index !== state.target) {
          depart(index);
        }
      });
    };

    // First placement: dock at the current station without a journey, carrying what it would have picked up.
    const start = stationAtReadingLine();
    state.pos = null;
    state.target = start;
    arrive(start, { initial: true });
    stampAfterDwell(start);
    tiltBoard();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(scrollFrame);
      window.clearTimeout(state.stampTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      state.travel = null;
    };
  }, [layout, containerRef, place]);

  if (!layout || layout.stations.length < 2) {
    return null;
  }

  const { x, height, stations, wide } = layout;
  const top = stations[0].y;
  const bottom = stations[stations.length - 1].y;

  return (
    <div className={`mainline ${wide ? "mainline--wide" : ""}`} aria-hidden="true">
      <svg className="mainline__track" width="100%" height={height}>
        {stations.map((station, index) =>
          station.spurTo ? (
            <line key={`spur-${index}`} className="mainline__spur" x1={x} x2={station.spurTo} y1={station.y} y2={station.y} />
          ) : null,
        )}
        <line className="mainline__sleepers" x1={x} x2={x} y1={top} y2={bottom} />
        <line className="mainline__rails" x1={x} x2={x} y1={top} y2={bottom} />
        <line className="mainline__gauge" x1={x} x2={x} y1={top} y2={bottom} />
        {stations.map((station, index) => (
          <circle
            key={index}
            ref={(el) => (stationRefs.current[index] = el)}
            className={`mainline__station mainline__station--${station.kind}`}
            cx={x}
            cy={station.y}
            r={station.kind === "stop" ? (wide ? 7 : 5) : wide ? 11 : 7}
          />
        ))}
      </svg>
      <div className="mainline__train" ref={trainRef}>
        <span className="mainline__slot">
          <span className="mainline__loco" />
        </span>
        {onBoard.map((id) => (
          <span key={id} className="mainline__slot">
            <span className="mainline__car" style={{ "--c": `var(--line-${id})` }}>
              {wide ? lineById[id].code : null}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
