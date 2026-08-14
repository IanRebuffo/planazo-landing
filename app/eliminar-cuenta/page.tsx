import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Trash2 } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Footer } from "@/components/site/Footer";
import { EMAIL_SOPORTE } from "@/lib/terminos";

// Esta página existe para Google Play: la ficha de la app pide una URL pública
// —sin login y sin instalar nada— donde se explique cómo pedir la baja de la
// cuenta, qué se borra y qué se conserva. Lo que dice acá tiene que coincidir con
// EliminacionCuentaService del backend: si cambia qué se borra, cambia este texto.
export const metadata: Metadata = {
  title: "Eliminar tu cuenta y tus datos - Planazo",
  description:
    "Cómo eliminar tu cuenta de Planazo y todos tus datos: desde la app en menos de un minuto o pidiéndolo por mail. Qué se borra y qué se conserva.",
  alternates: { canonical: "/eliminar-cuenta/" },
};

const PASOS = [
  "Abrí Planazo e iniciá sesión.",
  "Entrá a la pestaña Perfil y tocá Editar perfil.",
  "Bajá hasta el final y tocá Eliminar mi cuenta.",
  "Escribí tu @usuario para confirmar y tocá Eliminar cuenta.",
];

const SE_BORRA = [
  "Tu perfil: nombre, @usuario, email, foto, biografía y gustos.",
  "Tus reseñas, publicaciones, comentarios y me gusta.",
  "Tus planazos guardados, favoritos y tu historial de actividad.",
  "Tus entradas compradas y tus reservas.",
  "Tus seguidores, a quién seguís y tus solicitudes pendientes.",
  "Tus notificaciones y las que hayas generado en otras personas.",
  "Tus medios de pago guardados y tu cliente de Mercado Pago.",
  "Tus sesiones abiertas en cualquier dispositivo.",
];

const SE_CONSERVA = [
  {
    que: "El registro contable de los pagos que hiciste",
    porque:
      "es el comprobante de la venta del local y su respaldo antifraude, y la ley obliga a conservarlo. Queda sin tu nombre, tu email ni tus datos de tarjeta: es sólo un asiento con importes y fechas.",
  },
  {
    que: "El cupo vendido de los eventos a los que compraste entrada",
    porque:
      "la venta ocurrió y ese lugar no vuelve a estar disponible. Es un número, no un dato tuyo.",
  },
];

