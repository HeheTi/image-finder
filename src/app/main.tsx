import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { router } from './routers/router.tsx';

const rootRef = document.getElementById('root');

if (!rootRef) {
  throw new Error('Root id not found');
}

createRoot(rootRef).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
