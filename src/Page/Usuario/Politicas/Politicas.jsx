import Reglamento from "../../../assets/Reglamento.jpeg";

export default function Politicas() {
  return (
    <>
      <section className="min-h-screen flex flex-col pt-40">
        <div className="max-w-3xl md:max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-7xl font-bold text-white mb-4 font-bebas-neue">
              Politicas
            </h1>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-b-full"></div>
          </div>
          <div className="flex flex-col gap-6 bg-[#F9F4DB]/80 p-7 md:p-14 rounded-4xl font-roboto-regular ">
            <p className="text-[16px] md:text-[22px]  text-[#3d2b1f] font leading-relaxed font-roboto-regular ">
              {" "}
              <p>
                Eneuntra nuestras ploticas las cuales te guairan sobre los
                terminos y condicones sobre que se debe proceder a hacer ne caso
                de que se esten vulnerando tus derechso como consumidor o como
                trabajador
              </p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 my-20">
            <div className="w-90 mx-auto flex flex-col items-center justify-center  text-center gap-6 bg-[#F9F4DB]/80 p-4 md:p-10 rounded-4xl my-4 md:my-0 ">
              <h2 className="text-4xl font-extrabold text-amber-50 text-center ">
                Usuarios
              </h2>
              <p className="font-extrabold font-roboto-regular text-2xl text-amber-50 ">
                Informate sobre nuestras politicas
              </p>
              <button className="bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition-colors inline-block">
                {" "}
                <a
                  href="https://drive.google.com/drive/folders/1LJ9E8Rkl_nOk_omyuf4LJT8mSc0cGxMW"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Proteccion a Usuario
                </a>
              </button>{" "}
            </div>
            <div>
              <div className="w-95 mx-auto flex flex-col items-center justify-center  text-center gap-6 bg-[#F9F4DB]/80 p-7 md:p-10 rounded-4xl my-4 md:my-0 ">
                <h2 className="text-4xl font-extrabold text-amber-50 text-center ">
                  Trabajadores
                </h2>
                <p className="font-extrabold font-roboto-regular text-2xl text-amber-50 ">
                  Informate sobre las politicas de la empresa
                </p>
                <button className="bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition-colors inline-block">
                  {" "}
                  <a
                    href="https://drive.google.com/drive/folders/1LJ9E8Rkl_nOk_omyuf4LJT8mSc0cGxMW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reglamento Trabajo
                  </a>
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
