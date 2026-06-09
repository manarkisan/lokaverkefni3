import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASEPATH || "/",
  resolve: {
    alias: {
      "#components": path.resolve(__dirname, "./src/components"),
      "#lib": path.resolve(__dirname, "./src/lib"),
      "#hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
