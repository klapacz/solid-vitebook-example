import { defineConfig } from "vite";
import { narrowSolidPlugin } from "./lib/narrowSolidPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [narrowSolidPlugin({ include: /\/src/ })],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
