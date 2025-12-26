import React from 'react'
import { motion } from 'framer-motion'

const publications = [
  {
    title: 'Parametric Study of Abrasive Jet Machining on Zirconia',
    publisher: 'Elsevier Publication, MaterialsToday Proceedings',
    date: 'Jan 23, 2023',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S2214785323001980'
  },
  {
    title: 'All Electric Aircraft : A Reality on its Way',
    publisher: 'Elsevier Publication, MaterialsToday Proceedings',
    date: 'Jan 19, 2021',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S2214785320392853'
  },
  {
    title: 'Electric Vehicle: An Approach Towards Sustainability',
    publisher: 'International Journal of Science, Engineering and Technology',
    date: 'Dec 30, 2020',
    url: 'https://www.ijset.in/wp-content/uploads/IJSET_V8_issue5_297.pdf'
  }
]

export default function Publications(){
  return (
    <section id="publications" className="py-12">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-semibold mb-6"
      >
        Publications
      </motion.h3>
      <div className="space-y-4">
        {publications.map((pub, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ x: 5 }}
            className="bg-white/3 p-4 rounded-lg glass hover:bg-white/4 transition-all"
          >
            <a 
              href={pub.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-orange-400 hover:text-orange-300 transition-colors cursor-pointer inline-block"
            >
              {pub.title}
            </a>
            <div className="text-sm text-gray-300 mt-1">{pub.publisher}</div>
            <div className="text-xs text-gray-400 mt-1">{pub.date}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

