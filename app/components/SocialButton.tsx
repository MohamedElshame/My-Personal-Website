"use client"

import { type ReactNode, useState } from "react"
import { motion } from "framer-motion"
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
  label: string
}

export function SocialButton({ platform, icon, url, color, label }: SocialButtonProps) {
  const [showAnimation, setShowAnimation] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    setShowAnimation(true)
    // Animation will handle redirection
  }

  const handleAnimationComplete = () => {
    window.location.href = url
  }

  // Add a subtle pulse animation when hovered
  const pulseAnimation = {
    scale: [1, 1.05, 1, 1.05, 1],
    boxShadow: [
      "0 4px 6px rgba(0, 0, 0, 0.1)",
      "0 10px 15px rgba(0, 0, 0, 0.2)",
      "0 4px 6px rgba(0, 0, 0, 0.1)",
      "0 10px 15px rgba(0, 0, 0, 0.2)",
      "0 4px 6px rgba(0, 0, 0, 0.1)",
    ],
  }

  return (
    <>
      <motion.button
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${color} shadow-lg relative overflow-hidden`}
        whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 1 }} // Changed from 0 to 1 to ensure icons are visible immediately
        animate={{ opacity: 1, y: 0 }} // Removed y: 50 from initial state
        transition={{ duration: 0.5 }}
      >
        {/* Add a subtle background animation when hovered */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-white opacity-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, repeatType: "loop" }}
            style={{ borderRadius: "100%" }}
          />
        )}
        <div className="text-2xl">{icon}</div> {/* Added text-2xl to ensure icon size */}
      </motion.button>

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

