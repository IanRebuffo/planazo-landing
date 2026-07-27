import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Planazo — Descubrí qué hacer hoy",
  description:
    "Planazo es la app para descubrir eventos, salir con amigos y no perderte nada de lo que pasa cerca tuyo.",
  metadataBase: new URL("https://planazoco.ar"),
  openGraph: {
    title: "Planazo — Descubrí qué hacer hoy",
    description:
      "Descubrí eventos, salí con amigos y no te pierdas nada de lo que pasa cerca tuyo.",
    type: "website",
    locale: "es_AR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
