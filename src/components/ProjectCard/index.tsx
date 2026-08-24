// components/ProjectCard.tsx

'use client'

import ProjectCardProps from "@/types/ProjectCardProps";
import Image from "next/image";
import { motion } from "framer-motion";
import SkillTag from "../SkillTag";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function ProjectCard({
  title,
  description,
  image,
  skills,
  githubLink,
}: ProjectCardProps) {
  const { dict } = useDictionary();

  return (
    <motion.div
      className="bg-[#2b2b2b] pb-20 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#f9741631] transition-shadow duration-300"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="relative group mb-4 rounded-t-2xl overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={dict.projects.imageAlt.replace("{title}", title)}
            className="w-full h-48 object-cover"
            width={500}
            height={300}
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center bg-gray-800 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3v4M8 3v4m-5 7h14"
              />
            </svg>
          </div>
        )}

        {/* Camada de ação sobre a imagem.
            No celular fica sempre visível, porque não existe hover para revelá-la.
            No desktop aparece no hover — e quando invisível precisa de
            pointer-events-none, senão continua capturando o clique/toque mesmo
            transparente (era o que fazia tocar na imagem abrir o arquivo). */}
        <div className="absolute inset-0 flex items-end justify-center pb-3 md:items-center md:pb-0 transition-opacity duration-300 pointer-events-none opacity-100 md:bg-black/60 md:opacity-0 md:group-hover:opacity-100">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-custom-gradient rounded-xl shadow-lg hover:shadow-[#f97316] transition-all duration-500 cursor-pointer pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto"
          >
            {dict.projects.viewProject}
          </a>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="px-4 pb-4">
        <h3 className="text-2xl text-white font-semibold mb-4">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 items-center">
            {skills.map((skill, index) => (
                <SkillTag key={index} skill={skill} />
            ))}
        </div>
      </div>
    </motion.div>
  );
}
