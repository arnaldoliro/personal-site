const navItems = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre Mim" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
]

export default function NavbarLinks() {
  return (
    <div className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="relative group nav-link"
        >
          {item.label}
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-yellow-400 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
      ))}
    </div>
  )
}
