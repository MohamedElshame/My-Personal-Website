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
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-black"
        onAnimationComplete={onComplete}
      >
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
          {/* Typewriter with poetry */}
          <motion.div className="w-80 max-w-full bg-gray-100 rounded-md p-6 font-serif relative">
            <motion.div
              className="absolute top-6 left-6 right-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.p
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="overflow-hidden whitespace-nowrap text-lg italic"
              >
                Words dance across the page,
              </motion.p>

              <motion.p
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 2.3, duration: 1.5 }}
                className="overflow-hidden whitespace-nowrap mt-2 text-lg italic"
              >
                Like stars in the night sky,
              </motion.p>

              <motion.p
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 3.8, duration: 1.5 }}
                className="overflow-hidden whitespace-nowrap mt-2 text-lg italic"
              >
                Illuminating thoughts.
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute bottom-6 right-6 w-3 h-5 bg-black"
              animate={{
                opacity: [1, 0, 1, 0, 1, 0, 1, 0],
              }}
              transition={{ delay: 0.8, duration: 2, repeat: 2 }}
            />
          </motion.div>

          <motion.div className="mt-6 flex items-center space-x-2">
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
            className="mt-4 text-center font-medium"
          >
            Crafting stories that inspire...
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

