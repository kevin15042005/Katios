import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Tarjeta({ info }) {
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    if (!info?.imagenes?.length) return;

    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % info.imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [info]);

  const handleRedirect = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  if (!info?.imagenes?.length) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center text-center m-4 overflow-hidden rounded-2xl shadow-lg">
      <div className="h-100 overflow-hidden">
        <img
          src={info.imagenes[imagenActual]}
          alt={info.name}
          className="w-full h-100 object-cover transition-all duration-700"
        />
      </div>

      <div className="bg-amber-600 flex flex-col gap-4 p-4">
        <h3 className="font-bold text-xl text-white">{info.name}</h3>

        <p className="text-white">{info.descripcion}</p>

        <div className="bg-white text-black font-bold mx-auto px-4 py-2 rounded-xl hover:bg-amber-800 transition-all duration-300">
          <Link to={info.path} onClick={handleRedirect}>
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}
