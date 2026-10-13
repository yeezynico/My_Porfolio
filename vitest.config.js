import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// Config séparée de vite.config.js pour ne pas impacter le build
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
})
