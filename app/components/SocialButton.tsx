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
}

export function SocialButton({ platform, icon, url, color }: SocialButtonProps) {
  const [showAnimation, setShowAnimation] = useState(false)

  const handleClick = () => {
    setShowAnimation(true)
    // Animation will handle redirection
  }

  const handleAnimationComplete = () => {
    window.location.href = url
  }

  return (
    <>
      <motion.button
        onClick={handleClick}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${color} shadow-lg`}
        whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
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

