// Add a new component for magical particles

"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface MagicalParticlesProps {
  count?: number
  colors?: string[]
}

export default function MagicalParticles({
  count = 50,
  colors = ["#8b5cf6", "#ec4899", "#3b82f6", "#f59e0b"],
}: MagicalParticlesProps) {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      color: string
      duration: number
    }>
  >([])

  useEffect(() => {
    const newParticles = []

    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 10,
      })
    }

    setParticles(newParticles)
  }, [count, colors])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, Math.random() * 1.5 + 0.5, 1],
            transition: {
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  )
}

