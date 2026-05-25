import React, { useEffect, useState } from "react";
import axios from "axios";
import EliminarUsuario from "./EliminarUsuario";
import CreacionUsuario from "./CreacionUsuario";
import ActualizacionUsuario from "./ActualizacionUsuario";
import { UserPlus } from "lucide-react";
export default function Creacion() {
  const [obtenerUsuario, setObtenerUsuario] = useState([]);
  //Estados de popup
  const [mostrarCrear, setMostrarCrear] = useState(false);
  const [mostrarActualizar, setMostrarActualizar] = useState(false);
  const [usuariosSeleccionado, setUsuarioSeleccionado] = useState(null);

  const obtenerUsuarios = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/usuario/obtener_usuario`,
      );

      setObtenerUsuario(res.data);
    } catch (error) {
      console.log(`Error al obtener los usuarios${error}`);
    }
  };
  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <>
      <section >
        <div className="max-w-3xl md:max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">Subir carta</h1>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-b-full"></div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl text-white font-semibold">
            Visualizacion de Perfiles
          </h1>
          <div>
            <div className="bg-green-600 w-max flex justify-end items-end my-8 rounded-2xl p-3 hover:bg-green-300 transition-all duration-300">
              <button
                onClick={() => {
                  setMostrarActualizar(false);
                  setMostrarCrear(true);
                }}
              >
                <UserPlus />
              </button>
            </div>

            {mostrarCrear && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-2xl relative">
                  <button
                    className="bg-amber-500 hover:bg-amber-700 text-white font-bold px-6 py-2 rounded-2xl shadow-lg transition-all duration-300"
                    onClick={() => setMostrarCrear(false)}
                  >
                    {" "}
                    ✖
                  </button>
                  <CreacionUsuario creaUsuarios={obtenerUsuarios} />
                </div>
              </div>
            )}
            {mostrarActualizar && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-2xl ">
                  <button
                    className=" bg-amber-500 hover:bg-amber-700 text-white font-bold px-6 py-2 rounded-2xl shadow-lg transition-all duration-300"
                    onClick={() => setMostrarActualizar(false)}
                  >
                    ✖
                  </button>
                  <ActualizacionUsuario
                    usuario={usuariosSeleccionado}
                    actUsuarios={obtenerUsuarios}
                    cerrarPopUp={() => setMostrarActualizar(false)}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <table className="w-full  bg-white rounded-2xl overflow-hidden shadow-2xl">
              <thead className="bg-amber-600 text-white">
                <tr>
                  <th className="py-4 px-6">ID</th>
                  <th className="py-4 px-6">NOMBRE</th>
                  <th className="py-4 px-6">CONTRASEÑA</th>
                  <th className="py-4 px-6">EDITAR</th>
                  <th className="py-4 px-6">ELIMINAR</th>
                </tr>
              </thead>

              <tbody>
                {obtenerUsuario.map((usuario) => (
                  <tr
                    key={usuario.id_usuario}
                    className="text-center border-b hover:bg-amber-50"
                  >
                    <td className="py-3">{usuario.id_usuario}</td>
                    <td>{usuario.nombre_usuario}</td>
                    <td>{usuario.contrasena_usuario}</td>
                    
                    <td>
                      <button
                        className="bg-blue-500 text-white px-3 py-2 rounded-xl"
                        onClick={() => {
                          setUsuarioSeleccionado(usuario);
                          setMostrarActualizar(true);
                          setMostrarCrear(false);
                        }}
                      >
                        ✏️
                      </button>
                    </td>

                    <td >
                      <EliminarUsuario
                        idUsuario={usuario.id_usuario}
                        nombreUsuario={usuario.nombre_usuario}
                        eliminarUsu={obtenerUsuarios}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4 mt-6">
            {obtenerUsuario.map((usuario) => (
              <div
                key={usuario.id_usuario}
                className="bg-white p-4 rounded-2xl shadow-lg"
              >
                <p>
                  <b>ID:</b> {usuario.id_usuario}
                </p>
                <p>
                  <b>Nombre:</b> {usuario.nombre_usuario}
                </p>
                <p>
                  <b>Contraseña:</b> {usuario.contrasena_usuario}
                </p>

                <div className="flex justify-between mt-4">
                  <button
                    className="bg-blue-500 text-white px-3 py-2 rounded-xl"
                    onClick={() => {
                      setUsuarioSeleccionado(usuario);
                      setMostrarActualizar(true);
                      setMostrarCrear(false);
                    }}
                  >
                    ✏️
                  </button>

                  <EliminarUsuario
                    idUsuario={usuario.id_usuario}
                    eliminarUsu={obtenerUsuarios}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
