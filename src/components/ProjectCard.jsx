import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ title, stack, highlights, desc }) {
  return (
    <motion.article className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow" whileHover={{ y: -6 }}>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-300 mb-3">{desc}</p>
      <div className="text-xs text-gray-400 mb-3">{stack.join(' · ')}</div>
      <ul className="text-sm text-gray-300 space-y-1">
        {highlights.map(h => <li key={h}>• {h}</li>)}
      </ul>
    </motion.article>
  )
}
