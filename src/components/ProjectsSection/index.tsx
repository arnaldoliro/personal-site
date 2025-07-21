export default function ProjectSection() {
  return (
    <section className="py-20 bg-[#171717]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-10">
          Meus <span className="gradient-text">Projetos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aqui você pode mapear seus projetos e renderizar os cards */}
          {/* Exemplo de card de projeto */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Projeto Exemplo</h3>
            <p className="text-gray-600 mb-4">Descrição do projeto.</p>
            <a href="#" className="text-blue-500 hover:underline">Ver Projeto</a>
          </div>
        </div>
      </div>
    </section>
  );
}