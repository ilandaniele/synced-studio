'use client'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#faff05] rounded-t-[60px] px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-16 md:gap-32">
        {/* Logo */}
        <div className="text-left">
          <h2 className="text-6xl md:text-7xl font-extrabold text-black leading-none">SYNCED</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-[0.7em] text-black mt-3">STUDIO</p>
        </div>

        {/* Social & Contact */}
        <div className="flex gap-16">
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-4">SOCIALS</h3>
            <div className="w-[100px] h-[130px] border-2 border-black rounded-[20px]"></div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-black mb-4">CONTACT</h3>
            <div className="w-[100px] h-[130px] border-2 border-black rounded-[20px]"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
