import React, { useEffect, useState } from "react";
import axios from "axios";

import CrearCarta from "./CreacionCarta";
import EliminarCarta from "./EliminarCarta";
import ActualizarCarta from "./ActualizacionCarta";

export default function Cartas() {

  const [cartas, setCartas] = useState([]);
  const [cartaSeleccionada, setCartaSeleccionada] = useState(null);

  const obtenerCartas = async () => {

    try {

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/cartas/obtener_Cartas`
      );

      setCartas(res.data);

    } catch (error) {

      alert("Error al obtener cartas");

    }
  };

  useEffect(() => {
    obtenerCartas();
  }, []);

  return (
    <>
      <section className="min-h-screen pt-40 px-6 text-white">

        <div className="max-w-7xl mx-auto">

          {/* TITULO */}

          <div className="flex justify-between items-center mb-10">

            <h1 className="text-5xl font-bold">
              Gestión de Cartas
            </h1>

            <CrearCarta obtenerCartas={obtenerCartas} />

          </div>

          {/* TABLA */}

          <div className="overflow-x-auto">

            <table className="w-full bg-[#292525] rounded-2xl overflow-hidden">

              <thead className="bg-amber-600 text-black">

                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Punto</th>
                  <th className="p-4">Imagen</th>
                  <th className="p-4">Acciones</th>
                </tr>

              </thead>

              <tbody>

                {cartas.map((carta) => (

                  <tr
                    key={carta.id}
                    className="border-b border-gray-700 text-center"
                  >

                    <td className="p-4">
                      {carta.id}
                    </td>

                    <td className="p-4">
                      {carta.nombre_punto}
                    </td>

                    <td className="p-4">

                      <button
                        onClick={() =>
                          window.open(
                            `${import.meta.env.VITE_API_URL}/imagenes/${carta.imagen}`,
                            "_blank"
                          )
                        }
                        className="bg-amber-500 hover:bg-amber-600 transition-all duration-300 px-4 py-2 rounded-xl text-black font-bold"
                      >
                        👁 Ver Carta
                      </button>

                    </td>

                    <td className="p-4 flex justify-center gap-4">

                      <button
                        onClick={() => setCartaSeleccionada(carta)}
                        className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-4 py-2 rounded-xl"
                      >
                        ✏
                      </button>

                      <EliminarCarta
                        id={carta.id}
                        obtenerCartas={obtenerCartas}
                      />

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* POPUP ACTUALIZAR */}

        {cartaSeleccionada && (

          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

            <div className="bg-[#292525] p-8 rounded-2xl w-full max-w-lg">

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-3xl font-bold">
                  Actualizar Carta
                </h2>

                <button
                  onClick={() => setCartaSeleccionada(null)}
                  className="text-red-500 text-2xl"
                >
                  ✖
                </button>

              </div>

              <ActualizarCarta
                carta={cartaSeleccionada}
                obtenerCartas={obtenerCartas}
              />

            </div>

          </div>

        )}

      </section>
    </>
  );
}