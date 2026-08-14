import { Instagram, Mail } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";

// Las anclas van con "/" adelante porque este footer ya no vive sólo en el home:
// desde /terminos un "#funciones" pelado no lleva a ninguna parte.
const COLS = [
  {
    title: "Producto",
    links: [
      { label: "Funciones", href: "/#funciones" },
      { label: "Cómo funciona", href: "/#como-funciona" },
      { label: "Descargar", href: "/#descargar" },
    ],
  },
  {
    title: "Negocios",
    links: [
      { label: "Para negocios", href: "/#negocios" },
      { label: "Registrá tu local", href: "/#descargar" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos y condiciones", href: "/terminos/" },
      // La privacidad hoy es una sección de los Términos, no un documento aparte.
      { label: "Privacidad", href: "/terminos/#datos-personales" },
      // Google Play exige que este link se pueda encontrar desde el sitio.
      { label: "Eliminar tu cuenta", href: "/eliminar-cuenta/" },
      { label: "Contacto", href: "mailto:contacto@planazoco.ar" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-card px-5 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 text-center md:grid-cols-[1.4fr_1fr_1fr_1fr] md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Wordmark textColor="var(--color-fg)" />
            <p className="mt-4 max-w-xs font-soft text-sm text-fg-sec">
              Tu próximo plan empieza acá. Descubrí eventos, salí con amigos y
              viví tu ciudad.
            </p>
            <div className="mt-5 flex justify-center gap-2 md:justify-start">
              <a
                href="#"
                aria-label="Instagram de Planazo"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg-sec transition-colors hover:bg-muted hover:text-fg"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:contacto@planazoco.ar"
                aria-label="Escribinos por mail"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg-sec transition-colors hover:bg-muted hover:text-fg"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-fg-muted">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-fg-sec transition-colors hover:text-primary-dark"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 font-soft text-sm text-fg-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Planazo. Todos los derechos reservados.</p>
          <p>Hecho en Argentina</p>
        </div>
      </div>
    </footer>
  );
}
