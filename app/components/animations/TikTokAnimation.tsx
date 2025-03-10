"use client"

import { motion } from "framer-motion"
import { FaTiktok } from "react-icons/fa"

export function TikTokAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white relative"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
          }}
          transition={{
            repeat: 2,
            duration: 0.5,
          }}
          className="relative z-10"
        >
          <FaTiktok size={80} className="text-white" />
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: 3,
            duration: 0.3,
            delay: 0.5,
          }}
        >
          <div className="w-20 h-20 rounded-full bg-pink-500" />
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: 3,
            duration: 0.3,
            delay: 0.6,
          }}
        >
          <div className="w-20 h-20 rounded-full bg-blue-400" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-xl font-bold text-center"
        >
          Loading TikTok...
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

