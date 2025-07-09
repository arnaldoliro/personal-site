import Background from "../Background";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-20"
    >
      <Background />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Texto e botões */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-color-text">
            <h1 className="text-4xl md:text-6xl font-bold text-[#fff]">Olá, eu sou</h1>
            <span className="gradient-text text-4xl md:text-6xl font-bold mb-4">Arnaldo Liro</span>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Desenvolvedor Full Stack & Designer de Experiências Digitais</p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-custom-gradient rounded-lg p-3 shadow-lg hover:shadow-[#f97316] transition-all duration-500">Ver Projetos</a>
              <a href="#contact"className="py-3 px-10 text-[#f97316] hover:text-[#000] bg-[#171717] hover:bg-[#f97316] border border-[#f97316] rounded-lg transition-all duration-500">Entre em Contato</a>
            </div>
          </div>

          {/* SVG e foto */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#f97316"
                  d="M40.8,-68.3C51.8,-61.6,59.2,-48.8,65.7,-35.8C72.3,-22.8,78,-9.6,76.4,2.3C74.8,14.2,65.9,24.9,57.3,35.5C48.8,46.1,40.5,56.7,29.7,62.4C18.8,68.2,5.4,69.1,-7.4,67.7C-20.2,66.3,-32.5,62.5,-42.3,55.3C-52.1,48.1,-59.5,37.4,-64.4,25.7C-69.3,13.9,-71.8,1,-69.9,-10.8C-68,-22.7,-61.8,-33.5,-53.2,-42.3C-44.6,-51.1,-33.6,-57.9,-22,-62.3C-10.3,-66.7,1.9,-68.8,14.4,-69.1C26.9,-69.5,39.8,-68.1,40.8,-68.3Z"
                  transform="translate(100 100)"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gray-800 overflow-hidden border-4 border-gray-700">
                  {/* Placeholder para foto de perfil */}
                  <svg
                    className="w-full h-full text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-gray-400 hover:text-white">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
