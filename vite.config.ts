import { defineConfig, version } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteComponents from "unplugin-vue-components/vite";
import {
  ElementPlusResolver,
  VueUseComponentsResolver,
} from "unplugin-vue-components/resolvers";
import ViteAutoImport from "unplugin-auto-import/vite";

process.env.VITE_VERSION = version;

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      resolvers: [ElementPlusResolver(), VueUseComponentsResolver()],
    }),
    ViteAutoImport({
      imports: ["vue", "@vueuse/core"],
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
