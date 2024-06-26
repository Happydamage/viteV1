import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { FC } from 'react';
import { ErrorBoundary } from './ErrorBoundary.tsx';
import { CodeWarsModule } from '../CodeWarsModule/CodeWarsModule.tsx';
import { AppPage } from '../AppPage/AppPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route element={<AppPage />}>
        <Route path={'/'} element={''} />
        <Route path={'/codewars'} element={<CodeWarsModule />} />
      </Route>
    </Route>
  )
);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
