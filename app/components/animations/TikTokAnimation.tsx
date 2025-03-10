"use client"

import { motion } from "framer-motion"
import { FaTiktok, FaMusic, FaHeart, FaComment } from "react-icons/fa"

export function TikTokAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
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

        {/* TikTok video mockup */}
        <motion.div
          className="mt-8 bg-gray-900 rounded-lg overflow-hidden w-64 h-96 max-w-full relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

          {/* Video content */}
          <div className="h-full flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
              className="text-2xl font-bold text-center"
            >
              Portfolio Demo
            </motion.div>
          </div>

          {/* TikTok UI elements */}
          <div className="absolute right-3 bottom-20 flex flex-col items-center space-y-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center"
            >
              <FaHeart className="text-xl" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
            >
              <FaComment className="text-xl" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
            >
              <span className="text-sm font-bold">↗️</span>
            </motion.div>
          </div>

          {/* Username and caption */}
          <div className="absolute left-3 bottom-20 max-w-[70%]">
            <p className="font-bold">@z3z3.x</p>
            <p className="text-sm">Check out my portfolio #webdev #coding</p>

            <motion.div
              className="flex items-center mt-2 text-sm"
              animate={{ x: [0, -100] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatType: "loop" }}
            >
              <FaMusic className="mr-1" />
              <span className="whitespace-nowrap">Original Sound - Mohamed Elshamy</span>
            </motion.div>
          </div>
        </motion.div>

        {/* TikTok-style colorful effects */}
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

        {/* Add floating music notes and hashtags */}
        <motion.div
          className="absolute -top-10 -left-10 text-xl"
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -30, -60],
            x: [0, -10, -20],
            rotate: [0, 10, 20],
          }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          ♪
        </motion.div>

        <motion.div
          className="absolute -top-5 -right-10 text-xl"
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -20, -40],
            x: [0, 10, 20],
            rotate: [0, -10, -20],
          }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          ♫
        </motion.div>

        <motion.div
          className="absolute -bottom-20 left-0 text-sm font-bold"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 10, 20],
          }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          #trending
        </motion.div>

        <motion.div
          className="absolute -bottom-20 right-0 text-sm font-bold"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 10, 20],
          }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          #fyp
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-xl font-bold text-center"
        >
          Loading TikTok...
        </motion.p>

        {/* TikTok-style loading bar */}
        <motion.div className="mt-4 h-1 w-48 bg-white bg-opacity-30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-blue-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

