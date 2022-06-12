import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
    lib: {
      entry: "src/index.ts",
      formats: ["cjs", "es"],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
