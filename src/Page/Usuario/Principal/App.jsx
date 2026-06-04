import Parilla from "../../../assets/Funcionarios/Plazoleta2.webp";
import Descripcion from "./Descripcion.jsx";
import Platos from "./Platos.jsx";
import RotacionAnimacion from "../../../Components/Animacion/RotacionAnimacion";

export default function App() {
  return (
    <>
      <div className="flex flex-col  ">
        <div className="relative  m-w-full  h-140 overflow-hidden">
          <div
            className="absolute inset-x-0 top-0 
          "
          >
            <img
              src={Parilla}
              alt=""
              className="object-cover  opacity-60 w-full h-140 "
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-95% to-[#ccba7c]"></div>
          </div>
          <div className="relative z-10  pt-50 text-center text-white w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              LOS SABORES DE MI TIERRA
            </h1>
            <span className="text-2xl md:text-3xl m-2">
              Los mejores platos típicos de nuestra
              <div className=" flex mt-10 justify-center items-center">
                <RotacionAnimacion
                  leftTexts={["Parrilla", "Colombiana"]}
                  rightTexts={["Holi", "Especial", "Unico"]}
                  interval={2500}
                />
              </div>
            </span>
          </div>
        </div>
        <div className="mb-20">
          <Descripcion />
        </div>
        <div className="mb-20">
          <Platos />
        </div>
        <div></div>
      </div>
    </>
  );
}
