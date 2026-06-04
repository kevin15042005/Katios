import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RotatingTextMatrix({
  leftTexts = [],
  rightTexts = [],
  interval = 2000,
}) {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    if (!leftTexts.length || !rightTexts.length) return;

    const id = setInterval(() => {
      setRightIndex((prevRight) => {
        const nextRight = prevRight + 1;

        if (nextRight >= rightTexts.length) {
          setRightIndex(0);

          setLeftIndex((prevLeft) => {
            const nextLeft = prevLeft + 1;

            // reinicia todo si termina izquierda
            return nextLeft >= leftTexts.length ? 0 : nextLeft;
          });

          return 0;
        }

        return nextRight;
      });
    }, interval);

    return () => clearInterval(id);
  }, [leftTexts, rightTexts, interval]);

  const left = leftTexts[leftIndex] || "";
  const right = rightTexts[rightIndex] || "";

  return (
    <div className="bg-amber-500 px-6 py-3 rounded-2xl flex items-center gap-4 overflow-hidden">

      {/* IZQUIERDA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={left}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          className="font-bold text-white flex"
        >
          {left}
        </motion.div>
      </AnimatePresence>

      <div className="w-px h-6 bg-white/40" />

      <AnimatePresence mode="wait">
        <motion.div
          key={right}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          className="font-bold text-white flex"
        >
          {right}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}