import { createBrowserRouter } from 'react-router';

import App from '../App';
import AboutPage from '@/pages/AboutPage/AboutPage';
import ImageSearchPage from '@/pages/ImageSearchPage/ImageSearchPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

const routers = [
  {
    path: '',
    component: ImageSearchPage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      children: routers.map(route => ({
        ...route,
        Component: route.component,
      })),
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') }
);
