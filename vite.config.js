import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: base must match your GitHub repo name, e.g. if your repo is
// github.com/th1lak-d/dd-portfolio, base should be '/dd-portfolio/'.
// If you deploy to a USER page (github.com/th1lak-d/th1lak-d.github.io),
// set base to '/' instead.
export default defineConfig({
  plugins: [react()],
  base: "/dd-portfolio/",
});
