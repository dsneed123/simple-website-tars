import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      thresholds: {
        lines: 80,
        functions: 80,
      },
    },
  },
})
