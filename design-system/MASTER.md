# Planazo Landing — Design System (MASTER)

> Fuente de verdad de diseño de la landing. **Alineado a la marca REAL de la app**
> (ver `planazo/constants/theme.ts` y `planazo/design-system/foundation.html`).

## Marca (la de la app, tema claro y cálido)

- **Primario (verde menta):** `#00c896` — CTAs, acentos, iconos. Dark: `#00a87e`.
- **Texto sobre verde:** `#ffffff`.
- **Fondo app (crema):** `#f7f5f0`. **Cards:** `#ffffff`. **Muted:** `#f1efe8`.
- **Texto:** `#1a1916` (principal), `#5f5e5a` (secundario), `#b4b2a9` (muted).
- **Borde:** `#e8e5df`. **Amber:** bg `#fef3c7` / `#b45309`. **Danger:** `#ff3b30`.

Todo esto vive en `app/globals.css` (`@theme`) → utilidades `bg-primary`,
`text-on-primary`, `bg-card`, `text-fg`, `text-fg-sec`, `border-line`,
`bg-primary-soft`, etc.

## Logo

La marca es la **estrella de Planazo** (mismos paths que el splash de la app):
estrella + "cara" verde interior. Componente: `components/brand/LogoStar.tsx`
(animado en el hero: entrada con rebote + pop de la cara + flotación continua).
Wordmark "planazo": Poppins ExtraBold, lowercase, `tracking-[-0.04em]`.

## Tipografía

- **Poppins** (400/500/600/700/800) — títulos, cuerpo, botones. `--font-sans`.
- **Nunito** (400/500/600/700) — texto auxiliar/metadatos. Clase `.font-soft`.
- Titulares: `font-extrabold`, `tracking-[-0.02em]`. Cuerpo: `text-lg text-fg-sec`.

## Componentes (fieles a la app)

- **Botón primario:** `rounded-2xl`, verde, `shadow-[var(--shadow-primary)]`, hover `scale-1.03`.
- **Botón secundario:** card blanca + `border-line`.
- **Cards:** blancas, `rounded-2xl`, `border-line`, `shadow-card`, hover lift.
- **Pills/chips:** `rounded-full`, borde 1.5, activo verde.
- Iconos: **lucide-react** (outline, estilo Ionicons de la app). Nunca emojis.

## Motion (skill `animate` — Emil Kowalski)

- Easings: entrada `cubic-bezier(0.23,1,0.32,1)` (out-quint); rebote logo `cubic-bezier(0.34,1.56,0.64,1)`.
- Scroll reveal con `whileInView` + `viewport={{ once:true }}` (`components/ui/Reveal.tsx`).
- Stagger 60–90ms. Micro-interacciones 150–300ms. Hover lift en cards.
- SIEMPRE `prefers-reduced-motion` (contemplado en `globals.css` y con `useReducedMotion`).

## Estructura de la landing (`app/page.tsx`)

Nav · Hero (logo estrella + doble CTA + badges tienda) · Funciones (mockup app +
bento) · Cómo funciona (3 pasos) · **Para negocios** (fondo verde, 6 beneficios +
CTA) · CTA de descarga · Footer.

## Checklist

- [ ] Contraste AA. Foco visible. `prefers-reduced-motion`.
- [ ] Responsive 375 / 768 / 1024 / 1440. Sin scroll horizontal.
- [ ] Sin emojis como iconos. Iconos lucide consistentes.
