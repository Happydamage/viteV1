import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { FC } from 'react';
import { ErrorBoundary } from './ErrorBoundary.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route path={'/pew'} element={'qwerty'} />
    </Route>
  )
);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
