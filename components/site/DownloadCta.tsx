"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { LogoStar } from "@/components/brand/LogoStar";
import { FondoFlotante } from "@/components/app/FondoFlotante";
import { StoreBadges } from "@/components/site/StoreBadges";

export function DownloadCta() {
  const reduce = useReducedMotion();

  return (
    <section id="descargar" className="px-5 py-20 sm:px-6 lg:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[linear-gradient(150deg,#2bd9ae_0%,#00c896_50%,#00a87e_100%)] px-6 py-16 text-center text-white shadow-[var(--shadow-lift)] sm:px-12 sm:py-20">
          {/* Iconos flotando (vida, no estático) */}
          <FondoFlotante color="#ffffff" />

          {/* Glow suave que respira */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[100px]"
            animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <LogoStar
              animated
              starColor="#ffffff"
              faceColor="#00a87e"
              className="h-24 w-24 drop-shadow-[0_12px_28px_rgba(0,70,52,0.4)]"
            />
            <h2 className="mt-7 text-balance text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
              Tu próximo plan empieza acá
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Descargá Planazo gratis y enterate de todo lo que pasa cerca tuyo.
            </p>

            <StoreBadges className="mt-9" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
