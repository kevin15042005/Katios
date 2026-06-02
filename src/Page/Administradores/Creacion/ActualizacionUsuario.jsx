import React, { act, useState } from "react";
import axios from "axios";
export default function ActualizacionUsuario({ actUsuarios, cerrarPopUp }) {
  const [nombre, setNombre] = useState("");
  const [pin, setPin] = useState("");
  const [nuevacontrasena, setNuevaContrasena] = useState("");

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
      await actUsuarios();
      cerrarPopUp();
    } catch (error) {
      alert(error.response?.data?.message || "Error al actualizar");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 relative pt-8 w-80">
        <button
          className="absolute -top-2 -right-2 bg-amber-500 hover:bg-red-700 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          onClick={cerrarPopUp}
        >
          ✖
        </button>
        <div className="flex justify-center items-center font-bold text-2xl">
          <h2>Actualizar</h2>
        </div>
        <form
          action=""
          className="flex flex-col items-center justify-center my-2 "
        >
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
                        className="text-center border-2 rounded-2xl p-2 mb-2"

          />
          <input
            type="text"
            placeholder="Pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
                        className="text-center border-2 rounded-2xl p-2 mb-2"

          />
          <input
            type="text"
            placeholder="ueva Contrasena"
            value={nuevacontrasena}
            onChange={(e) => setNuevaContrasena(e.target.value)}
                        className="text-center border-2 rounded-2xl p-2 mb-2"

          />
          <button
            className="bg-amber-500 py-4 px-6 rounded-2xl mt-4 hover:bg-green-400 transition-all duration-300"
            type="button"
            onClick={actualizarUsuario}
          >
            Actualizar
          </button>
        </form>
      </div>
    </>
  );
}
