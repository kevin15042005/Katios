import DescripcionLogo from "../../../assets/LogoSlogan.png";

export default function Descripcion() {
  return (
    <>
      {/* CAMBIO AQUÍ: Ajustamos el gradiente para que empiece exactamente en el color del banner de arriba y baje suavemente */}
      <div className="bg-[#491001] flex justify-center mb-12 py-30 bg-linear-to-b from-[#491001] via-[#491001] to-[#360707]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center py-5">
          
          {/* Contenedor del Logo */}
          <div className="flex justify-center">
            <img src={DescripcionLogo} alt="Logo" className="w-48 md:w-64 object-contain" />
          </div>
          
          {/* Contenedor del Texto */}
          <div className="w-80 md:w-110 text-[16px] md:text-[22px] m-auto font-bold font-stretch-expanded">
            <p className="text-[#ad8433] font-roboto-regular leading-relaxed">
              <strong className="text-6xl text-amber-500 font-bebas-neue">S</strong>omos una familia que inspirada en la esencia de lo nuestro,
              ofrece la mejor Parrilla y Comida Típica Colombiana, con nuestra
              pasión, sazón y sabores naturales evocamos en nuestros clientes
              momentos familiares.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}