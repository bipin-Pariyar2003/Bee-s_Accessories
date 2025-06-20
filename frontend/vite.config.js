import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      views: "/src/views",
      context: "/src/context",
      alerts: "/src/components/alerts",
    },
  },
});
