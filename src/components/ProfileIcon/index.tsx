"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileIcon() {
  return (
    <div className="md:w-1/2 flex justify-center relative">
      {/* Sombra elíptica abaixo */}
      <motion.div
        className="absolute bottom-0 w-40 h-6 bg-yellow-300/30 blur-md rounded-full z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bloco principal animado */}
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80 z-10"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-custom-gradient overflow-hidden border-4 border-orange-300">
            {/* Trocar por <img /> real se quiser */}
            <Image
                src="/images/perfil.png"
                alt="Foto de perfil"
                width={300}
                height={300}
                className="w-full h-full object-cover object-bottom rounded-full"
                />

          </div>
        </div>
      </motion.div>
    </div>
  );
}
