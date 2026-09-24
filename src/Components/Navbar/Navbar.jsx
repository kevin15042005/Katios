import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo.png";
import SubMenus from "./SubMenus";
import LogoIngreso from "../../assets/Ingreso.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  // Direccionamiento
  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/Nosotros" },
    { name: "Sedes", path: "/Sedes" },
    { name: "Politicas", path: "/Politicas" },
  ];

  // Función de navegación con animación de píxeles suave
  const handleNavigation = (path) => {
    if (isAnimating) return;
    setIsMenuOpen(false);
    setIsAnimating(true);

    // Cambia de ruta a mitad de la transición (500ms)
    setTimeout(() => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);

    // Desmonta la capa de píxeles al terminar por completo (1200ms)
    setTimeout(() => {
      setIsAnimating(false);
    }, 1200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Capa de Transición de Píxeles Suave y Elegante */}
      <AnimatePresence>
        {isAnimating && (
          <div className="fixed inset-0 z-100 grid grid-cols-10 grid-rows-10 pointer-events-none overflow-hidden w-screen h-screen">
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 1, 0.5, 1],
                  delay: (i % 10) * 0.01 + Math.floor(i / 10) * 0.01,
                }}
                className="bg-[#360707] w-full h-full"
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <nav
        className={`font-sans text-white p-4 bg-[#292525] flex items-center justify-between fixed inset-x-12 rounded-2xl top-1 z-50 transition-all duration-300 bg-[#292525] ${
          isScrolled ? "bg-[#292525] shadow-xl/70 " : "bg-[#292525]"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          <div>
            <img
              src={Logo}
              alt="Logo Katios"
              className={`${isScrolled ? "rounded" : ""}`}
            />
          </div>

          {/* Menu of Desktop */}
          <div className="flex items-center justify-center">
            <ul className="hidden md:flex flex-row items-center space-x-8 ml-auto">
              {navLinks.map((link) => (
                <li className="border-2 py-2 px-4 rounded-2xl" key={link.name}>
                  {link.name === "Sedes" ? (
                    <SubMenus 
                      closeNavbar={() => setIsMenuOpen(false)} 
                      onNavigate={handleNavigation} 
                    />
                  ) : (
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className="cursor-pointer bg-transparent border-none text-white font-inherit"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavigation("/Ingreso")}
                  className="cursor-pointer bg-transparent border-none p-0 flex items-center"
                >
                  <img className="h-12 w-14" src={LogoIngreso} alt="Ingreso" />
                </button>
              </li>
            </ul>

            {/* Botón de Menú Hamburguesa Móvil (Restaurado) */}
            <button
              className="md:hidden transition-all duration-700 ml-auto cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={`absolute top-full left-0 w-full bg-[#292525]/90 border-t border-amber-400 md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100 visible z-50"
              : "-translate-y-full opacity-0 invisible -z-10 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center py-4 gap-y-2">
            {navLinks.map((link) => (
              <li className="py-2 px-4 rounded-2xl w-full text-center" key={link.name}>
                {link.name === "Sedes" ? (
                  <SubMenus 
                    closeNavbar={() => setIsMenuOpen(false)} 
                    onNavigate={handleNavigation} 
                  />
                ) : (
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="cursor-pointer bg-transparent border-none text-white font-inherit w-full"
                  >
                    {link.name}
                  </button>
                )}
                <div className="h-1 w-20 bg-amber-500 mx-auto rounded-b-full mt-2"></div>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavigation("/Ingreso")}
                className="cursor-pointer bg-transparent border-none p-0 flex items-center justify-center"
              >
                <img className="h-10 w-12" src={LogoIngreso} alt="Ingreso" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;