import React, { useContext } from "react";
import { Route, Redirect, Navigate } from "react-router-dom";

import {
  userAuthContext,
  UserAuthContextProvider,
} from "./Context/UserAuthCotextProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(userAuthContext);

  return !user ? <Navigate to="/" /> : children;
};

export default PrivateRoute;
