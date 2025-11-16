import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './components/ProjectCard'
import ContactForm from './components/ContactForm'

export default function App(){
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
      <main className="max-w-5xl mx-auto p-6 lg:p-12">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow">
              <span className="font-bold text-[var(--accent)]">MA</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Mohammed Ali</h1>
              <p className="text-sm text-[var(--muted)]">QA Automation Engineer</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-[var(--muted)]">
            <a href="#about" className="hover:text-[var(--text)]">About</a>
            <a href="#skills" className="hover:text-[var(--text)]">Skills</a>
            <a href="#projects" className="hover:text-[var(--text)]">Projects</a>
            <a href="#contact" className="hover:text-[var(--text)]">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="/resume.pdf" download className="px-3 py-2 rounded-md bg-[var(--accent)] text-white font-medium hover:scale-105 transition">Resume</a>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.6 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Hi, I'm Mohammed — I build reliable test automation.</h2>
            <p className="text-[var(--muted)] mb-6">QA Automation Engineer with expertise in Java, Selenium, TestNG, JUnit, Cucumber, Postman, Rest Assured and Mabl. I design maintainable test suites and integrate them into CI/CD pipelines to ensure consistent quality.</p>
            <div className="flex items-center gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/5 transition">View Projects</a>
              <a href="#contact" className="px-4 py-2 rounded-md bg-[var(--accent)] text-white font-medium">Contact</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, scale:0.98 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.6 }} className="order-first md:order-last">
            <div className="p-6 rounded-2xl bg-white shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-lg bg-[var(--bg)] flex items-center justify-center text-2xl font-bold text-[var(--accent)]">MA</div>
                <div>
                  <h3 className="font-semibold">Mohammed Ali</h3>
                  <p className="text-sm text-[var(--muted)]">QA Automation Engineer</p>
                </div>
              </div>

              <div className="text-sm text-[var(--muted)] space-y-2">
                <p><strong>Location:</strong> Remote / India (edit)</p>
                <p><strong>Email:</strong> ali.automation@example.com</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>LinkedIn:</strong> https://linkedin.com/in/mohammed-ali-qa</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mb-10">
          <motion.h3 className="text-2xl font-semibold mb-4" initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }}>About Me</motion.h3>
          <motion.p className="text-[var(--muted)] leading-relaxed" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.1 }}>
            I am a focused QA Automation Engineer who builds scalable and maintainable automation frameworks for web and API testing. I enjoy crafting reliable test suites using Java + Selenium and API tools like Postman & Rest Assured. I also use Mabl for intelligent cloud-executed tests and integrate test runs into CI pipelines for predictable releases.
          </motion.p>
        </section>

        <section id="skills" className="mb-10">
          <motion.h3 className="text-2xl font-semibold mb-6" initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}>Skills</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-4">Technical Skills</h4>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                {['Java','Selenium','TestNG','JUnit','Cucumber','Postman','Rest Assured','Mabl','Functional Testing','Manual Testing','Test Case Writing'].map((s)=>(
                  <li key={s} className="flex items-center justify-between">
                    <span>{s}</span>
                    <div className="w-36 h-2 bg-gray-200 rounded overflow-hidden ml-4">
                      <div className="h-full" style={{ width: `${Math.floor(60 + Math.random()*35)}%`, background: 'linear-gradient(90deg,var(--accent),#7c3aed)' }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-4">Soft Skills</h4>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                {['Communication','Leadership','Time Management','Problem Solving','Team Collaboration'].map((s)=>(
                  <li key={s} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <motion.h3 className="text-2xl font-semibold mb-6" initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}>Projects</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard
              title="Selenium Hybrid Automation Framework"
              stack={['Java','Selenium','TestNG','Maven']}
              highlights={['Page Object Model','Cross-browser support','Automated reporting','Screenshots on failure']}
              desc="Designed a modular hybrid UI automation framework using POM with reusable utilities, data-driven tests and CI integration."
            />
            <ProjectCard
              title="API Automation Suite - Postman + Rest Assured"
              stack={['Postman','Java','Rest Assured']}
              highlights={['CRUD scenarios','Schema validation','Dynamic payloads','HTML reporting']}
              desc="Built a comprehensive API regression suite for functional and negative tests with environment-based configurations."
            />
            <ProjectCard
              title="Mabl Intelligent Test Automation"
              stack={['Mabl','CI/CD']}
              highlights={['Auto-healing tests','Visual change detection','Pipeline execution']}
              desc="Implemented end-to-end test automation flows using Mabl Trainer, integrated with CI for nightly runs and analytics."
            />
          </div>
        </section>

        <section id="contact" className="mb-12">
          <motion.h3 className="text-2xl font-semibold mb-6">Contact</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-3">Get in touch</h4>
              <p className="text-sm text-[var(--muted)] mb-4">I'm open to contract, remote or full-time opportunities. Send me a message.</p>
              <div className="text-sm text-[var(--muted)] space-y-2">
                <p><strong>Email:</strong> ali.automation@example.com</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>LinkedIn:</strong> https://linkedin.com/in/mohammed-ali-qa</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <footer className="mt-8 py-6 border-t border-gray-100 text-center text-sm text-[var(--muted)]">
          <div className="flex items-center justify-center gap-4 mb-3">
            <a href="mailto:ali.automation@example.com" className="hover:text-[var(--text)]">Email</a>
            <a href="tel:+919876543210" className="hover:text-[var(--text)]">Phone</a>
            <a href="https://linkedin.com/in/mohammed-ali-qa" target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">LinkedIn</a>
          </div>
          <div>© {new Date().getFullYear()} Mohammed Ali — QA Automation Engineer</div>
        </footer>
      </main>
    </div>
  )
}
