"use client";

import { Apple, Play } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { LogoStar } from "@/components/brand/LogoStar";

export function DownloadCta() {
  return (
    <section id="descargar" className="px-5 py-20 sm:px-6 lg:py-28">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[linear-gradient(150deg,#2bd9ae_0%,#00c896_50%,#00a87e_100%)] px-6 py-14 text-center text-white shadow-[var(--shadow-lift)] sm:px-12 sm:py-16">
          {/* Estrellas de fondo */}
          <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 opacity-20">
            <LogoStar hideFace starColor="#ffffff" className="h-full w-full" />
          </div>
          <div className="pointer-events-none absolute -bottom-10 -right-6 h-48 w-48 opacity-20">
            <LogoStar hideFace starColor="#ffffff" className="h-full w-full" />
          </div>

          <div className="relative">
            <LogoStar
              animated
              starColor="#ffffff"
              faceColor="#00a87e"
              className="mx-auto h-20 w-20"
            />
            <h2 className="mt-6 text-balance text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
              Tu próximo plan empieza acá
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Descargá Planazo gratis y enterate de todo lo que pasa cerca tuyo.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <StoreBadge icon={<Play size={20} />} top="Disponible en" store="Google Play" />
              <StoreBadge icon={<Apple size={20} />} top="Descargá en" store="App Store" />
            </div>
          </div>
        </div>
      </Reveal>
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
      href="#"
      className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-fg shadow-[0_8px_24px_rgba(0,60,45,0.22)] transition-transform duration-200 hover:scale-[1.03]"
    >
      <span className="text-primary-dark">{icon}</span>
      <span className="text-left leading-tight">
        <span className="block font-soft text-[11px] text-fg-muted">{top}</span>
        <span className="block text-sm font-semibold">{store}</span>
      </span>
    </a>
  );
}
