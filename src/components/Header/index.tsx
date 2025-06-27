"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavbarLinks from "../NavbarLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full shadow-md bg-opacity-80 backdrop-blur-md bg-gray-900 z-50 font-sans">
      <div className="mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-4xl font-bold gradient-text">
            Meu Portfólio
          </a>
          
            <NavbarLinks />
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-gray-900 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-8">
          <a href="#home" className="text-white text-lg" onClick={() => setIsOpen(false)}>Início</a>
          <a href="#about" className="text-white text-lg" onClick={() => setIsOpen(false)}>Sobre Mim</a>
          <a href="#projects" className="text-white text-lg" onClick={() => setIsOpen(false)}>Projetos</a>
          <a href="#contact" className="text-white text-lg" onClick={() => setIsOpen(false)}>Contato</a>
        </div>
      </div>
    </header>
  );
}