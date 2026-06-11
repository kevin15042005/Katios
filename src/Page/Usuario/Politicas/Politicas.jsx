import Reglamento from "../../../assets/Reglamento.jpeg";

export default function Politicas() {
  return (
    <>
      <section className="min-h-screen flex flex-col pt-40">
        <div className="max-w-3xl md:max-w-5xl mx-auto w-full">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">Politicas</h1>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-b-full"></div>
          </div>
          
          <div>
            <h2 className="text-4xl font-extrabold text-amber-50 text-center my-20">
              Trabajadores
            </h2>
            
            <div className="w-80 mx-auto flex flex-col items-center justify-center gap-6 text-center">
              
              <p className="font-extrabold text-amber-50 break-all">
                nUIDUBWCUWDWYGWYUGWYUDGXYUSVSWYVCHCDHCSVCDHBCS
              </p>
              
              <a 
                href="https://drive.google.com/drive/folders/1LJ9E8Rkl_nOk_omyuf4LJT8mSc0cGxMW"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition-colors inline-block"
              >
                Aquí está el botón
              </a>
              
              <h3 className="text-4xl font-extrabold text-amber-50 my-10">
                Reglamento de Usuario
              </h3>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}