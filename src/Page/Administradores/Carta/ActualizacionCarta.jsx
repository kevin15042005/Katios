import React, { useState } from "react";
import axios from "axios";

export default function ActualizarCarta({
  carta,
  obtenerCartas,
}) {

  const [punto_id, setPuntoId] = useState(carta.punto_id || "");
  const [imagen, setImagen] = useState(null);

  const actualizarCarta = async () => {

    if (!punto_id) {
      alert("El punto es obligatorio");
      return;
    }

    try {

      const formData = new FormData();

      formData.append("id", carta.id);
      formData.append("punto_id", punto_id);

      if (imagen) {
        formData.append("imagen", imagen);
      }

      await axios.put(
        `${import.meta.env.VITE_API_URL}/cartas/actualizar_Cartas`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Carta actualizada correctamente");

      await obtenerCartas();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Error al actualizar carta"
      );

    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 bg-[#292525] p-4 rounded-2xl">

        <input
          type="number"
          placeholder="ID Punto"
          value={punto_id}
          onChange={(e) => setPuntoId(e.target.value)}
          className="px-4 py-3 rounded-xl bg-[#1f1f1f] border border-amber-500 text-white outline-none"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
          className="text-white"
        />

        <button
          type="button"
          onClick={actualizarCarta}
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-4 py-3 rounded-xl text-white font-bold"
        >
          ✏ Actualizar
        </button>

      </div>
    </>
  );
}