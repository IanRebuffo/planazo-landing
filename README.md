# Planazo — Landing (marketing)

Landing page de **marketing** de Planazo ("qué es, descargala"). Carpeta hermana de `planazo` (app), `backend`, `admin-web` y `applinks-web`.

> **No confundir con [`../applinks-web`](../applinks-web)**, que es la landing *fallback de instalación* (deep links + assetlinks + "continuá con la app"). Esta (`landing-web`) es la web pública de marketing.
>
> **Plan de dominio (2026-07-26):** esta landing será el `/` de **planazo.app**. Como un dominio en Cloudflare Pages = un solo proyecto, al momento de deployar **este proyecto va a absorber** el fallback de `applinks-web` (assetlinks + middleware + subpaths `/evento`, `/local`, etc.) y `applinks-web` se retira.

## Stack

- **Next.js 15** (App Router) con **exportación estática** (`output: "export"`)
- **React 19**
- **Tailwind CSS v4** (config CSS-first en `app/globals.css`)
- **motion** (Framer Motion) para animaciones
- **TypeScript**

## Design system

- Marca: **Lima `#c8ff00`** sobre fondo dark
- Tipografía: **Plus Jakarta Sans** (`next/font`)
- Tokens definidos en `app/globals.css` (`@theme`) → utilidades `bg-brand`, `text-fg`, `bg-surface`, etc.
- Guía viva en [`design-system/MASTER.md`](design-system/MASTER.md)

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

```bash
npm run build      # genera /out (estático)
npm run deploy     # build + wrangler pages deploy en Cloudflare Pages
```

> El deploy usa Cloudflare Pages (mismo patrón que `app-web`). Recordá **siempre** `--branch=main`.

## Estructura

```
app/
  layout.tsx     # fuentes, metadata, <html>
  page.tsx       # home
  globals.css    # Tailwind v4 + tokens de marca
components/
  Hero.tsx       # hero animado (starter)
design-system/
  MASTER.md      # guía de diseño
```
