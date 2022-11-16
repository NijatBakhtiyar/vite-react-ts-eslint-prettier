import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/ui": path.resolve(__dirname, "./src/ui"),
      "@/component": path.resolve(__dirname, "./src/component"),
    },
  },
});
