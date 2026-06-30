import React, { useEffect, useState } from "react";
import axios from "axios";

import CrearCarta from "./CreacionCarta";
import ActualizarCarta from "./ActualizacionCarta";
import EliminarCarta from "./EliminarCarta";

export default function Cartas() {
  const [cartas, setCartas] = useState([]);
  const [mostrarActualizar, setMostrarActualizar] = useState(false);
  const [cargando, setCargando] = useState(false);

  const obtenerCartas = async () => {
    try {
      setCargando(true);
      setMostrarActualizar(false); 

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/cartas/obtener_Cartas`,
      );

      setCartas(res.data);
    } catch (error) {
      console.log(error);
      alert("Error al obtener cartas");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerCartas();
  }, []);

  return (
    <section className="min-h-screen pt-40 px-4 md:px-6 text-white bg-[#1a1a1a] w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 w-full">
          <h1 className="text-3xl md:text-4xl font-black text-center sm:text-left">Gestión de Cartas PDF</h1>
          <CrearCarta obtenerCartas={obtenerCartas} />
        </div>

        {/* CONTENEDOR CON SCROLL RESPONSIVO */}
        <div className="w-full overflow-x-auto rounded-xl shadow-lg bg-[#292525]">
          <table className="w-full min-w-[600px] table-auto border-collapse">
            <thead className="bg-amber-500 text-black">
              <tr>
                <th className="p-3 md:p-4 text-sm md:text-base">Punto</th>
                <th className="p-3 md:p-4 text-sm md:text-base">PDF</th>
                <th className="p-3 md:p-4 text-sm md:text-base">Acciones</th>
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
                    className="border-b border-gray-700 text-center hover:bg-black/20 transition-colors"
                  >
                    <td className="p-3 md:p-4 font-bold text-sm md:text-base max-w-[200px] truncate">
                      {carta.nombre_punto || `ID: ${carta.punto_id}`}
                    </td>

                    <td className="p-3 md:p-4">
                      <a
                        href={`${import.meta.env.VITE_API_URL}/pdfs/${carta.pdf}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-3 py-1.5 rounded-lg inline-block text-xs md:text-sm font-bold whitespace-nowrap"
                      >
                        Ver PDF
                      </a>
                    </td>

                    <td className="p-3 md:p-4">
                      <div className="flex justify-center gap-2 items-center min-w-[120px]">
                        <button
                          onClick={() => setMostrarActualizar(carta)}
                          className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold"
                        >
                          Editar
                        </button>
                        <EliminarCarta id={carta.id} obtenerCartas={obtenerCartas} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* POPUP EDITAR */}
      {mostrarActualizar && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
          <div className="bg-[#292525] p-6 rounded-2xl border border-gray-700 w-full max-w-md max-h-[90vh] overflow-y-auto">
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