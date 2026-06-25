import React, { useEffect, useState } from "react";
import axios from "axios";

import CrearCarta from "./CreacionCarta";
import ActualizarCarta from "./ActualizacionCarta";
import EliminarCarta from "./EliminarCarta";

export default function Cartas() {
  const [cartas, setCartas] = useState([]);
  const [mostrarActualizar, setMostrarActualizar] = useState(false);
  const [cargando, setCargando] = useState(false); // 👈 Añadimos estado de carga

  const obtenerCartas = async () => {
    try {
      setCargando(true);
      // Corregido: Si se actualizan las cartas, cerramos cualquier PopUp activo de forma segura
      setMostrarActualizar(false); 

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/cartas/obtener_Cartas`,
      );

      setCartas(res.data);
    } catch (error) {
      console.log(error);
      alert("Error al obtener cartas");
    } finally {
      setCargando(false); // Apagamos el estado de carga pase lo que pase
    }
  };
  console.log("Cartas cargadas", cartas);

  useEffect(() => {
    obtenerCartas();
  }, []);

  return (
    <section className="min-h-screen pt-40 px-6 text-white bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col justify-between items-center mb-10">
          <h1 className="text-4xl font-black mb-6">Gestión de Cartas PDF</h1>
          <CrearCarta obtenerCartas={obtenerCartas} />
        </div>

        {/* TABLE */}
        <table className="w-full bg-[#292525] rounded-xl overflow-hidden">
          <thead className="bg-amber-500 text-black">
            <tr>
              <th className="p-4">Punto</th>
              <th className="p-4">PDF</th>
              <th className="p-4">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {cargando ? (
              <tr>
                <td colSpan="3" className="p-10 text-center text-amber-500 font-bold">
                  Cargando documentos desde el servidor...
                </td>
              </tr>
            ) : cartas.length === 0 ? (
              <tr>
                <td colSpan="3" className="p-10 text-center text-gray-400">
                  No hay cartas PDF registradas.
                </td>
              </tr>
            ) : (
              cartas.map((carta) => (
                <tr
                  key={carta.id}
                  className="border-b border-gray-700 text-center"
                >
                  {/* 💡 REVISIÓN: Si te sale vacío, cambia 'nombre_punto' por 'punto_id' */}
                  <td className="p-4 font-bold">{carta.nombre_punto || `ID: ${carta.punto_id}`}</td>

                  <td className="p-4">
                    <a
                      href={`${import.meta.env.VITE_API_URL}/pdfs/${carta.pdf}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-red-600 hover:bg-red-700 transition-all duration-300 p-2 rounded-lg inline-block text-sm font-bold"
                    >
                      Ver PDF
                    </a>
                  </td>

                  <td className="p-4 flex justify-center gap-3 items-center">
                    <button
                      onClick={() => setMostrarActualizar(carta)}
                      className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-3 py-2 rounded-lg text-sm font-bold"
                    >
                      Editar
                    </button>

                    <EliminarCarta id={carta.id} obtenerCartas={obtenerCartas} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* POPUP EDITAR */}
      {mostrarActualizar && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-[#292525] p-6 rounded-2xl border border-gray-700 w-full max-w-md mx-4">
            <ActualizarCarta
              carta={mostrarActualizar}
              obtenerCartas={obtenerCartas}
              cerrarPopUp={() => setMostrarActualizar(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}