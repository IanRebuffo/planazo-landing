import { LogoStar } from "./LogoStar";

type Props = {
  className?: string;
  starColor?: string;
  faceColor?: string;
  textColor?: string;
};

/** Logo horizontal: estrella + "planazo" (para nav y footer). */
export function Wordmark({
  className = "",
  starColor = "#00c896",
  faceColor = "#ffffff",
  textColor = "currentColor",
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoStar starColor={starColor} faceColor={faceColor} className="h-7 w-7" />
      <span
        className="text-xl font-extrabold tracking-[-0.04em] lowercase"
        style={{ color: textColor }}
      >
        planazo
      </span>
    </span>
  );
}
