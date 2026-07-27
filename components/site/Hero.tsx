"use client";

import { motion, useReducedMotion } from "motion/react";
import { Apple, Play, Sparkles } from "lucide-react";
import { LogoStar } from "@/components/brand/LogoStar";

const EASE = [0.23, 1, 0.32, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Mini estrellas flotantes alrededor del logo (eco del FondoFlotante de la app)
const FLOATERS = [
  { top: "8%", left: "12%", size: 34, delay: 0 },
  { top: "18%", right: "10%", size: 22, delay: 0.6 },
  { bottom: "14%", left: "8%", size: 26, delay: 1.1 },
  { bottom: "20%", right: "14%", size: 40, delay: 0.3 },
  { top: "46%", right: "3%", size: 18, delay: 1.6 },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pt-32 lg:pb-24 lg:pt-40"
    >
      {/* Glows de marca */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full opacity-[0.18] blur-[130px]"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-32 -z-10 h-[28rem] w-[28rem] rounded-full opacity-[0.12] blur-[130px]"
        style={{ background: "#2bd9ae" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Columna de texto */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm font-semibold text-fg-sec shadow-[var(--shadow-card)]"
          >
            <Sparkles size={15} className="text-primary" />
            La app para no quedarte nunca sin plan
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.2rem]"
          >
            Tu próximo plan{" "}
            <span className="relative whitespace-nowrap text-primary">
              empieza acá
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-primary/40"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-fg-sec"
          >
            Descubrí eventos cerca tuyo, enterate a dónde van tus amigos y reservá
            o comprá tu entrada sin salir de la app. Todo lo que pasa en tu ciudad,
            en un solo lugar.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#descargar"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-on-primary shadow-[var(--shadow-primary)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Descargar la app
            </a>
            <a
              href="#negocios"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-card px-7 py-4 text-base font-semibold text-fg transition-colors duration-200 hover:bg-muted"
            >
              Tengo un negocio
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-3 font-soft text-sm text-fg-muted"
          >
            <div className="flex -space-x-2">
              {["#2bd9ae", "#00c896", "#00a87e", "#f0b429"].map((c, i) => (
                <span
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-bg"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span>
              A miles de personas ya les cambió el finde <br className="hidden sm:block" />
              con Planazo.
            </span>
          </motion.div>
        </motion.div>

        {/* Columna visual: logo estrella con presencia fuerte */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-[2.2rem] bg-[linear-gradient(150deg,#2bd9ae_0%,#00c896_52%,#00a87e_100%)] shadow-[var(--shadow-lift)]">
            {/* Mini estrellas flotantes */}
            {FLOATERS.map((f, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: f.top,
                  left: f.left,
                  right: f.right,
                  bottom: f.bottom,
                  width: f.size,
                  height: f.size,
                }}
                animate={
                  reduce ? undefined : { y: [0, -14, 0], rotate: [-6, 6, -6] }
                }
                transition={{
                  duration: 5 + i,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: f.delay,
                }}
              >
                <LogoStar
                  hideFace
                  starColor="rgba(255,255,255,0.22)"
                  className="h-full w-full"
                />
              </motion.div>
            ))}

            {/* Estrella principal */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <LogoStar
                animated
                starColor="#ffffff"
                faceColor="#00c896"
                className="h-40 w-40 drop-shadow-[0_10px_30px_rgba(0,80,60,0.35)] sm:h-48 sm:w-48"
              />
              <motion.span
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
                className="mt-6 text-4xl font-extrabold lowercase tracking-[-0.04em] text-white sm:text-5xl"
              >
                planazo
              </motion.span>
              <motion.span
                initial={reduce ? undefined : { opacity: 0 }}
                animate={reduce ? undefined : { opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-1 font-soft text-sm font-semibold text-white/85"
              >
                Tu próximo plan empieza acá
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges de tienda */}
      <div className="mx-auto mt-14 flex max-w-6xl flex-wrap items-center justify-center gap-3 lg:justify-start">
        <StoreBadge icon={<Play size={20} />} top="Disponible en" store="Google Play" />
        <StoreBadge icon={<Apple size={20} />} top="Descargá en" store="App Store" />
      </div>
    </section>
  );
}

function StoreBadge({
  icon,
  top,
  store,
}: {
  icon: React.ReactNode;
  top: string;
  store: string;
}) {
  return (
    <a
      href="#descargar"
      className="inline-flex items-center gap-3 rounded-2xl border border-line bg-card px-5 py-3 text-fg shadow-[var(--shadow-card)] transition-transform duration-200 hover:scale-[1.03]"
    >
      <span className="text-primary">{icon}</span>
      <span className="text-left leading-tight">
        <span className="block font-soft text-[11px] text-fg-muted">{top}</span>
        <span className="block text-sm font-semibold">{store}</span>
      </span>
    </a>
  );
}
