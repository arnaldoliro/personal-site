'use client'

import cards from "@/data/CardItems"
import Card from "../CardSkills"
import Timeline from "../Timeline"
import { motion } from "framer-motion"
import SectionTitle from "../SectionTitle"

export default function AboutSection() {
   return(  
    <section id="about" className="py-20 bg-gradient-to-b from-[#171717] to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle highlight="mim">Sobre</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
            <div className="ml-6">
                <motion.h1 
                    className="text-2xl text-center font-bold mb-10"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.3 }}
                >   
                    Minha Jornada
                </motion.h1>
                <Timeline />
            </div>
            <div>
                <motion.h1 
                    className="text-2xl text-center font-bold mb-10"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.3 }}
                >   
                    Minhas Habilidades
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 items-start md:items-stretch md:auto-rows-fr mx-auto gap-6">
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
    </section>
   )
}