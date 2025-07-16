'use client'
import {motion} from "framer-motion"
import timeline from "@/data/TimelineItems"

export default function Timeline() {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <motion.div
                className="relative border-l-2 border-yellow-500 pl-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {timeline.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
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