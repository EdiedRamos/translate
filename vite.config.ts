import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-expect-error no types provided
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  base: "/translate",
});
