import React, { useState } from "react";
import api from "@/api";

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
      await api.delete(
        `/usuario/eliminar_usuario/${idUsuario}`,
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
