"use client"

import { motion } from "framer-motion"
import { FaGithub, FaCode } from "react-icons/fa"

export function GithubAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="text-white">
        <motion.div className="flex flex-col items-center">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              y: { repeat: 1, duration: 1 },
              rotate: { repeat: 1, duration: 1 },
            }}
          >
            <FaGithub size={80} className="text-white" />
          </motion.div>

          <motion.div
            className="mt-8 text-sm font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="flex items-center space-x-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <FaCode size={16} />
              <span>git clone https://github.com/MohamedElshame</span>
            </motion.div>

            <motion.div
              className="mt-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span>Cloning repository...</span>
            </motion.div>

            <motion.div
              className="mt-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span>Repository cloned successfully!</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

