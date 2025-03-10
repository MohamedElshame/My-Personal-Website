"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function HalftoneBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Halftone wave parameters
    const dotSize = 2
    const spacing = 20
    const amplitude = 15
    const frequency = 0.02
    const speed = 0.005

    let time = 0

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "#111827" // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw halftone pattern
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          // Calculate wave effect
          const distX = x - canvas.width / 2
          const distY = y - canvas.height / 2
          const distance = Math.sqrt(distX * distX + distY * distY)

          // Create multiple overlapping waves
          const wave1 = Math.sin(distance * frequency + time) * amplitude
          const wave2 = Math.cos(distance * frequency * 0.5 + time * 1.3) * amplitude * 0.5
          const wave3 = Math.sin(x * frequency * 0.3 + time * 0.7) * amplitude * 0.3

          const waveSum = wave1 + wave2 + wave3

          // Calculate dot size based on wave
          const size = Math.max(0, dotSize + waveSum * 0.2)

          // Create gradient colors
          const hue = (distance * 0.05 + time * 10) % 360
          ctx.fillStyle = `hsla(${hue}, 70%, 60%, 0.8)`

          // Draw the dot
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      time += speed
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

