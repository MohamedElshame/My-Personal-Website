"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export interface SocialButtonConfig {
  name: string
  icon: React.ReactNode
  url: string
  color: string
  hoverColor: string
  bgColor: string
  hoverBgColor: string
  hoverScale: number
}

export interface SocialButtonProps {
  config: SocialButtonConfig
}

export function SocialButton({ config }: SocialButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    window.open(config.url, "_blank", "noopener,noreferrer")
  }

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: config.hoverScale }}
      className="rounded-full p-3 flex items-center justify-center transition-all duration-300"
      style={{
        backgroundColor: isHovered ? config.hoverBgColor : config.bgColor,
        color: isHovered ? config.hoverColor : config.color,
        boxShadow: isHovered 
          ? `0 0 15px 2px ${config.hoverBgColor}80` 
          : `0 0 5px 0px ${config.bgColor}40`,
      }}
      aria-label={`Visit ${config.name}`}
    >
      {config.icon}
    </motion.button>
  )
}
