// components/ProjectCard.tsx

'use client'

import ProjectCardProps from "@/types/ProjectCardProps";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  skills,
  githubLink,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-gray-800 rounded-2xl shadow-lg p-2 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="relative group mb-4 rounded-2xl overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`Imagem do projeto ${title}`}
            className="w-full h-48 object-cover"
            width={500}
            height={300}
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center bg-gray-700 text-gray-400">
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
          <a
            href={image}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-custom-gradient rounded-xl shadow-lg hover:shadow-[#f97316] transition-all duration-500 cursor-pointer"
          >
            Ver Projeto
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-transparent border-2 border-[#f97316] text-[#f97316] font-semibold rounded-xl hover:bg-[#f97316] hover:text-gray-900 transition-all duration-400 cursor-pointer"
          >
            Github
          </a>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="px-4 pb-4">
        <h3 className="text-2xl text-white font-semibold mb-4">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="list-disc list-inside text-gray-300">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
