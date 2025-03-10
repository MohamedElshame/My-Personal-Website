"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const lastUpdateTimeRef = useRef<number>(0)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    updateCanvasSize()

    // Calculate optimal particle count based on screen size
    // Significantly reduced number of particles
    const calculateParticleCount = () => {
      const area = canvas.width * canvas.height
      // Much lower density for better performance
      return Math.min(60, Math.floor(area / 25000))
    }
    
    const colors = ["#ff9a9e", "#fad0c4", "#ffecd2", "#fcb69f", "#a18cd1", "#fbc2eb"]

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      // Removed many complex properties to improve performance

      constructor() {
        const width = canvas?.width || window.innerWidth;
        const height = canvas?.height || window.innerHeight;
        
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        // Slower movement for better performance
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update(deltaTime: number, mouseX: number = 0, mouseY: number = 0) {
        const width = canvas?.width || window.innerWidth;
        const height = canvas?.height || window.innerHeight;
        
        // Simplified update with delta time for consistent speed
        this.x += this.speedX * (deltaTime / 16)
        this.y += this.speedY * (deltaTime / 16)

        // Simplified boundary check
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
        
        // Much more subtle mouse interaction, only for close particles
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 80) {
          // Very minimal effect
          this.x -= (dx / distance) * 0.2
          this.y -= (dy / distance) * 0.2
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Simplified drawing without glow effects
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initParticles = () => {
      const count = calculateParticleCount()
      particlesRef.current = []
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(new Particle())
      }
    }

    const clearCanvas = () => {
      if (!ctx) return
      // Solid background for better performance
      ctx.fillStyle = "rgb(10, 15, 30)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const connectParticles = (particles: Particle[]) => {
      // Reduced max distance for fewer connections
      const maxDistance = canvas.width > 1000 ? 80 : 60
      const particleCount = particles.length
      
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 0.3
      
      // Connect only a subset of particles for better performance
      for (let i = 0; i < particleCount; i += 2) {
        for (let j = i + 1; j < particleCount; j += 2) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.globalAlpha = opacity * 0.2
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
    }

    const animate = (timestamp: number) => {
      if (!ctx) return
      
      // Calculate delta time for smooth animation regardless of frame rate
      const deltaTime = lastUpdateTimeRef.current ? timestamp - lastUpdateTimeRef.current : 16
      lastUpdateTimeRef.current = timestamp
      
      // Only update every other frame for better performance
      const frameSkip = Math.floor(timestamp / 100) % 2 === 0
      
      if (!frameSkip) {
        clearCanvas()
        
        const { x: mouseX, y: mouseY } = mousePosition
        const particles = particlesRef.current
        
        // Update particles
        for (let i = 0; i < particles.length; i++) {
          particles[i].update(deltaTime, mouseX, mouseY)
          particles[i].draw(ctx)
        }
        
        // Only connect particles every few frames for better performance
        if (Math.floor(timestamp / 200) % 2 === 0) {
          connectParticles(particles)
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Throttle mouse move events
    let lastMoveTime = 0
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      // Only update mouse position every 50ms for better performance
      if (now - lastMoveTime > 50) {
        setMousePosition({ x: e.clientX, y: e.clientY })
        lastMoveTime = now
      }
    }

    // Handle window resize with throttling
    let resizeTimeout: any = null
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      
      resizeTimeout = setTimeout(() => {
        updateCanvasSize()
        initParticles()
      }, 200)
    }
    
    // Handle touch events with throttling
    const handleTouchMove = (e: TouchEvent) => {
      const now = Date.now()
      if (e.touches.length > 0 && now - lastMoveTime > 50) {
        setMousePosition({ 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        })
        lastMoveTime = now
      }
    }
    
    // Initialize and start animation
    initParticles()
    animationFrameRef.current = requestAnimationFrame(animate)
    
    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })

    return () => {
      // Clean up
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("touchmove", handleTouchMove)
      if (resizeTimeout) clearTimeout(resizeTimeout)
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
