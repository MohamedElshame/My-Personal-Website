"use client"

import { type ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FacebookAnimation } from "./animations/FacebookAnimation"
import { InstagramAnimation } from "./animations/InstagramAnimation"
import { GithubAnimation } from "./animations/GithubAnimation"
import { LinkedInAnimation } from "./animations/LinkedInAnimation"
import { TikTokAnimation } from "./animations/TikTokAnimation"

export interface SocialButtonProps {
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
    // نحن نؤخر إعادة توجيه المستخدم حتى تنتهي الرسوم المتحركة
  }

  const handleAnimationComplete = () => {
    // بعد اكتمال الرسوم المتحركة، نقوم بإعادة توجيه المستخدم إلى الرابط
    window.open(url, "_blank", "noopener,noreferrer")
    setTimeout(() => {
      setShowAnimation(false)
    }, 100)
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

  // عرض الرسوم المتحركة المناسبة بناءً على المنصة
  const renderAnimation = () => {
    switch (platform) {
      case 'facebook':
        return <FacebookAnimation onComplete={handleAnimationComplete} />
      case 'instagram':
      case 'instagram2':
        return <InstagramAnimation onComplete={handleAnimationComplete} />
      case 'github':
        return <GithubAnimation onComplete={handleAnimationComplete} />
      case 'linkedin':
        return <LinkedInAnimation onComplete={handleAnimationComplete} />
      case 'tiktok':
        return <TikTokAnimation onComplete={handleAnimationComplete} />
      case 'medium':
        // استخدام رسوم متحركة أبسط للمنصات التي ليس لديها مكون مخصص
        return (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-green-500 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={handleAnimationComplete}
          >
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              className="text-white"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { repeat: 1, duration: 1 },
                  scale: { repeat: 1, duration: 1 },
                }}
                className="rounded-xl p-2 bg-green-700"
              >
                {icon}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-xl font-bold text-center"
              >
                Loading Medium...
              </motion.p>
            </motion.div>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {showAnimation && renderAnimation()}
      </AnimatePresence>

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
