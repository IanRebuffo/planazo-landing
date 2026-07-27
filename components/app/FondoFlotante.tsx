import {
  MapPin,
  Star,
  Utensils,
  Heart,
  Coffee,
  Beer,
  Music,
  Film,
  Navigation,
  type LucideIcon,
} from "lucide-react";

// Mismo "universo" flotante que el splash de la app (FondoFlotante.tsx):
// pins, estrellas, likes y categorías subiendo. left/size/opacity/duración
// calcados; delay negativo = arranca a mitad de ciclo (campo prellenado).
type Floater = {
  Icon: LucideIcon;
  size: number;
  left: string;
  duration: number; // s
  delay: number; // s (negativo para prellenar)
  opacity: number;
  sway: number; // s
};

const FLOATERS: Floater[] = [
  { Icon: MapPin, size: 40, left: "8%", duration: 15, delay: -1, opacity: 0.18, sway: 5 },
  { Icon: Star, size: 26, left: "26%", duration: 11, delay: -4, opacity: 0.22, sway: 4 },
  { Icon: Utensils, size: 32, left: "44%", duration: 14, delay: -8, opacity: 0.16, sway: 6 },
  { Icon: Heart, size: 24, left: "62%", duration: 10, delay: -2, opacity: 0.22, sway: 4.5 },
  { Icon: Coffee, size: 30, left: "78%", duration: 13, delay: -6, opacity: 0.17, sway: 5.5 },
  { Icon: Navigation, size: 28, left: "90%", duration: 12, delay: -9, opacity: 0.18, sway: 5 },
  { Icon: Beer, size: 34, left: "16%", duration: 16, delay: -11, opacity: 0.15, sway: 6 },
  { Icon: Star, size: 18, left: "52%", duration: 9, delay: -3, opacity: 0.24, sway: 3.5 },
  { Icon: Music, size: 27, left: "70%", duration: 13, delay: -12, opacity: 0.16, sway: 5 },
  { Icon: Film, size: 30, left: "34%", duration: 15, delay: -5, opacity: 0.15, sway: 5.5 },
  { Icon: Heart, size: 20, left: "84%", duration: 11, delay: -7, opacity: 0.2, sway: 4 },
  { Icon: Star, size: 22, left: "4%", duration: 12, delay: -10, opacity: 0.2, sway: 4.5 },
];

export function FondoFlotante({ color = "#ffffff" }: { color?: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {FLOATERS.map((f, i) => (
        <div
          key={i}
          className="absolute top-0"
          style={{
            left: f.left,
            opacity: f.opacity,
            animation: `pz-rise ${f.duration}s linear infinite`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <div
            style={{
              animation: `pz-sway ${f.sway}s ease-in-out infinite`,
            }}
          >
            <f.Icon size={f.size} color={color} strokeWidth={2.2} />
          </div>
        </div>
      ))}
    </div>
  );
}
