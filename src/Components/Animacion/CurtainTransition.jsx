import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function CurtainTransition({ children }) {
  const location = useLocation();

  return (
    <div className="relative">
      {/* Renderiza el contenido de la página actual */}
      {children}

      {/* Animación de la cortina al cambiar de ruta */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ originY: "top" }}
        />
      </AnimatePresence>
    </div>
  );
}