import { experience, projects, routeStops, skillLines } from "../data/portfolio";

// One place that turns the portfolio data into the route: stops in order, and each skill line's reach.

const stopById = Object.fromEntries([
  ...projects.map((project) => [project.id, { ...project, kind: "project" }]),
  ...experience.filter((role) => role.id).map((role) => [role.id, { ...role, kind: "role" }]),
]);

export const stops = routeStops.map((id) => stopById[id]);

// Where each line starts and ends along the route, so rails know when to pass through a stop.
export const lines = skillLines.map((line) => {
  const at = Object.keys(line.stops).map((id) => routeStops.indexOf(id));
  return { ...line, first: Math.min(...at), last: Math.max(...at), count: at.length };
});

export const lineById = Object.fromEntries(lines.map((line) => [line.id, line]));

export const linesAt = (stopId) => lines.filter((line) => stopId in line.stops);

// Every skill line the train has picked up once it has reached `stopId`, in the order it boarded.
export function linesCollectedBy(stopId) {
  const reached = routeStops.slice(0, routeStops.indexOf(stopId) + 1);
  const order = [];
  reached.forEach((id) =>
    linesAt(id).forEach((line) => {
      if (!order.includes(line.id)) {
        order.push(line.id);
      }
    }),
  );
  return order;
}

export const lineColor = (line) => ({ "--c": `var(--line-${line.id})` });

// Proof a visitor can check for a stop, in the words the data already uses. Nothing here is a new claim.
export function evidenceFor(stop) {
  const links = [];
  if (stop.demo && !stop.demo.startsWith("mailto:")) {
    links.push({ kind: "live", label: "Open live demo", href: stop.demo });
  }
  if (stop.github) {
    links.push({ kind: "code", label: "View code on GitHub", href: stop.github });
  }
  if (stop.certificate) {
    links.push({ kind: "document", label: "View certificate", href: stop.certificate });
  }
  if (stop.demo?.startsWith("mailto:")) {
    links.push({ kind: "request", label: stop.github ? "Ask me for a demo" : "Private build: ask me about it", href: stop.demo });
  }
  return links;
}
