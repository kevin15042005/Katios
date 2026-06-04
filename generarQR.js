//Importacion de  qrcode libreria

import QRCode from "qrcode";

//Url de las web
const sedes = [
  {
    nombre: "KatiosInter",
    url: "https://katiosr.vercel.app/KatiosInter",
  },
  {
    nombre: "KatiosPuente",
    url: "https://katiosr.vercel.app/KatiosPuente",
  },
  {
    nombre: "KatiosPlazoleta",
    url: "https://katiosr.vercel.app/KatiosPlazoleta",
  },
  {
    nombre: "KatiosRt11",
    url: "https://katiosr.vercel.app/KatiosRt11",
  },
  {
    nombre: "KatiosToGo",
    url: "https://katiosr.vercel.app/KatiosToGo",
  },
];
//Generador de imagenes

async function generarQRs() {
  for (const sede of sedes) {
    await QRCode.toFile(
      `${sede.nombre}.png`,
      sede.url,
      {
        width: 500,
        margin: 2,
      },
      function (err) {
        if (err) {
          console.error(err);
          return;
        }

        console.log("QR generado correctamente");
      },
    );
  }
}

generarQRs();
