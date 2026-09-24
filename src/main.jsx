import Layout from "./Components/Layout/LayoutMain";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurtainTransition from "./Components/Animacion/CurtainTransition";
import "./style.css";
import RutaProtegida from "./Components/RutaProtegida/RutaProtegida";

// Tus importaciones de páginas...
import App from "./Page/Usuario/Principal/App";
import Nosotros from "./Page/Usuario/Nosotros/Nosotros";
import Politicas from "./Page/Usuario/Politicas/Politicas";
import Ingreso from "./Page/Usuario/Ingreso/Ingreso";
import KatiosInter from "./Page/Usuario/Sedes/KatiosInter";
import KatiosRt11 from "./Page/Usuario/Sedes/KatiosRt11";
import KatiosPuente from "./Page/Usuario/Sedes/KatiosPuente";
import KatiosPlazoleta from "./Page/Usuario/Sedes/KatiosPlazoleta";
import KatiosToGo from "./Page/Usuario/Sedes/KatiosToGo";
import KatiosFuncionario from "./Page/Usuario/Sedes/KatiosFuncionario";
import OlvidarContrasena from "./Page/Usuario/Ingreso/OlvidarContrasena";
import Creacion from "./Page/Administradores/Creacion/TablaUsuario";
import Cartas from "./Page/Administradores/Carta/Cartas";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CurtainTransition>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Politicas" element={<Politicas />} />
            <Route path="/Ingreso" element={<Ingreso />} />
            <Route path="/KatiosInter" element={<KatiosInter />} />
            <Route path="/KatiosRt11" element={<KatiosRt11 />} />
            <Route path="/KatiosPuente" element={<KatiosPuente />} />
            <Route path="/KatiosPlazoleta" element={<KatiosPlazoleta />} />
            <Route path="/KatiosToGo" element={<KatiosToGo />} />
            <Route path="/KatiosFuncionario" element={<KatiosFuncionario />} />
            <Route path="/OlvidarContrasena" element={<OlvidarContrasena />} />
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
      </CurtainTransition>
    </BrowserRouter>
  </StrictMode>
);