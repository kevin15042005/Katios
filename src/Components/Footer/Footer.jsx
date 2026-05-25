import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className=" grid grid-cols-1 md:grid-cols-3 gap-5 bg-[#FE9A00] p-4  font-semibold">
        <div className="flex  justify-center items-center flex-col gap-2  ">
          <h3> Encuentranos en Aeropuerto El Dorado </h3>{" "}
          <ul className="">
            <li>
              <a href="https://maps.app.goo.gl/vRM6TETAekEdvicj7">
                
                <span> Bogota, Colombia</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex  justify-center items-center flex-col gap-2">
          <h3>Informacion </h3>{" "}
          <ul>
            <li>
              <a href=""></a>
            </li>
          </ul>
          <h3> Preguntas Frecuentes</h3>
          <ul>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
        <div className="flex  justify-center items-center flex-col gap-2">
          <h3 className="font-bold text-[16px] sm:text-[17px]">Legal</h3>
          <ul>
            <li className="hover:underline  text-[15px]  sm:text-[17px]">
              <Link to="/Politica_privacidad">Politica de Privacidad</Link>
            </li>
            <li className="hover:underline  text-[15px]  sm:text-[17px]">
              <Link to="Terminos_condiciones">Terminos y condiciones</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
