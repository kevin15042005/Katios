import React, { useEffect, useState } from "react";
import axios from "axios";

import CrearCarta from "./CreacionCarta";
import ActualizarCarta from "./ActualizacionCarta";
import EliminarCarta from "./EliminarCarta";

export default function Cartas() {
  const [cartas, setCartas] = useState([]);
  const [mostrarActualizar, setMostrarActualizar] = useState(false);

  const obtenerCartas = async () => {
    try {
      setMostrarActualizar;
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/cartas/obtener_Cartas`,
      );


      setCartas(res.data);
    } catch (error) {
      console.log(error);
      alert("Error al obtener cartas");
    }
  };

  useEffect(() => {
    obtenerCartas();
  }, []);

  return (
    <section className="min-h-screen pt-40 px-6  text-white bg-[#1a1a1a]">
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
            {cartas.map((carta) => (
              <tr
                key={carta.id}
                className="border-b border-gray-700 text-center"
              >
                <td className="p-4">{carta.nombre_punto}</td>

                <td className="p-4">
                  <a
                    href={`${import.meta.env.VITE_API_URL}/pdfs/${carta.pdf}`}
                    target="_blank"
                    className="bg-red-600  p-2 rounded-lg"
                  >
                    Ver PDF
                  </a>
                </td>

                <td className="p-4 flex justify-center gap-3">
                  <button
                    onClick={() => setMostrarActualizar(carta)}
                    className="bg-blue-600 px-3 py-2 rounded-lg"
                  >
                    Editar
                  </button>

                  <EliminarCarta id={carta.id} obtenerCartas={obtenerCartas} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* POPUP EDITAR */}
      {mostrarActualizar && (
        <div className="w-x-auto fixed inset-0 bg-black/80 flex justify-center items-center ">
         
            <ActualizarCarta
              carta={mostrarActualizar}
              obtenerCartas={obtenerCartas}
              cerrarPopUp={() => setMostrarActualizar(false)}
            />
        </div>
      )}
    </section>
  );
}
