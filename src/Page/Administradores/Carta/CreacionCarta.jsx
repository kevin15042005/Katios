import React, { useState } from "react";
import axios from "axios";

export default function CrearCarta({ obtenerCartas }) {
  const [punto_id, setPuntoId] = useState("");
  const [imagen, setImagen] = useState(null);

  const crearCarta = async () => {
    if (!punto_id || !imagen) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("punto_id", punto_id);
      formData.append("imagen", imagen);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/cartas/crear_Cartas`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Carta creada correctamente");

      await obtenerCartas();

      setPuntoId("");
      setImagen(null);

    } catch (error) {
      alert(error.response?.data?.message || "Error al crear carta");
    }
  };

  return (
    <>
      <div className="bg-[#292525] p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-center">

        <input
          type="number"
          placeholder="ID Punto"
          value={punto_id}
          onChange={(e) => setPuntoId(e.target.value)}
          className="px-4 py-3 rounded-xl text-white bg-[#1f1f1f] border border-amber-500 outline-none"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
          className="text-white"
        />

        <button
          type="button"
          onClick={crearCarta}
          className="bg-amber-500 hover:bg-amber-600 transition-all duration-300 px-6 py-3 rounded-xl font-bold text-black"
        >
          Crear Carta
        </button>

      </div>
    </>
  );
}