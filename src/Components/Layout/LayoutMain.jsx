import Navbar from "../Navbar/Navbar";
import NavbarAdmin from "../Navbar/NavbarUser.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import { useEffect, useState } from "react";

export default function LayoutMain() {
  const [rol, setRol] = useState(localStorage.getItem("rol"));

  useEffect(() => {
    const actualizarRol = () => {
      setRol(localStorage.getItem("rol"));
    };

    window.addEventListener("storage", actualizarRol);

    actualizarRol();

    return () => {
      window.removeEventListener("storage", actualizarRol);
    };
  }, []);

  return (
    <>
      <div>
        {Number(rol) === 1 ? <NavbarAdmin /> : <Navbar />}

        <main className="bg-[#360707] min-h-screen flex flex-col px-6 py-30">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}