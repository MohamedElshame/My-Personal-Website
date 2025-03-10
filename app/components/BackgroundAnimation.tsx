"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 200
    const colors = ["#ff9a9e", "#fad0c4", "#ffecd2", "#fcb69f", "#a18cd1", "#fbc2eb", "#8fd3f4", "#84fab0"]

    class Particle {
      x: number
      y: number
      size: number
      baseSize: number
      speedX: number
      speedY: number
      color: string
      pulseDirection: boolean
      pulseSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseSize = Math.random() * 5 + 1
        this.size = this.baseSize
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.pulseDirection = Math.random() > 0.5
        this.pulseSpeed = Math.random() * 0.05 + 0.01
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Pulse size effect
        if (this.pulseDirection) {
          this.size += this.pulseSpeed
          if (this.size > this.baseSize * 1.5) this.pulseDirection = false
        } else {
          this.size -= this.pulseSpeed
          if (this.size < this.baseSize * 0.5) this.pulseDirection = true
        }

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(20, 30, 48, 0.95)")
      gradient.addColorStop(0.5, "rgba(36, 59, 85, 0.95)")
      gradient.addColorStop(1, "rgba(20, 30, 48, 0.95)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      // Connect particles with lines
      connectParticles()

      requestAnimationFrame(animate)
    }

    function connectParticles() {
      const maxDistance = 180
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            if (!ctx) return
            const opacity = 1 - distance / maxDistance
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.8})`
            ctx.lineWidth = 0.5 * opacity
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.closePath()
          }
        }
      }
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
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

