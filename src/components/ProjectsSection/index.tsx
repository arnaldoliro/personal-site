'use client'

import ProjectsInfo from "@/data/ProjectsItems";
import ProjectCard from "../ProjectCard";
import SectionDescription from "../SectionDescription";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <motion.section 
     id="projects" 
     className="py-20 bg-gradient-to-b from-gray-900 to-[#171717]"
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 1 }}
     viewport={{ once: true, amount: 0.3 }} 
    >
      <div className="container mx-auto px-4">
        <div className="mb-20">
            <SectionTitle highlight="Projetos">Meus</SectionTitle>
            <SectionDescription> Conheça alguns dos projetos que desenvolvi ao longo da minha carreira. <br />
      Cada um representa um desafio único e uma oportunidade de aprendizado.</SectionDescription>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsInfo.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              skills={project.skills}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}