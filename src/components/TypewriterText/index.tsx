"use client";

import { useEffect, useState } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";

// Ritmo da digitação (ms por caractere) e pausa com a frase completa
const TYPE_SPEED = 95;
const ERASE_SPEED = 45;
const HOLD_MS = 1800;

interface TypewriterTextProps {
  className?: string;
}

export default function TypewriterText({ className }: TypewriterTextProps) {
  const { dict } = useDictionary();
  const phrases = dict.hero.typewriter;
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];

    // frase completa: segura um instante antes de começar a apagar
    if (!isErasing && charCount === phrase.length) {
      const timer = setTimeout(() => setIsErasing(true), HOLD_MS);
      return () => clearTimeout(timer);
    }

    // apagou tudo: parte pra próxima frase
    if (isErasing && charCount === 0) {
      setIsErasing(false);
      setPhraseIndex((index) => (index + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(
      () => setCharCount((count) => count + (isErasing ? -1 : 1)),
      isErasing ? ERASE_SPEED : TYPE_SPEED
    );
    return () => clearTimeout(timer);
  }, [charCount, isErasing, phraseIndex, phrases]);

  // a maior frase define a largura, pra o layout não pular a cada troca
  const longestPhrase = phrases.reduce((a, b) => (b.length > a.length ? b : a));
  const visibleText = phrases[phraseIndex].slice(0, charCount);

  return (
    <span className={`relative block ${className ?? ""}`}>
      {/* leitores de tela leem só o nome, em vez do texto mudando sem parar */}
      <span className="sr-only">Arnaldo Liro</span>

      {/* Reserva a ALTURA da maior frase (já quebrada em linhas dentro da
          largura da coluna). Sem quebra de linha, a frase mais longa
          transbordaria a coluna e passaria por cima da moeda 3D. */}
      <span className="invisible block" aria-hidden="true">
        {longestPhrase}
      </span>

      <span className="absolute inset-x-0 top-0" aria-hidden="true">
        <span className="gradient-text">{visibleText}</span>
        <span className="typewriter-caret">|</span>
      </span>
    </span>
  );
}
