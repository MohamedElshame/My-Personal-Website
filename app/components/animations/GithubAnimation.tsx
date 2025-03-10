"use client"

import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

export function GithubAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      {/* Code-like background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-green-500 whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 5
            }}
          >
            {`${Math.random() > 0.5 ? 'function' : 'const'} ${
              ['getData', 'fetchAPI', 'updateRepo', 'commitChanges', 'renderComponent'][Math.floor(Math.random() * 5)]
            }() { ${Math.random() > 0.5 ? 'return' : 'console.log'}('${
              ['success', 'complete', 'updated', 'merged', 'pushed'][Math.floor(Math.random() * 5)]
            }') }`}
          </motion.div>
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
        className="text-white relative z-10 bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-xl"
      >
        <motion.div className="flex flex-col items-center">
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
              filter: ["drop-shadow(0 0 0px #f0f6fc)", "drop-shadow(0 0 10px #f0f6fc)", "drop-shadow(0 0 3px #f0f6fc)"]
            }}
            transition={{
              y: { 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 1.5,
                ease: "easeInOut"
              },
              filter: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut"
              }
            }}
          >
            <FaGithub size={80} className="text-white" />
          </motion.div>

          {/* Progress bar */}
          <motion.div 
            className="w-full mt-8 h-2 bg-gray-700 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>

          <motion.div
            className="mt-8 text-sm font-mono w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Terminal-like interface */}
            <div className="bg-gray-900 p-4 rounded-md border border-gray-700">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-4 text-gray-400 text-xs">terminal</div>
              </div>
              
              <motion.div
                className="flex items-center space-x-2 text-green-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-gray-400">$</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                  className="overflow-hidden whitespace-nowrap inline-block"
                >
                  git clone https://github.com/MohamedElshame/portfolio.git
                </motion.span>
              </motion.div>

              <motion.div
                className="mt-2 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <motion.div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="text-yellow-500 mr-2 w-3 h-3 rounded-full bg-yellow-500" />
                    <span>Connecting to GitHub...</span>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="mt-1"
                  >
                    <div className="flex items-center">
                      <div className="text-blue-500 mr-2 w-3 h-3 rounded-full bg-blue-500" />
                      <span>Cloning repository...</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6 }}
                    className="mt-1 text-green-400"
                  >
                    <span>Repository cloned successfully!</span>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="mt-2 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.0 }}
              >
                <span className="text-gray-400">$</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 0.8
                  }}
                  className="ml-2 w-2 h-4 bg-green-500 inline-block"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
