"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Store,
  MapPin,
  Instagram,
  Mail,
  MessageSquare,
  X,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { API_URL } from "@/lib/api";

const EASE = [0.23, 1, 0.32, 1] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = { open: boolean; onClose: () => void };

export function RegistrarLocalModal({ open, onClose }: Props) {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [instagram, setInstagram] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const emailValido = EMAIL_RE.test(email.trim());
  const completo =
    !!nombre.trim() && !!direccion.trim() && !!instagram.trim() && emailValido;

  // Bloquear scroll del body + cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const enviar = async () => {
    if (!completo || enviando) return;
    setEnviando(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/negocios/solicitud`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombreLocal: nombre.trim(),
          direccion: direccion.trim(),
          instagram: instagram.trim().replace(/^@/, ""),
          emailContacto: email.trim().toLowerCase(),
          mensaje: mensaje.trim() || null,
        }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}) as Record<string, string>);
        throw new Error(d.message || "No se pudo enviar la solicitud");
      }
      setEnviado(true);
    } catch (e) {
      const msg =
        e instanceof TypeError
          ? "No pudimos conectar con el servidor. Probá de nuevo en un momento."
          : e instanceof Error
            ? e.message
            : "Error al enviar";
      setError(msg);
    } finally {
      setEnviando(false);
    }
  };

  const cerrar = () => {
    onClose();
    // Reset diferido para no ver el form vaciarse durante la animación de salida
    setTimeout(() => {
      setEnviado(false);
      setError("");
      setNombre("");
      setDireccion("");
      setInstagram("");
      setEmail("");
      setMensaje("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Registrá tu local"
        >
          {/* Scrim */}
          <div
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            onClick={cerrar}
          />

          {/* Panel */}
          <motion.div
            className="relative z-10 flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-bg shadow-[var(--shadow-lift)] sm:rounded-3xl"
            initial={{ y: 40, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 30, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <button
              type="button"
              onClick={cerrar}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-fg-sec transition-colors hover:bg-muted"
            >
              <X size={18} />
            </button>

            {enviado ? (
              <Success onClose={cerrar} />
            ) : (
              <div className="overflow-y-auto px-6 py-8 sm:px-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark">
                  <Store size={24} />
                </div>
                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.02em]">
                  Contanos de tu local
                </h2>
                <p className="mt-1.5 text-sm text-fg-sec">
                  Dejanos los datos básicos. Si lo aprobamos, te escribimos para
                  crear tu cuenta y completar el perfil paso a paso.
                </p>

                <div className="mt-6 flex flex-col gap-4">
                  <Field label="Nombre del local" req>
                    <InputRow icon={<Store size={18} />}>
                      <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ej: La Parrilla de Juan"
                        maxLength={80}
                        className="w-full bg-transparent outline-none placeholder:text-fg-muted"
                      />
                    </InputRow>
                  </Field>

                  <Field label="Dirección" req>
                    <InputRow icon={<MapPin size={18} />}>
                      <input
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        placeholder="Calle, número y ciudad"
                        maxLength={200}
                        className="w-full bg-transparent outline-none placeholder:text-fg-muted"
                      />
                    </InputRow>
                  </Field>

                  <Field label="Instagram" req>
                    <InputRow icon={<Instagram size={18} />}>
                      <span className="text-fg-muted">@</span>
                      <input
                        value={instagram}
                        onChange={(e) =>
                          setInstagram(e.target.value.replace(/^@/, ""))
                        }
                        placeholder="tu_local"
                        autoCapitalize="none"
                        autoCorrect="off"
                        maxLength={40}
                        className="w-full bg-transparent outline-none placeholder:text-fg-muted"
                      />
                    </InputRow>
                  </Field>

                  <Field label="Email de contacto" req>
                    <InputRow icon={<Mail size={18} />}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Donde te avisamos"
                        autoCapitalize="none"
                        autoCorrect="off"
                        maxLength={120}
                        className="w-full bg-transparent outline-none placeholder:text-fg-muted"
                      />
                    </InputRow>
                  </Field>

                  <Field label="Mensaje" opt>
                    <InputRow icon={<MessageSquare size={18} />} top>
                      <textarea
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        placeholder="Contanos algo más sobre tu local o lo que esperás de Planazo…"
                        rows={3}
                        maxLength={1000}
                        className="w-full resize-none bg-transparent outline-none placeholder:text-fg-muted"
                      />
                    </InputRow>
                  </Field>

                  {error && (
                    <p
                      role="alert"
                      aria-live="polite"
                      className="text-center text-sm font-medium text-danger"
                    >
                      {error}
                    </p>
                  )}

                  <div className="flex items-start gap-2 text-fg-muted">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0 text-primary" />
                    <p className="font-soft text-xs leading-snug">
                      Revisamos tu solicitud y te avisamos por correo en 24 hs
                      hábiles. Ese mismo correo te guía para crear tu cuenta.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={enviar}
                    disabled={!completo || enviando}
                    className="mt-1 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary text-base font-bold text-on-primary shadow-[var(--shadow-primary)] transition-all duration-200 hover:enabled:scale-[1.02] active:enabled:scale-[0.98] disabled:opacity-50"
                  >
                    {enviando ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Enviando…
                      </>
                    ) : (
                      <>
                        Enviar solicitud <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Success({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center px-8 py-14 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-primary-dark"
      >
        <CheckCircle2 size={44} />
      </motion.div>
      <h2 className="mt-6 text-2xl font-extrabold tracking-[-0.02em]">
        ¡Solicitud enviada!
      </h2>
      <p className="mt-3 max-w-sm text-fg-sec">
        En un plazo de 24 horas hábiles vas a recibir un correo. Si aprobamos tu
        local, el mismo correo te va a guiar para crear tu cuenta y completar el
        perfil.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 rounded-2xl bg-primary px-8 py-3.5 font-bold text-on-primary shadow-[var(--shadow-primary)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
      >
        Listo
      </button>
    </div>
  );
}

function Field({
  label,
  req,
  opt,
  children,
}: {
  label: string;
  req?: boolean;
  opt?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-1.5 text-sm font-semibold">
        {label}
        {req && <span className="text-primary-dark">*</span>}
        {opt && (
          <span className="ml-auto font-soft text-xs font-normal text-fg-muted">
            opcional
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

function InputRow({
  icon,
  children,
  top,
}: {
  icon: ReactNode;
  children: ReactNode;
  top?: boolean;
}) {
  return (
    <div
      className={`flex gap-2.5 rounded-xl border border-line bg-card px-3.5 py-3 text-[15px] text-fg focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15 ${
        top ? "items-start" : "items-center"
      }`}
    >
      <span className={`text-fg-muted ${top ? "mt-0.5" : ""}`}>{icon}</span>
      {children}
    </div>
  );
}
