'use client'

import ProjectsInfo from "@/data/ProjectsItems";
import ProjectCard from "../ProjectCard";
import SectionDescription from "../SectionDescription";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function ProjectSection() {
  const { dict } = useDictionary();

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-[#171717]">
      <div className="container mx-auto px-4">
        <div className="mb-20">
            <SectionTitle highlight={dict.projects.titleHighlight}>{dict.projects.titleLead}</SectionTitle>
            <SectionDescription>
              {dict.projects.descriptionLine1} <br />
              {dict.projects.descriptionLine2}
            </SectionDescription>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsInfo.map((project) => (
            <ProjectCard
              key={project.id}
              title={dict.projects.items[project.id].title}
              description={dict.projects.items[project.id].description}
              image={project.image}
              skills={project.skills}
              githubLink={project.githubLink}
            />
          ))}
        </div>
        <motion.a
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex bg-custom-gradient text-[#171717] font-semibold items-center justify-center gap-2 mt-10 mx-auto w-fit py-3 px-6 rounded-lg shadow-lg hover:shadow-[#f974165b] transition-shadow duration-500"
          href="https://github.com/arnaldoliro?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" /> {dict.projects.seeMoreOnGithub}
        </motion.a>
      </div>
    </section>
  );
}