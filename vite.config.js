import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://medixbackend-production.up.railway.app/",
        changeOrigin: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    },
    host: true,
  },
});
