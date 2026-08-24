"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALES, LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { useDictionary } from "@/i18n/DictionaryProvider";

const LABELS: Record<Locale, string> = { pt: "PT", en: "EN" };

export default function LanguageSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const { locale } = useDictionary();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Locale) => {
    if (next === locale) return;

    // grava a escolha para o middleware respeitá-la nas próximas visitas,
    // em vez de detectar o idioma do navegador de novo
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;

    // troca só o primeiro segmento da URL, preservando o resto do caminho
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || `/${next}`);
    onNavigate?.();
  };

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {LOCALES.map((item, index) => (
        <span key={item} className="flex items-center gap-1">
          {index > 0 && <span className="text-gray-600">|</span>}
          <button
            type="button"
            onClick={() => switchTo(item)}
            aria-current={item === locale ? "true" : undefined}
            className={
              item === locale
                ? "gradient-text font-semibold cursor-default"
                : "text-gray-400 hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
            }
          >
            {LABELS[item]}
          </button>
        </span>
      ))}
    </div>
  );
}
