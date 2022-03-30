import { defineConfig } from "vite";
import { narrowSolidPlugin } from "./lib/narrowSolidPlugin";

export default defineConfig({
  plugins: [narrowSolidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
