import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import deno from "@deno/vite-plugin";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    deno(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
})
