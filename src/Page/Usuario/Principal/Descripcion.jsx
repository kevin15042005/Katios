import DescripcionLogo from "../../../assets/Puente/KatiosPuente.png";
export default function Descripcion() {
  return (
    <>
      <div className="bg-[#ccba7c] flex justify-center mb-12 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center py-5 ">
          <div className="flex justify-center">
            <img src={DescripcionLogo} alt="" className="rounded-full" />
          </div>
          <div className="w-80 md:W-110 text-[16px] md:text-[22px] font-bold font-stretch-expanded">
            <p className="text-[#ad8433]">
              Somos una familia que inspirada en la esencia de lo nuestro,
              ofrece la mejor Parrilla y Comida Típica Colombiana, con nuestra
              pasión, sazón y sabores naturales evocamos en nuestros clientes
              momentos familiares
            </p>
          </div>
          <div>
          
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
