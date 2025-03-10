"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { BackgroundAnimation } from "./components/BackgroundAnimation"
import { SocialButton } from "./components/SocialButton"

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        mass: 0.5
      },
    },
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/MohamedElshame",
      color: "#F5F5F5",
      hoverColor: "#F5F5F5",
      bgColor: "#333",
      hoverBgColor: "#555",
      hoverScale: 1.05,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/mohamed-elshamy-64261b326/",
      color: "#F5F5F5",
      hoverColor: "#F5F5F5",
      bgColor: "#0077B5",
      hoverBgColor: "#0092df",
      hoverScale: 1.05,
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={24} />,
      url: "https://twitter.com/z3z3_x",
      color: "#F5F5F5",
      hoverColor: "#F5F5F5",
      bgColor: "#1DA1F2",
      hoverBgColor: "#55acee",
      hoverScale: 1.05,
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/z3z3._/",
      color: "#F5F5F5",
      hoverColor: "#F5F5F5",
      bgColor: "#E4405F",
      hoverBgColor: "#ff5a75",
      hoverScale: 1.05,
    },
  ]

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      <BackgroundAnimation />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14 flex justify-center"
      >
        <div className="frost-panel py-3 px-6 text-2xl font-mono font-light tracking-wider">
          {formatTime(currentTime.getHours())}:{formatTime(currentTime.getMinutes())}:{formatTime(currentTime.getSeconds())}
        </div>
      </motion.div>

      <motion.div
        className="text-center max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="gradient-text">Mohamed Elshamy</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 font-light animated-underline inline-block">
          Software Developer & Web Designer
        </h2>
        
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Building beautiful digital experiences with modern technologies.
          Passionate about clean code, user experience, and innovative solutions.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
          {socialLinks.map((link, index) => (
            <motion.div key={link.name} variants={itemVariants}>
              <SocialButton config={link} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 frost-panel py-4 px-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-lg font-semibold mb-2 text-center">Connect With Me</h3>
        <p className="text-gray-300">
          Feel free to reach out for collaboration or just to say hi!
        </p>
      </motion.div>

      <motion.footer
        className="w-full text-center text-sm text-gray-500 absolute bottom-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {currentTime.getFullYear()} Mohamed Elshamy. All rights reserved.
      </motion.footer>
    </main>
  )
}
