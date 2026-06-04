import ImagenInterGibhi from "../../../assets/Inter/KatiosInter.png";
import Inter1 from "../../../assets/Inter/Inter1.png";
import Inter2 from "../../../assets/Inter/Inter2.png";
import Inter3 from "../../../assets/Inter/Inter3.png";

import ImagenRt11Gibhi from "../../../assets/Rt11/KatiosRt11.png";
import Rt11 from "../../../assets/Rt11/Rt11.png"
import Rt111 from "../../../assets/Rt11/Rt111.png"
import Rt112 from "../../../assets/Rt11/Rt112.png"




import ImagenPuenteGibhi from "../../../assets/Puente/KatiosPuente.png";
import Puente1 from "../../../assets/Puente/Puente1.png"
import Puente2 from "../../../assets/Puente/Puente2.png"


import ImagenPlazoletaGibhi from "../../../assets/Plazoleta/KatiosPlazoleta.png";
import Plazoleta1 from "../../../assets/Plazoleta/Plazoleta2.png";
import Plazoleta2 from "../../../assets/Plazoleta/Plazoleta2.png";
import Plazoleta3 from "../../../assets/Plazoleta/Plazoleta3.png";


import ImagenToGo from "../../../assets/ToGo/KatiosToGo.png";
import ToGo1 from "../../../assets/ToGo/Inter1.png";


import ImagenFuncionarios from "../../../assets/Funcionarios/Plazoleta2.png";
import Funcionario1 from "../../../assets/Funcionarios/Plazoleta2.png";

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
      <div className=" flex  justify-center items-center text-center ">
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
