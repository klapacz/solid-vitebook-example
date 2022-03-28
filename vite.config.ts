import { defineConfig } from "vite";
import SolidPlugin from "./lib/narrowSolidPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [SolidPlugin({ include: /\/src/ })],
});
