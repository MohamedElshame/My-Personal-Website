"use client"

import { motion } from "framer-motion"
import { FaMedium, FaPen } from "react-icons/fa"

export function MediumAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="text-black">
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: 1,
            duration: 1,
          }}
        >
          <FaMedium size={80} className="text-black" />
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex items-center space-x-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <FaPen size={16} />
            <motion.div
              className="h-0.5 w-0 bg-black"
              animate={{ width: 150 }}
              transition={{ duration: 1.5, delay: 0.9 }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4 text-center"
          >
            Exploring stories and ideas...
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

