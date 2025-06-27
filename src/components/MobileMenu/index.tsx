// components/MobileMenu.tsx
import { motion, AnimatePresence } from "framer-motion"
import { navLinks } from "@/data/navlinks"

export default function MobileMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.2 }}
          className="fixed top-16 right-0 w-64 h-screen bg-gray-900 text-white p-6 z-50 flex flex-col space-y-6 overflow-y-auto"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group text-lg font-medium hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-yellow-400 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            ))}
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
