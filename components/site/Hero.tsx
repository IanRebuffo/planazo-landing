"use client";

import { motion, useReducedMotion } from "motion/react";
import { LogoStar } from "@/components/brand/LogoStar";
import { FondoFlotante } from "@/components/app/FondoFlotante";
import { SpeechBubbles } from "@/components/site/SpeechBubbles";
import { StoreBadges } from "@/components/site/StoreBadges";

const EASE = [0.23, 1, 0.32, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[linear-gradient(165deg,#2bd9ae_0%,#00c896_46%,#00a87e_100%)] px-5 pb-40 pt-28 text-center text-white sm:px-6 sm:pt-32"
    >
      {/* Íconos flotando hacia arriba (universo Planazo) */}
      <FondoFlotante color="#ffffff" />

      {/* Glow suave detrás de la estrella */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-[120px]"
      />

      {/* Pop-ups sociales */}
      <SpeechBubbles />

      {/* Contenido */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center"
      >
        {/* Estrella protagonista */}
        <LogoStar
          animated
          interactive
          starColor="#ffffff"
          faceColor="#00c896"
          className="h-44 w-44 drop-shadow-[0_18px_40px_rgba(0,70,52,0.45)] sm:h-56 sm:w-56 lg:h-64 lg:w-64"
        />

        <motion.h1
          variants={item}
          className="mt-8 text-balance text-[2.7rem] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
        >
          Tu próximo plan
          <br />
          empieza acá
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl"
        >
          Descubrí eventos cerca tuyo, mirá a dónde van tus amigos y sumate al
          plan. Salir con tu gente nunca fue tan fácil.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <a
            href="#descargar"
            className="w-full rounded-2xl bg-white px-8 py-4 text-base font-bold text-primary-dark shadow-[0_12px_30px_rgba(0,60,45,0.3)] transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98] sm:w-auto"
          >
            Descargar la app
          </a>
          <a
            href="#negocios"
            className="w-full rounded-2xl border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
          >
            Tengo un negocio
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex items-center gap-3 font-soft text-sm text-white/85"
        >
          <div className="flex -space-x-2">
            {["#ffd166", "#ffffff", "#2bd9ae", "#ff8a5c"].map((c, i) => (
              <span
                key={i}
                className="h-8 w-8 rounded-full border-2 border-[#00b389]"
                style={{ background: c }}
              />
            ))}
          </div>
          <span>Miles de personas ya arman sus findes con Planazo</span>
        </motion.div>
      </motion.div>

      {/* Badges de tienda */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: EASE }}
        className="relative z-10 mt-10"
      >
        <StoreBadges />
      </motion.div>

      {/* Transición suave hacia la sección crema (larga y con easing) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-72 bg-[linear-gradient(to_bottom,rgba(247,245,240,0)_0%,rgba(247,245,240,0.08)_35%,rgba(247,245,240,0.4)_68%,rgba(247,245,240,0.85)_88%,var(--color-bg)_100%)]"
      />
    </section>
  );
}
