"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import NavbarLinks from "../NavbarLinks";
import MobileMenu from "../MobileMenu"
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)

      if (!mobile && isOpen) {
        setIsOpen(false) // fecha o menu se a tela for grande
      }
    }

    // roda logo no carregamento
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 w-full shadow-md bg-opacity-80 backdrop-blur-md bg-gray-900 z-50 font-sans">
      <div className="mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-4xl font-bold gradient-text">
            Meu Portfólio
          </a>
          
          <div className="hidden md:block">
            <NavbarLinks />
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.1 }}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
          </button>
        </nav>
      </div>
      
      {isMobile  && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
}