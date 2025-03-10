"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Facebook, Instagram, Github, Linkedin, BookText, Zap } from "lucide-react"
import TikTokIcon from "./tiktok-icon"

interface ConnectionVisualizerProps {
  platformName: string
  theme: string
}

export default function ConnectionVisualizer({ platformName, theme }: ConnectionVisualizerProps) {
  const [nodes, setNodes] = useState<Array<{ x: number; y: number; id: number }>>([])
  const [connections, setConnections] = useState<Array<{ from: number; to: number; id: number }>>([])

  // Get platform color
  const getPlatformColor = () => {
    switch (platformName) {
      case "Facebook":
        return "#1877f2"
      case "Instagram":
      case "Instagram (Labfloor)":
        return "#e1306c"
      case "GitHub":
        return "#333"
      case "LinkedIn":
        return "#0077b5"
      case "TikTok":
        return "#000000"
      case "Medium":
        return "#000000"
      default:
        return "#6366f1"
    }
  }

  // Get platform icon
  const getPlatformIcon = () => {
    switch (platformName) {
      case "Facebook":
        return <Facebook className="h-8 w-8" />
      case "Instagram":
      case "Instagram (Labfloor)":
        return <Instagram className="h-8 w-8" />
      case "GitHub":
        return <Github className="h-8 w-8" />
      case "LinkedIn":
        return <Linkedin className="h-8 w-8" />
      case "TikTok":
        return <TikTokIcon className="h-8 w-8" />
      case "Medium":
        return <BookText className="h-8 w-8" />
      default:
        return null
    }
  }

  // Generate network visualization
  useEffect(() => {
    // Create nodes
    const newNodes = []
    const nodeCount = 30

    // Center node (user)
    newNodes.push({ x: window.innerWidth / 2, y: window.innerHeight / 2, id: 0 })

    // Platform node
    const platformNodeId = 1
    const platformAngle = Math.random() * Math.PI * 2
    const platformDistance = Math.min(window.innerWidth, window.innerHeight) * 0.3
    newNodes.push({
      x: window.innerWidth / 2 + Math.cos(platformAngle) * platformDistance,
      y: window.innerHeight / 2 + Math.sin(platformAngle) * platformDistance,
      id: platformNodeId,
    })

    // Other nodes
    for (let i = 2; i < nodeCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * Math.min(window.innerWidth, window.innerHeight) * 0.4
      newNodes.push({
        x: window.innerWidth / 2 + Math.cos(angle) * distance,
        y: window.innerHeight / 2 + Math.sin(angle) * distance,
        id: i,
      })
    }

    setNodes(newNodes)

    // Create connections
    const newConnections = []

    // Connect user to platform
    newConnections.push({ from: 0, to: platformNodeId, id: 0 })

    // Connect user to some random nodes
    for (let i = 2; i < nodeCount; i++) {
      if (Math.random() > 0.7) {
        newConnections.push({ from: 0, to: i, id: newConnections.length })
      }
    }

    // Connect platform to some random nodes
    for (let i = 2; i < nodeCount; i++) {
      if (Math.random() > 0.7) {
        newConnections.push({ from: platformNodeId, to: i, id: newConnections.length })
      }
    }

    // Connect some random nodes to each other
    for (let i = 2; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (Math.random() > 0.9) {
          newConnections.push({ from: i, to: j, id: newConnections.length })
        }
      }
    }

    setConnections(newConnections)
  }, [platformName])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        background:
          theme === "dark"
            ? "radial-gradient(circle, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.98) 100%)"
            : "radial-gradient(circle, rgba(241, 245, 249, 0.9) 0%, rgba(241, 245, 249, 0.98) 100%)",
      }}
    >
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((connection, i) => {
          const fromNode = nodes.find((n) => n.id === connection.from)
          const toNode = nodes.find((n) => n.id === connection.to)

          if (!fromNode || !toNode) return null

          const isMainConnection = connection.from === 0 && connection.to === 1

          return (
            <motion.line
              key={connection.id}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={fromNode.x}
              y2={fromNode.y}
              animate={{
                x2: toNode.x,
                y2: toNode.y,
                transition: {
                  duration: 0.5,
                  delay: isMainConnection ? 0.5 : 0.8 + i * 0.02,
                },
              }}
              stroke={isMainConnection ? getPlatformColor() : theme === "dark" ? "#6366f1" : "#818cf8"}
              strokeWidth={isMainConnection ? 3 : 1}
              strokeOpacity={isMainConnection ? 0.8 : 0.3}
              strokeDasharray={isMainConnection ? "0" : "5,5"}
            />
          )
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const isUserNode = node.id === 0
        const isPlatformNode = node.id === 1

        return (
          <motion.div
            key={node.id}
            className={cn(
              "absolute rounded-full flex items-center justify-center",
              isUserNode
                ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                : isPlatformNode
                  ? "bg-white"
                  : theme === "dark"
                    ? "bg-indigo-500"
                    : "bg-indigo-300",
            )}
            style={{
              width: isUserNode ? 60 : isPlatformNode ? 50 : 10,
              height: isUserNode ? 60 : isPlatformNode ? 50 : 10,
              left: node.x - (isUserNode ? 30 : isPlatformNode ? 25 : 5),
              top: node.y - (isUserNode ? 30 : isPlatformNode ? 25 : 5),
              color: isPlatformNode ? getPlatformColor() : "#fff",
              boxShadow:
                isUserNode || isPlatformNode
                  ? `0 0 20px ${isUserNode ? "rgba(139, 92, 246, 0.5)" : getPlatformColor()}`
                  : "none",
              willChange: "transform, opacity", // Performance optimization
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: isUserNode ? 0 : isPlatformNode ? 0.3 : 0.5 + i * 0.02,
              },
            }}
          >
            {isUserNode && (
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: ["0 0 0 0px rgba(139, 92, 246, 0.3)", "0 0 0 10px rgba(139, 92, 246, 0)"],
                  transition: {
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  },
                }}
              />
            )}

            {isUserNode && <span className="text-sm font-bold">You</span>}
            {isPlatformNode && getPlatformIcon()}
          </motion.div>
        )
      })}

      {/* Data packets animation */}
      {connections.map((connection, i) => {
        const fromNode = nodes.find((n) => n.id === connection.from)
        const toNode = nodes.find((n) => n.id === connection.to)

        if (!fromNode || !toNode) return null

        const isMainConnection = connection.from === 0 && connection.to === 1

        if (!isMainConnection && Math.random() > 0.3) return null

        return (
          <motion.div
            key={`packet-${connection.id}`}
            className={cn(
              "absolute rounded-full",
              isMainConnection ? "bg-white" : theme === "dark" ? "bg-indigo-400" : "bg-indigo-500",
            )}
            style={{
              width: isMainConnection ? 8 : 4,
              height: isMainConnection ? 8 : 4,
              left: fromNode.x - (isMainConnection ? 4 : 2),
              top: fromNode.y - (isMainConnection ? 4 : 2),
              willChange: "transform", // Performance optimization
            }}
            initial={{ scale: 0 }}
            animate={{
              x: toNode.x - fromNode.x,
              y: toNode.y - fromNode.y,
              scale: [0, 1, 0],
              transition: {
                duration: isMainConnection ? 1 : 0.8,
                delay: isMainConnection ? 0.8 : 1 + i * 0.05,
                repeat: isMainConnection ? 3 : Math.floor(Math.random() * 2) + 1,
                repeatDelay: isMainConnection ? 0.2 : 0.5,
              },
            }}
          />
        )
      })}

      {/* Connection text */}
      <motion.div
        className={cn("absolute bottom-1/4 text-center", theme === "dark" ? "text-white" : "text-slate-900")}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
      >
        <motion.div className="flex items-center justify-center space-x-2 mb-2">
          <Zap className={cn("h-5 w-5", theme === "dark" ? "text-indigo-400" : "text-indigo-600")} />
          <h2 className="text-xl font-bold">Establishing secure connection</h2>
        </motion.div>
        <p className={cn("text-sm", theme === "dark" ? "text-gray-400" : "text-gray-600")}>
          Connecting to {platformName}...
        </p>
      </motion.div>
    </motion.div>
  )
}

