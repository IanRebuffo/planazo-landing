"use client";

// Badges de tienda con los logos de marca reales (Apple + Google Play),
// estilo pastilla negra oficial. Los href son placeholders hasta tener las URLs.

function AppleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.05 12.53c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.16-.46 7.83 1.3 10.39.86 1.25 1.89 2.66 3.24 2.61 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.28 3.15-2.54.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.72-1.04-2.75-4.13zM14.54 4.9c.72-.87 1.2-2.08 1.07-3.28-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.08 3.18 1.15.09 2.32-.59 3.03-1.46z" />
    </svg>
  );
}

function GooglePlayGlyph({ className = "" }: { className?: string }) {
  // Triángulo "play" de 4 colores (logo oficial de Google Play).
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden>
      <path
        fill="#00d3ff"
        d="M47.4 26.5c-4.6 4.9-7.4 12.5-7.4 22.3v414.4c0 9.8 2.8 17.4 7.4 22.3l1.4 1.3L281 258.7v-5.4L48.8 25.2l-1.4 1.3z"
      />
      <path
        fill="#00f076"
        d="M358.5 336.3L281 258.7v-5.4l77.6-77.6 1.7 1L452 229c26.3 14.9 26.3 39.3 0 54.3l-91.6 52.1-1.9.9z"
      />
      <path
        fill="#ff3a44"
        d="M360.4 335.3L281 256 47.4 489.5c8.7 9.2 23 10.3 39.2 1.2l273.8-155.4"
      />
      <path
        fill="#ffd900"
        d="M360.4 176.7L86.6 21.4C70.4 12.2 56.1 13.4 47.4 22.6L281 256l79.4-79.3z"
      />
    </svg>
  );
}

function Badge({
  glyph,
  top,
  store,
  className = "",
}: {
  glyph: React.ReactNode;
  top: string;
  store: string;
  className?: string;
}) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-[#141312] px-4 py-2.5 text-white transition-transform duration-200 hover:scale-[1.04] ${className}`}
    >
      {glyph}
      <span className="text-left leading-tight">
        <span className="block font-soft text-[10px] uppercase tracking-wide text-white/80">
          {top}
        </span>
        <span className="block text-[17px] font-semibold leading-tight tracking-tight">
          {store}
        </span>
      </span>
    </a>
  );
}

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      <Badge
        glyph={<AppleGlyph className="h-7 w-7" />}
        top="Descargá en"
        store="App Store"
      />
      <Badge
        glyph={<GooglePlayGlyph className="h-6 w-6" />}
        top="Disponible en"
        store="Google Play"
      />
    </div>
  );
}
