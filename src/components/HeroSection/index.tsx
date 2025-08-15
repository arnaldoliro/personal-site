import ArrowDown from "../ArrowDown";
import Background from "../Background";
import ProfileIcon from "../ProfileIcon";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden w-full"
    >
      <Background />
      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Texto e botões */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-color-text">
            <h1 className="text-4xl md:text-6xl font-bold text-[#fff]">Olá, eu sou</h1>
            <span className="gradient-text text-4xl md:text-6xl font-bold mb-4">Arnaldo Liro</span>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Desenvolvedor Full Stack & Freelancer</p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-custom-gradient rounded-lg p-3 shadow-lg hover:shadow-[#f97316] transition-all duration-500">Ver Projetos</a>
              <a href="#contact"className="py-3 px-10 text-[#f97316] hover:text-[#000] bg-[#171717c0] hover:bg-[#f97316] border-2 border-[#f97316] rounded-lg transition-all duration-500">Entre em Contato</a>
            </div>
          </div>

          {/* SVG e foto */}
          <ProfileIcon />
        </div>
      </div>

      {/* Scroll down */}
        <ArrowDown />
    </section>
  );
}
