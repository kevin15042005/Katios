import React, { useState } from "react";
import axios from "axios";
export default function CreacionUsuario({ creaUsuarios }) {
  const [nombre, setNombre] = useState("");
  const [pin, setPin] = useState("");
  const [es_admin,setEs_admin] = useState("")

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

    } catch (error) {
      alert(error.response?.data?.message || "Erro al crear usuario");
    }
  };

  return (
    <>
      <div>
        <h2>Creacion Usuario</h2>
        <form
          action=""
          className="flex flex-col items-center justify-center mb-2 "
        >
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
            placeholder="Contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <input
            type="text"
            placeholder="id Admin"
            value={es_admin}
            onChange={(e) => setEs_admin(e.target.value)}
          />

          <button
            type="button"
            className="bg-amber-500 py-4 px-6 rounded-2xl mt-4"
            onClick={crearUsuario}
          >
            Crear Usuario
          </button>
        </form>
      </div>
    </>
  );
}
