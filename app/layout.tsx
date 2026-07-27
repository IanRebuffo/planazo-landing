import type { Metadata, Viewport } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Planazo - tu próximo plan empieza acá",
  description:
    "Descubrí eventos, salí con amigos y no te pierdas nada de lo que pasa cerca tuyo. Y si tenés un local: publicá eventos, vendé entradas, gestioná reservas y cobrá online.",
  metadataBase: new URL("https://www.planazoco.ar"),
  openGraph: {
    title: "Planazo - tu próximo plan empieza acá",
    description:
      "Descubrí eventos, salí con amigos y no te pierdas nada de lo que pasa cerca tuyo.",
    type: "website",
    locale: "es_AR",
  },
};

export const viewport: Viewport = {
  themeColor: "#00c896",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
