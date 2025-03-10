"use client"

import { motion } from "framer-motion"
import { Instagram, Camera, Image, Heart } from "lucide-react"

interface InstagramAnimationProps {
  variant?: string
}

export default function InstagramAnimation({ variant }: InstagramAnimationProps = {}) {
  const isLabfloor = variant === "labfloor"

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            "linear-gradient(45deg, #bc1888 0%, #cc2366 25%, #dc2743 50%, #e6683c 75%, #f09433 100%)",
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
          ],
          transition: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
        style={{ opacity: 0.15 }}
      />

      {/* Photo frames grid */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-8 opacity-20">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={`frame-${i}`}
            className="bg-white rounded-md overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              transition: {
                duration: Math.random() * 4 + 2,
                delay: Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
              },
            }}
          />
        ))}
      </div>

      {/* Main animation */}
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            rotate: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
        >
          {/* 3D rotating camera lens effect */}
          <motion.div className="relative" style={{ perspective: "1000px" }}>
            {/* Gradient ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                rotate: 360,
                transition: {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
              style={{
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                padding: "8px",
                borderRadius: "50%",
              }}
            />

            {/* Icon container */}
            <motion.div
              className="bg-white p-8 rounded-full relative z-10"
              animate={{
                rotateY: [0, 360],
                transition: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Instagram
                className="h-24 w-24"
                style={{
                  color: isLabfloor ? "#dc2743" : "#cc2366",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Camera flash effect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.7, 0],
          transition: {
            duration: 0.5,
            delay: 1.5,
            repeat: 1,
            repeatDelay: 1,
          },
        }}
      />

      {/* Floating icons */}
      {[
        { icon: <Camera className="h-6 w-6 text-white" />, delay: 0.2 },
        { icon: <Image className="h-6 w-6 text-white" />, delay: 0.5 },
        { icon: <Heart className="h-6 w-6 text-white" />, delay: 0.8 },
        { icon: <Camera className="h-6 w-6 text-white" />, delay: 1.1 },
        { icon: <Image className="h-6 w-6 text-white" />, delay: 1.4 },
        { icon: <Heart className="h-6 w-6 text-white" />, delay: 1.7 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"
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

      {/* Floating photo frames with 3D effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`photo-${i}`}
          className="absolute rounded-lg bg-white shadow-lg overflow-hidden"
          style={{
            width: Math.random() * 60 + 80,
            height: Math.random() * 60 + 80,
            transformStyle: "preserve-3d",
            perspective: "500px",
          }}
          initial={{
            opacity: 0,
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotateX: Math.random() * 60 - 30,
            rotateY: Math.random() * 60 - 30,
            rotateZ: Math.random() * 60 - 30,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotateX: [Math.random() * 60 - 30, Math.random() * 60 - 30],
            rotateY: [Math.random() * 60 - 30, Math.random() * 60 - 30],
            rotateZ: [Math.random() * 60 - 30, Math.random() * 60 - 30],
            transition: {
              duration: Math.random() * 5 + 5,
              delay: Math.random() * 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500" />
        </motion.div>
      ))}

      {/* Text */}
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
              "0 0 20px rgba(220, 39, 67, 0.8)",
              "0 0 5px rgba(255,255,255,0.5)",
            ],
            transition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          {isLabfloor ? "Connecting to Instagram (Labfloor)..." : "Connecting to Instagram..."}
        </motion.h2>
      </motion.div>
    </div>
  )
}

