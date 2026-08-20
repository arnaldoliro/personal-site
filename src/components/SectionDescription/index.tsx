'use client'

import { motion } from "framer-motion"

interface SectionDescriptionProps {
  children: React.ReactNode
}

export default function SectionDescription({ children }: SectionDescriptionProps) {
  return (
    <motion.p
      className="text-center text-lg text-[#ccc] font-semibold cursor-default"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.p>
  )
}
