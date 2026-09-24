import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Tarjeta.css"; 

export default function Tarjeta({ info, direccion = "left" }) {
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

  const initialX = direccion === "left" ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 20,
        damping: 20,
        duration: 0.8,
      }}
      className="flex flex-col justify-center text-center m-4 overflow-hidden rounded-2xl shadow-lg"
    >
      <div className="h-100 overflow-hidden">
        <img
          src={info.imagenes[imagenActual]}
          alt={info.name}
          className="w-full h-100 object-cover transition-all duration-700"
        />
      </div>

      <div className="bg-amber-800 flex flex-col gap-4 p-4 items-center">
        <h3 className="font-bold font-bebas-neue text-4xl text-white">
          {info.name}
        </h3>

        <p className="text-white font-roboto-regular">{info.descripcion}</p>

        {/* Botón con animación SVG estilizada */}
        <div className="container relative inline-block my-2">
          <div className="center">
            <Link
              to={info.path}
              onClick={handleRedirect}
              className="relative inline-block"
            >
              <button className="btn3 relative cursor-pointer bg-transparent border-none text-white font-bold uppercase tracking-wider">
                <div className="svg-1">
                  <svg
                    width="180px"
                    height="60px"
                    viewBox="0 0 180 60"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  >
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      className="bg-line fill-none stroke-white/30 stroke-2"
                    />
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      className="hl-line fill-none stroke-white stroke-2"
                    />
                  </svg>
                </div>

                <span className="relative z-10 block leading-15 text-center">
                  Ver más
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}