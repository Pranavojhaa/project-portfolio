// A tiny store for the journey, shared by the main line (which writes where the train is) and the dock.
// `visited` holds the project stops a visitor has actually reached; it lasts for the browser session only.
const initial = {
  visible: false,
  arriving: false,
  label: "",
  stationId: null,
  collected: [],
  visited: [],
  announce: "",
};
let state = initial;
const listeners = new Set();
const VISITED_KEY = "journey:visited";

export const journey = {
  get: () => state,
  getServer: () => initial,
  set(next) {
    state = { ...state, ...next };
    listeners.forEach((listener) => listener());
  },
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  // Restores stamps from this browser session; storage can be unavailable (private mode), so it may stay empty.
  restoreVisited() {
    try {
      const saved = JSON.parse(window.sessionStorage.getItem(VISITED_KEY) ?? "[]");
      if (Array.isArray(saved) && saved.length) {
        journey.set({ visited: saved });
      }
    } catch {
      // No stamps to restore.
    }
  },
  markVisited(stopId) {
    if (state.visited.includes(stopId)) {
      return;
    }
    journey.set({ visited: [...state.visited, stopId] });
    try {
      window.sessionStorage.setItem(VISITED_KEY, JSON.stringify(state.visited));
    } catch {
      // Stamps just won't survive a reload.
    }
  },
};
