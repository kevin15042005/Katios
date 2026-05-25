import React from "react";
import { Navigate } from "react-router-dom";

export default function RutaProtegida({ children, role }) {
  const userRole = localStorage.getItem("rol");

  if (role && userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
}