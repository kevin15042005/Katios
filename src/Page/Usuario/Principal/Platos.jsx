

import ImagenInterGibhi from "@/assets/KatiosInter.png"


import ImagenRt11Gibhi from "@/assets/KatiosRt11.png"


import ImagenPuenteGibhi from "@/assets/KatiosPuente.png"


import ImagenPlazoletaGibhi from "@/assets/KatiosPlazoleta.png"


import ImagenToGo from "@/assets/KatiosToGo.png"


import ImagenFuncionarios from "@/assets/KatiosInter.png"

import Tarjeta from "./Tarjeta";
export default function Platos() {

  const Informacion = [
    {
      descripcion: "Entrada desde platanos hasta las comida tipica",
      name: "Katios Internacional",
      path: "/KatiosInter",
      imagenes: [ImagenInterGibhi],
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Katios Rt11",
      path: "/KatiosRt11",
      imagenes: [ImagenRt11Gibhi],
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Katios Puente Aereo",
      path: "/KatiosPuente",
      imagenes: [ImagenPuenteGibhi],
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Plazoleta Comidas",
      path: "/KatiosPlazoleta",
      imagenes: [ImagenPlazoletaGibhi],
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Katios Nacional",
      path: "/KatiosToGo",
      imagenes: [ImagenToGo],
    },
    {
      descripcion: "Entrada desde playtanos hasta las comida tipica",
      name: "Katios Funcionarios",
      path: "/KatiosFuncionario",
      imagenes: [ImagenFuncionarios],
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
