import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática -> Cloudflare Pages.
  //
  // EL DEPLOY ES `git push` A origin/main, NO wrangler. El proyecto planazo-landing
  // está conectado a Git (Git Provider: Yes en `wrangler pages project list`), así que
  // Cloudflare buildea y publica solo con cada push; una subida directa con
  // `wrangler pages deploy` la rechaza.
  //
  // Acá antes decía "igual que app-web (wrangler pages deploy out)", y era falso: el
  // que se sube a mano con wrangler es planazo-app, que NO está conectado a Git. Los
  // dos proyectos se despliegan distinto y confundirlos ya costó un rato.
  output: "export",
  images: {
    // required para output: export (sin optimizador de imágenes on-demand)
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
