import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { getDictionary } from "@/i18n/dictionaries";
import { HTML_LANG, LOCALES, isValidLocale } from "@/i18n/config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

// Só /pt e /en existem: qualquer outro idioma na URL cai no notFound abaixo
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = getDictionary(locale);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    // avisa o Google que /pt e /en são versões da mesma página
    alternates: {
      languages: {
        pt: "/pt",
        en: "/en",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // o idioma vem da URL (entrada não confiável): valida antes de usar
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <html lang={HTML_LANG[locale]} className={`${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bg font-sans">
        <DictionaryProvider dict={dict} locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
        </DictionaryProvider>
      </body>
    </html>
  );
}
