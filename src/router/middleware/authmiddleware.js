/* eslint-disable no-else-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useNavigate } from "react-router-dom";

function AuthMiddleware(props) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { route } = props;
  const navigate = useNavigate();
  const isPublicRoute = route?.meta?.isPublicRoute;
  // we check if the route is public route
  const userRole = "admin";
  //this is userRole that will be dynamic according to user

  if (!isPublicRoute && !token) {
    /**
     ** If user is not Logged in & route meta is undefined
     ** OR
     ** If user is not Logged in & route.meta.isPublicRoute, !route.meta.publicRoute are undefined
     ** Then redirect user to login
     */

    return navigate("/");
  } else if (!isPublicRoute && !route.authorizedRoles?.includes(userRole)) {
    // ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)
    // return <Redirect to="/" />;
    return navigate("/");
  } else {
    // ** If none of the above render component
    return <route.component {...props} />;
  }
}

export default AuthMiddleware;
