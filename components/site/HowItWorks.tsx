"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Descargá y decinos qué te gusta",
    desc: "Creá tu cuenta en un minuto y elegí tus intereses. Planazo se arma a tu medida.",
  },
  {
    n: "2",
    title: "Descubrí planes y a tus amigos",
    desc: 'Explorá lo que pasa cerca tuyo y fijate a qué eventos van las personas que seguís.',
  },
  {
    n: "3",
    title: "Reservá, comprá y salí",
    desc: "Asegurá tu mesa o tu entrada desde la app y disfrutá. Así de simple.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-5 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl rounded-[2.4rem] bg-muted px-6 py-14 sm:px-10 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-soft text-sm font-bold uppercase tracking-[0.14em] text-primary-dark">
            Cómo funciona
          </span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
            De cero a tu próximo plan en 3 pasos
          </h2>
        </Reveal>

        <StaggerGroup className="relative mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <div className="relative h-full rounded-2xl border border-line bg-card p-7 shadow-[var(--shadow-card)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl font-extrabold text-on-primary shadow-[var(--shadow-primary)]">
                  {s.n}
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-fg-sec">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
