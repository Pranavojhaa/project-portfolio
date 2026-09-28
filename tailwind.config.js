/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        raised: token("raised"),
        ink: token("ink"),
        muted: token("muted"),
        rule: token("rule"),
        ruleStrong: token("rule-strong"),
        signal: token("signal"),
        signalTint: token("signal-tint"),
        onSignal: token("on-signal"),
      },
      fontFamily: {
        sans: ["Overpass", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
      transitionTimingFunction: {
        settle: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
