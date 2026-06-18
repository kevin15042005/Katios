import React, { useState } from "react";
import axios from "axios";

export default function CrearCarta({ obtenerCartas }) {
  const [punto_id, setPuntoId] = useState("");
  const [pdf, setPdf] = useState(null);

  const crearCarta = async (e) => {
    if (e) e.preventDefault();

    if (!punto_id || !pdf) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("punto_id", punto_id);
      formData.append("pdf", pdf);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/cartas/crear_cartas`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("PDF creado correctamente");
      await obtenerCartas();

      // Limpiamos los estados de forma correcta
      setPuntoId("");
      setPdf(null);

    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message || "Error al crear PDF"
      );
    }
  };

  return (
    <div className="bg-[#292525] p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-center">
      
      <input
        type="number"
        placeholder="ID Punto"
        value={punto_id}
        onChange={(e) => setPuntoId(e.target.value)}
        className="px-4 py-3 rounded-xl text-white bg-[#1f1f1f] border border-amber-500 outline-none w-full md:w-auto"
      />

      <label className="flex items-center justify-center gap-2 bg-[#3a3535] hover:bg-[#4a4545] border border-dashed border-gray-500 text-white font-medium px-4 py-3 rounded-xl cursor-pointer shadow-md transition-all duration-300 w-full text-center project-upload-label">
        
        <span className="truncate max-w-xs">
          {pdf ? `📄 ${pdf.name}` : "Seleccionar PDF"}
        </span>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setPdf(e.target.files?.[0] || null)}
          className="hidden" 
        />
      </label>

      <button
        type="button"
        onClick={crearCarta}
        className="bg-amber-500 hover:bg-amber-600 transition-all duration-300 px-10 py-3 rounded-xl font-bold text-black w-full md:w-auto"
      >
        Crear PDF
      </button>

    </div>
  );
}