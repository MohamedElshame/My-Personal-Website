"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000))
    const colors = ["#ff9a9e", "#fad0c4", "#ffecd2", "#fcb69f", "#a18cd1", "#fbc2eb", "#8fd3f4", "#84fab0"]

    class Particle {
      x: number
      y: number
      size: number
      baseSize: number
      speedX: number
      speedY: number
      color: string
      angle: number
      spin: number
      flickerSpeed: number
      flickerDirection: number
      flicker: number
      originalX: number
      originalY: number
      oscillationRadius: number
      oscillationSpeed: number
      oscillationAngle: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.originalX = this.x
        this.originalY = this.y
        this.baseSize = Math.random() * 4 + 1
        this.size = this.baseSize
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.angle = Math.random() * Math.PI * 2
        this.spin = (Math.random() * 0.1 - 0.05) * 0.5
        this.flickerSpeed = Math.random() * 0.01 + 0.005
        this.flickerDirection = 1
        this.flicker = 0
        this.oscillationRadius = Math.random() * 50 + 20
        this.oscillationSpeed = Math.random() * 0.002 + 0.001
        this.oscillationAngle = Math.random() * Math.PI * 2
      }

      update(mouseX: number, mouseY: number) {
        // Respond to mouse position
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 200
        
        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.2
          this.x -= dx * force
          this.y -= dy * force
        } else {
          // Return to original position with oscillation
          this.oscillationAngle += this.oscillationSpeed
          const targetX = this.originalX + Math.cos(this.oscillationAngle) * this.oscillationRadius
          const targetY = this.originalY + Math.sin(this.oscillationAngle) * this.oscillationRadius
          
          this.x += (targetX - this.x) * 0.01
          this.y += (targetY - this.y) * 0.01
        }

        // Boundary check
        if (this.x < 0) this.x = 0
        if (this.x > canvas.width) this.x = canvas.width
        if (this.y < 0) this.y = 0
        if (this.y > canvas.height) this.y = canvas.height

        // Flicker effect
        this.flicker += this.flickerSpeed * this.flickerDirection
        if (this.flicker > 0.5 || this.flicker < 0) {
          this.flickerDirection *= -1
        }
        this.size = this.baseSize * (1 + this.flicker * 0.3)

        // Spin effect
        this.angle += this.spin
      }

      draw() {
        if (!ctx) return
        ctx.save()
        
        // Create a glow effect
        ctx.shadowBlur = this.size * 2
        ctx.shadowColor = this.color
        
        ctx.fillStyle = this.color
        ctx.globalAlpha = 0.7 + this.flicker * 0.3
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
        
        ctx.restore()
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (!ctx) return
      
      // Clear with a fade effect for smoother transitions
      ctx.fillStyle = "rgba(20, 30, 48, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Get current mouse position from state
      const { x: mouseX, y: mouseY } = mousePosition

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouseX, mouseY)
        particles[i].draw()
      }

      // Connect particles with lines - only connect nearby particles to improve performance
      connectParticles()

      requestAnimationFrame(animate)
    }

    function connectParticles() {
      const maxDistance = canvas.width > 1000 ? 120 : 80
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            if (!ctx) return
            const opacity = 1 - distance / maxDistance
            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            )
            
            gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.2})`)
            gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity * 0.05})`)
            
            ctx.beginPath()
            ctx.strokeStyle = gradient
            ctx.lineWidth = opacity * 0.5
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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    // Handle touch events for mobile devices
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePosition({ 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        })
      }
    }
    
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [mousePosition])

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
