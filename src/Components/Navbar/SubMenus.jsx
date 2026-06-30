import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function SubMenus({ closeNavbar }) {
  const [subMenuSedes, setSubMenuSede] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  const sedes = [
    {
      id: 1,
      nombre: "KatiosIntenacional",
      ruta: "/KatiosInter",
      info: "Internacion",
    },
    {
      id: 2,
      nombre: "KatiosRt11",
      ruta: "/KatiosRt11",
      info: "Internacional",
    },
    {
      id: 3,
      nombre: "KatiosPuente",
      ruta: "/KatiosPuente",
      info: "Puente Aereo",
    },
    {
      id: 4,
      nombre: "KatiosPlazoleta",
      ruta: "/KatiosPlazoleta",
      info: "Plazoleta Comida",
    },
    {
      id: 5,
      nombre: "KatiosToGo",
      ruta: "/KatiosToGo",
      info: "Nacional",
    },
    {
      id: 6,
      nombre: "KatiosFuncionario",
      ruta: "/KatiosFuncionario",
      info: "Plazoleta",
    },
  ];

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSubMenuSede(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSedeClick = () => {
    setSubMenuSede(false);

    if (closeNavbar) {
      closeNavbar();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={() => !isMobile && setSubMenuSede(true)}
      onMouseLeave={() => !isMobile && setSubMenuSede(false)}
    >
      <button onClick={() => isMobile && setSubMenuSede(!subMenuSedes)}>
        Sedes{" "}
        <span
          className={`inline-block text-xs transition-transform duration-300 ${
            subMenuSedes ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {subMenuSedes && (
        <div
          className={`${
            isMobile ? "relative mt-2" : "absolute top-full left-0 pt-4"
          } z-50`}
        >
          <div className="bg-amber-800/30 border border-amber-500/20 backdrop-blur-md rounded-lg shadow-2xl py-6 overflow-hidden">
            {sedes.map((sede) => (
              <Link
                key={sede.id}
                to={sede.ruta}
                onClick={handleSedeClick}
                className="block px-4 py-2 hover:bg-amber-500 hover:text-amber-700 transition-colors border-l-4 border-transparent hover:border-amber-500 rounded-2xl"
              >
                <span className="block font-bold">{sede.nombre}</span>

                <span className="text-xs text-gray-400 block">{sede.info}</span>

                <div className="h-1 w-full bg-amber-500 mx-auto rounded-b-full"></div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
