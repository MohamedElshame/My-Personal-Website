"use client"

import { motion } from "framer-motion"
import { FaFacebook } from "react-icons/fa"

export function FacebookAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-blue-900 bg-opacity-90 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.6, 1],
        }}
        className="text-white"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: 1,
            duration: 0.7,
          }}
        >
          <FaFacebook size={100} className="text-blue-500" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl font-bold text-center"
        >
          Connecting to Facebook...
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

