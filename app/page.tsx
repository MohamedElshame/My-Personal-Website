"use client"

import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTiktok, FaMedium } from "react-icons/fa"
import { HalftoneBackground } from "./components/HalftoneBackground"
import { SocialButton } from "./components/SocialButton"

export default function Home() {
  const socialLinks = [
    {
      platform: "facebook",
      icon: <FaFacebook size={28} />, // Increased size for better visibility
      url: "https://www.facebook.com/profile.php?id=61551548814387",
      color: "bg-blue-600",
      label: "Facebook",
    },
    {
      platform: "instagram",
      icon: <FaInstagram size={28} />, // Increased size for better visibility
      url: "https://www.instagram.com/z3z3._/",
      color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
      label: "Instagram",
    },
    {
      platform: "instagram2",
      icon: <FaInstagram size={28} />, // Increased size for better visibility
      url: "https://www.instagram.com/labfloor/",
      color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
      label: "Labfloor",
    },
    {
      platform: "github",
      icon: <FaGithub size={28} />, // Increased size for better visibility
      url: "https://github.com/MohamedElshame",
      color: "bg-gray-800",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      icon: <FaLinkedin size={28} />, // Increased size for better visibility
      url: "https://www.linkedin.com/in/mohamed-elshamy-64261b326/",
      color: "bg-blue-700",
      label: "LinkedIn",
    },
    {
      platform: "tiktok",
      icon: <FaTiktok size={28} />, // Increased size for better visibility
      url: "https://www.tiktok.com/@z3z3.x",
      color: "bg-black",
      label: "TikTok",
    },
    {
      platform: "medium",
      icon: <FaMedium size={28} />, // Increased size for better visibility
      url: "https://medium.com/@z3z3",
      color: "bg-green-700",
      label: "Medium",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <HalftoneBackground />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16 z-10 px-4"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 3,
          }}
        >
          Mohamed Elshamy
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Connect with me
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 z-10 px-4 max-w-4xl mx-auto"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
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
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <SocialButton
              platform={social.platform as any}
              icon={social.icon}
              url={social.url}
              color={social.color}
              label={social.label}
            />
            <motion.span
              className="text-sm text-gray-300"
              whileHover={{ color: "#fff" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {social.label}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-8 text-center text-gray-400 text-sm z-10 w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p>© {new Date().getFullYear()} Mohamed Elshamy. All rights reserved.</p>
      </motion.div>
    </div>
  )
}

