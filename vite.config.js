import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Configura los tipos MIME adecuadamente
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
