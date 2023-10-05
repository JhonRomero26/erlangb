import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import topLevelAwait from "vite-plugin-top-level-await";
import assemblyScriptPlugin from "vite-plugin-assemblyscript-asc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/erlangb/",
  public: "public",
  plugins: [
    react(),
    assemblyScriptPlugin({
      projectRoot: ".",
      srcEntryFile: "assembly/index.ts",
      configFile: "asconfig.json",
      srcMatch: "assembly",
      targetWasmFile: "assembly/build/assembly.wasm",
      distFolder: "dist",
    }),
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
});
