import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ title, stack, highlights, desc }){
  return (
    <motion.article whileHover={{ y:-6 }} className="bg-white p-5 rounded-lg shadow">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-[var(--muted)] mb-3">{desc}</p>
      <div className="text-xs text-[var(--muted)] mb-3">{stack.join(' · ')}</div>
      <ul className="text-sm text-[var(--muted)] space-y-1">
        {highlights.map(h => <li key={h}>• {h}</li>)}
      </ul>
    </motion.article>
  )
}
