import express from 'express';
import { createServer as createViteServer } from 'vite';
import { render } from './src/entry-server.jsx';

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      const context = {};

      const appHtml = render(url, context);

      const html = `<!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>JP Mantenimiento y reciclado de propiedades</title>
        </head>
        <body>
          <div id="root">${appHtml}</div>
          <script type="module" src="/src/main.jsx"></script>
        </body>
      </html>`;

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      res.status(500).end(e.stack);
    }
  });

  app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
  });
}

createServer();
