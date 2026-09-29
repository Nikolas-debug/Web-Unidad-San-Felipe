import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // 0.0.0.0 para poder abrirlo desde el celular con la IP de la maquina.
    // Probar en hardware real es la unica forma de validar el comportamiento tactil.
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
