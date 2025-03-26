import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userName = useSelector((state) => state.mernQuize.userName);

  // If the user is not logged in, redirect to the login page
  if (!userName) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the children components
  return children;
};

export default ProtectedRoute;