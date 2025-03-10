"use client"

import { type ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FacebookAnimation } from "./animations/FacebookAnimation"
import { InstagramAnimation } from "./animations/InstagramAnimation"
import { GithubAnimation } from "./animations/GithubAnimation"
import { LinkedInAnimation } from "./animations/LinkedInAnimation"
import { TikTokAnimation } from "./animations/TikTokAnimation"
import { MediumAnimation } from "./animations/MediumAnimation"

interface SocialButtonProps {
  platform: "facebook" | "instagram" | "instagram2" | "github" | "linkedin" | "tiktok" | "medium"
  icon: ReactNode
  url: string
  color: string
}

export function SocialButton({ platform, icon, url, color }: SocialButtonProps) {
  const [showAnimation, setShowAnimation] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    setShowAnimation(true)
    // Animation will handle redirection
  }

  const handleAnimationComplete = () => {
    window.location.href = url
  }

  // Generate a lighter variant of the color for the glow effect
  const getGlowColor = () => {
    // Simple way to create a lighter version for the glow
    return color.replace('bg-', 'from-') + ' to-transparent'
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
    <>
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
                background: `radial-gradient(circle, ${color.replace('bg-', 'var(--')}), transparent)`,
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

      {showAnimation && platform === "facebook" && <FacebookAnimation onComplete={handleAnimationComplete} />}

      {showAnimation && (platform === "instagram" || platform === "instagram2") && (
        <InstagramAnimation onComplete={handleAnimationComplete} />
      )}

      {showAnimation && platform === "github" && <GithubAnimation onComplete={handleAnimationComplete} />}

      {showAnimation && platform === "linkedin" && <LinkedInAnimation onComplete={handleAnimationComplete} />}

      {showAnimation && platform === "tiktok" && <TikTokAnimation onComplete={handleAnimationComplete} />}

      {showAnimation && platform === "medium" && <MediumAnimation onComplete={handleAnimationComplete} />}
    </>
  )
}
