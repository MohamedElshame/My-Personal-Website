"use client"

import React from "react"

import { motion } from "framer-motion"
import { Linkedin, Briefcase, Users, Building, Network, LineChart, Award } from "lucide-react"

export default function LinkedInAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-800 to-blue-900 overflow-hidden">
      {/* Network grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
          {[...Array(100)].map((_, i) => {
            const row = Math.floor(i / 10)
            const col = i % 10

            return (
              <motion.div
                key={`grid-${i}`}
                className="relative"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.2,
                  transition: {
                    delay: (row + col) * 0.05,
                    duration: 0.5,
                  },
                }}
              >
                <motion.div
                  className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2],
                    transition: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: Math.random() * 2,
                    },
                  }}
                />

                {/* Horizontal connection */}
                {col < 9 && (
                  <motion.div
                    className="absolute top-1/2 left-1/2 h-0.5 bg-blue-400 opacity-20"
                    style={{
                      width: "100%",
                      transformOrigin: "left center",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: 1,
                      transition: {
                        delay: (row + col) * 0.05 + 0.2,
                        duration: 0.5,
                      },
                    }}
                  />
                )}

                {/* Vertical connection */}
                {row < 9 && (
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-0.5 bg-blue-400 opacity-20"
                    style={{
                      height: "100%",
                      transformOrigin: "top center",
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{
                      scaleY: 1,
                      transition: {
                        delay: (row + col) * 0.05 + 0.2,
                        duration: 0.5,
                      },
                    }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Main animation with 3D effect */}
      <motion.div
        className="relative z-10"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{
            rotateY: 360,
            transition: {
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="bg-white p-8 rounded-full"
            animate={{
              boxShadow: ["0px 0px 0px rgba(255, 255, 255, 0.5)", "0px 0px 40px rgba(255, 255, 255, 0.8)"],
              transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          >
            <Linkedin className="h-24 w-24 text-blue-700" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Professional icons with connection lines */}
      <div className="absolute" style={{ width: 300, height: 300 }}>
        {[
          { icon: <Briefcase className="h-8 w-8 text-white" />, angle: 0 },
          { icon: <Users className="h-8 w-8 text-white" />, angle: 60 },
          { icon: <Building className="h-8 w-8 text-white" />, angle: 120 },
          { icon: <LineChart className="h-8 w-8 text-white" />, angle: 180 },
          { icon: <Network className="h-8 w-8 text-white" />, angle: 240 },
          { icon: <Award className="h-8 w-8 text-white" />, angle: 300 },
        ].map((item, i) => {
          const radius = 150
          const angle = (item.angle * Math.PI) / 180
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <React.Fragment key={i}>
              {/* Connection line */}
              <motion.div
                className="absolute top-1/2 left-1/2 h-0.5 bg-blue-400 opacity-50"
                style={{
                  width: radius,
                  transformOrigin: "left center",
                  rotate: `${item.angle}deg`,
                }}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: 1,
                  transition: {
                    delay: i * 0.2,
                    duration: 0.5,
                  },
                }}
              />

              {/* Icon */}
              <motion.div
                className="absolute p-3 bg-blue-600 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  x: x - 20,
                  y: y - 20,
                }}
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1.2, 1],
                  transition: {
                    delay: i * 0.2 + 0.5,
                    duration: 0.5,
                  },
                }}
              >
                {item.icon}

                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-600"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1],
                    transition: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: i * 0.3,
                    },
                  }}
                  style={{ zIndex: -1 }}
                />
              </motion.div>
            </React.Fragment>
          )
        })}
      </div>

      {/* Data visualization elements */}
      <div className="absolute bottom-1/3 left-1/4 flex items-end h-20 space-x-1">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`chart-${i}`}
            className="w-4 bg-blue-500 rounded-t-md"
            style={{ height: 10 }}
            initial={{ height: 10 }}
            animate={{
              height: [10, 30 + i * 10, 10],
              backgroundColor: ["rgb(59, 130, 246)", "rgb(96, 165, 250)", "rgb(59, 130, 246)"],
              transition: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.1,
              },
            }}
          />
        ))}
      </div>

      {/* Text with professional animation */}
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
          Connecting to LinkedIn...
        </motion.h2>

        <motion.div className="flex justify-center mt-4 space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

