'use client'

import cards from "@/data/CardItems"
import Card from "../CardSkills"
import Timeline from "../Timeline"
import { motion } from "framer-motion"

export default function AboutSection() {
   return(  
    <motion.section 
        id="about" 
        className="py-20 bg-gradient-to-b from-[#171717] to-gray-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="relative group text-4xl w-fit mx-auto text-center font-bold pb-2 mb-20 cursor-default">
            Sobre <span className="gradient-text">mim</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-yellow-400 group-hover:w-full transition-all duration-300 ease-out"></span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
            <div className="ml-6">
                <h1 className="text-2xl text-center font-bold mb-10">Minha Jornada</h1>
                <Timeline />
            </div>
            <div className="">
                <h1 className="text-2xl text-center font-bold mb-10">Minhas Habilidades</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <Card title={card.title} skills={card.skills} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </motion.section>
   )
}