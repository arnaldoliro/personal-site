"use client";

import ArrowDown from "../ArrowDown";
import HeroScene from "../HeroScene";
import LetterFillText from "../LetterFillText";
import TypewriterText from "../TypewriterText";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function Hero() {
  const { dict } = useDictionary();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden w-full bg-[#171717]"
    >
      <HeroScene />

      {/* Texto sobreposto por cima da cena 3D (moeda + átomos), não mais duas colunas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="
            absolute inset-x-0 top-[8%] px-4 text-center
            md:inset-x-auto md:left-[5%] lg:left-[7%] md:top-1/2 md:-translate-y-1/2 md:text-left md:px-0
            max-w-md sm:max-w-lg md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto md:mx-0
            text-color-text pointer-events-auto
          "
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            <LetterFillText text={dict.hero.greeting} />
          </h1>
          <TypewriterText className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8" />
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-custom-gradient rounded-lg p-3 shadow-lg hover:shadow-[#f97316] transition-all duration-500">{dict.hero.ctaProjects}</a>
            <a href="#contact" className="py-3 px-10 text-[#f97316] hover:text-[#000] bg-[#171717c0] hover:bg-[#f97316] border-2 border-[#f97316] rounded-lg transition-all duration-500">{dict.hero.ctaContact}</a>
          </div>
        </div>
      </div>

      {/* Dissolve a parte de baixo da Hero (incluindo a borda do piso espelhado)
          na mesma cor com que a próxima section começa, evitando a linha de corte */}
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-b from-transparent to-[#171717] z-20 pointer-events-none" />

      {/* Scroll down */}
      <ArrowDown />
    </section>
  );
}
