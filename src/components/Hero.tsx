import React from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Button from './ui/Button'
import Card from './ui/Card'
import profileImage from '../assets/profile-image.jpeg'

export default function Hero(){
  return (
    <section id="home" className="py-6 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-200"
          >
            Mechanical Engineer
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent"
          >
            Nischal Thapa
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-100"
          >
            Matatirtha, Kathmandu
          </motion.div>
          <motion.a
            href="tel:+9779858070886"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center gap-2 text-lg text-gray-200 hover:text-orange-400 transition-colors"
          >
            <Phone size={18} className="text-orange-400" />
            <span>+977 9858070886</span>
          </motion.a>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-100 max-w-2xl"
          >
            "Engineering Precision. Designing Reliable Mechanical Solutions."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <Button variant="outline" as="a" href="#contact">Contact Me</Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex justify-end items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-400/10 rounded-2xl blur-xl"></div>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={profileImage} 
              alt="Nischal Thapa - Mechanical Engineer" 
              className="relative w-full max-w-md h-auto rounded-2xl border-2 border-white/20 shadow-card-lg object-cover" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
