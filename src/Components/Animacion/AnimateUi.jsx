import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import useEmblaCarousel from "@animate-ui/react/primitives/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export {
  CarouselDots,
  CarouselCounter,
} from "@animate-ui/react/primitives/carousel";

const CarouselContext = createContext(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel debe usarse dentro de <Carousel />");
  }
  return context;
}

export function Carousel({ opts, plugins, className = "", children, ...props }) {
  const [carouselRef, api] = useEmblaCarousel(opts, plugins);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  };

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={`relative ${className}`}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className = "", ...props }) {
  const { carouselRef } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div className={`flex ${className}`} {...props} />
    </div>
  );
}

export function CarouselItem({ className = "", ...props }) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={`min-w-0 shrink-0 grow-0 basis-full ${className}`}
      {...props}
    />
  );
}

const estiloFlecha =
  "absolute inset-y-0 my-auto hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg transition hover:bg-amber-600 disabled:opacity-40 touch-manipulation";

export function CarouselPrevious({ className = "" }) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      type="button"
      data-slot="carousel-previous"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={`${estiloFlecha} -left-12 ${className}`}
    >
      <ChevronLeft size={22} />
      <span className="sr-only">Anterior</span>
    </button>
  );
}

export function CarouselNext({ className = "" }) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      type="button"
      data-slot="carousel-next"
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={`${estiloFlecha} -right-12 ${className}`}
    >
      <ChevronRight size={22} />
      <span className="sr-only">Siguiente</span>
    </button>
  );
}
