"use client"

import { motion } from "framer-motion"
import { Sun, Moon, Palette } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ThemeSwitcherProps {
  currentTheme: string
  onChange: () => void
}

export default function ThemeSwitcher({ currentTheme, onChange }: ThemeSwitcherProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className={cn(
        "relative p-3 rounded-full backdrop-blur-sm",
        currentTheme === "dark"
          ? "bg-slate-800/50 text-white hover:bg-slate-700/50"
          : "bg-white/50 text-slate-900 hover:bg-white/70",
      )}
      onClick={onChange}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }} // Performance optimization
    >
      {currentTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}

      {/* Animated ring effect */}
      <motion.div
        className={cn("absolute inset-0 rounded-full -z-10", currentTheme === "dark" ? "bg-blue-500" : "bg-yellow-400")}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.2 : 0,
          scale: isHovered ? 1 : 0.8,
          transition: { duration: 0.3 },
        }}
      />

      {/* Color palette indicator */}
      <motion.div
        className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full p-1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Palette className="h-3 w-3 text-white" />
      </motion.div>
    </motion.button>
  )
}

