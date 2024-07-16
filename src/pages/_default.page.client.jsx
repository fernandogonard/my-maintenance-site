import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { PageLayout } from './PageLayout.jsx';
import { Page } from './index.page.jsx';

hydrateRoot(
  document.getElementById('root'),
  <PageLayout>
    <Page />
  </PageLayout>
);
