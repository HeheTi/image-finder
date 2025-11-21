import { createBrowserRouter } from 'react-router';

import App from '../App';
import AboutPage from '@/pages/AboutPage/AboutPage';
import ImageSearchPage from '@/pages/ImageSearchPage/ImageSearchPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

const routers = [
  {
    path: '/',
    component: ImageSearchPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: routers.map(route => ({
      path: route.path === '/' ? undefined : route.path,
      index: route.path === '/',
      Component: route.component,
    })),
  },
]);
