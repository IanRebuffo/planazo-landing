"use client";

import {
  Compass,
  Users,
  Ticket,
  CalendarCheck,
  Rss,
  Star,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { PhoneMockup } from "@/components/app/PhoneMockup";

const HIGHLIGHTS = [
  {
    icon: Compass,
    title: "Descubrí qué hacer cerca tuyo",
    desc: "Un feed con los eventos y lugares de tu zona, filtrado por lo que te gusta y lo que pasa hoy.",
  },
  {
    icon: Users,
    title: "Mirá a dónde van tus amigos",
    desc: 'Marcá "Voy" y enterate al toque de a qué planes se prendieron las personas que seguís.',
  },
  {
    icon: Ticket,
    title: "Entrá sin hacer la cola",
    desc: "Comprá tu entrada y entrá con el QR desde el celular. Sin papeles, sin vueltas.",
  },
];

const GRID = [
  {
    icon: CalendarCheck,
    title: "Reservá tu mesa",
    desc: "Elegí día, horario y cantidad de personas en el local que quieras, en segundos.",
  },
  {
    icon: Rss,
    title: "Seguí a tus lugares",
    desc: "Novedades, promos y eventos de los locales que te gustan, siempre a mano.",
  },
  {
    icon: Star,
    title: "Dejá y leé reseñas",
    desc: "Opiniones reales para elegir mejor tu próximo plan, y sumar la tuya.",
  },
];

export function Features() {
  return (
    <section id="funciones" className="px-5 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-soft text-sm font-bold uppercase tracking-[0.14em] text-primary-dark">
            Para vos
          </span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
            Todo tu finde, en una sola app
          </h2>
          <p className="mt-4 text-lg text-fg-sec">
            Planazo junta los eventos, tus amigos y las reservas en un mismo lugar.
            Menos grupos de WhatsApp, más planes.
          </p>
        </Reveal>

        {/* Showcase: mockup + highlights */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <PhoneMockup />
          </Reveal>

          <StaggerGroup className="flex flex-col gap-6">
            {HIGHLIGHTS.map((h) => (
              <StaggerItem key={h.title}>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark">
                    <h.icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{h.title}</h3>
                    <p className="mt-1 text-fg-sec">{h.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* Grid del resto de funciones */}
        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GRID.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group h-full rounded-2xl border border-line bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-primary-dark transition-colors group-hover:bg-primary-soft">
                  <f.icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-1.5 text-fg-sec">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
