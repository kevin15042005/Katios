import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import axios from "axios";
export default function OlvidarContrasena() {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  //Datos de Backend

  const [nombre, setNombre] = useState("");
  const [pin, setPin] = useState("");
  const [nuevacontrasena, setNuevaContrasena] = useState("");
  const navigate = useNavigate()

  const actualizarUsuario = async () => {
    if (!pin || !nuevacontrasena) {
      alert("Ingrese la contrasena nueva");
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
      navigate("/Ingreso")
      
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
      <section className="min-h-screen pt-40 bg-gray-500 pb-10">
        <div className="max-w-3xl md:max-w-5xl mx-auto w-80">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Recuperacion Contrasena
            </h1>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-b-full   "></div>
          </div>{" "}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-200/20 py-20 px-18 rounded-3xl">
              <form
                action="
                "
              >
                <fieldset className="flex flex-col text-center mb-4 ">
                  <label htmlFor="" className="font-bold text-3xl  mb-2">
                    Nombre{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre "
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="border-2 bg-yellow-400 border-amber-50 rounded-2xl py-2 px-4"
                  />
                </fieldset>
                <fieldset className="flex flex-col text-center mb-4">
                  <label htmlFor="" className="font-bold text-3xl  mb-2">
                    Pin
                  </label>
                  <input
                    type="number"
                    placeholder="Pin "
                    required
                    value={pin}
                    onChange={(e)=>setPin(e.target.value)}
                    className="border-2 bg-blue-600 border-amber-50 rounded-2xl py-2 px-4"
                  />
                </fieldset>
                <fieldset className="flex flex-col text-center mb-4 ">
                  <label htmlFor="" className="font-bold text-3xl  mb-2">
                    Contrasena Nueva
                  </label>
                  <div className=" bg-red-600 relative flex items-center border-2 border-amber-50 rounded-2xl py-2 px-4">
                    <input
                      type={mostrarContrasena ? "text" : "password"}
                      placeholder="Contraseña "
                      required
                      value={nuevacontrasena}
                      onChange={(e)=>setNuevaContrasena(e.target.value)}
                      className="bg-transparent w-full outline-none"
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
                <Link to={"/Ingreso"} onClick={handleRedirect}>
                  Volver
                </Link>
              </div>
              <div className="font-bold flex justify-center text-center items-center bg-[#ff0000] p-4 rounded-2xl pt-2 mt-6  hover:bg-red-600 transform-3d duration-300">
                <button type="button" onClick={actualizarUsuario}>Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
