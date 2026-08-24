import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES, LOCALE_COOKIE, isValidLocale, type Locale } from "@/i18n/config";

// Lê o cabeçalho Accept-Language respeitando a ordem de prioridade que o
// navegador envia (ex: "en-US,en;q=0.9,pt-BR;q=0.8")
function detectFromHeader(header: string | null): Locale | null {
  if (!header) return null;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const quality = params.find((p) => p.trim().startsWith("q="));
      return {
        tag: tag.trim().toLowerCase(),
        quality: quality ? Number.parseFloat(quality.split("=")[1]) || 0 : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    // "pt-br" precisa casar com o idioma "pt"
    const base = tag.split("-")[0];
    if (isValidLocale(base)) return base;
  }

  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // já está numa rota de idioma válida: segue o fluxo normal
  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  // escolha manual anterior tem prioridade sobre a detecção automática
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const preferred =
    cookieLocale && isValidLocale(cookieLocale)
      ? cookieLocale
      : detectFromHeader(request.headers.get("accept-language")) ?? DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // ignora arquivos internos do Next, imagens e qualquer coisa com extensão
  matcher: ["/((?!_next|images|favicon.ico|.*\\..*).*)"],
};
