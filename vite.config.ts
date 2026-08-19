// vite.config.ts

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    plugins: [react()],

    base: env.VITE_BASE_URL || "/",

    server: {
      port: 4200,
      proxy: {
        "/api": {
          target: "https://mydealforever.com",
          changeOrigin: true,
          secure: false,
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              proxyReq.setHeader("Origin", "https://mydealforever.com");
              proxyReq.setHeader("Referer", "https://mydealforever.com");
            });
          },
        },
      },
    },

    build: {
      // Warn only when a single chunk exceeds 500 kB (down from the default 1000 kB)
      chunkSizeWarningLimit: 500,

      rollupOptions: {
        output: {
          // ── Manual vendor chunks ───────────────────────────────────────────
          manualChunks(id) {
            // React runtime — tiny but referenced everywhere, keep separate
            if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
              return "vendor-react";
            }
            // Router
            if (id.includes("node_modules/react-router") || id.includes("node_modules/@remix-run")) {
              return "vendor-router";
            }
            // Icon libraries (can be large)
            if (id.includes("node_modules/react-icons/")) {
              return "vendor-icons";
            }
            if (id.includes("node_modules/lucide-react/")) {
              return "vendor-lucide";
            }
            // Swiper carousel
            if (id.includes("node_modules/swiper/")) {
              return "vendor-swiper";
            }
            // Supabase client
            if (id.includes("node_modules/@supabase/")) {
              return "vendor-supabase";
            }
            // Everything else from node_modules → a shared vendor chunk
            if (id.includes("node_modules/")) {
              return "vendor-misc";
            }
          },
        },
      },
    },
  };
});