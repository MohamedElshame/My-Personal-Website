"use client"

import { motion } from "framer-motion"
import { FaInstagram } from "react-icons/fa"

export function InstagramAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="text-white">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { repeat: 1, duration: 1 },
            scale: { repeat: 1, duration: 1 },
          }}
          className="rounded-xl p-2 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"
        >
          <FaInstagram size={80} className="text-white" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl font-bold text-center"
        >
          Loading Instagram...
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

