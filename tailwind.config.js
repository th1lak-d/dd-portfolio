/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF9",
        panel: "#F2F0EA",
        ink: "#14181F",
        muted: "#6B6F76",
        line: "#E4E1DA",
        accent: "#2C5F63",
        active: "#4A7A5C",
        "paper-d": "#14161A",
        "panel-d": "#1C1F24",
        "ink-d": "#F2F1ED",
        "muted-d": "#9498A0",
        "line-d": "#2C3036",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
