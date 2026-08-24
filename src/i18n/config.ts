export const LOCALES = ["pt", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt";

// Cookie onde fica guardada a escolha manual do visitante, para o middleware
// respeitá-la em vez de detectar o idioma do navegador de novo a cada visita
export const LOCALE_COOKIE = "locale";

// O idioma vem da URL, ou seja, é entrada não confiável: nunca use o valor
// direto — passe sempre por aqui antes.
export function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

// Valor do atributo lang do <html>, que também define o idioma das mensagens
// nativas de validação do formulário exibidas pelo navegador
export const HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};
