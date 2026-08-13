import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Footer } from "@/components/site/Footer";
import {
  TERMINOS,
  TERMINOS_ACTUALIZADO,
  partirNegritas,
  type BloqueLegal,
  type SeccionLegal,
} from "@/lib/terminos";

export const metadata: Metadata = {
  title: "Términos y condiciones - Planazo",
  description:
    "Términos y Condiciones de uso de Planazo: cuentas, reservas, entradas, pagos, contenido, privacidad y responsabilidad.",
  alternates: { canonical: "/terminos/" },
};

/** Pinta un texto con marcas **negrita**. */
function Rico({ texto }: { texto: string }) {
  return (
    <>
      {partirNegritas(texto).map((tramo, i) =>
        tramo.fuerte ? (
          <strong key={i} className="font-semibold text-fg">
            {tramo.texto}
          </strong>
        ) : (
          <span key={i}>{tramo.texto}</span>
        ),
      )}
    </>
  );
}

function Seccion({ seccion, numero }: { seccion: SeccionLegal; numero: number }) {
  // Las subsecciones se numeran por orden de aparición: 6.1, 6.2, …
  let sub = 0;

  return (
    <section id={seccion.id} className="scroll-mt-24 border-t border-line pt-8">
      <h2 className="text-xl font-bold text-fg sm:text-2xl">
        {numero}. {seccion.titulo}
      </h2>

      {seccion.bloques.map((bloque: BloqueLegal, i) => {
        if (bloque.tipo === "sub") {
          sub += 1;
          return (
            <h3 key={i} className="mt-6 text-base font-semibold text-fg">
              {numero}.{sub} {bloque.titulo}
            </h3>
          );
        }

        if (bloque.tipo === "lista") {
          return (
            <ul key={i} className="mt-3 space-y-2.5">
              {bloque.items.map((item, j) => (
                <li key={j} className="flex gap-3 font-soft text-[15px] leading-relaxed text-fg-sec">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>
                    <Rico texto={item} />
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="mt-3 font-soft text-[15px] leading-relaxed text-fg-sec">
            <Rico texto={bloque.texto} />
          </p>
        );
      })}
    </section>
  );
}

export default function TerminosPage() {
  return (
    <>
      {/* La Nav del home es transparente sobre el hero verde: acá el fondo es
          claro, así que esta página lleva su propia barra sólida. */}
      <header className="sticky top-0 z-50 border-b border-line bg-card/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
          <Link href="/" aria-label="Planazo - inicio">
            <Wordmark textColor="var(--color-fg)" starColor="#00c896" faceColor="#ffffff" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-fg-sec transition-colors hover:bg-muted hover:text-fg"
          >
            <ArrowLeft size={16} />
            Volver
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            Términos y condiciones
          </h1>
          <p className="mt-3 font-soft text-sm text-fg-muted">
            Última actualización: {TERMINOS_ACTUALIZADO}
          </p>
          <p className="mt-5 font-soft text-[15px] leading-relaxed text-fg-sec">
            Estos Términos regulan el uso de Planazo, tanto para las personas que
            descubren planes, reservan y compran entradas como para los locales que
            publican y venden a través de la Plataforma.
          </p>
        </div>

        <div className="mt-12 gap-12 lg:grid lg:grid-cols-[220px_1fr]">
          {/* Índice. Los números salen del orden del array, igual que los títulos. */}
          <nav aria-label="Índice" className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100dvh-8rem)] overflow-y-auto pr-2">
              <p className="text-xs font-bold uppercase tracking-wider text-fg-muted">
                Índice
              </p>
              <ol className="mt-4 space-y-2">
                {TERMINOS.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-[13px] leading-snug text-fg-sec transition-colors hover:text-primary-dark"
                    >
                      <span className="text-fg-muted">{i + 1}.</span> {s.titulo}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="max-w-3xl space-y-10">
            {TERMINOS.map((seccion, i) => (
              <Seccion key={seccion.id} seccion={seccion} numero={i + 1} />
            ))}
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
