"use client";

import { navLinks } from "@/data/navlinks";
import { useDictionary } from "@/i18n/DictionaryProvider";

// O rodapé mostra um subconjunto do menu (sem Certificados)
const FOOTER_LINKS = navLinks.filter((item) => item.href !== "#certificates");

export default function Footer() {
  const { dict } = useDictionary();

  return (
    <footer className="py-3 bg-gray-950 ">
      <div className="container mx-auto px-4 text-center flex flex-col-reverse md:flex-row items-center justify-between gap-2 md:gap-0">
        <p className="text-xs md:text-sm text-[#eee] font-semibold">
          &copy; {new Date().getFullYear()} Arnaldo Liro. {dict.footer.rights}
        </p>
        <div className="flex gap-3 md:gap-4 text-xs md:text-sm">
          {FOOTER_LINKS.map((item) => (
            <a
              key={item.href}
              className="bg-[#eee] hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 bg-clip-text text-transparent transition-all duration-500"
              href={item.href}
            >
              {dict.nav[item.key]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
