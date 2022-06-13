import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const IS_LIB = Boolean(process.env.LIB === "true");

const lib = defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
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

const client = defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    manifest: true,
    sourcemap: true,
    outDir: "dist/assets",
    rollupOptions: {
      input: "src/client.ts",
      output: {
        format: "es",
        assetFileNames: (info) => `${info.name}`,
        entryFileNames: (info) => `${info.name}.js`,
        chunkFileNames: (info) => `${info.name}.js`,
      },
    },
  },
});

export default IS_LIB ? lib : client;
