import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check if token is present

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/" /> // Redirect to login or another route
  );
};

export default ProtectedRoute;
