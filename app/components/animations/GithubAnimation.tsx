"use client"

import { motion } from "framer-motion"
import { FaGithub, FaCode } from "react-icons/fa"

export function GithubAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
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
        <motion.div className="flex flex-col items-center">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              y: { repeat: 1, duration: 1 },
              rotate: { repeat: 1, duration: 1 },
            }}
          >
            <FaGithub size={80} className="text-white" />
          </motion.div>

          <motion.div
            className="mt-8 text-sm font-mono bg-black p-4 rounded-md border border-gray-700 w-80 max-w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="flex items-center space-x-2 text-green-400"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <FaCode size={16} />
              <span>$ git clone https://github.com/MohamedElshame</span>
            </motion.div>

            <motion.div
              className="mt-2 text-yellow-300"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span>Cloning into 'MohamedElshame'...</span>
            </motion.div>

            <motion.div
              className="mt-2 text-gray-400"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span>remote: Counting objects: 100% (125/125)</span>
            </motion.div>

            <motion.div
              className="mt-2 text-gray-400"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <span>remote: Compressing objects: 100% (80/80)</span>
            </motion.div>

            <motion.div
              className="mt-2 text-green-400"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <span>Repository cloned successfully!</span>
            </motion.div>

            {/* Add code snippet */}
            <motion.div
              className="mt-4 pt-4 border-t border-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <div className="text-blue-400">
                function <span className="text-yellow-300">createAwesome</span>() {`{`}
              </div>
              <div className="pl-4 text-green-300">
                return <span className="text-orange-300">"Hello, World!"</span>;
              </div>
              <div className="text-blue-400">{`}`}</div>
            </motion.div>

            {/* Add blinking cursor */}
            <motion.div
              className="h-4 w-2 bg-white inline-block ml-1"
              animate={{ opacity: [1, 0, 1, 0, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

