import ImagenInterGibhi from "../../../assets/Inter/KatiosInter.webp";
import Inter1 from "../../../assets/Inter/Inter1.webp";
import Inter2 from "../../../assets/Inter/Inter2.webp";
import Inter3 from "../../../assets/Inter/Inter3.webp";

import ImagenRt11Gibhi from "../../../assets/Rt11/KatiosRt11.webp";
import Rt11 from "../../../assets/Rt11/Rt11.webp"
import Rt111 from "../../../assets/Rt11/Rt111.webp"
import Rt112 from "../../../assets/Rt11/Rt112.webp"




import ImagenPuenteGibhi from "../../../assets/Puente/KatiosPuente.webp";
import Puente1 from "../../../assets/Puente/Puente1.webp"
import Puente2 from "../../../assets/Puente/Puente2.webp"


import ImagenPlazoletaGibhi from "../../../assets/Plazoleta/KatiosPlazoleta.webp";
import Plazoleta1 from "../../../assets/Plazoleta/Plazoleta2.webp";
import Plazoleta2 from "../../../assets/Plazoleta/Plazoleta2.webp";
import Plazoleta3 from "../../../assets/Plazoleta/Plazoleta3.webp";


import ImagenToGo from "../../../assets/ToGo/KatiosToGo.webp";
import ToGo1 from "../../../assets/ToGo/Inter1.webp";


import ImagenFuncionarios from "../../../assets/Funcionarios/Plazoleta2.webp";
import Funcionario1 from "../../../assets/Funcionarios/Plazoleta2.webp";

import Tarjeta from "./Tarjeta";
export default function Platos() {
  const Informacion = [
    {
      descripcion: "Entrada desde platanos hasta las comida tipica",
      name: "Katios Internacional",
      path: "/KatiosInter",
      imagenes: [ImagenInterGibhi,Inter1,Inter2,Inter3],
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Katios Rt11",
      path: "/KatiosRt11",
      imagenes: [ImagenRt11Gibhi,Rt11,Rt111,Rt112],
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Katios Puente Aereo",
      path: "/KatiosPuente",
      imagenes: [ImagenPuenteGibhi,Puente1,Puente2],
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Plazoleta Comidas",
      path: "/KatiosPlazoleta",
      imagenes: [ImagenPlazoletaGibhi,Plazoleta1,Plazoleta2,Plazoleta3],
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Katios Nacional",
      path: "/KatiosToGo",
      imagenes: [ImagenToGo,ToGo1],
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Katios Funcionarios",
      path: "/KatiosFuncionario",
      imagenes: [ImagenFuncionarios,Funcionario1],
    },
  ];

  return (
    <>
      <div className=" flex  justify-center items-center text-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 ">
          {Informacion.map((info, index) => (
            <Tarjeta
              key={index}
              info={info}
              className="flex flex-col justify-center text-center m-4"
            />
          ))}
        </ul>
      </div>
    </>
  );
}
