# Planazo Landing — Design System (MASTER)

> Fuente de verdad de diseño de la landing. Alineado a la identidad de la app Planazo.
> Al construir una página específica, primero revisá `design-system/pages/<pagina>.md`; si existe, sus reglas pisan a este archivo.

## Marca

- **Color primario (Lima):** `#c8ff00` — CTAs, acentos, highlights. Usar con moderación (regla del 10%).
- **Texto sobre lima:** `#0a0d02` (casi negro) — el lima es muy claro, NUNCA texto blanco encima.
- **Dark-first.** El fondo base es oscuro (`#0a0b0d`).

## Tokens (ver `app/globals.css` → `@theme`)

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-brand` | `#c8ff00` | Acento / CTA principal |
| `--color-brand-strong` | `#b2e600` | Hover del CTA |
| `--color-on-brand` | `#0a0d02` | Texto sobre lima |
| `--color-bg` | `#0a0b0d` | Fondo de página |
| `--color-surface` | `#131519` | Cards, secciones |
| `--color-surface-2` | `#1b1e24` | Superficie elevada |
| `--color-fg` | `#f4f5f6` | Texto principal |
| `--color-fg-muted` | `#a4abb4` | Texto secundario |
| `--color-line` | `#262a31` | Bordes/divisores |

En Tailwind v4 estos tokens generan utilidades: `bg-brand`, `text-on-brand`, `bg-surface`, `text-fg-muted`, `border-line`, etc.

## Tipografía

- **Plus Jakarta Sans** (única familia). Cargada con `next/font` → variable `--font-jakarta`.
- Escala titulares: `text-5xl` → `text-7xl`, `font-extrabold`, `tracking-tight`, `leading-[1.05]`.
- Cuerpo: `text-lg`, `text-fg-muted`, medida 60–75 caracteres (`max-w-xl`).

## Estilo visual (de ui-ux-pro-max)

- **Vibrant & block-based:** bloques geométricos, alto contraste, secciones grandes (gaps 48px+).
- Radios generosos: `rounded-full` en botones/badges, `--radius-lg`/`--radius-xl` en cards.
- Glow de marca sutil detrás del contenido clave (blur grande, baja opacidad).

## Motion (de la skill `animate` — Emil Kowalski)

- **Entrada:** ease-out marcado `cubic-bezier(0.16, 1, 0.3, 1)`, duración 500–700ms.
- **Stagger** de 60–80ms entre elementos de una sección al aparecer.
- Micro-interacciones 150–300ms; hover en CTA con `scale(1.03)`, active `scale(0.98)`.
- Respetar SIEMPRE `prefers-reduced-motion` (ya contemplado en `globals.css`).
- Reveal on scroll con `whileInView` + `viewport={{ once: true }}`.

## Estructura sugerida de la landing

1. **Hero** (vertical) — titular + CTA doble (usuario / local).
2. **Cómo funciona** — bloques de features con reveal on scroll.
3. **Prueba social** — "X amigos van a ir", locales, eventos.
4. **Para locales** — sección diferenciada (lado negocio).
5. **CTA final + footer.**

## Checklist pre-entrega

- [ ] Contraste AA (texto 4.5:1) — ojo con `text-fg-subtle` sobre surface.
- [ ] `cursor-pointer` en todo lo clickeable.
- [ ] Focus states visibles para navegación por teclado.
- [ ] `prefers-reduced-motion` respetado.
- [ ] Responsive 375 / 768 / 1024 / 1440.
- [ ] Sin emojis como iconos (usar SVG: Lucide/Heroicons).
