"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Github, Linkedin, BookText } from "lucide-react"
import { cn } from "@/lib/utils"
import TikTokIcon from "./tiktok-icon"
import { memo } from "react"

interface SocialLinkProps {
  name: string
  url: string
  icon: string
  color: string
  hoverColor: string
  onClick: () => void
  theme?: string
}

// Memoize component to prevent unnecessary re-renders
const SocialLink = memo(function SocialLink({
  name,
  url,
  icon,
  color,
  hoverColor,
  onClick,
  theme = "dark",
}: SocialLinkProps) {
  const getIcon = () => {
    switch (icon) {
      case "facebook":
        return <Facebook className="h-6 w-6" />
      case "instagram":
        return <Instagram className="h-6 w-6" />
      case "github":
        return <Github className="h-6 w-6" />
      case "linkedin":
        return <Linkedin className="h-6 w-6" />
      case "tiktok":
        return <TikTokIcon className="h-6 w-6" />
      case "medium":
        return <BookText className="h-6 w-6" />
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          theme === "dark"
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
            : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05)",
      }}
      className={cn(
        "rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 backdrop-blur-sm border",
        theme === "dark" ? "border-white/5" : "border-slate-900/5",
        color,
        hoverColor,
      )}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      style={{ willChange: "transform" }} // Performance optimization
    >
      <div className="flex items-center space-x-4">
        <div
          className={cn(
            "p-4 rounded-full shadow-inner flex items-center justify-center",
            theme === "dark" ? "bg-white/20" : "bg-white/40",
          )}
        >
          {getIcon()}
        </div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
      </div>

      {/* Optimized shine effect */}
      <motion.div
        className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        style={{ willChange: "opacity" }} // Performance optimization
      >
        <motion.div
          className={cn(
            "w-20 h-full skew-x-12",
            theme === "dark"
              ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
              : "bg-gradient-to-r from-transparent via-white/20 to-transparent",
          )}
          animate={{
            x: [-200, 400],
            transition: {
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
            },
          }}
          style={{ willChange: "transform" }} // Performance optimization
        />
      </motion.div>
    </motion.div>
  )
})

export default SocialLink

