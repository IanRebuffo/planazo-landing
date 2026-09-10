import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Footer } from "@/components/site/Footer";
import {
  EMAIL_CONTACTO,
  EMAIL_SOPORTE,
  TERMINOS,
  TERMINOS_ACTUALIZADO,
  partirNegritas,
  type BloqueLegal,
  type SeccionLegal,
} from "@/lib/terminos";

// Política de privacidad como página PROPIA.
//
// POR QUÉ EXISTE. El contenido siempre estuvo —es la sección "Datos personales y
// privacidad" de los Términos— pero Google Play rechazó la app por eso mismo: en Play
// Console había una URL a /terminos y su revisión la marcó como "enlace indirecto",
// porque para llegar al texto de privacidad hay que navegar dentro de otro documento.
// Play exige una URL que caiga DIRECTO en la política.
//
// No se duplica el texto: se lee de lib/terminos.ts, que sigue siendo la única fuente.
// Así una corrección legal se hace en un solo lugar y las dos páginas la reflejan. Si
// se copiaba, al primer cambio íbamos a tener dos políticas distintas conviviendo, y
// esa es justo la clase de inconsistencia que cuesta un rechazo.

export const metadata: Metadata = {
  title: "Política de privacidad - Planazo",
  description:
    "Política de privacidad de Planazo: qué datos tratamos, para qué, con quién los compartimos, cuánto los conservamos y cómo ejercer tus derechos.",
  alternates: { canonical: "/privacidad/" },
};

/**
 * La sección de `lib/terminos.ts` que se pinta acá.
 *
 * Rompe el build si el id no existe. Es a propósito: si alguien renombra la sección,
 * prefiero que falle el deploy antes que publicar una política de privacidad VACÍA —
 * eso vuelve a costar el rechazo de Play y no nos enteramos hasta que llega el mail.
 */
function seccionPorId(id: string): SeccionLegal {
  const seccion = TERMINOS.find((s) => s.id === id);
  if (!seccion) {
    throw new Error(
      `lib/terminos.ts no tiene la sección "${id}", que la página /privacidad necesita para armarse.`,
    );
  }
  return seccion;
}

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

/** Los bloques de una sección, sin la numeración que usan los Términos. */
function Bloques({ bloques }: { bloques: BloqueLegal[] }) {
  return (
    <>
      {bloques.map((bloque, i) => {
        if (bloque.tipo === "sub") {
          return (
            <h3 key={i} className="mt-6 text-base font-semibold text-fg">
              {bloque.titulo}
            </h3>
          );
        }

        if (bloque.tipo === "lista") {
          return (
            <ul key={i} className="mt-3 space-y-2.5">
              {bloque.items.map((item, j) => (
                <li
                  key={j}
                  className="flex gap-3 font-soft text-[15px] leading-relaxed text-fg-sec"
                >
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
          <p
            key={i}
            className="mt-3 font-soft text-[15px] leading-relaxed text-fg-sec"
          >
            <Rico texto={bloque.texto} />
          </p>
        );
      })}
    </>
  );
}

export default function PrivacidadPage() {
  const datos = seccionPorId("datos-personales");
  const comunicaciones = seccionPorId("comunicaciones");

  return (
    <>
      {/* Misma barra sólida que /terminos: la Nav del home es transparente sobre el
          hero verde y acá el fondo es claro. */}
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
        <article className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            Política de privacidad
          </h1>
          <p className="mt-3 font-soft text-sm text-fg-muted">
            Última actualización: {TERMINOS_ACTUALIZADO}
          </p>

          {/* Identificación de la app y del responsable. Google Play pide que la
              política diga a qué aplicación corresponde y quién trata los datos: sin
              eso, una política genérica también se rechaza. */}
          <p className="mt-5 font-soft text-[15px] leading-relaxed text-fg-sec">
            Esta política explica cómo <strong className="font-semibold text-fg">Planazo</strong>{" "}
            trata tus datos personales en la aplicación móvil (Android y iOS) y en el
            sitio <strong className="font-semibold text-fg">planazoco.ar</strong>. Planazo
            es responsable del tratamiento y podés contactarnos en{" "}
            <a
              href={`mailto:${EMAIL_SOPORTE}`}
              className="font-medium text-primary-dark underline decoration-line underline-offset-2"
            >
              {EMAIL_SOPORTE}
            </a>
            . El tratamiento se rige por la{" "}
            <strong className="font-semibold text-fg">
              Ley 25.326 de Protección de los Datos Personales
            </strong>{" "}
            de la República Argentina.
          </p>

          <section id="datos-personales" className="mt-12 scroll-mt-24 border-t border-line pt-8">
            <h2 className="text-xl font-bold text-fg sm:text-2xl">{datos.titulo}</h2>
            <Bloques bloques={datos.bloques} />
          </section>

          <section id="comunicaciones" className="mt-10 scroll-mt-24 border-t border-line pt-8">
            <h2 className="text-xl font-bold text-fg sm:text-2xl">{comunicaciones.titulo}</h2>
            <Bloques bloques={comunicaciones.bloques} />
          </section>

          <section id="contacto" className="mt-10 scroll-mt-24 border-t border-line pt-8">
            <h2 className="text-xl font-bold text-fg sm:text-2xl">Contacto y más información</h2>
            <p className="mt-3 font-soft text-[15px] leading-relaxed text-fg-sec">
              Para ejercer tus derechos de acceso, rectificación, actualización o
              supresión, o por cualquier consulta sobre tus datos, escribinos a{" "}
              <a
                href={`mailto:${EMAIL_SOPORTE}`}
                className="font-medium text-primary-dark underline decoration-line underline-offset-2"
              >
                {EMAIL_SOPORTE}
              </a>
              . Para todo lo demás,{" "}
              <a
                href={`mailto:${EMAIL_CONTACTO}`}
                className="font-medium text-primary-dark underline decoration-line underline-offset-2"
              >
                {EMAIL_CONTACTO}
              </a>
              .
            </p>
            <ul className="mt-4 space-y-2.5">
              <li className="flex gap-3 font-soft text-[15px] leading-relaxed text-fg-sec">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Cómo eliminar tu cuenta y qué se borra:{" "}
                  <Link
                    href="/eliminar-cuenta/"
                    className="font-medium text-primary-dark underline decoration-line underline-offset-2"
                  >
                    planazoco.ar/eliminar-cuenta
                  </Link>
                </span>
              </li>
              <li className="flex gap-3 font-soft text-[15px] leading-relaxed text-fg-sec">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Estos puntos también integran nuestros{" "}
                  <Link
                    href="/terminos/"
                    className="font-medium text-primary-dark underline decoration-line underline-offset-2"
                  >
                    Términos y condiciones
                  </Link>
                  , donde están en el contexto del resto del servicio.
                </span>
              </li>
            </ul>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
