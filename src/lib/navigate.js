import { journey } from "./journey";
import { stationIndex, stations } from "./stations";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Announces through the dock's polite live region. Clearing first makes a repeated message speak again.
export function announce(message) {
  journey.set({ announce: "" });
  window.requestAnimationFrame(() => journey.set({ announce: message }));
}

/*
 * Takes the visitor to a station: scrolls its anchor into view (smoothly only when motion is welcome), moves
 * focus to its heading so keyboard and screen-reader users land in the right place, records the jump in
 * history so the browser's Back button returns here, and announces where they are.
 */
export function goToStation(id, { push = true } = {}) {
  const index = stationIndex(id);
  const station = stations[index];
  const target = station && document.getElementById(station.anchor);
  if (!target) {
    return false;
  }

  target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  const heading = document.getElementById(station.heading) ?? target;
  if (!heading.hasAttribute("tabindex")) {
    heading.setAttribute("tabindex", "-1");
  }
  heading.focus({ preventScroll: true });

  if (push && window.location.hash !== `#${station.anchor}`) {
    window.history.pushState({ station: station.id }, "", `#${station.anchor}`);
  }
  announce(`Now at ${station.label}, station ${index + 1} of ${stations.length}`);
  return true;
}
