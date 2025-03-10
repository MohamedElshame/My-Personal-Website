"use client"

import { motion } from "framer-motion"
import TikTokIcon from "../tiktok-icon"
import { Music, Video, Sparkles, Zap } from "lucide-react"

export default function TikTokAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
      {/* Dynamic background with moving gradients */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "linear-gradient(45deg, #00f2ea 0%, #ff0050 100%)",
            "linear-gradient(45deg, #ff0050 0%, #00f2ea 100%)",
            "linear-gradient(45deg, #00f2ea 0%, #ff0050 100%)",
          ],
          transition: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
      />

      {/* Sound wave effect */}
      <div className="absolute left-0 right-0 bottom-1/3 flex justify-center items-end h-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="w-1 mx-0.5 bg-white bg-opacity-70 rounded-full"
            style={{ height: 5 }}
            animate={{
              height: [5, Math.random() * 40 + 5, 5],
              transition: {
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.05,
              },
            }}
          />
        ))}
      </div>

      {/* Main animation with 3D effect */}
      <div className="relative z-10">
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* TikTok logo with glitch and 3D effect */}
          <motion.div
            className="bg-white p-8 rounded-full relative"
            animate={{
              rotateY: [0, 360],
              boxShadow: [
                "0px 0px 0px rgba(255, 255, 255, 0.5)",
                "0px 0px 40px rgba(255, 255, 255, 0.8)",
                "0px 0px 0px rgba(255, 255, 255, 0.5)",
              ],
              transition: {
                rotateY: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                boxShadow: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              },
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <TikTokIcon className="h-24 w-24 text-black relative z-10" />

            {/* Glitch effect layers */}
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{ mixBlendMode: "difference" }}
              animate={{
                clipPath: [
                  "inset(0% 0% 0% 0%)",
                  "inset(10% 0% 0% 0%)",
                  "inset(0% 0% 0% 0%)",
                  "inset(0% 0% 10% 0%)",
                  "inset(0% 0% 0% 0%)",
                ],
                x: [0, 5, 0, -5, 0],
                transition: {
                  duration: 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1.5,
                },
              }}
            >
              <div className="w-full h-full bg-cyan-400" />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{ mixBlendMode: "difference" }}
              animate={{
                clipPath: [
                  "inset(0% 0% 0% 0%)",
                  "inset(0% 10% 0% 0%)",
                  "inset(0% 0% 0% 0%)",
                  "inset(0% 0% 0% 10%)",
                  "inset(0% 0% 0% 0%)",
                ],
                x: [0, -5, 0, 5, 0],
                transition: {
                  duration: 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1.7,
                },
              }}
            >
              <div className="w-full h-full bg-pink-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating icons with trails */}
      {[
        { icon: <Music className="h-6 w-6" />, color: "#25F4EE", delay: 0.2 },
        { icon: <Video className="h-6 w-6" />, color: "#FE2C55", delay: 0.5 },
        { icon: <Sparkles className="h-6 w-6" />, color: "#25F4EE", delay: 0.8 },
        { icon: <Zap className="h-6 w-6" />, color: "#FE2C55", delay: 1.1 },
        { icon: <Music className="h-6 w-6" />, color: "#25F4EE", delay: 1.4 },
        { icon: <Video className="h-6 w-6" />, color: "#FE2C55", delay: 1.7 },
      ].map((item, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 70 + 15}%`,
            top: `${Math.random() * 70 + 15}%`,
            color: item.color,
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1.2, 0],
            opacity: [0, 1, 0],
            y: [0, Math.random() * 300 - 150],
            x: [0, Math.random() * 300 - 150],
            transition: {
              duration: 3,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: Math.random() * 2,
            },
          }}
        >
          <motion.div
            className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full"
            animate={{
              rotate: [0, 360],
              transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          >
            {item.icon}
          </motion.div>

          {/* Particle trail */}
          {[...Array(5)].map((_, j) => (
            <motion.div
              key={`trail-${i}-${j}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: item.color,
                left: "50%",
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.7, 0],
                x: [0, (j + 1) * -10],
                y: [0, (j + 1) * -10],
                transition: {
                  duration: 0.5,
                  delay: j * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2.5,
                },
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Video frames with 3D rotation */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`frame-${i}`}
          className="absolute rounded-md overflow-hidden"
          style={{
            width: Math.random() * 60 + 40,
            height: Math.random() * 100 + 100,
            background: "rgba(0,0,0,0.3)",
            border: `2px solid ${i % 2 === 0 ? "#25F4EE" : "#FE2C55"}`,
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
            opacity: [0, 0.7, 0],
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
        />
      ))}

      {/* Text with glitch effect */}
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
          className="text-4xl font-bold text-white mt-8 relative"
          animate={{
            textShadow: [
              "0 0 5px rgba(255,255,255,0.5)",
              "0 0 20px rgba(254, 44, 85, 0.8)",
              "0 0 5px rgba(255,255,255,0.5)",
            ],
            transition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          <motion.span
            className="absolute inset-0 text-cyan-400 mix-blend-screen"
            animate={{
              x: [0, -3, 0, 3, 0],
              transition: {
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 2,
              },
            }}
          >
            Connecting to TikTok...
          </motion.span>
          <motion.span
            className="absolute inset-0 text-pink-500 mix-blend-screen"
            animate={{
              x: [0, 3, 0, -3, 0],
              transition: {
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 2,
              },
            }}
          >
            Connecting to TikTok...
          </motion.span>
          Connecting to TikTok...
        </motion.h2>
      </motion.div>
    </div>
  )
}

