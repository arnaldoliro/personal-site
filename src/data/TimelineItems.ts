// Título e descrição vêm dos dicionários. A chave é o id (não o ano: existem
// dois itens em 2024 e dois em 2025)
const timeline = [
  { id: "ufba-start" as const, year: "2022" },
  { id: "titan-trainee" as const, year: "2023" },
  { id: "titan-dev" as const, year: "2024" },
  { id: "research-po" as const, year: "2024" },
  { id: "titan-president" as const, year: "2025" },
  { id: "santa-casa" as const, year: "2025" },
  { id: "sudoeste" as const, year: "2025" },
];

export type TimelineId = (typeof timeline)[number]["id"];

export default timeline;
