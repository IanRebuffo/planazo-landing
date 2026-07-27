"use client";

import {
  CalendarPlus,
  QrCode,
  CalendarCheck,
  CreditCard,
  BarChart3,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { LogoStar } from "@/components/brand/LogoStar";

const BENEFITS = [
  {
    icon: CalendarPlus,
    title: "Publicá tus eventos",
    desc: "Cargá tu agenda y aparecé en el feed de la gente que está cerca y buscando plan.",
  },
  {
    icon: QrCode,
    title: "Vendé entradas con QR",
    desc: "Creá tipos de entrada, vendé desde la app y escaneá el QR en la puerta. Sin planillas.",
  },
  {
    icon: CalendarCheck,
    title: "Gestioná tus reservas",
    desc: "Configurá horarios y cupos, y recibí las reservas ordenadas en un solo lugar.",
  },
  {
    icon: CreditCard,
    title: "Cobrá con Mercado Pago",
    desc: "El dinero de tus ventas cae directo en tu cuenta de Mercado Pago, de forma segura.",
  },
  {
    icon: BarChart3,
    title: "Entendé a tu público",
    desc: "Métricas de tus eventos, reservas y audiencia para saber qué funciona y qué no.",
  },
  {
    icon: BadgeCheck,
    title: "Cuenta verificada",
    desc: "Mostrá tu local con la insignia de verificado y ganá la confianza de la gente.",
  },
];

export function ForBusiness() {
  const reduce = useReducedMotion();

  return (
    <section
      id="negocios"
      className="relative overflow-hidden bg-[linear-gradient(160deg,#00b389_0%,#00a87e_45%,#008e6b_100%)] px-5 py-20 text-white sm:px-6 lg:py-28"
    >
      {/* Estrella marca de agua */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-[0.08]"
        animate={reduce ? undefined : { rotate: [0, 8, 0], y: [0, -16, 0] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
      >
        <LogoStar hideFace starColor="#ffffff" className="h-full w-full" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-soft text-sm font-bold backdrop-blur">
            <LogoStar starColor="#ffffff" faceColor="#00a87e" className="h-4 w-4" />
            Planazo para negocios
          </span>
          <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
            Llená tu local y manejá todo desde el celular
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Bares, boliches, restaurantes y productoras usan Planazo para llegar a
            más gente, vender entradas, recibir reservas y cobrar online. Todo con
            la misma app.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <StaggerItem key={b.title}>
              <div className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-colors duration-200 hover:bg-white/[0.16]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-primary-dark">
                  <b.icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                  {b.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-12">
          <motion.a
            href="#descargar"
            className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-bold text-primary-dark shadow-[0_10px_30px_rgba(0,60,45,0.3)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Registrá tu negocio gratis
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.a>
          <p className="mt-3 font-soft text-sm text-white/70">
            Sin costo de alta. Empezás a publicar en minutos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
