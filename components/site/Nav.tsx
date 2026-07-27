"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";

const LINKS = [
  { href: "#funciones", label: "Funciones" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#negocios", label: "Para negocios" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "my-2 rounded-2xl border border-line/70 bg-card/80 py-2.5 shadow-[var(--shadow-card)] backdrop-blur-lg sm:my-3"
            : "my-3 border border-transparent py-3.5"
        }`}
      >
        <a href="#top" aria-label="Planazo — inicio">
          {scrolled ? (
            <Wordmark textColor="var(--color-fg)" starColor="#00c896" faceColor="#ffffff" />
          ) : (
            <Wordmark textColor="#ffffff" starColor="#ffffff" faceColor="#00a87e" />
          )}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-fg-sec hover:bg-muted hover:text-fg"
                  : "text-white/85 hover:bg-white/15 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#descargar"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:inline-flex ${
              scrolled
                ? "bg-primary text-on-primary shadow-[var(--shadow-primary)]"
                : "bg-white text-primary-dark shadow-[0_8px_20px_rgba(0,60,45,0.25)]"
            }`}
          >
            Descargar
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden ${
              scrolled
                ? "border-line bg-card text-fg"
                : "border-white/40 bg-white/10 text-white backdrop-blur"
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mx-3 mt-1 flex flex-col gap-1 rounded-2xl border border-line bg-card/95 p-3 shadow-[var(--shadow-lift)] backdrop-blur-lg md:hidden"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-fg transition-colors hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#descargar"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-on-primary shadow-[var(--shadow-primary)]"
            >
              Descargar la app
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
