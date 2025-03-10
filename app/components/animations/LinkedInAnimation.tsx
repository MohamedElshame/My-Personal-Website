"use client"

import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"

export function LinkedInAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-blue-800 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="text-white">
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
          <FaLinkedin size={80} className="text-blue-400" />
        </motion.div>

        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <motion.div
            className="h-2 w-0 bg-blue-400 rounded-full"
            animate={{ width: 200 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-2 text-center"
          >
            Connecting to your professional network...
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

