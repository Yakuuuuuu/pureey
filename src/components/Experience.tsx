import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2024',
    title: 'Assistant Manager',
    company: 'International Tractors Limited',
    place: 'New Delhi, Delhi, India',
    duration: 'Apr 2024 - Present · 1 yr 9 mos',
    desc: [
      'Handling After Sales Service for Sonalika Tractor in Nepal market',
      'Leading product improvement initiatives, optimizing service deliveries, training technical work force of dealers in Nepal and maintaining customer satisfaction',
      'Monitoring and analyzing the Spare Parts Business and developing effective service strategies for expanding the network of after sales services',
      'Collaborating and coordinating with cross-functional teams for product testing, product performance improvement and feedback surveys'
    ]
  },
  {
    year: '2023',
    title: 'Senior Engineer',
    company: 'International Tractors Limited',
    place: 'New Delhi, Delhi, India',
    duration: 'Apr 2023 - Mar 2024 · 1 yr',
    desc: [
      'Provided After Sales Support for South East Asian Countries (Thailand, Malaysia, Philippines, Myanmar, Indonesia, Vietnam, Cambodia and Sri Lanka)',
      'Worked with Yanmar Thailand and Yanmar Philippines to manage a diverse portfolio of international clients',
      'Streamlined customer and dealer care operations, infrastructure development, manpower training, warranty administration and CSI',
      'Established systems, procedures and streamlined various processes in order to ensure a high degree of customer satisfaction across service centers'
    ]
  },
  {
    year: '2022',
    title: 'Graduate Engineering Trainee',
    company: 'International Tractors Limited',
    place: 'Hoshiarpur, Punjab, India',
    duration: 'Apr 2022 - Apr 2023 · 1 yr 1 mo',
    desc: [
      'Gained detailed learning on the tractor manufacturing and assembly processes in the world\'s largest integrated tractor manufacturing plant in Hoshiarpur, Punjab, India',
      'Assisted in handing the After Sales Support for Asia Market with coordination with various operation teams',
      'Gained experience in Service Issue Diagnosis, Spare Parts Operations and International Business Operations'
    ]
  },
  {
    year: '2022',
    title: 'Engineering Intern',
    company: 'Nebico Pvt. Ltd.',
    place: 'Balaju Industrial District, Balaju, Kathmandu, Nepal',
    duration: 'Jan 2022 - Mar 2022 · 3 mos',
    desc: [
      'Optimized installation and trials for new machinery in the production house',
      'Addressed technical and engineering issues and performed regular supervision and maintenance with industry protocols',
      'Designed and manufactured machine components for production improvement'
    ]
  },
  {
    year: '2021',
    title: 'Undergraduate Research Assistant',
    company: 'Manav Rachna International Institute of Research & Studies',
    place: 'Faridabad, Haryana, India',
    duration: 'Aug 2020 - Dec 2021 · 1 yr 5 mos',
    desc: [
      'Conducted literature reviews and gathered data through reviews and experiments',
      'Performed laboratory experiments and maintained detailed records',
      'Managed references and citations, to create bibliographies and ensure accurate referencing in research publications',
      'Assisted in the preparation of research reports, manuscripts, or presentations, and contributing to scientific papers or conference presentations based on the research findings'
    ]
  },
]

export default function Experience(){
  return (
    <section id="experience" className="py-12">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-semibold mb-6"
      >
        Experience & Training
      </motion.h3>
      <div className="space-y-6 relative pl-8">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400/50 to-transparent" />
        {timeline.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-4 items-start relative"
          >
            <div className="absolute -left-8 top-0 w-3 h-3 rounded-full bg-orange-400 border-2 border-industrial-900" />
            <div className="w-20 text-sm text-gray-400 font-medium">{t.year}</div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex-1 bg-white/3 p-4 rounded-lg glass hover:bg-white/4 transition-all"
            >
              <div className="font-semibold text-orange-400">{t.title}</div>
              <div className="text-sm text-gray-300 mt-1">{t.company}</div>
              <div className="text-xs text-gray-400 mt-1">{t.place} · {t.duration}</div>
              <ul className="text-sm text-gray-100 mt-3 space-y-2 list-disc list-inside">
                {t.desc.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
