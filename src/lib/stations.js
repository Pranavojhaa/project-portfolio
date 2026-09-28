import { stops } from "./route";

// Every place the journey can stop, in page order. The dock steps through these, the train docks at them,
// and each one names the element to scroll to (`anchor`) and the heading that takes focus (`heading`).
export const stations = [
  { id: "glance", label: "At a glance", group: "Quick scan", anchor: "glance", heading: "glance-title" },
  { id: "route", label: "The route map", group: "Story lane", anchor: "projects", heading: "projects-title" },
  ...stops.map((stop) => ({
    id: stop.id,
    label: stop.shortTitle,
    group: "Story lane",
    anchor: `stop-${stop.id}`,
    heading: `stop-${stop.id}-title`,
    stopId: stop.id,
  })),
  { id: "skills", label: "Skills carriage", group: "Carriages", anchor: "skills", heading: "skills-title" },
  { id: "timeline", label: "Timeline carriage", group: "Carriages", anchor: "experience", heading: "experience-title" },
  { id: "proof", label: "Proof carriage", group: "Carriages", anchor: "proof", heading: "proof-title" },
  { id: "recap", label: "Recap", group: "End of the line", anchor: "contact", heading: "contact-title" },
];

export const stationIndex = (id) => stations.findIndex((station) => station.id === id);

export const stationByAnchor = (anchor) => stations.find((station) => station.anchor === anchor);

export const stopStations = stations.filter((station) => station.stopId);
