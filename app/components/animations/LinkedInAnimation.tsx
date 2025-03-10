"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaBriefcase, FaUserTie, FaNetworkWired } from "react-icons/fa"

export function LinkedInAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-blue-800 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white"
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
          <FaLinkedin size={80} className="text-blue-400" />
        </motion.div>

        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          {/* Professional network visualization */}
          <motion.div className="relative h-40 w-80 mx-auto">
            {/* Central node - You */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold border-2 border-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              <FaUserTie size={24} />
            </motion.div>

            {/* Connection lines */}
            {[...Array(6)].map((_, i) => {
              const angle = (Math.PI * 2 * i) / 6
              const x = Math.cos(angle) * 100
              const y = Math.sin(angle) * 70

              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 h-0.5 bg-blue-400 origin-left"
                  style={{
                    width: 80,
                    transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
                />
              )
            })}

            {/* Network nodes */}
            {[...Array(6)].map((_, i) => {
              const angle = (Math.PI * 2 * i) / 6
              const x = Math.cos(angle) * 100
              const y = Math.sin(angle) * 70
              const icons = [
                <FaBriefcase key="briefcase" />,
                <FaUserTie key="user" />,
                <FaNetworkWired key="network" />,
              ]
              const icon = icons[i % icons.length]

              return (
                <motion.div
                  key={i}
                  className="absolute w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white border border-white"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                >
                  {icon}
                </motion.div>
              )
            })}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-6 text-center font-semibold"
          >
            Expanding your professional network...
          </motion.p>

          <motion.div
            className="h-2 w-0 bg-blue-400 rounded-full mx-auto mt-4"
            animate={{ width: 200 }}
            transition={{ duration: 1.5, delay: 2.2 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

