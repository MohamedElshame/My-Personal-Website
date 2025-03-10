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
      {/* Floating bubbles in the background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `linear-gradient(45deg, ${
                ['#833AB4', '#FD1D1D', '#FCAF45', '#E1306C', '#5851DB'][Math.floor(Math.random() * 5)]
              }, ${
                ['#FCAF45', '#833AB4', '#FD1D1D', '#5851DB', '#E1306C'][Math.floor(Math.random() * 5)]
              })`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
            initial={{ 
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.5, 0.5],
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20 
        }} 
        className="text-white relative z-10"
      >
        {/* Instagram logo with enhanced animation */}
        <div className="relative">
          {/* Glowing outline rings */}
          <motion.div 
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ 
              filter: 'blur(8px)',
              top: '-15%',
              left: '-15%',
              right: '-15%',
              bottom: '-15%',
              zIndex: -1
            }}
          />
          
          <motion.div 
            className="rounded-xl p-3 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 0.95, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {/* Inner container with white background */}
            <motion.div 
              className="bg-white p-4 rounded-lg"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(0,0,0,0)", 
                  "0 0 20px rgba(131,58,180,0.5)", 
                  "0 0 0 rgba(0,0,0,0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaInstagram size={80} className="text-gradient bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Camera shutter effect */}
        <motion.div
          className="absolute inset-0 bg-white rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 0.7, 0] 
          }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            repeat: 1,
            repeatDelay: 1
          }}
          style={{ zIndex: -1 }}
        />

        {/* Loading bar with Instagram colors */}
        <motion.div 
          className="mt-8 h-1 bg-gray-200 rounded-full overflow-hidden w-64 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 1.8, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>

        {/* Text with typing effect */}
        <motion.div className="mt-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"
          >
            Opening Instagram
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1
              }}
              className="inline-block"
            >
              <span className="inline-block mx-[1px]">.</span>
              <span className="inline-block mx-[1px]">.</span>
              <span className="inline-block mx-[1px]">.</span>
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
