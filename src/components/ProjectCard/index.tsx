'use client'

import {motion} from "framer-motion"

export default function ProjectCard() {
    return (
        <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <h3 className="text-xl text-white font-semibold mb-4">Nome do Projeto</h3>
            <p className="text-gray-400 mb-4">
                Descrição breve do projeto, destacando suas principais funcionalidades e tecnologias utilizadas.
            </p>    
            <ul className="list-disc list-inside text-gray-300">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </motion.div>
    );
}