import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Education from './Education'
import Experience from './Experience'

export default function EducationExperience() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education')

  return (
    <section id="education-experience" className="py-12">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-semibold mb-8"
      >
        Education & Experience
      </motion.h3>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Vertical Tab Navigation */}
        <div className="flex md:flex-col gap-3 md:w-48 flex-shrink-0">
          <motion.button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-3 rounded-lg font-medium transition-all text-left ${
              activeTab === 'education'
                ? 'bg-orange-400 text-[#1a1a1a]'
                : 'bg-white/3 text-gray-300 hover:bg-white/4 border border-white/10'
            }`}
            whileHover={{ scale: 1.02, x: activeTab === 'education' ? 0 : 5 }}
            whileTap={{ scale: 0.98 }}
          >
            Education
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-3 rounded-lg font-medium transition-all text-left ${
              activeTab === 'experience'
                ? 'bg-orange-400 text-[#1a1a1a]'
                : 'bg-white/3 text-gray-300 hover:bg-white/4 border border-white/10'
            }`}
            whileHover={{ scale: 1.02, x: activeTab === 'experience' ? 0 : 5 }}
            whileTap={{ scale: 0.98 }}
          >
            Experience
          </motion.button>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          {activeTab === 'education' ? (
            <div>
              <Education />
            </div>
          ) : (
            <div>
              <Experience />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

