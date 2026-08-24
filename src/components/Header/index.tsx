"use client";

import NavbarLinks from "../NavbarLinks";
import LanguageSwitcher from "../LanguageSwitcher"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();
  // Some gradualmente de opacidade conforme a página desce, em vez de sumir de repente
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsHidden(latest > 280);
  });

  return (
    <motion.header
      style={{ opacity, pointerEvents: isHidden ? "none" : "auto" }}
      className="fixed top-0 left-0 w-full z-50 font-sans"
    >
      <div className="mx-auto px-2 py-3 md:px-4 md:py-4">
        {/* mesmo layout em qualquer tamanho de tela: links + seletor de idioma */}
        <nav className="flex justify-center items-center gap-2 md:gap-6">
          <NavbarLinks />
          <LanguageSwitcher />
        </nav>
      </div>
    </motion.header>
  );
}
