'use client'
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import timeline from "@/data/TimelineItems"

export default function Timeline() {
    const [isMobile, setIsMobile] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])
    const [maxProgress, setMaxProgress] = useState<number[]>(() => timeline.map(() => 0))

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1023px)")
        setIsMobile(mediaQuery.matches)
        const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const top = containerRef.current.getBoundingClientRect().top
        const y = e.clientY - top
        setMaxProgress((prev) =>
            prev.map((current, index) => {
                const el = itemRefs.current[index]
                if (!el) return current
                const itemTop = el.offsetTop
                const itemHeight = el.offsetHeight || 1
                const raw = Math.min(Math.max((y - itemTop) / itemHeight, 0), 1)
                return Math.max(current, raw)
            })
        )
    }

    return (
        <div className="max-w-4xl mx-auto px-4">
            <div
                ref={containerRef}
                className="relative pl-6"
                onMouseMove={isMobile ? undefined : handleMouseMove}
            >
                {timeline.map((item, index) => {
                    const progress = isMobile ? 1 : maxProgress[index]
                    const visible = isMobile || progress > 0

                    return (
                        <div
                            key={index}
                            ref={(el) => { itemRefs.current[index] = el }}
                            className="pb-10 relative"
                        >
                            {/* ponto */}
                            <motion.span
                                className="absolute left-[-31px] top-0 w-4 h-4 bg-gradient-to-b from-yellow-600 to-yellow-200 rounded-full animate-timeline-glow"
                                animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
                                transition={{ duration: isMobile ? 0 : 0.15 }}
                            ></motion.span>
                            {/* segmento de linha até a próxima bolinha */}
                            {index < timeline.length - 1 && (
                                <motion.span
                                    className="absolute left-[-24px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-yellow-600 to-yellow-200 rounded-full animate-timeline-glow"
                                    style={{ transformOrigin: "top" }}
                                    animate={{ scaleY: isMobile ? 1 : progress }}
                                    transition={{ duration: isMobile ? 0 : 0.1 }}
                                ></motion.span>
                            )}
                            <motion.div
                                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
                                transition={{ duration: isMobile ? 0 : 0.2 }}
                            >
                                <p className="text-sm text-gray-500">{item.year}</p>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
