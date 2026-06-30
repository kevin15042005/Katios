import axios from "axios";

export default function EliminarCarta({ id, obtenerCartas }) {

  const eliminar = async () => {
    const confirmar = window.confirm("¿Seguro que quieres eliminar esta carta?");
    if (!confirmar) return;

    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/cartas/eliminar_Carta/${id}`
      );

      console.log("Eliminado:", res.data);

      // 🔥 refrescar lista
      await obtenerCartas();

    } catch (error) {
      console.log("Error eliminando:", error);
      alert("No se pudo eliminar la carta");
    }
  };

  return (
    <button
      onClick={eliminar}
      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-white font-bold"
    >
      🗑
    </button>
  );
}