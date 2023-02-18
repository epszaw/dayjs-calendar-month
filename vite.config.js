import { defineConfig } from "vitest/config"

export default defineConfig({
  build: {
    outDir: "./dist",
    lib: {
      entry: "./index.js",
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["dayjs"],
    },
  },
  test: {
    include: ["./*.test.js"],
  },
})
