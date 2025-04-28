import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default",
      },
    }),
  ],
  server: {
    port: 4200,
  },
});
