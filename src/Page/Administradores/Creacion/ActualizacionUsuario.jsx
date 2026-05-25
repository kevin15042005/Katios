import React, { act, useState } from "react";
import axios from "axios";
export default function ActualizacionUsuario({ actUsuarios }) {
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
        `${import.meta.env.VITE_API_URL}/usuario/actualizar_ususario`,
        {
          nombre,
          pin: Number(pin),
          nueva_contrasena:nuevacontrasena,
        },
      );
      alert("Usuario actualizado correctamente");
      setNombre("");
      setPin("");
      setNuevaContrasena("");
      await actUsuarios()
    } catch (error) {
      alert(error.response?.data?.message || "Error al actualizar");
    }
  };

  return (
    <>
      <div>
        <h2>Actualizar</h2>
        <form action="" className="flex flex-col items-center justify-center mb-2">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <input
            type="text"
            placeholder="nuevaContrasena"
            value={nuevacontrasena}
            onChange={(e) => setNuevaContrasena(e.target.value)}
          />
          <button  className="bg-yellow-500 p-2 rounded-2xl mt-2 " type="button"onClick={actualizarUsuario}>Actualizar</button>
        </form>
      </div>
    </>
  );
}
