<<<<<<< Updated upstream
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppRoutes from './routes';
import AuthMiddleware from './middleware/authmiddleware';
import PageNotFound from '../pages/PageNotFound';

function Router() {
=======
import React, { Children } from "react";
import AppRoutes from "./routes";
import { Routes, Route } from "react-router-dom";
import AuthMiddleware from "./middleware/authmiddleware";
import PageNotFound from "../pages/PageNotFound";
const Router = () => {
>>>>>>> Stashed changes
  return (
    <Routes>
      {AppRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<AuthMiddleware route={route} />}
        />
      ))}
      {/* in case the path of user is not defined  */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
