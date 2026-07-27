"use client";

import { motion, useReducedMotion } from "motion/react";
import { MapPin, Ticket, Users, Heart, MessageCircle } from "lucide-react";
import { LogoStar } from "@/components/brand/LogoStar";

const PILLS = ["Para vos", "Hoy", "Cerca", "Música"];

export function PhoneMockup({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`mx-auto w-full max-w-[300px] ${className}`}
      style={{ perspective: "1400px" }}
    >
      <motion.div
        initial={reduce ? undefined : { opacity: 0, rotateY: -24, y: 30 }}
        whileInView={
          reduce ? undefined : { opacity: 1, rotateY: -14, y: 0 }
        }
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Flotación 3D sutil (vida) */}
        <motion.div
          animate={
            reduce ? undefined : { y: [0, -12, 0], rotateX: [3, 0, 3] }
          }
          transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Marco del teléfono */}
          <div className="relative overflow-hidden rounded-[2.6rem] border-[10px] border-[#141312] bg-bg shadow-[-28px_40px_70px_rgba(0,60,45,0.35),0_10px_30px_rgba(26,25,22,0.2)]">
            {/* Notch */}
            <div className="absolute left-1/2 top-2 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-[#141312]" />

            {/* Pantalla */}
            <div className="h-[600px] overflow-hidden">
              {/* Header */}
              <div className="bg-card px-4 pb-3 pt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="flex items-center gap-1 text-[11px] font-semibold text-fg-muted">
                      <MapPin size={12} className="text-primary" /> Palermo, CABA
                    </p>
                    <p className="text-xl font-extrabold tracking-[-0.02em] text-fg">
                      Planazos
                    </p>
                  </div>
                  <LogoStar starColor="#00c896" faceColor="#ffffff" className="h-9 w-9" />
                </div>
                <div className="mt-3 flex gap-2 overflow-hidden">
                  {PILLS.map((p, i) => (
                    <span
                      key={p}
                      className={`shrink-0 rounded-full px-3.5 py-1.5 text-[12px] font-semibold ${
                        i === 0
                          ? "bg-primary text-on-primary"
                          : "border border-line bg-card text-fg-sec"
                      }`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Feed */}
              <div className="space-y-3 px-4 pb-6 pt-3">
                {/* Planazo destacado (imagen llamativa) */}
                <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_4px_16px_rgba(26,25,22,0.08)]">
                  <div
                    className="relative h-44"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 26% 22%, rgba(255,120,205,0.9), transparent 46%), radial-gradient(circle at 82% 30%, rgba(90,220,255,0.85), transparent 44%), radial-gradient(circle at 60% 90%, rgba(255,190,90,0.75), transparent 50%), linear-gradient(140deg,#2b1055 0%,#5b2a86 55%,#7b3fa0 100%)",
                    }}
                  >
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold text-fg">
                      HOY · 23:00
                    </span>
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-danger px-2.5 py-1 text-[10px] font-extrabold text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" /> Últimas
                    </span>
                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(20,8,40,0.85),transparent)] p-3.5 pt-8">
                      <h4 className="text-[17px] font-extrabold leading-tight text-white">
                        Noche Electrónica · Rooftop
                      </h4>
                      <p className="mt-0.5 font-soft text-[11px] text-white/80">
                        Club Niceto · Palermo
                      </p>
                    </div>
                  </div>
                  <div className="p-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          {["#00c896", "#f0b429", "#ff8a5c", "#2bd9ae"].map(
                            (c) => (
                              <span
                                key={c}
                                className="h-6 w-6 rounded-full border-2 border-card"
                                style={{ background: c }}
                              />
                            )
                          )}
                        </div>
                        <span className="font-soft text-[11px] font-bold text-primary-dark">
                          +128 van · 6 amigos
                        </span>
                      </div>
                    </div>
                    <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 text-[13px] font-bold text-on-primary">
                      <Ticket size={14} /> Comprar entrada
                    </button>
                  </div>
                </div>

                {/* Actividad social de un amigo */}
                <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-muted/60 px-3.5 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-white">
                    M
                  </span>
                  <p className="font-soft text-[11.5px] leading-snug text-fg-sec">
                    <b className="font-bold text-fg">Martu</b> va a este plan.{" "}
                    <span className="text-primary-dark">¡Qué planazo!</span>
                  </p>
                </div>

                {/* Card compacta */}
                <div className="overflow-hidden rounded-2xl border border-line bg-card">
                  <div className="flex gap-3 p-2.5">
                    <div
                      className="h-16 w-16 shrink-0 rounded-xl"
                      style={{
                        background:
                          "linear-gradient(135deg,#ffe6c7,#ffb877)",
                      }}
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-[13px] font-bold text-fg">
                        Cena & vinos de autor
                      </h4>
                      <p className="font-soft text-[11px] text-fg-muted">
                        La Parrilla de Juan · Mañana
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-fg-muted">
                        <span className="flex items-center gap-1 text-[10.5px] font-semibold text-primary-dark">
                          <Users size={11} /> 2 amigos
                        </span>
                        <span className="flex items-center gap-1 text-[10.5px]">
                          <Heart size={11} /> 34
                        </span>
                        <span className="flex items-center gap-1 text-[10.5px]">
                          <MessageCircle size={11} /> 8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
