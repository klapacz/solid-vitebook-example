import { defineConfig } from "vite";
import Preact from "@preact/preset-vite";
import SolidPlugin from "./lib/narrowSolidPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    SolidPlugin({ include: /\/src\/solid/ }),
    Preact({ exclude: /\/src\/solid/ }),
  ],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
});
