import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import topLevelAwait from "vite-plugin-top-level-await";
import assemblyScriptPlugin from "vite-plugin-assemblyscript-asc";

const commonPlugins = [
  react(),
  topLevelAwait({
    promiseExportName: "__tla",
    promiseImportName: (i) => `__tla_${i}`,
  }),
  assemblyScriptPlugin({
    projectRoot: ".",
    srcEntryFile: "assembly/index.ts",
    configFile: "asconfig.json",
    srcMatch: "assembly",
    targetWasmFile: "assembly/build/assembly.wasm",
    distFolder: "dist",
  }),
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "development") {
    return {
      base: "/",
      public: "public",
      plugins: commonPlugins,
    };
  }

  return {
    base: "/erlangb/",
    public: "public",
    plugins: commonPlugins,
  };
});
