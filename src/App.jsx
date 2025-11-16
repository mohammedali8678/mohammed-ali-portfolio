import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './components/ProjectCard'
import ContactForm from './components/ContactForm'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      <main className="max-w-5xl mx-auto p-6 lg:p-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-lg">
              <span className="font-bold">MA</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Mohammed Ali</h1>
              <p className="text-sm text-gray-400">QA Automation Engineer</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="md:flex items-center gap-3 hidden">
            <a href="/resume.pdf" download className="px-3 py-2 rounded-md bg-cyan-600 text-gray-900 font-medium hover:scale-105 transition">Download Resume</a>
          </div>
        </header>

        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Quality is not an act — it's a strategy.
            </h2>
            <p className="text-gray-300 mb-6">
              I'm a QA Automation Engineer specializing in building robust automation frameworks, API suites and cloud-based test solutions.
              I design maintainable test architectures using Java, Selenium, TestNG, Rest Assured and modern AI-assisted tools like Mabl.
            </p>

            <div className="flex items-center gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-600/10 transition">View Projects</a>
              <a href="#contact" className="px-4 py-2 rounded-md bg-cyan-600 text-gray-900 font-medium hover:scale-105 transition">Contact Me</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-first md:order-last"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-800/30 border border-gray-700 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-2xl font-bold">MA</div>
                <div>
                  <h3 className="font-semibold">Mohammed Ali</h3>
                  <p className="text-sm text-gray-400">QA Automation Engineer</p>
                </div>
              </div>

              <div className="text-sm text-gray-300 space-y-2">
                <p><strong>Location:</strong> Remote / India (edit)</p>
                <p><strong>Email:</strong> ali.automation@example.com</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>LinkedIn:</strong> https://linkedin.com/in/mohammed-ali-qa</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="mb-10">
          <motion.h3 className="text-2xl font-semibold mb-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>About Me</motion.h3>
          <motion.p className="text-gray-300 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            I am a dedicated QA Automation Engineer with hands-on experience designing and implementing reliable automation frameworks for UI and API testing. Skilled in Java, Selenium, TestNG, JUnit, Cucumber for behavior-driven tests, and Postman & Rest Assured for API automation. I have integrated tests into CI/CD pipelines and used Mabl for intelligent, cloud-executed test suites. I combine analytical thinking with a collaborative approach to deliver quality software and reduce release risk.
          </motion.p>

          <blockquote className="mt-4 p-4 border-l-2 border-cyan-600 bg-gray-800 rounded">
            <p className="text-sm text-cyan-200">"Testing is the intelligence that prevents failures before they happen."</p>
          </blockquote>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-10">
          <motion.h3 className="text-2xl font-semibold mb-6" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>Skills</motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold mb-4">Technical Skills</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {['Java','Selenium','TestNG','JUnit','Cucumber','Postman','Rest Assured','Mabl','Functional Testing','Manual Testing','Test Case Writing'].map((s) => (
                  <li key={s} className="flex items-center justify-between">
                    <span>{s}</span>
                    <div className="w-36 h-2 bg-gray-700 rounded overflow-hidden ml-4">
                      <div className="h-full" style={{ width: `${Math.floor(60 + Math.random()*35)}%`, background: 'linear-gradient(90deg,#06b6d4,#7c3aed)' }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold mb-4">Soft Skills</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {['Communication','Leadership','Time Management','Problem Solving','Team Collaboration'].map((s)=> (
                  <li key={s} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-12">
          <motion.h3 className="text-2xl font-semibold mb-6" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>Projects</motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project Cards */}
            <ProjectCard
              title="Selenium Hybrid Automation Framework"
              stack={["Java","Selenium","TestNG","Maven"]}
              highlights={["Page Object Model","Cross-browser support","Automated reporting","Screenshots on failure"]}
              desc="Designed a modular hybrid UI automation framework using POM with reusable utilities, data-driven tests and CI integration."
            />

            <ProjectCard
              title="API Automation Suite - Postman + Rest Assured"
              stack={["Postman","Java","Rest Assured"]}
              highlights={["CRUD scenarios","Schema validation","Dynamic payloads","HTML reporting"]}
              desc="Built a comprehensive API regression suite for functional and negative tests with environment-based configurations."
            />

            <ProjectCard
              title="Mabl Intelligent Test Automation"
              stack={["Mabl","CI/CD"]}
              highlights={["Auto-healing tests","Visual change detection","Pipeline execution"]}
              desc="Implemented end-to-end test automation flows using Mabl Trainer, integrated with CI for nightly runs and analytics."
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-12">
          <motion.h3 className="text-2xl font-semibold mb-6">Contact</motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold mb-3">Get in touch</h4>
              <p className="text-sm text-gray-300 mb-4">I'm open to contract, remote or full-time opportunities. Send me a message.</p>

              <div className="text-sm text-gray-300 space-y-2">
                <p><strong>Email:</strong> ali.automation@example.com</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>LinkedIn:</strong> https://linkedin.com/in/mohammed-ali-qa</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 py-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <div className="flex items-center justify-center gap-4 mb-3">
            <a href="mailto:ali.automation@example.com" className="hover:text-white">Email</a>
            <a href="tel:+919876543210" className="hover:text-white">Phone</a>
            <a href="https://linkedin.com/in/mohammed-ali-qa" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
          <div>© {new Date().getFullYear()} Mohammed Ali — QA Automation Engineer</div>
        </footer>
      </main>
    </div>
  )
}
