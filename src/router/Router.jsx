import React from "react";
import AppRoutes from "./routes";
import { Routes, Route } from "react-router-dom";
import AuthMiddleware from "./middleware/authmiddleware";
import PageNotFound from "../pages/PageNotFound";
const Router = () => {
  return (
    <Routes>
      {AppRoutes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={<AuthMiddleware route={route} />}
          ></Route>
        );
      })}
      {/* in case the path of user is not defined  */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
