import axios from "axios";
import React, { useState } from "react";

export default function ActualizacionCarta({
  carta,
  obtenerCartas,
  cerrarPopUp, 
}) {
  const [punto_id, setPuntoId] = useState(carta.punto_id);
  const [pdf, setPdf] = useState(null);

  const actualizarCarta = async () => {
    if (!punto_id) {
      alert("El ID del punto es obligatorio");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("id", carta.id);
      formData.append("punto_id", punto_id);
      
      if (pdf) {
        formData.append("pdf", pdf);
      }

      await axios.put(
        `${import.meta.env.VITE_API_URL}/cartas/actualizar_Cartas`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        },
      );
      alert("PDF Actualizado");

      await obtenerCartas();
      cerrarPopUp(); 
    } catch (error) {
      console.log(error);
      alert("Error al actualizar PDF");
    }
  };

  return (
    <div className="flex flex-col gap-6 relative pt-8 w-full max-w-md">
      
      <button
        className="absolute -top-2 -right-2 bg-amber-500 hover:bg-amber-700 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        onClick={cerrarPopUp} 
      >
        ✕
      </button>

      {/* INPUT PUNTO */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-300 font-medium text-sm">ID del Punto</label>
        <input
          type="number"
          value={punto_id}
          onChange={(e) => setPuntoId(e.target.value)}
          className="p-3 rounded-xl bg-[#1f1f1f] text-white border border-gray-700 focus:outline-none focus:border-amber-500"
        />
      </div>

      {/* PDF ACTUAL */}
      <div className="flex flex-col gap-3">
        <h2 className="text-white text-xl font-bold">PDF actual</h2>
        <a
          href={`${import.meta.env.VITE_API_URL}/pdfs/${carta.pdf}`}
          target="_blank"
          rel="noreferrer"
          className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-4 py-3 rounded-xl text-white text-center font-bold"
        >
          Ver PDF
        </a>
      </div>

      {/* NUEVO PDF */}
      <div className="flex flex-col gap-3">
        <h2 className="text-white text-xl font-bold">Reemplazar PDF</h2>
        <label className="flex items-center justify-center gap-2 bg-[#3a3535] hover:bg-[#4a4545] border border-dashed border-gray-500 text-white font-medium px-4 py-3 rounded-xl cursor-pointer shadow-md transition-all duration-300 w-full text-center">
          <span>{pdf ? pdf.name : "Seleccionar archivo PDF"}</span>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setPdf(e.target.files[0])}
            className="hidden" 
          />
        </label>
      </div>

      {/* BOTÓN ACTUALIZAR */}
      <button
        onClick={actualizarCarta}
        className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-4 py-3 rounded-xl text-white font-bold mt-2"
      >
        Actualizar PDF
      </button>
    </div>
  );
}