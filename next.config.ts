import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática -> se despliega en Cloudflare Pages igual que app-web:
  //
  //   npm run build
  //   npx wrangler pages deploy out --project-name=planazo-landing --branch=main
  //
  // `--branch=main` no es opcional: sin eso el deploy entra como preview y el dominio
  // www.planazoco.ar sigue sirviendo la versión anterior.
  //
  // OJO, ESTO CONFUNDE: el proyecto figura como conectado a Git (Git Provider: Yes en
  // `wrangler pages project list`) y cada push dispara un build automático, pero ESOS
  // BUILDS VIENEN FALLANDO desde hace semanas — se ve en
  // `wrangler pages deployment list --project-name=planazo-landing`, donde los
  // deployments de Git dicen "Failure" y los que están vivos son subidas directas.
  // O sea: pushear NO publica. Mientras eso no se arregle en el dashboard, el push
  // sirve sólo como control de versiones y publicar es este comando a mano.
  output: "export",
  images: {
    // required para output: export (sin optimizador de imágenes on-demand)
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
