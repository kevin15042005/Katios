import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QR from "../../../Components/QR/QR"
export default function Ingreso() {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  //Datos ingreso backend
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");

  //Redireccion de navegacion
  const navigate = useNavigate();

  //Conexion a backend ingreso

  const handleLogin = async (e) => {

if (e) e.preventDefault(); 

    if (!nombre || !contrasena) {
      alert("Ingreso los campos necesarios");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/usuario/entrada_usuario`,
        {
          nombre,
          contrasena,
        },
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
      alert(error.response?.data?.message || "Erro al iniciar sesion");
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
      <section className="min-h-screen pt-40 bg-gray-500 p-20">
        <div className="max-w-3xl md:max-w-5xl mx-auto w-full">
          <div className="text-center mb-16  ">
            <h1 className="text-5xl font-bold text-white mb-4">
              Ingreso Sistema
            </h1>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-b-full   "></div>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className=" bg-gray-200/20 py-20 px-14  rounded-3xl ">
              <form onSubmit={handleLogin}  action="" className="flex flex-col my-2 gap-7 ">
                <fieldset className="flex flex-col text-center">
                  <label htmlFor="" className="font-bold text-3xl  mb-2">Nombre</label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="border-2 bg-yellow-400 border-amber-50 rounded-2xl py-2 px-4"
                  />
                </fieldset>
                <fieldset className="flex flex-col text-center">
                  <label htmlFor="" className="font-bold text-3xl mb-2">Contrasena</label>
                  <div className="relative flex items-center  bg-blue-700 border-2 border-amber-50 rounded-2xl py-2 px-4">
                    <input
                      type={mostrarContrasena ? "text" : "password"}
                      placeholder="Contrasena"
                      value={contrasena}
                      onChange={(e) => setContrasena(e.target.value)}
                      className=" w-full outline-none "
                    />
                    <button
                      type="button"
                      onClick={() => setMostrarContrasena(!mostrarContrasena)}
                    >
                      <span>{mostrarContrasena ? <EyeOff /> : <Eye />}</span>
                    </button>
                  </div>
                </fieldset>
              </form>
              <div className="flex gap-4  font-bold text mt-6 hover:text-blue-300 transition-all duration-400">
                <Link to={"/OlvidarContrasena"} onClick={handleRedirect}>
                  Olvidaste tu Contrasena
                </Link>
              </div>
              <div className="font-bold flex justify-center text-center items-center bg-[#ff0000] p-4 rounded-2xl pt-2 mt-6  hover:bg-red-600 transform-3d duration-300">
                <button className="" onClick={handleLogin}>Ingresar</button>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
}
