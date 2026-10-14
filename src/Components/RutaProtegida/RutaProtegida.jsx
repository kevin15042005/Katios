import React from "react";
import { Navigate } from "react-router-dom";

// Solo para la interfaz: la seguridad real la hace el backend verificando el token
export default function RutaProtegida({ children }) {
  const token = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");

  if (!token || Number(rol) !== 1) {
    return <Navigate to="/Ingreso" replace />;
  }

  return children;
}
