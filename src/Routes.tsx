import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const Frame = lazy(() => import('./Pages/Frame'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const ReactUsePage = lazy(() => import('./Pages/ReactUsePage'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Frame />,
    children: [
      { path: 'react-use', element: <ReactUsePage /> },
      { path: '/', element: <Navigate to="/react-use" /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;