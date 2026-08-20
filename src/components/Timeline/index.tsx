'use client'
import {motion} from "framer-motion"
import { useEffect, useState } from "react"
import timeline from "@/data/TimelineItems"

export default function Timeline() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)")
        setIsMobile(mediaQuery.matches)
        const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    return (
        <div className="max-w-4xl mx-auto px-4">
            <motion.div
                className="relative border-l-2 border-yellow-500 pl-6"
                initial={{ opacity: isMobile ? 1 : 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: isMobile || false, amount: 0.5 }}
            >
                {timeline.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : index * 0.2 }}
                    viewport={{ once: isMobile || false, amount: isMobile ? 0.2 : 0.5 }}
                    className="mb-10 relative"
                >
                    {/* ponto */}
                    <span className="absolute left-[-33px] top-0 w-4 h-4 bg-yellow-500 rounded-full shadow-md"></span>
                    <p className="text-sm text-gray-500">{item.year}</p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                </motion.div>
                ))}
            </motion.div>
        </div>
    )
}