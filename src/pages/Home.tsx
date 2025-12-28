import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import EducationExperience from '../components/EducationExperience'
import Honors from '../components/Honors'
import Publications from '../components/Publications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#1a1a1a] text-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column: profile card (sticky) */}
        <aside className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-20 glass p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-card-lg transition-shadow"
          >
            <div>
              <div className="font-bold text-lg">Nischal Thapa</div>
              <div className="text-base text-gray-100">Mechanical Engineer</div>
              <div className="text-xs text-gray-400">Matatirtha, Kathmandu, Nepal</div>
            </div>

            <div className="mt-6 text-base text-gray-100">
              Engineering precision & reliable mechanical solutions. Passion for design, manufacturing and real-world systems.
            </div>

            <div className="mt-6 text-xs text-gray-400">
              <div>Skills: SolidWorks · AutoCAD · PTC Creo</div>
            </div>
          </motion.div>
        </aside>

        {/* Right column: content */}
        <div className="lg:col-span-8 space-y-12">
          <Hero />
          <About />
          <Skills />
          <EducationExperience />
          <Projects />
          <Publications />
          <Honors />
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  )
}

