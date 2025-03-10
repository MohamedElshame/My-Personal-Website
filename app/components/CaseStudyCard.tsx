"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface CaseStudyCardProps {
  caseStudy: {
    title: string
    background: string
  }
  index: number
  lang: string
}

export function CaseStudyCard({ caseStudy, index, lang }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-3 text-white">{caseStudy.title}</h3>
        <p className="text-indigo-100 mb-4 line-clamp-3">{caseStudy.background}</p>
        <Link
          href={`/case-study/${index}`}
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors transform hover:-translate-y-1 hover:shadow-md"
        >
          {lang === "en" ? "Read More" : "اقرأ المزيد"}
        </Link>
      </div>
    </motion.div>
  )
}

