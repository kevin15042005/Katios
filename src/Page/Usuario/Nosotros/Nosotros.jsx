import { motion } from "framer-motion";

export default function Nosotros() {
  const fadeInVariant = (direction) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: direction === "up" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", damping: 45, stiffness: 100 },
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20 },
    },
  };

  return (
    <section className="flex flex-col bg-[#360707] px-6 py-40">
      {/* Contenedor Principal con ancho máximo para que no se desparrame */}
      <div className="max-w-3xl md:max-w-5xl mx-auto w-full  ">
        {/* Título Principal: Centrado y con estilo */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 font-bebas-neue ">
            Nosotros
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Sección de contenido: Alineada a la izquierda */}
        <motion.div
          variants={fadeInVariant("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 bg-[#F9F4DB]/80 p-7 md:p-14 rounded-4xl "
        >
          <h2 className=" text-3xl font-extrabold text-[#5c4a33] border-l-4 border-amber-500 pl-4 font-bebas-neue">
            ¿De dónde venimos?
          </h2>

          <p className="text-[16px] md:text-[22px]  text-[#3d2b1f] font leading-relaxed font-roboto-regular ">
            Nacimos en junio de 1995 bajo el nombre de Bar Escocés e Inversiones
            S.A.S., consolidando desde nuestros inicios una sólida trayectoria
            en el sector comercial de alimentos, bebidas y entretenimiento. Con
            el paso de los años, evolucionamos para convertirnos en un referente
            de operación logística e inversión en una de las plataformas más
            exigentes de la región: el Aeropuerto Internacional El Dorado. Hoy
            en día, gestionamos espacios comerciales dentro de la terminal aérea
            con la misma pasión y compromiso de calidad con la que empezamos
            hace más de tres décadas, conectando nuestra tradición con la
            dinamismo del mundo moderno para ofrecer siempre la mejor
            experiencia a nuestros clientes y viajeros. .
          </p>
        </motion.div>
        <motion.div
          variants={fadeInVariant("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 bg-[#F9F4DB]/80 p-7 md:p-14 rounded-4xl my-10"
        >
          <h1 className=" text-3xl font-extrabold text-[#5c4a33] border-l-4 border-amber-500 pl-4 font-bebas-neue">
            Mision
          </h1>
          <p className="font-roboto-regular">
            Brindar experiencias excepcionales de hospitalidad, alimentos y
            bebidas a viajeros y clientes locales, operando con los más altos
            estándares de calidad, eficiencia logística e inocuidad. Nos
            comprometemos a mantener viva nuestra tradición e historia
            comercial, adaptándonos al dinamismo de plataformas internacionales
            como el Aeropuerto El Dorado, para ofrecer un servicio cálido, ágil
            y confiable que supere las expectativas de un público global.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInVariant("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 bg-[#F9F4DB]/80 p-7 md:p-14 rounded-4xl my-10"
        >
            <h1 className=" text-3xl font-extrabold text-[#5c4a33] border-l-4 border-amber-500 pl-4 font-bebas-neue">
              Vision
            </h1>
            <p  className="font-roboto-regular">
              Para el año 2030, consolidarnos como uno de los grupos operadores
              e inversionistas más sólidos y reconocidos en el sector de la
              restauración y comercio aeroportuario en Colombia. Buscamos
              expandir nuestra presencia en terminales aéreas y centros
              logísticos clave del país, siendo identificados por nuestra
              excelencia operativa, innovación en el servicio y por ser un
              aliado estratégico confiable para el desarrollo comercial de las
              grandes infraestructuras de transporte.
            </p>
        </motion.div>

        <div className="flex flex-col gap-8 mt-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-bebas-neue tracking-wide mb-2 ">
              Nuestros Objetivos
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded-full md:mx-0 mx-auto"></div>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 "
          >
            <motion.div
              variants={itemVariants}
              className="bg-[#F9F4DB]/80 p-6 rounded-3xl shadow-lg flex flex-col gap-3 border-t-4 border-amber-500"
            >
              <p>
                <h3 className="text-xl font-bold text-[#5c4a33] font-bebas-neue tracking-wide ">
                  Excelencia en el Servicio
                </h3>
                Garantizar un estándar operativo ágil y de alta calidad que
                responda perfectamente a los tiempos y exigencias de los
                viajeros internacionales y personal aeroportuario.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-[#F9F4DB]/80 p-6 rounded-3xl shadow-lg flex flex-col gap-3 border-t-4 border-amber-500"
            >
              <p>
                <h3 className="text-xl font-bold text-[#5c4a33] font-bebas-neue tracking-wide">
                  Eficiencia Operativa
                </h3>
                Optimizar los procesos de la cadena de suministro e inventarios
                para asegurar el correcto abastecimiento y funcionamiento
                continuo de los locales comerciales dentro de la terminal aérea.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-[#F9F4DB]/80 p-6 rounded-3xl shadow-lg flex flex-col gap-3 border-t-4 border-amber-500"
            >
              <p>
                <h3 className="text-xl font-bold text-[#5c4a33] font-bebas-neue tracking-wide">
                  Cumplimiento y Calidad
                </h3>
                Mantener el 100% de cumplimiento en las normativas de seguridad
                alimentaria, regulaciones aeroportuarias y estándares de
                infraestructura exigidos por Opain y las autoridades
                aeronáuticas.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-[#F9F4DB]/80 p-6 rounded-3xl shadow-lg flex flex-col gap-3 border-t-4 border-amber-500"
            >
              <p>
                <h3 className="text-xl font-bold text-[#5c4a33] font-bebas-neue tracking-wide">
                  Crecimiento Sostenible
                </h3>
                Incrementar la rentabilidad de las inversiones actuales y
                evaluar nuevas oportunidades de licitación o adquisición de
                espacios comerciales en puntos de alto flujo de pasajeros.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
