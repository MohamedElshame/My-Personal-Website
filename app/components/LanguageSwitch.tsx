"use client"

import { motion } from "framer-motion"

interface LanguageSwitchProps {
  lang: string
  onSwitch: () => void
}

export function LanguageSwitch({ lang, onSwitch }: LanguageSwitchProps) {
  return (
    <motion.button
      onClick={onSwitch}
      className="bg-white text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-100 transition-colors transform hover:-translate-y-1 hover:shadow-md"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {lang === "en" ? "عربي" : "English"}
    </motion.button>
  )
}

