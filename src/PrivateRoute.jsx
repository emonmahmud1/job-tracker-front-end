import React from "react";
import Loading from "./components/Loading";
import { Navigate, useLocation } from "react-router";
import useAuth from "./hooks/useAuth";

const PrivateRoute = ({ children, allowedRole }) => {
   const location = useLocation();
  const { meLoading, user } = useAuth();

  const userRole = user?.user?.role;

  if (meLoading) {
    return <Loading />;
  }

  if (allowedRole?.includes(userRole)) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
