"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import NavbarLinks from "../NavbarLinks";
import MobileMenu from "../MobileMenu"
import LanguageSwitcher from "../LanguageSwitcher"
import { useDictionary } from "@/i18n/DictionaryProvider"
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { dict } = useDictionary();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true)
  const [isHidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();
  // Some gradualmente de opacidade conforme a página desce, em vez de sumir de repente
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsHidden(latest > 280);
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)

      if (!mobile && isOpen) {
        setIsOpen(false)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  return (
    <motion.header
      style={{ opacity, pointerEvents: isHidden ? "none" : "auto" }}
      className="fixed top-0 left-0 w-full z-50 font-sans"
    >
      <div className="mx-auto px-4 py-4">
        <nav className="flex justify-end md:justify-center items-center">
          <div className="hidden md:flex items-center gap-6">
            <NavbarLinks />
            <LanguageSwitcher />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label={dict.header.toggleMenu}
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
    </motion.header>
  );
}
