'use client'

import Underline from '../Underline'
import { motion } from 'framer-motion'

interface SectionTitleProps {
  children: React.ReactNode
  highlight?: string
}

export default function SectionTitle({ children, highlight }: SectionTitleProps) {
  return (
    <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
        className="cursor-default relative group w-fit mx-auto text-4xl text-white font-bold text-center mb-2 pb-2">
            {children}{" "}
            {highlight && <span className="gradient-text">{highlight}</span>}
            <Underline />
    </motion.h2>
  )
}
