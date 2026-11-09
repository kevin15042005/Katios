import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "../../../Components/Animacion/AnimateUi";

import Parrilla from "../../../assets/Funcionarios/Plazoleta2.webp";
import KatiosInter from "../../../assets/Inter/KatiosInter.webp";
import KatiosRt11 from "../../../assets/Rt11/KatiosRt11.webp";
import KatiosPuente from "../../../assets/Puente/KatiosPuente.webp";
import KatiosPlazoleta from "../../../assets/Plazoleta/KatiosPlazoleta.webp";

const imagenes = [Parrilla, KatiosInter, KatiosRt11, KatiosPuente, KatiosPlazoleta];

export default function FondoInicio() {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <div className="absolute inset-0 bg-black">
      <Carousel
        opts={{ loop: true, duration: 40, watchDrag: false }}
        plugins={[autoplay.current]}
        className="h-full"
      >
        <CarouselContent>
          {imagenes.map((imagen) => (
            <CarouselItem key={imagen}>
              <img
                src={imagen}
                alt=""
                draggable={false}
                className="w-full h-140 object-cover opacity-40 select-none"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center">
          <CarouselDots className="text-white scale-150 md:scale-200" />
        </div>
      </Carousel>
    </div>
  );
}
