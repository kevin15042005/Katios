import Layout from "./Components/Layout/LayoutMain";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./style.css";
import RutaProtegida from "./Components/RutaProtegida/RutaProtegida";

//Importacion de Usuario
import App from "./Page/Usuario/Principal/App";
import Nosotros from "./Page/Usuario/Nosotros/Nosotros";
import Politicas from "./Page/Usuario/Politicas/Politicas";
import Ingreso from "./Page//Usuario/Ingreso/Ingreso";
import OlvidarContrasena from "./Page/Usuario/Ingreso/OlvidarContrasena";

//Page Katios

import KatiosInter from "./Page/Usuario/Sedes/KatiosInter";
import KatiosPuente from "./Page/Usuario/Sedes/KatiosPuente";
import KatiosPlazoleta from "./Page/Usuario/Sedes/KatiosPlazoleta";
import KatiosToGo from "./Page/Usuario/Sedes/KatiosToGo";
import KatiosRt11 from "./Page/Usuario/Sedes/KatiosRt11";
import KatiosFuncionario from "./Page/Usuario/Sedes/KatiosFuncionario";
//Importacion de Administradores

import Creacion from "./Page/Administradores/Creacion/TablaUsuario";
import Cartas from "./Page/Administradores/Carta/Cartas";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/*Rutas Publicas*/}
          <Route path="/" element={<App />}></Route>
          <Route path="/Nosotros" element={<Nosotros />}></Route>
          <Route path="/Politicas" element={<Politicas />}></Route>
          <Route path="/Ingreso" element={<Ingreso />}></Route>

          {/*Rutas de Katios*/}

          <Route path="/KatiosInter" element={<KatiosInter />}></Route>
          <Route path="/KatiosRt11" element={<KatiosRt11 />}></Route>
          <Route path="/KatiosPuente" element={<KatiosPuente />}></Route>
          <Route path="/KatiosPlazoleta" element={<KatiosPlazoleta />}></Route>
          <Route path="/KatiosToGo" element={<KatiosToGo />}></Route>
          <Route
            path="/KatiosFuncionario"
            element={<KatiosFuncionario />}
          ></Route>

          {/*Ingreso de Admin*/}
          <Route
            path="/OlvidarContrasena"
            element={<OlvidarContrasena />}
          ></Route>
          {/*Rutas Administrador*/}

          <Route
            path="/admin/tablaUsuario"
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
