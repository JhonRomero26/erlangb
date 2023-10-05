import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/erlangb/",
  public: "public",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assembly",
          dest: "src",
        },
      ],
    }),
  ],
});
