"use client"

import { motion } from "framer-motion"
import { FaFacebook, FaThumbsUp, FaHeart, FaComment } from "react-icons/fa"

export function FacebookAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-blue-900 bg-opacity-90 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
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
        className="text-white relative"
        onAnimationComplete={onComplete}
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

        {/* Facebook post mockup */}
        <motion.div
          className="mt-8 bg-white rounded-lg p-4 text-black w-80 max-w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              ME
            </div>
            <div>
              <p className="font-semibold">Mohamed Elshamy</p>
              <p className="text-xs text-gray-500">Just now</p>
            </div>
          </div>

          <p className="mb-3">Check out my new portfolio website! 🚀</p>

          <motion.div
            className="h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded flex items-center justify-center mb-3"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-blue-500 font-semibold">Portfolio Preview</span>
          </motion.div>

          <motion.div className="flex justify-between text-gray-500 border-t pt-2">
            <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.1, color: "#1877F2" }}>
              <FaThumbsUp />
              <span>Like</span>
            </motion.div>

            <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.1, color: "#1877F2" }}>
              <FaComment />
              <span>Comment</span>
            </motion.div>

            <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.1, color: "#1877F2" }}>
              <span>Share</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating reactions */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0, scale: 0, x: -50, y: 20 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [-50, -70, -90],
            y: [20, 0, -20],
          }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <FaThumbsUp className="text-2xl text-blue-400" />
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ opacity: 0, scale: 0, x: 50, y: 20 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [50, 70, 90],
            y: [20, 0, -20],
          }}
          transition={{ delay: 1.7, duration: 1 }}
        >
          <FaHeart className="text-2xl text-red-500" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

