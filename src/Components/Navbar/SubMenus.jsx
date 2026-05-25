import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function SubMenus() {
  const [subMenuSedes, setSubMenuSede] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <>
      <div
        className="relative"
        onMouseEnter={() => !isMobile && setSubMenuSede(true)}
        onMouseLeave={() => !isMobile && setSubMenuSede(false)}
      >
        <button onClick={() => isMobile && setSubMenuSede(!subMenuSedes)}>
          {" "}
          Sedes
          <span
            className={`text-xs transition-transform duration-300 ${subMenuSedes ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>

        {subMenuSedes && (
          <div
            className={`
    ${isMobile ? "relative mt-2" : "absolute top-full left-0 pt-4"}
    w-56
    z-50
  `}
          >
            {" "}
            <div className="bg-amber-800/30 border-amber-300 rounded-lg shadow-2xl py-6 overflow-hidden">
              <Link
                to="/Katios"
                className="block px-4 py-3 hover:bg-amber-500 hover:text-amber-700 transition-colors border-l-4 border-transparent hover:border-amber-500 "
              >
                <span className="block font-bold">Katios</span>
                <span className="text-xs text-white-500">
                  Local 26 - Salidas Nacionales
                </span>
              </Link>

              <Link
                to="/KatiosInter"
                className="block px-4 py-3 hover:bg-amber-500 hover:text-amber-700 transition-colors border-l-4 border-transparent hover:border-amber-500"
              >
                <span className="block font-bold">Sede Norte</span>
                <span className="text-xs text-gray-500">Calle 140 # 11-45</span>
              </Link>
            </div>{" "}
          </div>
        )}
      </div>
    </>
  );
}
