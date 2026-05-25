import { Link } from "react-router-dom";

export default function OlvidarContrasena() {
  const handleRedirect = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <>
      <section >
        <div className="max-w-3xl md:max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Recuperacion Contrasena
            </h1>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-b-full   "></div>
          </div>{" "}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-amber-500 py-20 px-18 rounded-3xl">
              <form
                action="
                "
              >
                <fieldset className="flex flex-col ">
                  <label htmlFor="" className="font-bold my-2">
                    Nombre{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre "
                    required
                    className="border-2 border-amber-50 px-4 py-2 rounded-2xl "
                  />
                </fieldset>
                <fieldset className="flex flex-col ">
                  <label htmlFor="" className="font-bold my-2">
                    Pin
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre "
                    required
                    className="border-2 border-amber-50 px-4 py-2 rounded-2xl "
                  />
                </fieldset>
                <fieldset className="flex flex-col ">
                  <label htmlFor="" className="font-bold my-2">
                    Contrasena Nueva
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre "
                    required
                    className="border-2 border-amber-50 px-4 py-2 rounded-2xl "
                  />
                </fieldset>
              </form>
              <div className="flex gap-4 text-blue-400 hover:text-blue-800">
                <Link to={"/Ingreso"} onClick={handleRedirect}>
                  Volver
                </Link>
              </div>
              <div className="font-bold flex justify-center text-center items-center bg-amber-900 p-4 rounded-2xl pt-2 mt-6  hover:bg-amber-100 transform-3d duration-300">
                <button>Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
