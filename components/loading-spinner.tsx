"use client"

import { motion } from "framer-motion"

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <p className="mt-4 text-white text-lg">Loading...</p>
    </div>
  )
}

