import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const resolveLocalDependency = (path: string) =>
  fileURLToPath(new URL(path, import.meta.url));

const exampleRoot = resolveLocalDependency(".");
const packageRoot = resolveLocalDependency("../..");

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [exampleRoot, packageRoot],
    },
  },
  optimizeDeps: {
    exclude: ["@russian-flags/regions-react"],
  },
  resolve: {
    alias: {
      react: resolveLocalDependency("./node_modules/react"),
      "react-dom": resolveLocalDependency("./node_modules/react-dom"),
    },
    dedupe: ["react", "react-dom"],
  },
});
