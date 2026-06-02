import React, { useState } from "react";
import axios from "axios";
export default function CreacionUsuario({ creaUsuarios, cerrarPopUp }) {
  const [nombre, setNombre] = useState("");
  const [pin, setPin] = useState("");
  const [es_admin, setEs_admin] = useState("");

  const [contrasena, setContrasena] = useState("");

  const crearUsuario = async () => {
    if (!nombre || !pin || !contrasena || !es_admin) {
      alert("Todos los campos son obligatorios");
      return;
    }
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/usuario/crear_usuario`,
        {
          nombre,
          pin: Number(pin),
          contrasena,
          es_admin,
        },
      );
      alert("Usuario creado correctamente");
      await creaUsuarios();
      setNombre("");
      setPin("");
      setContrasena("");
      setEs_admin("");
      cerrarPopUp();
    } catch (error) {
      alert(error.response?.data?.message || "Erro al crear usuario");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 relative pt-8 w-80">
        <button
          className="absolute -top-2 -right-2 bg-amber-500 hover:bg-red-700 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          onClick={cerrarPopUp}
        >
          {" "}
          ✖
        </button>
        <div className="flex justify-center items-center font-bold text-2xl">
          <h2>Creacion Usuario</h2>
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
            placeholder="Contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className="text-center border-2 rounded-2xl p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Id Admin"
            value={es_admin}
            onChange={(e) => setEs_admin(e.target.value)}
            className="text-center border-2 rounded-2xl p-2 mb-2"
          />

          <button
            type="button"
            className="bg-amber-500 py-4 px-6 rounded-2xl mt-4 hover:bg-green-400 transition-all duration-300"
            onClick={crearUsuario}
          >
            Crear Usuario
          </button>
        </form>
      </div>
    </>
  );
}
