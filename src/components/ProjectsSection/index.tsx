'use client'

import ProjectCard from "../ProjectCard";
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
        <SectionTitle highlight="Projetos">Meus</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
      </div>
    </motion.section>
  );
}