export default function EliminarCuentaPage() {
  return (
    <>
      {/* Misma barra sólida que /terminos: acá el fondo es claro y la Nav del
          home está pensada para ir transparente sobre el hero verde. */}
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

      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
          Eliminar tu cuenta y tus datos
        </h1>
        <p className="mt-4 font-soft text-[15px] leading-relaxed text-fg-sec">
          Aplica a la app <strong className="font-semibold text-fg">Planazo</strong>. Podés
          borrar tu cuenta vos mismo desde la app, en menos de un minuto y sin
          pedirle permiso a nadie. Si no llegás a entrar, más abajo está cómo
          pedirlo por mail.
        </p>

        <section className="mt-12 border-t border-line pt-8">
          <h2 className="text-xl font-bold text-fg sm:text-2xl">
            Desde la app (la forma más rápida)
          </h2>
          <ol className="mt-5 space-y-4">
            {PASOS.map((paso, i) => (
              <li key={paso} className="flex gap-3.5">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white"
                >
                  {i + 1}
                </span>
                <span className="font-soft text-[15px] leading-relaxed text-fg-sec">
                  {paso}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 flex gap-3 rounded-xl bg-muted px-4 py-3.5 font-soft text-[15px] leading-relaxed text-fg-sec">
            <Trash2 size={18} className="mt-0.5 shrink-0 text-fg-muted" aria-hidden />
            <span>
              El borrado es{" "}
              <strong className="font-semibold text-fg">inmediato y definitivo</strong>: no
              hay período de gracia ni forma de recuperar la cuenta. Podés
              registrarte de nuevo, pero nada de lo anterior vuelve.
            </span>
          </p>
        </section>

        <section className="mt-10 border-t border-line pt-8">
          <h2 className="text-xl font-bold text-fg sm:text-2xl">
            Por mail, si no podés entrar a la app
          </h2>
          <p className="mt-3 font-soft text-[15px] leading-relaxed text-fg-sec">
            Escribinos desde la misma dirección con la que te registraste, con el
            asunto <strong className="font-semibold text-fg">&laquo;Eliminar mi cuenta&raquo;</strong>{" "}
            e indicá tu @usuario. Verificamos que la cuenta sea tuya y la
            eliminamos dentro de los{" "}
            <strong className="font-semibold text-fg">30 días</strong>; normalmente, en
            menos de 2 días hábiles.
          </p>
          <a
            href={`mailto:${EMAIL_SOPORTE}?subject=${encodeURIComponent("Eliminar mi cuenta")}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            {EMAIL_SOPORTE}
          </a>
        </section>

        <section className="mt-10 border-t border-line pt-8">
          <h2 className="text-xl font-bold text-fg sm:text-2xl">Qué se borra</h2>
          <p className="mt-3 font-soft text-[15px] leading-relaxed text-fg-sec">
            Todo lo siguiente se elimina de nuestras bases de datos, sin copia
            interna:
          </p>
          <ul className="mt-4 space-y-2.5">
            {SE_BORRA.map((item) => (
              <li
                key={item}
                className="flex gap-3 font-soft text-[15px] leading-relaxed text-fg-sec"
              >
                <span
                  aria-hidden
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 border-t border-line pt-8">
          <h2 className="text-xl font-bold text-fg sm:text-2xl">
            Qué se conserva, y por qué
          </h2>
          <p className="mt-3 font-soft text-[15px] leading-relaxed text-fg-sec">
            Sólo dos cosas sobreviven a la baja, y ninguna te identifica:
          </p>
          <ul className="mt-4 space-y-4">
            {SE_CONSERVA.map((item) => (
              <li
                key={item.que}
                className="rounded-xl border border-line px-4 py-3.5 font-soft text-[15px] leading-relaxed text-fg-sec"
              >
                <strong className="font-semibold text-fg">{item.que}</strong>: {item.porque}
              </li>
            ))}
          </ul>
          <p className="mt-5 font-soft text-[15px] leading-relaxed text-fg-sec">
            Los registros contables se conservan durante el plazo que exige la
            legislación argentina (10 años) y después se eliminan. Las copias de
            seguridad de la base de datos se sobrescriben en su ciclo normal, por
            lo que el borrado también las alcanza dentro de los 30 días.
          </p>
        </section>

        <section className="mt-10 border-t border-line pt-8">
          <h2 className="text-xl font-bold text-fg sm:text-2xl">
            Si tenés una cuenta de negocio
          </h2>
          <p className="mt-3 font-soft text-[15px] leading-relaxed text-fg-sec">
            Las cuentas de negocio se dan de baja escribiendo a{" "}
            <a
              href={`mailto:${EMAIL_SOPORTE}`}
              className="font-semibold text-primary-dark underline underline-offset-2"
            >
              {EMAIL_SOPORTE}
            </a>
            . Antes de eliminarlas despublicamos el local y sus planazos, y
            avisamos a quien tenga una reserva o una entrada ya comprada.
          </p>
        </section>

        <p className="mt-10 border-t border-line pt-8 font-soft text-[15px] leading-relaxed text-fg-sec">
          El detalle completo de cómo tratamos tus datos está en la sección de
          privacidad de nuestros{" "}
          <Link
            href="/terminos/#datos-personales"
            className="font-semibold text-primary-dark underline underline-offset-2"
          >
            Términos y condiciones
          </Link>
          .
        </p>
      </main>

      <Footer />
    </>
  );
}
