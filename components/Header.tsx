'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const navItems = [
    { href: '#hero',      label: 'Home' },
    { href: '#services',  label: 'Services' },
    { href: '#projects',  label: 'Projects' },
    { href: '#comments',  label: 'Comments' },
    { href: '#faqs',      label: "FAQ'S" },
  ]

  const sectionRefs = [...navItems, { href: '#contact', label: 'Contact Us' }]
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      let current = ''
      sectionRefs.forEach(({ href }) => {
        const el = document.querySelector(href)
        if (el) {
          const offsetTop = el.getBoundingClientRect().top + window.scrollY
          if (window.scrollY >= offsetTop - 200) {
            current = href
          }
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-center transition-all duration-300">
      <div className="flex items-center space-x-6">
        {/* Logo a la izquierda */}
        <Link href="#hero" className="flex-shrink-0">
          <Image
            src="/images/synced_logo_yellow.png"
            alt="Synced Logo"
            width={150}
            height={50}
            className="object-contain cursor-pointer"
            unoptimized
          />
        </Link>

        {/* Navigation pill */}
        <nav className="bg-black/30 backdrop-blur-md border border-white/20 rounded-full px-8 py-2 flex items-center space-x-10">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`
                text-sm font-medium font-poppins transition
                ${
                  activeSection === href && activeSection !== '#contact'
                    ? 'text-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }
              `}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Contact Us button */}
        <a
          href="#contact"
          className={`flex items-center space-x-2 bg-[#faff05] text-black font-poppins text-sm font-bold px-5 py-2 rounded-full hover:opacity-90 transition`}
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
        </a>
      </div>
    </header>
  )
}
