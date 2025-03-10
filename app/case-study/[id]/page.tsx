"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { BackgroundAnimation } from "../../components/BackgroundAnimation"
import { Footer } from "../../components/Footer"
import { LanguageSwitch } from "../../components/LanguageSwitch"
import { translations, caseStudies } from "../../data"

export default function CaseStudy() {
  const [lang, setLang] = useState("en")
  const { id } = useParams()
  const t = translations[lang]
  const post = caseStudies[lang][Number(id)]

  const handleLanguageSwitch = () => {
    setLang(lang === "en" ? "ar" : "en")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  if (!post) {
    return <div>Case study not found</div>
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 ${lang === "ar" ? "font-cairo" : "font-inter"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <BackgroundAnimation />
      <motion.nav
        className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white p-4 sticky top-0 z-10 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-indigo-200 transition-colors">
            Case Studies
          </Link>
          <div className="flex items-center space-x-4">
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
            <LanguageSwitch lang={lang} onSwitch={handleLanguageSwitch} />
          </div>
        </div>
      </motion.nav>

      <main className="container mx-auto py-12 px-4">
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8"
          >
            <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-6 text-white">
              {post.title}
            </motion.h1>

            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-semibold mb-3 text-indigo-200">{t.background}</h2>
              <p className="text-white">{post.background}</p>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-semibold mb-3 text-indigo-200">{t.challenges}</h2>
              <ul className="list-disc list-inside text-white">
                {post.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-semibold mb-3 text-indigo-200">{t.solution}</h2>
              <ul className="list-disc list-inside text-white">
                {post.solution.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {step}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.div variants={itemVariants} className="mt-8">
              <Link
                href="/"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-100 transition-colors transform hover:-translate-y-1 hover:shadow-lg"
              >
                {t.backToHome}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer lang={lang} />
    </div>
  )
}

