// vite.config.js

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    plugins: [react()],

    // FIXED TYPE
    base: env.VITE_BASE_URL || "/",

    server: {
      port: 4200, // number not string
    },
  };
});