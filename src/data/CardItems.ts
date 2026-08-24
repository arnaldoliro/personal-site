import type { Dictionary } from "@/i18n/dictionaries";

// Só o id e as tecnologias ficam aqui — o título de cada card vem do dicionário
const cards = [
  {
    id: "frontend" as const,
    skills: ["HTML5", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript", "Vue.js"],
  },
  {
    id: "backend" as const,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "Python", "NestJS", "Java", "SQL Server", "Prisma", "TypeORM", "Redis", "Swagger", "PHP"],
  },
  {
    id: "devops" as const,
    skills: ["Docker", "CI/CD", "AWS", "Google Cloud"],
  },
  {
    id: "other" as const,
    // "Microservices" em vez de "Microsserviços": era a única habilidade em
    // português da lista, e o termo técnico é o mesmo nos dois idiomas
    skills: ["Git", "Scrum", "SEO", "Microservices", "Jest", "Linux", "Kali Linux", "Canva", "Figma", "Excel"],
  },
];

export type CardId = (typeof cards)[number]["id"];
export type CardTitles = Dictionary["cards"];

export default cards;
