import { Link } from "react-router-dom";
import Plato from "@/assets/DSC00663.png";
export default function Platos() {
  const Informacion = [
    {
      descripcion: "Entrada desde platanos hasta las comida tipica",
      name: "Inicio",
      path: "/",
      imagen: Plato, 
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Inicio",
      path: "/",
      imagen: Plato,
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Inicio",
      path: "/",
      imagen: Plato,
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Bebida",
      path: "/",
      imagen: Plato,
    },
  ];

  return (
    <>
      <div className=" flex  justify-center items-center text-center ">
        <ul className="grid grid-cols-1 md:grid-cols-2 ">
          {Informacion.map((info, index) => (
            <li key={index} className="flex flex-col justify-center text-center m-4">
              <div className="">
                <img src={info.imagen} alt={info.name} />

                <div className="flex flex-col justify-center item-center text-center bg-amber-900 gap-5">
                  <h3 className="font-bold">{info.name}</h3>
                  <p>{info.descripcion}</p>
                  <div className="border-2 bg-white mx-auto my-2 px-4 py-2 rounded-2xl hover:bg-yellow-400 transition-opacity duration-500">
                                <Link  to={info.path}>Link</Link>

                  </div>

                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
