import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Habilitar la generación de mapas de fuentes
    ssr: true,
    outDir: 'dist', // Asegúrate de que la salida se dirija a la carpeta correcta
    rollupOptions: {
      input: 'src/entry-server.jsx' // Ruta correcta al archivo de entrada del servidor
    }
  }
});
