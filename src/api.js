import axios from "axios";

// Cliente para las peticiones del panel de administración: envía el token automáticamente
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Si la sesión expiró o el token no es válido, se cierra la sesión y se vuelve al ingreso
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("rol");
      alert("Su sesión expiró. Ingrese de nuevo");
      window.location.href = "/Ingreso";
    }
    return Promise.reject(error);
  }
);

export default api;
