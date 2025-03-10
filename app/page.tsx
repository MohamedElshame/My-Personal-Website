"use client"

import { useState, useEffect, useRef, Suspense, lazy } from "react"
import { AnimatePresence, motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import SocialLink from "@/components/social-link"
import { cn } from "@/lib/utils"
import { Sparkles, Star } from "lucide-react"
import { throttle } from "@/lib/utils"
import ThemeSwitcher from "@/components/theme-switcher"
import ConnectionVisualizer from "@/components/connection-visualizer"
import LoadingSpinner from "@/components/loading-spinner"

// Lazy load animations for better performance
const FacebookAnimation = lazy(() => import("@/components/animations/facebook-animation"))
const InstagramAnimation = lazy(() => import("@/components/animations/instagram-animation"))
const GithubAnimation = lazy(() => import("@/components/animations/github-animation"))
const LinkedInAnimation = lazy(() => import("@/components/animations/linkedin-animation"))
const TikTokAnimation = lazy(() => import("@/components/animations/tiktok-animation"))
const MediumAnimation = lazy(() => import("@/components/animations/medium-animation"))

export default function Home() {
  const [currentAnimation, setCurrentAnimation] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [cursorText, setCursorText] = useState("")
  const [isHoveringName, setIsHoveringName] = useState(false)
  const [showConnectionVisualizer, setShowConnectionVisualizer] = useState(false)
  const [selectedConnection, setSelectedConnection] = useState<string | null>(null)
  const [theme, setTheme] = useState("dark")

  // Refs for performance optimization
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseTrailRef = useRef<Array<{ x: number; y: number; id: number }>>([])
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  // For parallax effect on scroll
  const scrollY = useMotionValue(0)
  const titleY = useTransform(scrollY, [0, 300], [0, -50])
  const opacityTitle = useTransform(scrollY, [0, 300], [1, 0.5])

  // For background particles
  const particlesRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  // Update scroll position with throttling
  useEffect(() => {
    const handleScroll = throttle(() => {
      scrollY.set(window.scrollY)
    }, 10)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollY])

  // Optimized mouse tracking with requestAnimationFrame
  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })

    // Update mouse trail with limited length for performance
    const trailLength = 10
    mouseTrailRef.current = [...mouseTrailRef.current, { x: e.clientX, y: e.clientY, id: Date.now() }].slice(
      -trailLength,
    )

    // Move particles toward mouse with throttling
    if (particlesRef.current && Math.random() > 0.7) {
      controls.start((i) => ({
        x: e.clientX + (Math.random() - 0.5) * 200,
        y: e.clientY + (Math.random() - 0.5) * 200,
        transition: {
          duration: 2 + Math.random() * 2,
          ease: "easeOut",
        },
      }))
    }
  }

  // Throttled mouse move handler
  useEffect(() => {
    const handleMouseMove = throttle(updateMousePosition, 10)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [controls])

  // Animation frame for smoother animations
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      // Animation logic here if needed
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  // Optimized background particles animation
  useEffect(() => {
    controls.start((i) => ({
      y: [Math.random() * -20, Math.random() * 20],
      x: [Math.random() * -20, Math.random() * 20],
      transition: {
        duration: 3 + Math.random() * 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    }))

    return () => {
      controls.stop()
    }
  }, [controls])

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61551548814387",
      icon: "facebook",
      color: "bg-blue-600/90",
      hoverColor: "hover:bg-blue-700/90",
      animation: <FacebookAnimation />,
      description: "Connect on Facebook",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/z3z3._/",
      icon: "instagram",
      color: "bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-orange-500/90",
      hoverColor: "hover:bg-gradient-to-r hover:from-purple-600/90 hover:via-pink-600/90 hover:to-orange-600/90",
      animation: <InstagramAnimation />,
      description: "Follow on Instagram",
    },
    {
      name: "Instagram (Labfloor)",
      url: "https://www.instagram.com/labfloor/",
      icon: "instagram",
      color: "bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-orange-500/90",
      hoverColor: "hover:bg-gradient-to-r hover:from-purple-600/90 hover:via-pink-600/90 hover:to-orange-600/90",
      animation: <InstagramAnimation variant="labfloor" />,
      description: "Labfloor on Instagram",
    },
    {
      name: "GitHub",
      url: "https://github.com/MohamedElshame",
      icon: "github",
      color: "bg-gray-800/90",
      hoverColor: "hover:bg-gray-900/90",
      animation: <GithubAnimation />,
      description: "Code on GitHub",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamed-elshamy-64261b326/",
      icon: "linkedin",
      color: "bg-blue-700/90",
      hoverColor: "hover:bg-blue-800/90",
      animation: <LinkedInAnimation />,
      description: "Connect professionally",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@z3z3.x",
      icon: "tiktok",
      color: "bg-black/90",
      hoverColor: "hover:bg-gray-900/90",
      animation: <TikTokAnimation />,
      description: "Watch on TikTok",
    },
    {
      name: "Medium",
      url: "https://medium.com/@z3z3",
      icon: "medium",
      color: "bg-black/90",
      hoverColor: "hover:bg-gray-800/90",
      animation: <MediumAnimation />,
      description: "Read on Medium",
    },
  ]

  const handleLinkClick = (name: string, url: string) => {
    // Show connection visualizer first
    setSelectedConnection(name)
    setShowConnectionVisualizer(true)

    // After connection visualization, show the platform animation
    setTimeout(() => {
      setShowConnectionVisualizer(false)
      setCurrentAnimation(name)

      // Redirect after animation completes
      setTimeout(() => {
        window.location.href = url
      }, 2500) // Animation duration + small buffer
    }, 2000) // Connection visualization duration
  }

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.6,
        damping: 30,
      },
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.6,
        damping: 30,
      },
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      width: 150,
      height: 150,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.6,
        damping: 30,
      },
    },
  }

  const enterLink = (description?: string) => {
    setCursorVariant("link")
    if (description) {
      setCursorText(description)
      setCursorVariant("text")
    }
  }

  const leaveLink = () => {
    setCursorVariant("default")
    setCursorText("")
  }

  // Magical name hover effect
  const handleNameHover = () => {
    setIsHoveringName(true)
  }

  const handleNameLeave = () => {
    setIsHoveringName(false)
  }

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <main
      className={cn(
        "min-h-screen text-white overflow-hidden transition-colors duration-700",
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900"
          : "bg-gradient-to-br from-blue-100 via-purple-100 to-blue-100 text-slate-900",
      )}
      ref={containerRef}
    >
      {/* Theme switcher - unique feature */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeSwitcher currentTheme={theme} onChange={toggleTheme} />
      </div>

      {/* Optimized background elements - reduced quantity for performance */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute rounded-full",
            theme === "dark" ? "bg-white bg-opacity-[0.03]" : "bg-slate-900 bg-opacity-[0.03]",
          )}
          style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: "transform", // Performance optimization
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            transition: {
              duration: Math.random() * 30 + 30,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Optimized magical particles that follow mouse - reduced quantity */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            custom={i}
            animate={controls}
            style={{
              backgroundColor: i % 3 === 0 ? "#8b5cf6" : i % 3 === 1 ? "#ec4899" : "#3b82f6",
              boxShadow: i % 3 === 0 ? "0 0 10px #8b5cf6" : i % 3 === 1 ? "0 0 10px #ec4899" : "0 0 10px #3b82f6",
              top: Math.random() * window.innerHeight,
              left: Math.random() * window.innerWidth,
              opacity: 0.7,
              willChange: "transform, opacity", // Performance optimization
            }}
          />
        ))}
      </div>

      {/* Optimized mouse trail effect - using ref for better performance */}
      {mouseTrailRef.current.map((point, i) => (
        <motion.div
          key={point.id}
          className="fixed w-1 h-1 rounded-full pointer-events-none z-20"
          style={{
            left: point.x,
            top: point.y,
            opacity: 1 - i / mouseTrailRef.current.length,
            backgroundColor:
              theme === "dark"
                ? `rgba(255, 255, 255, ${1 - i / mouseTrailRef.current.length})`
                : `rgba(30, 41, 59, ${1 - i / mouseTrailRef.current.length})`,
            boxShadow:
              theme === "dark"
                ? `0 0 ${8 - i / 3}px rgba(255, 255, 255, ${0.5 - (i / mouseTrailRef.current.length) * 0.5})`
                : `0 0 ${8 - i / 3}px rgba(30, 41, 59, ${0.5 - (i / mouseTrailRef.current.length) * 0.5})`,
            willChange: "transform, opacity", // Performance optimization
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1 - i / mouseTrailRef.current.length }}
          transition={{ duration: 0.2 }}
        />
      ))}

      {/* Custom cursor */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 flex items-center justify-center",
          theme === "dark"
            ? "bg-white bg-opacity-30 mix-blend-difference"
            : "bg-slate-900 bg-opacity-30 mix-blend-difference",
        )}
        variants={variants}
        animate={cursorVariant}
        style={{ willChange: "transform" }} // Performance optimization
      >
        {cursorText && (
          <span className={cn("text-xs font-medium text-center", theme === "dark" ? "text-white" : "text-slate-900")}>
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Connection Visualizer - Unique Feature */}
      <AnimatePresence>
        {showConnectionVisualizer && <ConnectionVisualizer platformName={selectedConnection || ""} theme={theme} />}
      </AnimatePresence>

      {/* Platform animations with Suspense for code splitting */}
      <AnimatePresence>
        {currentAnimation && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Suspense fallback={<LoadingSpinner />}>
              {socialLinks.find((link) => link.name === currentAnimation)?.animation}
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <motion.div className="text-center mb-16" style={{ y: titleY, opacity: opacityTitle }}>
          <motion.div
            className="inline-flex items-center justify-center space-x-2 relative"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={handleNameHover}
            onMouseLeave={handleNameLeave}
          >
            {/* Magical name effect */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-full opacity-0"
              animate={
                isHoveringName
                  ? {
                      opacity: 0.2,
                      scale: [1, 1.2, 1],
                      background: [
                        "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(30, 41, 59, 0) 70%)",
                        "radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(30, 41, 59, 0) 70%)",
                        "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(30, 41, 59, 0) 70%)",
                      ],
                      transition: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                    }
                  : { opacity: 0 }
              }
              style={{ willChange: "transform, opacity" }} // Performance optimization
            />

            <motion.h1
              className={cn(
                "text-5xl md:text-7xl font-bold bg-clip-text text-transparent",
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                  : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600",
              )}
              onMouseEnter={() => enterLink("Mohamed Elshamy")}
              onMouseLeave={leaveLink}
            >
              Mohamed Elshamy
            </motion.h1>

            {/* Animated stars */}
            <motion.div className="relative">
              <motion.div
                animate={{
                  rotate: 360,
                  transition: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                style={{ willChange: "transform" }} // Performance optimization
              >
                <Sparkles className={cn("h-8 w-8", theme === "dark" ? "text-yellow-400" : "text-yellow-600")} />
              </motion.div>

              {/* Orbiting star */}
              <motion.div
                className="absolute top-0 left-0"
                animate={{
                  rotate: 360,
                  transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                style={{ willChange: "transform" }} // Performance optimization
              >
                <motion.div
                  style={{ x: 20, y: -10 }}
                  animate={{
                    scale: [1, 1.5, 1],
                    transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                >
                  <Star className={cn("h-3 w-3", theme === "dark" ? "text-yellow-300" : "text-yellow-500")} />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className={cn(
              "h-1 w-32 mx-auto my-8 rounded-full",
              theme === "dark"
                ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600",
            )}
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className={cn("text-xl max-w-2xl mx-auto", theme === "dark" ? "text-gray-300" : "text-gray-700")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Connect with me on social media
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              onMouseEnter={() => enterLink(link.description)}
              onMouseLeave={leaveLink}
              style={{ willChange: "transform" }} // Performance optimization
            >
              <SocialLink
                name={link.name}
                url={link.url}
                icon={link.icon}
                color={link.color}
                hoverColor={link.hoverColor}
                onClick={() => handleLinkClick(link.name, link.url)}
                theme={theme}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <footer
        className={cn("text-center py-8 mt-16 relative z-10", theme === "dark" ? "text-gray-400" : "text-gray-600")}
      >
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          © {new Date().getFullYear()} Mohamed Elshamy. All rights reserved.
        </motion.p>
      </footer>
    </main>
  )
}

