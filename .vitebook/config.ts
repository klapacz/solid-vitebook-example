import { clientPlugin, defineConfig } from "@vitebook/client/node";
import { preactPlugin } from "@vitebook/preact/node";
import {
  defaultThemePlugin,
  DefaultThemeConfig,
} from "@vitebook/theme-default/node";

export default defineConfig<DefaultThemeConfig>({
  include: ["story/**/*.story.{jsx,tsx}"],
  plugins: [
    preactPlugin({ appFile: "App.tsx" }),
    clientPlugin(),
    defaultThemePlugin(),
  ],
  site: {
    title: ".",
    description: "",
    theme: {},
  },
});
