"use client"

import { type ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface SocialButtonProps {
  platform: "facebook" | "instagram" | "instagram2" | "github" | "linkedin" | "tiktok" | "medium"
  icon: ReactNode
  url: string
  color: string
}

export function SocialButton({ platform, icon, url, color }: SocialButtonProps) {
  const [showAnimation, setShowAnimation] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isLeavingPage, setIsLeavingPage] = useState(false)

  const handleClick = () => {
    setShowAnimation(true)
    // We'll redirect after the animation
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer")
      // Reset animation state
      setTimeout(() => {
        setShowAnimation(false)
      }, 100)
    }, 300)
  }

  // Get specific configuration based on platform
  const getPlatformConfig = () => {
    switch (platform) {
      case 'facebook':
        return {
          hoverScale: 1.15,
          tapScale: 0.92,
          rotationRange: [-8, 8],
        }
      case 'instagram':
      case 'instagram2':
        return {
          hoverScale: 1.12,
          tapScale: 0.94,
          rotationRange: [-5, 5],
        }
      case 'github':
        return {
          hoverScale: 1.1,
          tapScale: 0.95,
          rotationRange: [-3, 3],
        }
      case 'linkedin':
        return {
          hoverScale: 1.08,
          tapScale: 0.96,
          rotationRange: [-4, 4],
        }
      case 'tiktok':
        return {
          hoverScale: 1.2,
          tapScale: 0.9,
          rotationRange: [-10, 10],
        }
      case 'medium':
        return {
          hoverScale: 1.1,
          tapScale: 0.95,
          rotationRange: [-5, 5],
        }
      default:
        return {
          hoverScale: 1.1,
          tapScale: 0.95,
          rotationRange: [-5, 5],
        }
    }
  }

  const config = getPlatformConfig()

  return (
    <div className="relative">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-70 -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{ 
              background: `radial-gradient(circle, ${color}, transparent)`,
              transform: "translateZ(0)" // Force GPU acceleration
            }}
          />
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`relative w-16 h-16 rounded-full flex items-center justify-center text-white ${color} shadow-lg overflow-hidden isolation-auto`}
        whileHover={{ 
          scale: config.hoverScale, 
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          rotate: [0, config.rotationRange[0], config.rotationRange[1], 0],
        }}
        whileTap={{ scale: config.tapScale }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          rotate: {
            duration: 1.2,
            repeat: 0,
          }
        }}
      >
        <motion.div
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          } : {}}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 0.15 } : { opacity: 0 }}
          style={{
            background: "radial-gradient(circle at center, white 0%, transparent 70%)",
          }}
        />
      </motion.button>
    </div>
  )
}
