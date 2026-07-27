"use client";

import { motion, useReducedMotion } from "motion/react";
import { MapPin, Search, Heart, Ticket, Users } from "lucide-react";
import { LogoStar } from "@/components/brand/LogoStar";

const PILLS = ["Todos", "Hoy", "Música", "Gastro", "Fiesta"];

type EventCard = {
  title: string;
  place: string;
  barrio: string;
  gradient: string;
  amigos: number;
  tag: string;
  cta: "Voy" | "Entrada" | "Reservar";
};

const EVENTS: EventCard[] = [
  {
    title: "Fecha techno en el rooftop",
    place: "Club Niceto",
    barrio: "Palermo",
    gradient: "linear-gradient(135deg,#c7f0e4,#8fe0c8)",
    amigos: 3,
    tag: "Hoy · 23:00",
    cta: "Entrada",
  },
  {
    title: "Cena & vinos de autor",
    place: "La Parrilla de Juan",
    barrio: "Villa Crespo",
    gradient: "linear-gradient(135deg,#ffe6c7,#ffd0a3)",
    amigos: 2,
    tag: "Mañana · 21:00",
    cta: "Reservar",
  },
  {
    title: "Show en vivo + after",
    place: "Konex",
    barrio: "Abasto",
    gradient: "linear-gradient(135deg,#d8dcff,#b7bffb)",
    amigos: 5,
    tag: "Sáb · 20:30",
    cta: "Voy",
  },
];

export function PhoneMockup({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative mx-auto w-full max-w-[300px] ${className}`}
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
    >
      {/* Marco del teléfono */}
      <div className="relative overflow-hidden rounded-[2.6rem] border-[10px] border-[#141312] bg-bg shadow-[var(--shadow-lift)]">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-[#141312]" />

        {/* Pantalla */}
        <div className="h-[600px] overflow-hidden">
          {/* Header */}
          <div className="bg-card px-4 pb-3 pt-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-soft text-[11px] text-fg-muted">Estás en</p>
                <p className="flex items-center gap-1 text-sm font-bold text-fg">
                  <MapPin size={14} className="text-primary" /> Palermo, CABA
                </p>
              </div>
              <LogoStar starColor="#00c896" faceColor="#ffffff" className="h-8 w-8" />
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-2xl bg-muted px-3.5 py-2.5">
              <Search size={16} className="text-fg-muted" />
              <span className="font-soft text-[13px] text-fg-muted">
                Buscá un plan, local o evento…
              </span>
            </div>
          </div>

          {/* Pills */}
          <div className="flex gap-2 overflow-hidden px-4 py-3">
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

          {/* Feed */}
          <div className="space-y-3 px-4 pb-6">
            {EVENTS.map((e) => (
              <div
                key={e.title}
                className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_2px_10px_rgba(26,25,22,0.04)]"
              >
                <div className="relative h-24" style={{ background: e.gradient }}>
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-card/90 px-2.5 py-1 text-[10px] font-bold text-fg">
                    {e.tag}
                  </span>
                  <span className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-card/90">
                    <Heart size={14} className="text-fg-sec" />
                  </span>
                </div>
                <div className="p-3">
                  <h4 className="text-[13px] font-bold leading-tight text-fg">
                    {e.title}
                  </h4>
                  <p className="mt-0.5 font-soft text-[11px] text-fg-muted">
                    {e.place} · {e.barrio}
                  </p>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="flex items-center gap-1 font-soft text-[11px] font-semibold text-primary-dark">
                      <Users size={12} /> {e.amigos} amigos van
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-bold ${
                        e.cta === "Voy"
                          ? "border border-primary text-primary-dark"
                          : "bg-primary text-on-primary"
                      }`}
                    >
                      {e.cta === "Entrada" && <Ticket size={12} />}
                      {e.cta}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
