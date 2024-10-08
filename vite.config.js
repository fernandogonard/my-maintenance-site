// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: true, // Minificar JS y CSS para producción
  },
  server: {
    mimeTypes: {
      'jsx': 'application/javascript',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'svg': 'image/svg+xml',
      'css': 'text/css',
    },
  },
});
