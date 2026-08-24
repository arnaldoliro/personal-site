"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries";

type DictionaryContextValue = {
  dict: Dictionary;
  locale: Locale;
};

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

// Montado uma única vez no layout do idioma. Quase todas as seções do site são
// componentes de cliente (por causa das animações), então o contexto evita
// repassar o dicionário manualmente por várias camadas de componentes.
export function DictionaryProvider({
  dict,
  locale,
  children,
}: DictionaryContextValue & { children: ReactNode }) {
  return (
    <DictionaryContext.Provider value={{ dict, locale }}>{children}</DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary precisa ser usado dentro de um DictionaryProvider");
  }
  return context;
}
