import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import ImagenIngreso from "../../../assets/ImagenIngreso.jpeg";
import TextoEscrito from "../../../Components/Animacion/TextoEscrito";

export default function OlvidarContrasena() {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  // Datos de Backend
  const [nombre, setNombre] = useState("");
  const [pin, setPin] = useState("");
  const [nuevacontrasena, setNuevaContrasena] = useState("");
  const navigate = useNavigate();

  const actualizarUsuario = async (e) => {
    if (e) e.preventDefault();

    if (!nombre || !pin || !nuevacontrasena) {
      alert("Por favor, ingrese todos los campos necesarios");
      return;
    }

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/usuario/actualizar_usuario`,
        {
          nombre,
          pin: Number(pin),
          nueva_contrasena: nuevacontrasena,
        },
      );
      alert("Usuario actualizado correctamente");
      setNombre("");
      setPin("");
      setNuevaContrasena("");
      navigate("/Ingreso");
      
    } catch (error) {
      alert(error.response?.data?.message || "Error al actualizar");
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
      <section className="relative min-h-screen flex items-center justify-center p-40">
        <div className="absolute inset-0 bg-black z-0">
          <img
            src={ImagenIngreso}
            alt="Fondo de ingreso"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="relative max-w-3xl md:max-w-5xl mx-auto w-80 z-20">
          <div className="text-center mb-16">
                <TextoEscrito
            className="text-white text-4xl font-bebas-neue"
              texto="Recuperacion de Contraseña"
              velocidad={100}
              claseCursor="text-6xl text-amber-500 font-bebas-neue"
            />
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-b-full"></div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="bg-black/40 px-18 md:px-25  py-6 rounded-3xl">
              
              {/* Asignamos la función al onSubmit del formulario */}
              <form onSubmit={actualizarUsuario} className="w-full  ">
                <fieldset className="flex flex-col text-center mb-4">
                  <label htmlFor="" className="font-bold text-3xl mb-2 text-white  font-bebas-neue">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="border-2  bg-[#fdcb52] border-amber-50 rounded-2xl py-2 px-4 text-black font-bebas-neue"
                  />
                </fieldset>

                <fieldset className="flex flex-col text-center mb-4">
                  <label htmlFor="" className="font-bold text-3xl mb-2 text-white font-bebas-neue">
                    Pin
                  </label>
                  <input
                    type="number"
                    placeholder="Pin"
                    required
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="border-2 bg-[#f18647] border-amber-50 rounded-2xl py-2 px-4 text-white font-bebas-neue"
                  />
                </fieldset>

                <fieldset className="flex flex-col text-center mb-4">
                  <label htmlFor="" className="font-bold text-3xl mb-2 text-white font-bebas-neue">
                    Contrasena Nueva
                  </label>
                  <div className="bg-[#651e22] relative flex items-center border-2 border-amber-50 rounded-2xl py-2 px-4 font-bebas-neue">
                    <input
                      type={mostrarContrasena ? "text" : "password"}
                      placeholder="Contraseña"
                      required
                      value={nuevacontrasena}
                      onChange={(e) => setNuevaContrasena(e.target.value)}
                      className="bg-transparent w-full outline-none text-white placeholder-gray-200 font-bebas-neue"
                    />
                    <button
                      type="button"
                      onClick={() => setMostrarContrasena(!mostrarContrasena)}
                      className="text-white"
                    >
                      <span>{mostrarContrasena ? <EyeOff /> : <Eye />}</span>
                    </button>
                  </div>
                </fieldset>
                  {/* El botón cambió a type="submit" y está dentro de su contenedor estético */}
                <div className="font-bold flex justify-center text-center items-center bg-[#4c161a] border-2 border-yellow-400 p-4 rounded-2xl pt-2 mt-6 hover:bg-[#651e22] transform-3d duration-300">
                  <button type="submit" className="w-full h-full text-white font-bebas-neue">
                    Actualizar
                  </button>
                </div>

                {/* El enlace ahora está correctamente protegido dentro del form */}
                <div className="flex justify-center gap-4 font-bold text mt-6  hover:text-[#fdcb52] transition-all duration-400 text-white font-bebas-neue ">
                  <Link to={"/Ingreso"} onClick={handleRedirect}>
                    Volver
                  </Link>
                </div>

              
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}