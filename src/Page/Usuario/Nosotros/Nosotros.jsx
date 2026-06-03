export default function Nosotros() {
  return (
    <section className="flex flex-col bg-[#360707] px-6 py-30">
      
      {/* Contenedor Principal con ancho máximo para que no se desparrame */}
      <div className="max-w-3xl md:max-w-5xl mx-auto w-full ">
        
        {/* Título Principal: Centrado y con estilo */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Nosotros
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Sección de contenido: Alineada a la izquierda */}
        <div className="flex flex-col gap-6 bg-[#F9F4DB]/80 p-7 md:p-14 rounded-4xl">
          <h2 className=" text-3xl font-extrabold text-[#5c4a33] border-l-4 border-amber-500 pl-4">
            ¿De dónde venimos?
          </h2>
          
          <p className="text-[16px] md:text-[22px]  text-[#3d2b1f] font leading-relaxed ">
            Aquí puedes agregar la historia de tu familia y del restaurante. 
            Contar sobre las raíces colombianas le da mucha fuerza a tu marca 
            <strong className="font-extrabold uppercase"> "Los Sabores de mi Tierra"</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}