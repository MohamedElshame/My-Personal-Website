"use client"

import { motion } from "framer-motion"
import { BookText, Pen, Quote, Star, BookOpen, Feather } from "lucide-react"

export default function MediumAnimation() {
  // Text that will be typed out
  const text = "The art of storytelling..."

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Magical paper texture overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmNWY1ZjUiPjwvcmVjdD4KPC9zdmc+')",
        }}
      />

      {/* Floating text elements in background - reduced quantity */}
      {[...Array(8)].map((_, i) => {
        const words = ["Story", "Write", "Create", "Inspire", "Imagine", "Think", "Express", "Share"]
        const word = words[i % words.length]

        return (
          <motion.div
            key={i}
            className="absolute text-gray-700 font-serif text-opacity-20 pointer-events-none select-none"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              fontWeight: Math.random() > 0.5 ? "bold" : "normal",
              fontStyle: Math.random() > 0.7 ? "italic" : "normal",
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.5, 0],
              transition: {
                duration: Math.random() * 15 + 15, // Slower movement
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              },
            }}
          >
            {word}
          </motion.div>
        )
      })}

      {/* Main animation */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Medium logo animation with 3D effect */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.8,
            },
          }}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
          className="mb-8"
        >
          <motion.div
            className="bg-white p-8 rounded-full relative"
            animate={{
              rotateY: [0, 360],
              boxShadow: ["0px 0px 0px rgba(255, 255, 255, 0.5)", "0px 0px 40px rgba(255, 255, 255, 0.8)"],
              transition: {
                rotateY: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                boxShadow: {
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              },
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <BookText className="h-24 w-24 text-black" />
          </motion.div>
        </motion.div>

        {/* Magical book pages flipping effect */}
        <motion.div
          className="absolute w-40 h-40 bg-white/5 rounded-md"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
            top: "40%",
            left: "30%",
          }}
          animate={{
            rotateY: [0, 180],
            transition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
            style={{
              backfaceVisibility: "hidden",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute w-40 h-40 bg-white/5 rounded-md"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
            top: "35%",
            right: "30%",
          }}
          animate={{
            rotateY: [0, -180],
            transition: {
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent"
            style={{
              backfaceVisibility: "hidden",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          />
        </motion.div>

        {/* Typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
          }}
          className="relative"
        >
          <motion.div className="flex items-center justify-center h-16">
            <motion.h2 className="text-3xl font-serif text-white">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.8 + index * 0.1,
                    },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <motion.div
              className="w-1 h-8 bg-white ml-1"
              animate={{
                opacity: [1, 0, 1],
                transition: {
                  duration: 0.8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                },
              }}
            />
          </motion.div>
        </motion.div>

        {/* Floating writing tools with magical glow */}
        <div className="relative mt-8 w-64 h-32">
          {[
            { icon: <Pen className="h-8 w-8" />, position: { x: -80, y: -20 }, color: "#f9fafb" },
            { icon: <Quote className="h-8 w-8" />, position: { x: 80, y: -20 }, color: "#f9fafb" },
            { icon: <Star className="h-8 w-8" />, position: { x: -40, y: 40 }, color: "#fbbf24" },
            { icon: <BookOpen className="h-8 w-8" />, position: { x: 40, y: 40 }, color: "#f9fafb" },
            { icon: <Feather className="h-8 w-8" />, position: { x: 0, y: -50 }, color: "#f9fafb" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute bg-white p-3 rounded-full shadow-lg"
              style={{
                left: "50%",
                top: "50%",
                x: item.position.x,
                y: item.position.y,
                color: item.color,
                boxShadow: `0 0 15px ${item.color === "#fbbf24" ? "rgba(251, 191, 36, 0.5)" : "rgba(255, 255, 255, 0.5)"}`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [item.position.y, item.position.y - 10, item.position.y],
                transition: {
                  scale: {
                    delay: 1.5 + i * 0.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                  opacity: {
                    delay: 1.5 + i * 0.2,
                    duration: 0.5,
                  },
                  y: {
                    delay: 1.5 + i * 0.2,
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  },
                },
              }}
            >
              {item.icon}

              {/* Magical glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    item.color === "#fbbf24"
                      ? "radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(251, 191, 36, 0) 70%)"
                      : "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)",
                  zIndex: -1,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5],
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  },
                }}
              />
            </motion.div>
          ))}

          {/* Connecting lines with magical glow */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute left-1/2 top-1/2 h-0.5 bg-white bg-opacity-50 origin-left"
              style={{
                width: i % 2 === 0 ? "80px" : "40px",
                rotate: `${i * 72}deg`,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: 1,
                opacity: 0.5,
                transition: {
                  delay: 2 + i * 0.1,
                  duration: 0.5,
                },
              }}
            />
          ))}
        </div>
      </div>

      {/* Magical ink splatter effects */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ink-${i}`}
          className="absolute rounded-full bg-white bg-opacity-10"
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            filter: "blur(20px)",
          }}
          initial={{
            scale: 0,
            x: Math.random() * window.innerWidth - window.innerWidth / 2,
            y: Math.random() * window.innerHeight - window.innerHeight / 2,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: [0, 0.1, 0],
            transition: {
              duration: Math.random() * 2 + 2,
              delay: Math.random() * 1 + 1,
              repeat: 1,
              repeatType: "reverse",
            },
          }}
        />
      ))}

      {/* Text with elegant animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 2.5, duration: 0.5 },
        }}
        className="absolute bottom-1/4 text-center"
      >
        <motion.h2
          className="text-3xl font-serif font-bold text-white mt-8"
          animate={{
            textShadow: [
              "0 0 5px rgba(255,255,255,0.5)",
              "0 0 15px rgba(255,255,255,0.8)",
              "0 0 5px rgba(255,255,255,0.5)",
            ],
            transition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          Connecting to Medium...
        </motion.h2>
      </motion.div>
    </div>
  )
}

