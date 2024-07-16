export { render };

import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { PageLayout } from './PageLayout';

async function render(pageContext) {
  const { Page } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageLayout>
      <Page />
    </PageLayout>
  );

  return {
    documentHtml: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>JP Mantenimiento y reciclado de propiedades</title>
        </head>
        <body>
          <div id="root">${pageHtml}</div>
        </body>
      </html>
    `,
  };
}
