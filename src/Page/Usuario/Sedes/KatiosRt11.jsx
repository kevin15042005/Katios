import React, { useEffect, useState } from "react";
import axios from "axios";
import HTMLFlipBook from "react-pageflip";
import Parilla from "@/assets/Inter/KatiosInter.webp";

export default function KatiosInter() {
  const [cartas, setCartas] = useState([]);
  const [loading, setLoading] = useState(true);

  const obtenerCartas = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/cartas/obtener_Cartas_Punto/2`
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
    <section className="bg-[#360707]">
      {/* Encabezado con altura ajustada a 160 como el primer ejemplo */}
      <div className="m-w-full h-160 overflow-hidden relative">
        <div className="absolute inset-x-0 top-0">
          <img
            src={Parilla}
            alt=""
            className="object-cover opacity-60 w-full h-160"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent from-90% to-[#360707]"></div>
        </div>
        <div className="relative z-10 pt-50 text-center text-white w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Katios Inter
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            LOS SABORES DE MI TIERRA
          </h2>
          <span className="text-2xl md:text-3xl m-2">
            Los mejores platos típicos de nuestra <strong>Colombia</strong>
          </span>
        </div>
      </div>

      {/* Contenedor de cartas con estilo optimizado */}
      {loading ? (
        <p className="text-white text-center my-10">Cargando...</p>
      ) : (
        <div className="flex flex-col items-center my-10">
          {cartas.map((carta) => (
            <HTMLFlipBook
              key={carta.id}
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
                    src={`${import.meta.env.VITE_API_URL}${img}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    alt={`Página ${i + 1}`}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          ))}
        </div>
      )}

      {/* Mapa */}
      <div className="col-span-1 md:col-span-2 flex justify-center my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4023740062457!2d-74.14474918920497!3d4.699952795255342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9da3c52d1941%3A0xe796d8feaf38d008!2sKat%C3%ADos%20Aeropuerto!5e0!3m2!1ses-419!2sco!4v1780321079068!5m2!1ses-419!2sco"
          style={{
            width: "90%",
            margin: "0",
            maxWidth: "800px",
            height: "450px",
            maxHeight: "60vh",
            border: "2px solid #ccc",
            borderRadius: "12px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}