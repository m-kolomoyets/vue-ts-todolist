import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: ['es2021', 'edge91', 'firefox90', 'chrome91', 'opera77', 'safari15', 'ios15'],
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000
  },
  preview: {
    port: 4173
  }
})
