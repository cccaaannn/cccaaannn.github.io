import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  assetsInclude: [
    '**/*.gltf',
    '**/*.glb'
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "404.html"),
      },
    },
  },
})
