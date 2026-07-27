"use client";

import { motion, useReducedMotion } from "motion/react";

type Bubble = {
  text: string;
  initial: string;
  color: string;
  /** Clases de posición (responsive) */
  pos: string;
  delay: number;
  duration: number;
};

const BUBBLES: Bubble[] = [
  {
    text: "¡Qué planazo!",
    initial: "M",
    color: "#00c896",
    pos: "left-[2%] top-[16%] sm:left-[6%] sm:top-[20%]",
    delay: 0.4,
    duration: 6,
  },
  {
    text: "¿Quién se prende?",
    initial: "J",
    color: "#f0b429",
    pos: "right-[2%] top-[12%] sm:right-[8%] sm:top-[16%]",
    delay: 1.8,
    duration: 6.5,
  },
  {
    text: "¡Vamos!",
    initial: "S",
    color: "#00a87e",
    pos: "left-[4%] bottom-[24%] sm:left-[10%] sm:bottom-[26%]",
    delay: 3.1,
    duration: 5.5,
  },
  {
    text: "Yo me sumo",
    initial: "V",
    color: "#2bd9ae",
    pos: "right-[3%] bottom-[26%] sm:right-[9%] sm:bottom-[28%]",
    delay: 2.4,
    duration: 6,
  },
  {
    text: "Nos vemos ahí",
    initial: "F",
    color: "#ff8a5c",
    pos: "hidden md:block md:left-[16%] md:top-[46%]",
    delay: 4.2,
    duration: 6.5,
  },
  {
    text: "¡De una!",
    initial: "L",
    color: "#00c896",
    pos: "hidden md:block md:right-[15%] md:top-[52%]",
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
          <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-black/5 bg-white px-3 py-2 shadow-[0_10px_30px_rgba(0,60,45,0.18)]">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
              style={{ background: b.color }}
            >
              {b.initial}
            </span>
            <span className="whitespace-nowrap text-sm font-semibold text-fg">
              {b.text}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
