import { clientPlugin, defineConfig } from "@vitebook/client/node";
import {
  defaultThemePlugin,
  DefaultThemeConfig,
} from "@vitebook/theme-default/node";
import { mergeConfig } from "vite";
import baseConfig from "../vite.config";

const vitebookConfig = defineConfig<DefaultThemeConfig>({
  include: ["src/**/*.story.svelte"],
  plugins: [
    clientPlugin({ appFile: "App.svelte", include: ["**/*.svelte"] }),
    defaultThemePlugin(),
  ],
  site: {
    title: "Solid Example",
    description: "",
    theme: {},
  },
});

export default mergeConfig(vitebookConfig, baseConfig);
