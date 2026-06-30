import React, { useEffect, useState } from "react";
import axios from "axios";
import HTMLFlipBook from "react-pageflip";
import Parilla from "@/assets/Inter/KatiosInter.webp";

export default function KatiosInter() {
  const [cartas, setCartas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timestamp] = useState(new Date().getTime());

  const obtenerCartas = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/cartas/obtener_Cartas_Punto/1`,
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
    <section className=" ">
      <div className="relative  m-w-full  h-200 overflow-hidden ">
        <div
          className="absolute inset-x-0 top-0   bg-black
          "
        >
          <img
            src={Parilla}
            alt=""
            className="w-full h-200 object-cover opacity-30"
            style={{
              objectPosition: "center center",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent from-80% to-[#360707]"></div>
        </div>
        <div className="flex flex-col relative z-10  pt-50 text-center text-white w-full">
          <h1 className="text-3xl md:text-7xl font-extrabold font-bebas-neue mb-2">
            Katios Inter
          </h1>
          <div className="flex flex-col gap-10">
            <span className="text-2xl md:text-4xl m-2">
              Nos encontramos segundo piso del Area Intenacional
            </span>
            <spam className="text-[16px] md:text-2xl w-85 md:w-full">
              Revisa nuestro menu y sorprendete con nuestros platos
            </spam>
          </div>
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
  {cartas.map((carta, index) => (
    <React.Fragment key={carta.id}>
      <h2 className="text-[16px] md:text-3xl">{index === 0 ? "Español" : "English"}</h2>

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
    </React.Fragment>
  ))}
</div>
      )}
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
