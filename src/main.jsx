import Layout from "./Components/Layout/LayoutMain";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./style.css";
import RutaProtegida from "./Components/RutaProtegida/RutaProtegida";

//Importacion de Usuario
import App from "./Page/Usuario/Principal/App";
import Nosotros from "./Page/Usuario/Nosotros/Nosotros";
import Katios from "./Page/Usuario/Sedes/Katios";
import KatiosInter from "./Page/Usuario/Sedes/KatiosInter";
import Politicas from "./Page/Usuario/Politicas/Politicas";
import Ingreso from "./Page//Usuario/Ingreso/Ingreso";
import OlvidarContrasena from "./Page/Usuario/Ingreso/OlvidarContrasena";

//Importacion de Administradores

import Creacion from "./Page/Administradores/Creacion/TablaUsuario";
import UsuarioAdmin from "./Page/Administradores/Usuarios";
import Cartas from "./Page/Administradores/Carta/Cartas";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/*Rutas Publicas*/}
          <Route path="/" element={<App />}></Route>
          <Route path="/Nosotros" element={<Nosotros />}></Route>
          <Route path="/Katios" element={<Katios />}></Route>
          <Route path="/KatiosInter" element={<KatiosInter />}></Route>
          <Route path="/Politicas" element={<Politicas />}>
            {" "}
          </Route>
          <Route path="/Ingreso" element={<Ingreso />}></Route>
          <Route
            path="/OlvidarContrasena"
            element={<OlvidarContrasena />}
          ></Route>
          {/*Rutas Administrador*/}

          <Route
            path="/admin"
            element={
              <RutaProtegida>
                <UsuarioAdmin />
              </RutaProtegida>
            }
          />

          <Route
            path="/admin/usuarios"
            element={
              <RutaProtegida>
                <Creacion />
              </RutaProtegida>
            }
          />

          <Route
            path="/admin/cartas"
            element={
              <RutaProtegida>
                <Cartas />
              </RutaProtegida>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
