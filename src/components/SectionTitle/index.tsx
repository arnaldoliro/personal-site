'use client'

import Underline from '../Underline'

interface SectionTitleProps {
  children: React.ReactNode
  highlight?: string
}

export default function SectionTitle({ children, highlight }: SectionTitleProps) {
  return (
    <h2 className="cursor-default relative group w-fit mx-auto text-4xl text-white font-bold text-center mb-20 pb-2">
      {children}{" "}
      {highlight && <span className="gradient-text">{highlight}</span>}
      <Underline />
    </h2>
  )
}
