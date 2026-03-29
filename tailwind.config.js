/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        slate: "#516074",
        line: "rgba(16,24,40,0.08)",
        panel: "rgba(255,255,255,0.72)",
        accent: "#315EFB",
        accentSoft: "#14B8A6",
        base: "#F7FAFF",
        baseAlt: "#EEF4FF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(16,24,40,0.04), 0 18px 48px rgba(79,102,145,0.12)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(49,94,251,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(49,94,251,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
