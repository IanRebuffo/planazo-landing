// Base del backend de Planazo (mismo que usa la app: constants/api.ts).
// Configurable por env para dev/staging; default = producción.
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.planazoco.ar/api";
