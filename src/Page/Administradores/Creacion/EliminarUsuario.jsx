import React, { useState } from "react";
import axios from "axios";

export default function EliminarUsuario({
  idUsuario,
  nombreUsuario,
  eliminarUsu,
}) {
  const eliminarUsuario = async () => {
    const confirmar = window.confirm(
      `Desea eliminar a el Administrador ${nombreUsuario} ?`
    );

    if (!confirmar) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/usuario/eliminar_usuario/${idUsuario}`,
      );
      alert("Usuario eliminado correctamente");
      await eliminarUsu();
    } catch (error) {
      alert(error.response?.data?.message || "Error a eliminar usuario");
    }
  };

  return (
    <>
      <button
        className="bg-red-500 text-white px-3 py-2 rounded-xl"
        onClick={eliminarUsuario}
      >
        {" "}
        🗑
      </button>
    </>
  );
}
