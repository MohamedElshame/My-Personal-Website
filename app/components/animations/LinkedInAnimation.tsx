"use client"

import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"

export function LinkedInAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      {/* Network connection lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = startX + (Math.random() * 40 - 20);
          const endY = startY + (Math.random() * 40 - 20);
          
          return (
            <motion.div 
              key={i}
              className="absolute bg-blue-200 h-px" 
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                width: '1px',
                transformOrigin: 'left center'
              }}
              initial={{ 
                scaleX: 0, 
                rotate: Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)
              }}
              animate={{ 
                scaleX: Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)),
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: Math.random() * 4
              }}
            />
          );
        })}
      </div>

      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.5 
        }} 
        className="text-white relative z-10 flex flex-col items-center"
      >
        {/* LinkedIn logo with enhanced animation */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
            filter: ["drop-shadow(0 0 0px #60a5fa)", "drop-shadow(0 0 15px #60a5fa)", "drop-shadow(0 0 5px #60a5fa)"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="relative flex justify-center mb-8"
        >
          <div className="p-4 bg-white rounded-lg">
            <FaLinkedin size={80} className="text-blue-600" />
          </div>
          
          {/* Subtle glow effect */}
          <motion.div 
            className="absolute inset-0 bg-blue-400 filter blur-xl"
            animate={{
              opacity: [0.1, 0.3, 0.1],
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

        {/* Professional looking progress bar */}
        <div className="w-64 relative">
          <motion.div 
            className="h-2 bg-blue-100 bg-opacity-20 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-blue-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 2.2, 
                delay: 0.5,
                ease: "easeInOut" 
              }}
            />
          </motion.div>
          
          {/* Animated dots that follow the progress */}
          <motion.div
            className="absolute -top-1 h-4 w-4 rounded-full bg-blue-300"
            initial={{ left: -8 }}
            animate={{ left: "calc(100% - 8px)" }}
            transition={{
              duration: 2.2,
              delay: 0.5,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Connection message with professional styling */}
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-blue-100 font-medium">
            <motion.span
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Establishing professional connection
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.2
              }}
              className="inline-block ml-1"
            >
              <span className="inline-block w-1 h-1 bg-blue-200 rounded-full mx-0.5" />
              <span className="inline-block w-1 h-1 bg-blue-200 rounded-full mx-0.5" />
              <span className="inline-block w-1 h-1 bg-blue-200 rounded-full mx-0.5" />
            </motion.span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
