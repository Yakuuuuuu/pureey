import React from 'react'

export default function Footer(){
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 text-center text-base text-gray-200 border-t border-white/15 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div>© {currentYear} Nischal Thapa – Mechanical Engineer</div>
      </div>
    </footer>
  )
}
