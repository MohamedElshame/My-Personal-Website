"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export function Footer({ lang }: { lang: string }) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white py-8 mt-12"
    >
      <div className="container mx-auto text-center">
        <p className="text-lg">
          {lang === "en"
            ? `Created by Mohamed Elshamy © ${new Date().getFullYear()}`
            : `تم الإنشاء بواسطة محمد الشامي © ${new Date().getFullYear()}`}
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          className="mt-4 flex justify-center space-x-4"
        >
          <a
            href="https://www.linkedin.com/in/mohamed-elshamy-64261b326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-200 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/MohamedElshame"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-200 transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </motion.div>
      </div>
    </motion.footer>
  )
}

