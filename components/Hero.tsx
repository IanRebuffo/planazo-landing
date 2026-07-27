"use client";

import { motion } from "motion/react";

// Easing "suave" estilo Emil Kowalski: entrada con ease-out marcado.
const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Glow de marca detrás del contenido */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--color-brand)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-3xl flex-col items-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-4 py-1.5 text-sm font-medium text-fg-muted backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-brand" />
          En construcción
        </motion.span>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Descubrí qué hacer{" "}
          <span className="text-brand">hoy</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-lg text-fg-muted"
        >
          Planazo es la app para descubrir eventos, salir con amigos y no
          perderte nada de lo que pasa cerca tuyo.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="rounded-full bg-brand px-7 py-3.5 font-semibold text-on-brand transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Descargar la app
          </a>
          <a
            href="#"
            className="rounded-full border border-line-strong px-7 py-3.5 font-semibold text-fg transition-colors duration-200 hover:bg-surface"
          >
            Soy un local
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
