import type { Locale } from "./config";
import pt from "./pt";
import en from "./en";

export type Dictionary = typeof pt;

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
