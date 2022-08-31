import React, { Routes, Route } from 'react-router-dom';
import AppRoutes from './routes';
import AuthMiddleware from './middleware/authmiddleware';
import PageNotFound from '../pages/PageNotFound';

function Router() {
  return (
    <Routes>
      {AppRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<AuthMiddleware route={route} />}
        >
          { route?.nestedRoute?.length > 0 ? (route.nestedRoute.map((childRoute) => (
            <Route
              index={childRoute.index}
              key={childRoute.path}
              path={childRoute.index ? null : childRoute.path}
              element={<AuthMiddleware route={childRoute} />}
            />
          ))) : null}
        </Route>
      ))}
      {/* in case the path of user is not defined  */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
