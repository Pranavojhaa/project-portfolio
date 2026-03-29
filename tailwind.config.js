/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#E5E7EB",
        slate: "#9CA3AF",
        line: "#1F2937",
        panel: "#111827",
        accent: "#3B82F6",
        accentSoft: "#8B5CF6",
        base: "#0B0F14",
        baseAlt: "#111827",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,130,246,0.10), 0 18px 48px rgba(0,0,0,0.28)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
