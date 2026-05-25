import React from "react";
import axios from "axios";

export default function EliminarCarta({ id, obtenerCartas }) {

  const eliminarCarta = async () => {

    const confirmar = window.confirm(
      `¿Desea eliminar la carta con ID ${id}?`
    );

    if (!confirmar) return;

    try {

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/cartas/eliminar_Carta/${id}`
      );

      alert("Carta eliminada correctamente");

      await obtenerCartas();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Error al eliminar carta"
      );

    }
  };

  return (
    <>
      <button
        type="button"
        onClick={eliminarCarta}
        className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-4 py-2 rounded-xl text-white font-bold"
      >
        🗑 Eliminar
      </button>
    </>
  );
}