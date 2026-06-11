import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function GeneradorQR() {
  const [url, setUrl] = useState("");

  const descargarQR = () => {
    const canvas = document.getElementById("qr-code");

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const link = document.createElement("a");

    link.href = pngUrl;
    link.download = "QR-Katios.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">

      <h1 className="text-3xl font-bold">
        Generador QR
      </h1>

      <input
        type="text"
        placeholder="Ingrese URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border-2 px-4 py-2 rounded-xl w-96"
      />

      {url && (
        <>
          <QRCodeCanvas
            id="qr-code"
            value={url}
            size={300}
          />

          <button
            onClick={descargarQR}
            className="bg-amber-500 px-6 py-3 rounded-xl font-bold"
          >
            Descargar QR
          </button>
        </>
      )}
    </div>
  );
}