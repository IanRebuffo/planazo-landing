"use client";

import { motion, useReducedMotion } from "motion/react";

type Bubble = {
  text: string;
  initial: string;
  color: string;
  /** Clases de posición (responsive). Se ubican en las bandas superior/inferior
   *  y en los laterales solo en lg, para no pisar la estrella ni el texto. */
  pos: string;
  delay: number;
  duration: number;
};

const BUBBLES: Bubble[] = [
  {
    text: "¡Qué planazo!",
    initial: "M",
    color: "#00c896",
    pos: "left-[3%] top-[13%] sm:left-[7%] sm:top-[16%]",
    delay: 0.4,
    duration: 6,
  },
  {
    text: "¿Quién se prende?",
    initial: "J",
    color: "#f0b429",
    pos: "right-[3%] top-[11%] sm:right-[8%] sm:top-[14%]",
    delay: 1.8,
    duration: 6.5,
  },
  {
    text: "¡Vamos!",
    initial: "S",
    color: "#00a87e",
    pos: "bottom-[11%] left-[4%] sm:left-[9%] sm:bottom-[14%]",
    delay: 3.1,
    duration: 5.5,
  },
  {
    text: "Yo me sumo",
    initial: "V",
    color: "#2bd9ae",
    pos: "bottom-[13%] right-[4%] sm:right-[8%] sm:bottom-[16%]",
    delay: 2.4,
    duration: 6,
  },
  {
    text: "Nos vemos ahí",
    initial: "F",
    color: "#ff8a5c",
    pos: "hidden lg:block lg:left-[13%] lg:top-[44%]",
    delay: 4.2,
    duration: 6.5,
  },
  {
    text: "¡De una!",
    initial: "L",
    color: "#00c896",
    pos: "hidden lg:block lg:right-[12%] lg:top-[54%]",
    delay: 5.4,
    duration: 5.5,
  },
];

export function SpeechBubbles() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
      {BUBBLES.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute ${b.pos}`}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.92],
            y: [12, 0, -2, -10],
          }}
          transition={{
            duration: b.duration,
            times: [0, 0.14, 0.82, 1],
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2.6,
            delay: b.delay,
          }}
        >
          <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-black/5 bg-white px-2.5 py-1.5 shadow-[0_10px_30px_rgba(0,60,45,0.18)] sm:gap-2 sm:px-3 sm:py-2">
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white sm:h-6 sm:w-6 sm:text-[11px]"
              style={{ background: b.color }}
            >
              {b.initial}
            </span>
            <span className="whitespace-nowrap text-[13px] font-semibold text-fg sm:text-sm">
              {b.text}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
