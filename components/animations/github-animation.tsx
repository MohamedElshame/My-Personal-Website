"use client"

import { motion } from "framer-motion"
import { Github, Code, GitBranch, GitMerge, GitPullRequest } from "lucide-react"

export default function GithubAnimation() {
  // Create code-like elements
  const codeLines = Array(15)
    .fill(0)
    .map((_, i) => ({
      width: Math.random() * 60 + 40,
      delay: Math.random() * 0.5,
    }))

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Matrix-like code rain effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`code-column-${i}`}
            className="absolute top-0 text-green-500 text-opacity-70 whitespace-pre font-mono text-xs"
            style={{
              left: `${i * 5}%`,
              width: "20px",
              textAlign: "center",
            }}
            initial={{ y: -1000 }}
            animate={{
              y: [window.innerHeight * -1, window.innerHeight],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
            }}
          >
            {[...Array(50)].map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Code background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="grid grid-cols-3 gap-4 p-8">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              className="h-2 bg-green-500 rounded-full"
              style={{ width: `${line.width}%` }}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 0.7,
                x: 0,
                transition: {
                  delay: line.delay,
                  duration: 0.4,
                },
              }}
            />
          ))}
        </div>
      </div>

      {/* 3D rotating cube effect */}
      <motion.div
        className="relative z-10"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          transition: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
        >
          <motion.div
            className="bg-white p-8 rounded-full"
            animate={{
              boxShadow: ["0px 0px 0px rgba(255, 255, 255, 0.5)", "0px 0px 30px rgba(255, 255, 255, 0.8)"],
              transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          >
            <Github className="h-24 w-24 text-gray-900" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Git branch visualization */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => {
          const startAngle = (i / 5) * Math.PI * 2
          const endAngle = ((i + 1) / 5) * Math.PI * 2
          const radius = 150

          const startX = Math.cos(startAngle) * radius
          const startY = Math.sin(startAngle) * radius
          const endX = Math.cos(endAngle) * radius
          const endY = Math.sin(endAngle) * radius

          return (
            <motion.div
              key={`branch-${i}`}
              className="absolute top-1/2 left-1/2 w-0.5 bg-green-500 origin-bottom"
              style={{
                height: radius,
                rotate: `${startAngle * (180 / Math.PI)}deg`,
                transformOrigin: "bottom center",
              }}
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: 1,
                transition: {
                  duration: 1,
                  delay: i * 0.2,
                },
              }}
            />
          )
        })}

        {/* Branch nodes */}
        {[...Array(5)].map((_, i) => {
          const angle = (i / 5) * Math.PI * 2
          const radius = 150
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.div
              key={`node-${i}`}
              className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-500 rounded-full"
              style={{
                x: x - 8,
                y: y - 8,
              }}
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1, 0.8, 1],
                transition: {
                  duration: 1,
                  delay: i * 0.2 + 0.5,
                },
              }}
            />
          )
        })}
      </div>

      {/* Floating Git icons */}
      {[
        { icon: <Code className="h-6 w-6 text-white" />, delay: 0.2 },
        { icon: <GitBranch className="h-6 w-6 text-white" />, delay: 0.5 },
        { icon: <GitMerge className="h-6 w-6 text-white" />, delay: 0.8 },
        { icon: <GitPullRequest className="h-6 w-6 text-white" />, delay: 1.1 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute p-3 bg-gray-800 rounded-full"
          style={{
            left: `${Math.random() * 70 + 15}%`,
            top: `${Math.random() * 70 + 15}%`,
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1.2, 0],
            opacity: [0, 1, 0],
            y: [0, Math.random() * 200 - 100],
            x: [0, Math.random() * 200 - 100],
            rotate: [0, Math.random() * 360],
            transition: {
              duration: 3,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: Math.random() * 2,
            },
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Text with terminal effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.7, duration: 0.5 },
        }}
        className="absolute bottom-1/4 text-center"
      >
        <motion.div className="font-mono text-green-500 text-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1 },
            }}
          >
            $ git clone
          </motion.span>
          <motion.span
            initial={{ width: 0 }}
            animate={{
              width: "auto",
              transition: { delay: 1.5, duration: 1 },
            }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            <span className="ml-2">https://github.com/MohamedElshame</span>
          </motion.span>
          <motion.span
            animate={{
              opacity: [0, 1, 0],
              transition: {
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              },
            }}
            className="ml-1 inline-block w-3 h-5 bg-green-500"
          />
        </motion.div>

        <motion.h2
          className="text-3xl font-bold text-white mt-4"
          animate={{
            textShadow: [
              "0 0 5px rgba(255,255,255,0.5)",
              "0 0 20px rgba(74, 222, 128, 0.8)",
              "0 0 5px rgba(255,255,255,0.5)",
            ],
            transition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          Connecting to GitHub...
        </motion.h2>
      </motion.div>
    </div>
  )
}

