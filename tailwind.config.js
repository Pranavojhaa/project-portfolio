/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F8FAFF",
        slate: "#ABB5CF",
        line: "rgba(255,255,255,0.11)",
        panel: "rgba(15,18,36,0.78)",
        accent: "#6E7BFF",
        accentSoft: "#2FF3C7",
        base: "#050816",
        baseAlt: "#0A0F24",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.05), 0 28px 80px rgba(0,0,0,0.46), 0 0 48px rgba(110,123,255,0.10)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
