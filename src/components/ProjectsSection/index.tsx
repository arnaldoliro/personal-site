import ProjectCard from "../ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-[#171717]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-10">
          Meus <span className="gradient-text">Projetos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aqui você pode mapear seus projetos e renderizar os cards */}
          {/* Exemplo de card de projeto */}
            <ProjectCard />
        </div>
      </div>
    </section>
  );
}