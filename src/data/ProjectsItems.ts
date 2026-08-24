// Título e descrição de cada projeto ficam nos dicionários, chaveados por este id
const ProjectsInfo = [
  {
    id: "microservices-backend" as const,
    image: "/images/backend-microservice.jpg",
    skills: ["NestJS", "TypeScript", "Docker", "TypeORM"],
    githubLink: "https://github.com/arnaldoliro/microservice-project",
  },
  {
    id: "form-automation" as const,
    image: "/images/automatizacao-formulario.jpg",
    skills: ["Python", "Excel"],
    githubLink: "https://github.com/arnaldoliro/automatic-form-submission",
  },
  {
    id: "personal-portfolio" as const,
    image: "/images/portfolio-pessoal.jpg",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubLink: "https://github.com/arnaldoliro/personal-site",
  },
];

export type ProjectId = (typeof ProjectsInfo)[number]["id"];

export default ProjectsInfo;
