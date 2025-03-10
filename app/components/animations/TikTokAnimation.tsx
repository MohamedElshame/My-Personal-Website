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
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20 
        }}
        className="text-white relative"
      >
        {/* TikTok logo with enhanced animation */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            rotateZ: [0, -5, 5, 0]
          }}
          transition={{
            repeat: 2,
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <FaTiktok size={80} className="text-white" />
        </motion.div>

        {/* Multiple colorful glowing circles */}
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.2, 0.8] 
          }}
          transition={{
            repeat: 3,
            duration: 0.4,
            delay: 0.3,
          }}
        >
          <div className="w-24 h-24 rounded-full bg-pink-500 blur-md" />
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.7, 0],
            scale: [0.7, 1.3, 0.7],
            x: [-5, 5, -5] 
          }}
          transition={{
            repeat: 3,
            duration: 0.5,
            delay: 0.4,
          }}
        >
          <div className="w-24 h-24 rounded-full bg-cyan-400 blur-md" />
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0.6, 1.4, 0.6],
            y: [-5, 5, -5]
          }}
          transition={{
            repeat: 3,
            duration: 0.6,
            delay: 0.5,
          }}
        >
          <div className="w-24 h-24 rounded-full bg-blue-400 blur-md" />
        </motion.div>

        {/* Particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                x: Math.random() * 100 - 50, 
                y: Math.random() * 100 - 50, 
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 0.8 + Math.random() * 0.5,
                delay: 0.3 + i * 0.05,
                ease: "easeOut"
              }}
              style={{
                left: `calc(50% + ${Math.random() * 20 - 10}px)`,
                top: `calc(50% + ${Math.random() * 20 - 10}px)`
              }}
            />
          ))}
        </div>

        {/* Loading text with typing effect */}
        <motion.div className="mt-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="text-xl font-bold relative"
          >
            <span>Opening TikTok</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.2,
                repeatDelay: 0.1
              }}
              className="absolute ml-1"
            >...</motion.span>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
