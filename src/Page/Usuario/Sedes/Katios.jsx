import Cartas from "../../Administradores/Carta/Cartas";

export default function Katios() {
  return (
    <>
      {" "}
      <section >
        {/* Contenedor Principal con ancho máximo para que no se desparrame */}
        <div className="  max-w-3xl md:max-w-5xl mx-auto w-full ">
          {/* Título Principal: Centrado y con estilo */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">Katios 102</h1>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Sección de contenido: Alineada a la izquierda */}
          <div className="flex flex-col gap-6 bg-[#F9F4DB]/80 p-20 rounded-4xl">
            <h2 className=" text-2xl font-extrabold text-[#5c4a33] border-l-4 border-amber-500 pl-4">
              Nos hubicamos dentro al frente del acensor de sede internacioanl
            </h2>

            <p className="text-[16px] md:text-[22px]  text-[#3d2b1f] font leading-relaxed ">
              Aquí puedes agregar la historia de tu familia y del restaurante.
              Contar sobre las raíces colombianas le da mucha fuerza a tu marca
            </p>
          </div>
          <div className="">
             <Cartas/>
          </div>
          <div className="mt-20">
            <iframe className="w-full h-75 md:h-105 rounded-2xl" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4128061452084!2d-74.14252952868169!3d4.698124090975803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9cb829feff0d%3A0xe863b89528ba8282!2sKat%C3%ADos%20Plazoleta!5e0!3m2!1ses-419!2sco!4v1778782346642!5m2!1ses-419!2sco"
            
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
