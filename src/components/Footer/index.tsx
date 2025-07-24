export default function Footer() {
  return (
    <footer className="py-3 bg-gray-950 ">
      <div className="container mx-auto text-center flex justify-between">
        <p className="text-sm text-[#eee] font-semibold">
          &copy; {new Date().getFullYear()} Arnaldo Liro. Todos os direitos reservados.
        </p>
        <div className="flex gap-4 text-[#eee] text-sm">
            <a href="#home">Inicio</a>
            <a href="#about">Sobre mim</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
        </div>
      </div>
    </footer>
  );
}