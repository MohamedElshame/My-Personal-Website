"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTiktok, FaMedium } from "react-icons/fa"
import { BackgroundAnimation } from "./components/BackgroundAnimation"
import { SocialButton } from "./components/SocialButton"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  const socialLinks = [
    {
      platform: "facebook",
      icon: <FaFacebook size={24} />,
      url: "https://www.facebook.com/profile.php?id=61551548814387",
      color: "bg-blue-600",
      label: "Facebook",
    },
    {
      platform: "instagram",
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/z3z3._/",
      color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
      label: "Instagram",
    },
    {
      platform: "instagram2",
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/labfloor/",
      color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
      label: "Labfloor",
    },
    {
      platform: "github",
      icon: <FaGithub size={24} />,
      url: "https://github.com/MohamedElshame",
      color: "bg-gray-800",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/mohamed-elshamy-64261b326/",
      color: "bg-blue-700",
      label: "LinkedIn",
    },
    {
      platform: "tiktok",
      icon: <FaTiktok size={24} />,
      url: "https://www.tiktok.com/@z3z3.x",
      color: "bg-black",
      label: "TikTok",
    },
    {
      platform: "medium",
      icon: <FaMedium size={24} />,
      url: "https://medium.com/@z3z3",
      color: "bg-green-700",
      label: "Medium",
    },
  ]

  // Format time with leading zeros
  const formatTime = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  // Only render client-side content after mounting
  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-10">
      <BackgroundAnimation />
      
      {/* Floating design elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-[15%] left-[10%] w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-[60%] right-[15%] w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] left-[20%] w-20 h-20 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      
      {/* Main content */}
      <motion.div 
        className="z-10 w-full max-w-4xl px-6 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Digital clock */}
        <motion.div 
          className="mb-14 flex justify-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="frost-panel py-3 px-6 text-2xl font-mono font-light tracking-wider">
            {formatTime(currentTime.getHours())}:
            {formatTime(currentTime.getMinutes())}:
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              {formatTime(currentTime.getSeconds())}
            </motion.span>
          </div>
        </motion.div>
        
        {/* Name and title */}
        <motion.div
          className="text-center mb-16 z-10 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative mb-6 inline-block"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-bold gradient-text text-shadow"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 8,
              }}
            >
              Mohamed Elshamy
            </motion.h1>
            
            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mt-2"
              initial={{ width: 0, x: "-50%" }}
              animate={{ width: "120%", x: "-10%" }}
              transition={{ delay: 0.8, duration: 1.2 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="text-xl text-gray-300 block mb-2">Connect with me</span>
            <motion.p 
              className="text-gray-400 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Explore my social profiles and stay connected
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Social links grid with animated staggered entrance */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10 z-10 relative"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-3"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }
                },
              }}
            >
              <SocialButton 
                platform={social.platform as any} 
                icon={social.icon} 
                url={social.url} 
                color={social.color} 
              />
              <motion.span 
                className="text-sm text-gray-300 animated-underline"
                whileHover={{ color: "#fff" }}
              >
                {social.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Footer */}
        <motion.div
          className="mt-20 text-center text-gray-400 text-sm z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <div className="frost-panel inline-block py-2 px-6 rounded-full">
            <p> {currentTime.getFullYear()} Mohamed Elshamy. All rights reserved.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
