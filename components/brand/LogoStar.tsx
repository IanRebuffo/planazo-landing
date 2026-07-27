"use client";

import { motion, useReducedMotion } from "motion/react";

// Paths EXACTOS del logo de Planazo (mismos que el splash de la app).
const STAR_PATH =
  "m280.34,1048.67c-.55,32.47,36.27,50.56,62.32,30.6l257.7-197.41c10.34-7.92,23.79-10.33,35.95-6.44l303.09,96.88c30.63,9.79,60.05-20.17,49.78-50.7l-101.62-302.06c-4.08-12.12-1.89-25.63,5.85-36.12l192.8-261.38c19.49-26.42.84-63.02-31.55-61.94l-320.51,10.73c-12.86.43-24.96-5.51-32.34-15.88L517.89-3.47c-18.59-26.12-59.53-18.78-69.28,12.42l-96.46,308.69c-3.87,12.39-13.53,22.23-25.83,26.31L19.83,445.61c-30.98,10.28-37.63,51.41-11.27,69.61l260.89,180.05c10.47,7.23,16.6,19.25,16.37,32.14l-5.48,321.25Z";
const FACE_PATH =
  "m524.01,432.5c21.12-5.4,42.63,7.45,48.03,28.71l21.74,85.54c5.4,21.26-7.34,42.87-28.47,48.28-21.12,5.4-42.63-7.45-48.03-28.71l-21.73-85.54c-5.4-21.26,7.34-42.87,28.47-48.28Zm172.74,268.19c-12.6,26.07-35.92,62.51-73.32,77.91-61.17,25.19-143.32-12.77-187.87-103.41-6.81-13.84,4.42-31.36,18.77-29.66,76.57,9.06,153.13,18.11,229.7,27.17,12.01,1.42,18.64,15.76,12.72,27.99Zm62.25-144.97c-21.13,5.4-42.63-7.45-48.03-28.71l-21.73-85.54c-5.4-21.26,7.34-42.87,28.47-48.28,21.12-5.4,42.63,7.45,48.03,28.71l21.74,85.54c5.4,21.26-7.34,42.87-28.47,48.28Z";
const VIEWBOX = "-60 -60 1210 1210";

const EASE_BACK = [0.34, 1.56, 0.64, 1] as const;

type Props = {
  /** Color de la estrella */
  starColor?: string;
  /** Color de la cara interior */
  faceColor?: string;
  className?: string;
  /** Entrada + flotación continua (para el hero). Si es false, estático. */
  animated?: boolean;
  /** Solo la estrella, sin la cara (para marcas de agua/fondos) */
  hideFace?: boolean;
};

export function LogoStar({
  starColor = "#ffffff",
  faceColor = "#00c896",
  className,
  animated = false,
  hideFace = false,
}: Props) {
  const reduce = useReducedMotion();

  if (!animated) {
    return (
      <svg viewBox={VIEWBOX} className={className} aria-hidden="true">
        <path fill={starColor} d={STAR_PATH} />
        {!hideFace && <path fill={faceColor} d={FACE_PATH} />}
      </svg>
    );
  }

  return (
    <motion.svg
      viewBox={VIEWBOX}
      className={className}
      role="img"
      aria-label="Logo de Planazo"
      initial={reduce ? undefined : { scale: 0.6, rotate: -18, opacity: 0 }}
      animate={
        reduce
          ? undefined
          : {
              scale: 1,
              rotate: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: EASE_BACK },
            }
      }
    >
      {/* Flotación continua: sube/baja y oscila apenas (igual que el splash) */}
      <motion.g
        animate={
          reduce
            ? undefined
            : { y: [0, -22, 0], rotate: [-3, 3, -3] }
        }
        transition={{ duration: 4.4, ease: "easeInOut", repeat: Infinity }}
        style={{ transformOrigin: "center" }}
      >
        <path fill={starColor} d={STAR_PATH} />
        {!hideFace && (
          <motion.path
            fill={faceColor}
            d={FACE_PATH}
            initial={reduce ? undefined : { scale: 0, opacity: 0 }}
            animate={
              reduce
                ? undefined
                : {
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.5, ease: EASE_BACK },
                  }
            }
            style={{ transformOrigin: "center" }}
          />
        )}
      </motion.g>
    </motion.svg>
  );
}
