'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const navItems = [
    { href: '/',          label: 'Home'     },
    { href: '#services',  label: 'Services' },
    { href: '#projects',  label: 'Projects' },
    { href: '#comments',  label: 'Comments' },
    { href: '#faqs',      label: "FAQ'S"    },
  ]

  const [activeSection, setActiveSection] = useState('/')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(({ href }) => href)
      let currentSection = '/'
      for (const section of sections) {
        const el = document.querySelector(section === '/' ? 'body' : section)
        if (el && window.scrollY >= el.getBoundingClientRect().top + window.scrollY - 80) {
          currentSection = section
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-center">
      <div className="flex items-center space-x-6">
        {/* Logo a la izquierda */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/synced_logo_yellow.png"
            alt="Synced Logo"
            width={150}   // Ajusta tamaño si querés
            height={50}
            className="object-contain"
            unoptimized
          />
        </Link>

        {/* Navigation pill */}
        <nav className="bg-black/30 backdrop-blur-md border border-white/20 rounded-full px-8 py-2 flex items-center space-x-10">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`
                text-sm font-medium font-poppins transition
                ${activeSection === href
                  ? 'text-yellow-400'
                  : 'text-white hover:text-yellow-400'}
              `}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact Us button */}
        <Link
          href="#contact"
          className="flex items-center space-x-2 bg-[#faff05] text-black font-poppins text-sm font-bold px-5 py-2 rounded-full hover:opacity-90 transition"
        >
          <span>Contact Us</span>
          <span className="bg-black rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </Link>
      </div>
    </header>
  )
}
