"use client"

import { motion } from "framer-motion"
import { Facebook, MessageCircle, ThumbsUp, Share, Heart } from "lucide-react"

export default function FacebookAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* 3D rotating cube effect */}
      <motion.div
        className="relative"
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: 360,
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.3, duration: 0.4 },
            }}
            className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-30 scale-150"
          />

          <motion.div
            className="bg-blue-600 p-8 rounded-full relative z-10"
            animate={{
              boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0.5)", "0px 0px 60px rgba(59, 130, 246, 0.8)"],
              scale: [1, 1.1, 1],
              transition: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          >
            <Facebook className="h-24 w-24 text-white" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Reaction icons flying around */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { icon: <ThumbsUp className="text-blue-400" />, delay: 0.2 },
          { icon: <Heart className="text-red-500" />, delay: 0.5 },
          { icon: <MessageCircle className="text-green-400" />, delay: 0.8 },
          { icon: <Share className="text-purple-400" />, delay: 1.1 },
          { icon: <ThumbsUp className="text-yellow-400" />, delay: 1.4 },
          { icon: <Heart className="text-pink-500" />, delay: 1.7 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 70 + 15}%`,
              top: `${Math.random() * 70 + 15}%`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1.5, 1],
              opacity: [0, 1, 0],
              y: [0, -100],
              x: [0, Math.random() * 100 - 50],
              transition: {
                duration: 2,
                delay: item.delay,
                repeat: 1,
                repeatDelay: 0.5,
              },
            }}
          >
            <motion.div
              className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full"
              animate={{
                rotate: [0, 360],
                transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            >
              {item.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Connection network effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const x1 = Math.random() * 100
          const y1 = Math.random() * 100
          const x2 = Math.random() * 100
          const y2 = Math.random() * 100

          return (
            <motion.div
              key={`line-${i}`}
              className="absolute bg-blue-400 opacity-20"
              style={{
                height: 2,
                width: Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
                left: `${Math.min(x1, x2)}%`,
                top: `${Math.min(y1, y2)}%`,
                transformOrigin: "left center",
                rotate: `${Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI)}deg`,
              }}
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.2, 0],
                transition: {
                  duration: Math.random() * 3 + 2,
                  delay: Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: Math.random() * 2,
                },
              }}
            />
          )
        })}

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-3 h-3 rounded-full bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              transition: {
                duration: Math.random() * 2 + 1,
                delay: Math.random() * 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: Math.random() * 3,
              },
            }}
          />
        ))}
      </div>

      {/* Text with 3D effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.7, duration: 0.5 },
        }}
        className="absolute bottom-1/4 text-center"
      >
        <motion.h2
          className="text-4xl font-bold text-white mt-8"
          animate={{
            textShadow: [
              "0 0 5px rgba(255,255,255,0.5)",
              "0 0 20px rgba(59, 130, 246, 0.8)",
              "0 0 5px rgba(255,255,255,0.5)",
            ],
            transition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          Connecting to Facebook...
        </motion.h2>
      </motion.div>
    </div>
  )
}

