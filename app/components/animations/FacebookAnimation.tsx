"use client"

import { motion } from "framer-motion"
import { FaFacebook } from "react-icons/fa"

export function FacebookAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-700 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated dots floating up */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-200 opacity-40 rounded-full w-4 h-4"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 20,
              rotate: Math.random() * 20 - 10,
              scale: 0.5 + Math.random() * 0.5
            }}
            animate={{ 
              y: -100,
              opacity: [0.1, 0.4, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: i * 0.4,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.6, 1],
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="text-white relative z-10"
      >
        {/* Facebook logo with enhanced animation */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
            filter: ["drop-shadow(0 0 0px #3b82f6)", "drop-shadow(0 0 15px #3b82f6)", "drop-shadow(0 0 5px #3b82f6)"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="relative flex justify-center"
        >
          <FaFacebook size={100} className="text-blue-500" />
          
          {/* Glow effect */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-blue-400 filter blur-xl"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ zIndex: -1 }}
          />
        </motion.div>
        
        {/* Interactive notification counter */}
        <motion.div
          className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm border-2 border-white"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0, 1.3, 1],
            y: [0, -5, 0],
            x: [0, 5, 0]
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1.5
            },
            x: {
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1.5
            }
          }}
        >
          3
        </motion.div>

        {/* Loading text with typewriter effect */}
        <motion.div className="mt-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-xl font-bold text-blue-100"
          >
            <motion.span
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5
              }}
            >
              Connecting to Facebook
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1
              }}
              className="inline-block ml-1"
            >
              <span className="inline-block w-1 h-1 bg-blue-200 rounded-full mx-0.5" />
              <span className="inline-block w-1 h-1 bg-blue-200 rounded-full mx-0.5" />
              <span className="inline-block w-1 h-1 bg-blue-200 rounded-full mx-0.5" />
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
