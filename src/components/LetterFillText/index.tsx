interface LetterFillTextProps {
  text: string;
  className?: string;
}

// Cada letra preenche com o gradiente da esquerda pra direita enquanto o mouse
// está em cima dela, e esvazia de volta ao normal quando o mouse sai
export default function LetterFillText({ text, className }: LetterFillTextProps) {
  return (
    <span className={className}>
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={i}>{" "}</span>
        ) : (
          <span key={i} className="letter-wrap">
            <span className="text-white">{char}</span>
            <span className="gradient-text letter-overlay" aria-hidden="true">
              {char}
            </span>
          </span>
        )
      )}
    </span>
  );
}
