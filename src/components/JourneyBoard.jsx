import { Check, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Fragment, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { journey } from "../lib/journey";
import { goToStation } from "../lib/navigate";
import { lineById, lines } from "../lib/route";
import { stationByAnchor, stationIndex, stations } from "../lib/stations";
import { FlapText } from "./FlapText";
import { LineBullet } from "./LineBullet";

const groups = [...new Set(stations.map((station) => station.group))];

/*
 * The journey dock: previous and next station, a list of every station to jump to, and the skills on board.
 * It appears once you leave the hero. It also owns in-page navigation for the whole site: any link to a
 * station goes through goToStation (focus lands on the heading, history records the jump), and the browser's
 * Back and Forward buttons return to the stations you jumped between.
 */
export function JourneyBoard() {
  const { visible, arriving, label, stationId, collected, visited, announce } = useSyncExternalStore(
    journey.subscribe,
    journey.get,
    journey.getServer,
  );
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  const index = stationIndex(stationId);
  const previous = index > 0 ? stations[index - 1] : null;
  // From the hero (index -1) the next station is the first one.
  const next = index < stations.length - 1 ? stations[index + 1] : null;
  const where = index >= 0 ? `${arriving ? "Next stop" : "Now at"} ${label}, station ${index + 1} of ${stations.length}` : "";

  // In-page links to stations, and Back/Forward between stations you jumped to.
  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const link = event.target.closest?.('a[href^="#"]');
      const station = link && stationByAnchor(link.getAttribute("href").slice(1));
      if (station && goToStation(station.id)) {
        event.preventDefault();
        setOpen(false);
      }
    };
    const onPopState = () => {
      const station = stationByAnchor(window.location.hash.slice(1));
      if (station) {
        window.requestAnimationFrame(() => goToStation(station.id, { push: false }));
      } else if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      }
    };
    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  // The station list closes on Escape (returning focus to its button) and on any click outside the dock.
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  useEffect(() => {
    if (!visible) {
      setOpen(false);
    }
  }, [visible]);

  return (
    <>
      <nav ref={navRef} aria-label="Journey" className={`journey ${visible ? "is-visible" : ""}`}>
        {open ? (
          <div id="journey-stations" className="journey__menu">
            {groups.map((group) => (
              <Fragment key={group}>
                <h2 className="journey__menu-group">{group}</h2>
                <ul>
                  {stations
                    .filter((station) => station.group === group)
                    .map((station) => {
                      const seen = station.stopId && visited.includes(station.stopId);
                      return (
                        <li key={station.id}>
                          <a
                            href={`#${station.anchor}`}
                            className="journey__menu-link"
                            aria-current={station.id === stationId ? "location" : undefined}
                          >
                            <span>{station.label}</span>
                            {seen ? (
                              <span className="journey__stamp">
                                <span className="sr-only">, </span>
                                <Check size={14} aria-hidden="true" />
                                Seen
                              </span>
                            ) : null}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </Fragment>
            ))}
          </div>
        ) : null}

        <div className="journey__inner trunk-gutter">
          <button
            type="button"
            className="journey__step"
            disabled={!previous}
            onClick={() => previous && goToStation(previous.id)}
            aria-label={previous ? `Previous station: ${previous.label}` : "Previous station"}
          >
            <ChevronLeft size={18} aria-hidden="true" />
            <span className="journey__step-text">Previous</span>
          </button>

          <button
            ref={toggleRef}
            type="button"
            className="journey__where"
            aria-expanded={open}
            aria-controls="journey-stations"
            aria-label={`${where}. ${open ? "Hide" : "Show"} all stations`}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="journey__status">{arriving ? "Next stop" : "Now at"}</span>
            <FlapText text={label || " "} />
            <ChevronDown size={16} aria-hidden="true" className={`journey__chevron ${open ? "is-open" : ""}`} />
          </button>

          <button
            type="button"
            className="journey__step"
            disabled={!next}
            onClick={() => next && goToStation(next.id)}
            aria-label={next ? `Next station: ${next.label}` : "Next station"}
          >
            <span className="journey__step-text">Next</span>
            <ChevronRight size={18} aria-hidden="true" />
          </button>

          <span className="journey__skills">
            <span className="journey__badges" aria-hidden="true">
              {collected.map((id) => (
                <LineBullet key={id} line={lineById[id]} />
              ))}
            </span>
            <span className="journey__count">
              {collected.length}/{lines.length}
              <span className="journey__count-words"> skills on board</span>
            </span>
          </span>
        </div>
      </nav>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announce}
      </p>
    </>
  );
}
