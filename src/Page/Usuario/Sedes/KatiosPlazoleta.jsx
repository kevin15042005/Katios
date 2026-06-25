import React, { useEffect, useState } from "react";
import axios from "axios";
import HTMLFlipBook from "react-pageflip";
import Parilla from "@/assets/Plazoleta/KatiosPlazoleta.webp";

export default function KatiosPlazoleta() {
  const [cartas, setCartas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timestamp] = useState(new Date().getTime());

  const obtenerCartas = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/cartas/obtener_Cartas_Punto/4`,
      );

      setCartas(res.data || []);
    } catch (err) {
      console.log(err);
      setCartas([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerCartas();
  }, []);

  return (
    <section className="min-h-screen bg-[#360707] ">
      <div className="relative  m-w-full  h-220 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 
          "
        >
          <img
            src={Parilla}
            alt=""
            className="w-full h-200 object-cover opacity-60"
            style={{
              objectPosition: "center center",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent from-80% to-[#360707]"></div>
        </div>
        <div className="relative z-10  pt-50 text-center text-white w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Katios Plazoleta
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            LOS SABORES DE MI TIERRA
          </h2>
          <span className="text-2xl md:text-3xl m-2">
            Los mejores platos típicos de nuestra <strong>Colombia</strong>
          </span>
        </div>
      </div>
      {loading ? (
        <div
          className="relative mx-auto w-max overflow-hidden [transform-translateZ(0)] grid place-items-center h-16 px-8 border-0 rounded-xl font-['Poppins'] text-lg text-white cursor-wait bg-[#e28722]
  before:content-[''] before:absolute before:z-1 before:top-0 before:left-0 before:w-[200%] before:h-full
  before:[background:repeating-linear-gradient(-45deg,#fda144,#fda144_20px,#e28722_20px,#e28722_40px)]
  before:animate-spin before:[animation-name:loading-slide]"
        >
          <span className="relative z-2 font-semibold">Cargando...</span>

          <style>{`
    @keyframes loading-slide {
      0% { transform: translateX(0); }
      100% { transform: translateX(-40px); }
    }
  `}</style>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-16 w-full max-w-full overflow-hidden isolate my-10">
          {" "}
          {cartas.map((carta) => (
            <HTMLFlipBook
              key={`${carta.id}-${timestamp}`}
              width={450}
              height={650}
              size="stretch"
              showCover={true}
              minWidth={250}
              maxWidth={500}
              minHeight={650}
              maxHeight={650}
              usePortrait={true}
              startPage={0}
              mobileScrollSupport={true}
              className="mx-auto"
            >
              {carta.pages?.map((img, i) => (
                <div key={i}>
                  <img
                    src={`${import.meta.env.VITE_API_URL}${img}?t=${timestamp}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          ))}
        </div>
      )}
      <div className="col-span-1 md:col-span-2 flex justify-center my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4128061207894!2d-74.14510978920495!3d4.6981240952571675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9cb829feff0d%3A0xe863b89528ba8282!2sKat%C3%ADos%20Plazoleta!5e0!3m2!1ses-419!2sco!4v1780518316176!5m2!1ses-419!2sco"
          style={{
            width: "90%",
            margin: "0",
            maxWidth: "800px",
            height: "450px",
            maxHeight: "60vh",
            border: "2px solid #ccc",
            borderRadius: "12px",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>{" "}
    </section>
  );
}
