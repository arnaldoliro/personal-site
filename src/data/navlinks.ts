import type { Dictionary } from "@/i18n/dictionaries";

// A âncora é fixa nos dois idiomas (assim trocar de idioma preserva a posição
// na página); o rótulo vem do dicionário, chaveado por `key`
export const navLinks = [
  { href: "#home", key: "home" },
  { href: "#about", key: "about" },
  { href: "#certificates", key: "certificates" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] satisfies ReadonlyArray<{ href: string; key: keyof Dictionary["nav"] }>;
