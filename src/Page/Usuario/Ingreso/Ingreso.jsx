import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QR from "../../../Components/QR/QR";
import ImagenIngreso from "../../../assets/ImagenIngreso.jpeg";

export default function Ingreso() {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (e) e.preventDefault();

    if (!nombre || !contrasena) {
      alert("Ingreso los campos necesarios");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/usuario/entrada_usuario`,
        { nombre, contrasena }
      );

      console.log(res.data.usuario);
      localStorage.setItem("rol", res.data.usuario.es_admin);
      alert(`Bienvenido usuario ${res.data.usuario.nombre_usuario}`);

      const esAdmin = Number(res.data.usuario.es_admin);
      localStorage.setItem("rol", esAdmin);
      if (esAdmin === 1) {
        window.dispatchEvent(new Event("storage"));
        navigate("/admin/tablaUsuario");
      } else {
        localStorage.removeItem("rol");
        window.dispatchEvent(new Event("storage"));
        navigate("/");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Error al iniciar sesión");
    }
  };

  const handleRedirect = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      {/* Añadimos relative para que sea el contenedor padre del fondo */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        
        {/* CAPA DE FONDO: Ocupa el 100% del contenedor padre */}
        <div className="absolute inset-0 bg-black z-0">
          <img
            src={ImagenIngreso}
            alt="Fondo de ingreso"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* CONTENIDO: Con z-10 para posicionarse por encima de la imagen */}
        <div className="relative z-10 max-w-3xl md:max-w-5xl mx-auto w-full px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Ingreso Sistema
            </h1>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-b-full"></div>
          </div>

          <div className="flex flex-col items-center justify-center">
            {/* Agregamos un fondo semi-transparente opcional al formulario para mejorar legibilidad */}
            <form
              onSubmit={handleLogin}
              className="flex flex-col my-2 gap-7 bg-black/40 p-8 rounded-3xl backdrop-blur-sm"
            >
              <fieldset className="flex flex-col text-center">
                <label className="font-bold text-3xl mb-2 text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="border-2 bg-yellow-400 text-slate-900 font-medium border-amber-50 rounded-2xl py-2 px-4 outline-none"
                />
              </fieldset>

              <fieldset className="flex flex-col text-center">
                <label className="font-bold text-3xl mb-2 text-white">
                  Contraseña
                </label>
                <div className="relative flex items-center bg-blue-700 border-2 border-amber-50 rounded-2xl py-2 px-4">
                  <input
                    type={mostrarContrasena ? "text" : "password"}
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    className="w-full bg-transparent text-white placeholder-blue-200 outline-none pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setMostrarContrasena(!mostrarContrasena)}
                    className="absolute right-4 text-white"
                  >
                    {mostrarContrasena ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </fieldset>

              <div className="flex gap-4 font-bold mt-2 text-white hover:text-blue-300 transition-all duration-400 justify-center">
                <Link to={"/OlvidarContrasena"} onClick={handleRedirect}>
                  ¿Olvidaste tu Contraseña?
                </Link>
              </div>

              <div className="font-bold flex justify-center text-center items-center bg-[#ff0000] rounded-2xl transition-all duration-300 hover:bg-red-600 overflow-hidden">
                <button type="submit" className="w-full py-4 px-8 text-white">
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}