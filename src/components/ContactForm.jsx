import React from 'react'
import { motion } from 'framer-motion'

export default function ContactForm(){
  return (
    <motion.form className="bg-white p-6 rounded-lg shadow" onSubmit={(e)=>{e.preventDefault(); alert('Message sent (demo) — replace with real endpoint)')}} initial={{ opacity:0 }} animate={{ opacity:1 }}>
      <label className="text-xs text-[var(--muted)]">Name</label>
      <input placeholder="Your name" required className="w-full mt-1 mb-3 p-2 rounded border border-gray-200 text-sm" />

      <label className="text-xs text-[var(--muted)]">Email</label>
      <input type="email" placeholder="you@example.com" required className="w-full mt-1 mb-3 p-2 rounded border border-gray-200 text-sm" />

      <label className="text-xs text-[var(--muted)]">Message</label>
      <textarea placeholder="Hi Mohammed, ..." required className="w-full mt-1 mb-4 p-2 rounded border border-gray-200 text-sm h-28" />

      <div className="flex items-center justify-between">
        <button type="submit" className="px-4 py-2 rounded bg-[var(--accent)] text-white font-medium hover:opacity-95">Send Message</button>
        <button type="button" onClick={()=>{window.location.href='/resume.pdf'}} className="px-3 py-2 rounded border border-gray-200 text-sm">Download Resume</button>
      </div>
    </motion.form>
  )
}
