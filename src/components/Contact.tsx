import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-semibold mb-8"
      >
        Contact
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <motion.a
          href="https://www.linkedin.com/in/nischalthp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="group p-6 glass rounded-xl border border-white/20 hover:border-orange-400/50 transition-all flex flex-col items-center text-center space-y-3"
        >
          <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
            <Linkedin size={24} className="text-orange-400" />
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-400 font-medium">LinkedIn</div>
            <div className="text-base text-gray-100 group-hover:text-orange-400 transition-colors">
              linkedin.com/in/nischalthp
            </div>
          </div>
        </motion.a>

        <motion.a
          href="mailto:nischal.thapa04@outlook.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="group p-6 glass rounded-xl border border-white/20 hover:border-orange-400/50 transition-all flex flex-col items-center text-center space-y-3"
        >
          <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
            <Mail size={24} className="text-orange-400" />
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-400 font-medium">Email</div>
            <div className="text-base text-gray-100 group-hover:text-orange-400 transition-colors break-all">
              nischal.thapa04@outlook.com
            </div>
          </div>
        </motion.a>

        <motion.a
          href="tel:+9779858070886"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="group p-6 glass rounded-xl border border-white/20 hover:border-orange-400/50 transition-all flex flex-col items-center text-center space-y-3"
        >
          <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
            <Phone size={24} className="text-orange-400" />
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-400 font-medium">Phone</div>
            <div className="text-base text-gray-100 group-hover:text-orange-400 transition-colors">
              +977 9858070886
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  )
}
