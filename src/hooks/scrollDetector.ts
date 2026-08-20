import { useEffect, useState } from 'react'

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('down')
  useEffect(() => {
    let lastY = window.scrollY
    const updateDir = () => {
      const y = window.scrollY
      setScrollDir(y > lastY ? 'down' : 'up')
      lastY = y
    }
    window.addEventListener('scroll', updateDir)
    return () => window.removeEventListener('scroll', updateDir)
  }, [])
  return scrollDir
}
