import { clientPlugin, defineConfig } from "@vitebook/client/node";
import { preactPlugin } from "@vitebook/preact/node";
import {
  defaultThemePlugin,
  DefaultThemeConfig,
} from "@vitebook/theme-default/node";
import SolidPlugin from "../lib/narrowSolidPlugin";

export default defineConfig<DefaultThemeConfig>({
  include: ["story/**/*.story.{jsx,tsx}"],
  plugins: [
    SolidPlugin({ include: /\/src\/solid/ }),
    preactPlugin({ appFile: "App.tsx", exclude: /\/src\/solid/ }),
    clientPlugin(),
    defaultThemePlugin(),
  ],
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  site: {
    title: ".",
    description: "",
    theme: {},
  },
});
