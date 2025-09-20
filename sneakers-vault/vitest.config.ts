import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path, { dirname } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
    },
    extensions: [".js", ".jsx", ".json"]
  },
});