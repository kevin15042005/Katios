
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo.png";
import SubMenus from "./SubMenus";
import LogoIngreso from "../../assets/Ingreso.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //Direccionamiento

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/Nosotros" },
    { name: "Sedes", path: "/Sedes" },
    { name: "Politicas", path: "/Politicas" },
  ];

  const handleClick = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  //Uffect subira la pagina del final al incio

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
      <nav
        className={`font-sans text-white p-4 bg-[#292525]/95 flex items-center justify-between fixed inset-x-12 rounded-2xl top-1 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#292525] shadow-xl/70 " : "bg-[#292525]"
        } `}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full ">
          <div>
            <img
              src={Logo}
              alt=""
              className={`${isScrolled ? "rounded" : " "}`}
            />
          </div>
          {/*Menu of Desktop*/}
          <div className="flex justify-center">
            <ul className="hidden md:flex flex-row items-center space-x-8 ml-auto  ">
              {" "}
              {navLinks.map((link) => (
                <li className="border-2 py-2 px-4 rounded-2xl " key={link.name}>
                  {link.name === "Sedes" ? (
                    <SubMenus />
                  ) : (
                    <Link to={link.path} onClick={handleClick}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className>
                <Link to="/Ingreso" onClick={handleClick}>
                  <img className="h-12 w-14" src={LogoIngreso} alt="" />
                </Link>
              </li>
            </ul>
            <button
              className="md:hidden transition-all duration-700 "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {" "}
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
        <div
          className={`absolute top-full left-0 w-full bg-[#292525]/90 border-t border-amber-400 md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100 visible z-50" : "-translate-y-full opacity-0 invisible -z-10 pointer-events-none"}`}
        >
          <ul className="flex flex-col items-center py-4 gap-y-2">
            {" "}
            {navLinks.map((link) => (
              <li className=" py-2 px-4 rounded-2xl " key={link.name}>
                {link.name === "Sedes" ? (
                  <SubMenus />
                ) : (
                  <Link to={link.path} onClick={handleClick}>
                    {link.name}
                  </Link>
                )}
                <div className="h-1 w-20 bg-amber-500 mx-auto rounded-b-full   "></div>
              </li>
            ))}
            <li>
              <Link to="/Ingreso" onClick={handleClick}>
                <img className="h-10 w-12" src={LogoIngreso} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
