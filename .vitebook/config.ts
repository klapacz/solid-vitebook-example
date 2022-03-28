import { clientPlugin, defineConfig } from "@vitebook/client/node";
import { mergeConfig } from "vite";
import { preactPlugin } from "@vitebook/preact/node";
import {
  defaultThemePlugin,
  DefaultThemeConfig,
} from "@vitebook/theme-default/node";
import defaultConfig from "../vite.config";

const vitebookConfig = defineConfig<DefaultThemeConfig>({
  include: ["stories/**/*.story.{jsx,tsx}"],
  plugins: [
    preactPlugin({ appFile: "App.tsx", exclude: /\/src/ }),
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

export default mergeConfig(vitebookConfig, defaultConfig);
