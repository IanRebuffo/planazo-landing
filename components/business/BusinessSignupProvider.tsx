"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { RegistrarLocalModal } from "./RegistrarLocalModal";

type Ctx = { open: () => void };
const BusinessSignupContext = createContext<Ctx>({ open: () => {} });

export function useBusinessSignup() {
  return useContext(BusinessSignupContext);
}

export function BusinessSignupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BusinessSignupContext.Provider value={{ open }}>
      {children}
      <RegistrarLocalModal open={isOpen} onClose={close} />
    </BusinessSignupContext.Provider>
  );
}
