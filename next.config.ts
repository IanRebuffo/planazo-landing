import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática -> se despliega en Cloudflare Pages igual que app-web
  // (wrangler pages deploy out --branch=main)
  output: "export",
  images: {
    // required para output: export (sin optimizador de imágenes on-demand)
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
