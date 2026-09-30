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

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/Nosotros" },
    { name: "Sedes", path: "/Sedes" },
    { name: "Politicas", path: "/Politicas" },
  ];

  const handleNavigation = (path) => {
    if (isAnimating) return;
    setIsMenuOpen(false);
    setIsAnimating(true);

    setTimeout(() => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);

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
        className={`font-sans text-white p-3 md:p-4 bg-[#292525] flex items-center justify-between fixed inset-x-4 md:inset-x-12 rounded-2xl top-2 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-xl/70" : ""
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          <div>
            <img
              src={Logo}
              alt="Logo Katios"
              className={`h-10 md:h-12 ${isScrolled ? "rounded" : ""}`}
            />
          </div>

          {/* Menu de Desktop */}
          <div className="flex items-center justify-center">
            <ul className="hidden md:flex flex-row items-center space-x-6 lg:space-x-8 ml-auto">
              {navLinks.map((link) => (
                <li className="border-2 py-1.5 px-3 lg:py-2 lg:px-4 rounded-2xl" key={link.name}>
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
                  <img className="h-10 w-12 lg:h-12 lg:w-14" src={LogoIngreso} alt="Ingreso" />
                </button>
              </li>
            </ul>

            {/* Botón de Menú Hamburguesa Móvil */}
            <button
              className="md:hidden transition-all duration-700 ml-auto cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile optimizado con altura máxima y scroll para modo horizontal */}
        <div
          className={`absolute top-full left-0 w-full bg-[#292525]/95 backdrop-blur-md border-t border-amber-400 md:hidden transition-all duration-300 ease-in-out max-h-[75vh] overflow-y-auto rounded-b-2xl shadow-2xl ${
            isMenuOpen
              ? "translate-y-0 opacity-100 visible z-50"
              : "-translate-y-full opacity-0 invisible -z-10 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center py-3 gap-y-1">
            {navLinks.map((link) => (
              <li className="py-1 px-4 rounded-xl w-full text-center" key={link.name}>
                {link.name === "Sedes" ? (
                  <SubMenus 
                    closeNavbar={() => setIsMenuOpen(false)} 
                    onNavigate={handleNavigation} 
                  />
                ) : (
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="cursor-pointer bg-transparent border-none text-white font-inherit w-full py-1 text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                )}
                <div className="h-0.5 w-16 bg-amber-500/60 mx-auto rounded-b-full mt-1.5"></div>
              </li>
            ))}
            <li className="py-1">
              <button
                onClick={() => handleNavigation("/Ingreso")}
                className="cursor-pointer bg-transparent border-none p-0 flex items-center justify-center"
              >
                <img className="h-8 w-10" src={LogoIngreso} alt="Ingreso" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;