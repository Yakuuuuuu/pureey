import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-4"
      >
        About Me
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 text-gray-100 space-y-4"
        >
          <p>An enthusiastic, and motivated professional who is passionate about thriving in the fast-paced world of technological growth. Currently working as a Country Service Manager for Sonalika Tractors in Nepal Market.</p>
          
          <p>I'm someone who's always up for a challenge and loves diving into new things. Whether it's learning a new skill or tackling a fresh project, I'm all in. Music and nature are my go-to sources of inspiration. I've had my experiences that have helped me grow and thrive in engineering while still finding time to recharge in nature.</p>
          
          <p>My passion for learning keep me motivated to push boundaries and explore new possibilities. One can also find me hearing people's experiences, meditating, enjoying nature, listening to music, studying about life and human minds.</p>
        </motion.div>

        <motion.aside 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/3 p-4 rounded-lg glass hover:bg-white/4 transition-colors space-y-4"
        >
          <div>
            <div className="text-base text-gray-100 font-semibold mb-3">Education</div>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-sm">Bachelor's degree, Mechanical Engineering</div>
                <div className="text-xs text-gray-400 mt-1">Manav Rachna International Institute of Research & Studies</div>
                <div className="text-xs text-gray-400">2018 - 2022</div>
                <div className="text-xs text-gray-300 mt-2">Activities: Innoskill, Wordnerd, Rongoli Competition. Organized Symposiums and Seminars.</div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-sm">+2 Level, Science</div>
                <div className="text-xs text-gray-400 mt-1">Kathmandu Model Secondary School</div>
                <div className="text-xs text-gray-400">2015 - 2017</div>
                <div className="text-xs text-gray-300 mt-2">Class Representative - liaison between students and administration</div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-sm">School Leaving Certificate (SLC)</div>
                <div className="text-xs text-gray-400 mt-1">Ever Vision School</div>
                <div className="text-xs text-gray-300 mt-2">School Captain - organized events, provided guidance, participated in decision-making</div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
