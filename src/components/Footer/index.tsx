export default function Footer() {
  return (
    <footer className="py-3 bg-gray-950 ">
      <div className="container mx-auto text-center flex justify-between">
        <p className="text-sm text-[#eee] font-semibold">
          &copy; {new Date().getFullYear()} Arnaldo Liro. Todos os direitos reservados.
        </p>
        <div className="flex gap-4 text-sm">
            <a className="bg-[#eee] hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 bg-clip-text text-transparent transition-all duration-500" href="#home">Inicio</a>
            <a className="bg-[#eee] hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 bg-clip-text text-transparent transition-all duration-500" href="#about">Sobre mim</a>
            <a className="bg-[#eee] hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 bg-clip-text text-transparent transition-all duration-500" href="#projects">Projetos</a>
            <a className="bg-[#eee] hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 bg-clip-text text-transparent transition-all duration-500" href="#contact">Contato</a>
        </div>
      </div>
    </footer>
  );
}