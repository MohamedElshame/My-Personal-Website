"use client"

import { motion } from "framer-motion"
import { FaInstagram, FaHeart, FaComment } from "react-icons/fa"

export function InstagramAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white relative"
        onAnimationComplete={onComplete}
      >
        <motion.div
          className="relative z-10 rounded-2xl p-4 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { repeat: 1, duration: 1 },
            scale: { repeat: 1, duration: 1 },
          }}
        >
          <FaInstagram size={80} className="text-white" />
        </motion.div>

        {/* Instagram post mockup */}
        <motion.div
          className="mt-8 bg-white rounded-lg overflow-hidden w-80 max-w-full text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center p-3 border-b">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"></div>
            <p className="ml-2 font-semibold">mohamed_elshamy</p>
          </div>

          <motion.div
            className="h-80 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-gray-500 font-medium">Portfolio Image</span>
          </motion.div>

          <div className="p-3">
            <div className="flex space-x-4 mb-2">
              <motion.div
                whileHover={{ scale: 1.2, color: "#E1306C" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <FaHeart className="text-xl" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <FaComment className="text-xl" />
              </motion.div>
            </div>

            <p className="font-semibold mb-1">42 likes</p>
            <p>
              <span className="font-semibold">mohamed_elshamy</span> Check out my new portfolio website! 🚀 #webdev
              #portfolio
            </p>
          </div>
        </motion.div>

        {/* Floating hearts */}
        {[...Array(5)].map((_, i) => {
          const randomX = Math.random() * 200 - 100
          const randomDelay = 1.5 + Math.random() * 0.5

          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0, scale: 0, x: randomX, y: 50 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [50, 0, -50],
              }}
              transition={{ delay: randomDelay, duration: 1 }}
            >
              <FaHeart className="text-xl text-pink-500" />
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

