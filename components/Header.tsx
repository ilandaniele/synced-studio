'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#comments', label: 'Comments' },
    { href: '#faqs', label: "FAQ'S" },
  ]

  const sectionRefs = [...navItems, { href: '#contact', label: 'Contact Us' }]
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

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
    <header className="fixed top-0 left-0 w-full z-200 px-4 sm:px-6 md:px-10 py-4 flex items-center justify-center">
      {/* Logo (only visible on md and up) */}
      <Link href="#hero" className="hidden md:flex flex-shrink-0">
        <Image
          src="/images/synced_logo_yellow.png"
          alt="Synced Logo"
          width={195}
          height={65}
          className="object-contain cursor-pointer"
          unoptimized
        />
      </Link>

      {/* Center container */}
      <div className="flex items-center justify-between flex-grow max-w-full md:max-w-[700px] lg:max-w-[800px] mx-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 md:px-8 py-3 w-full">
        {/* Mobile logo inside container (visible only on small screens) */}
        <Link href="#hero" className="flex-shrink-0 md:hidden">
          <Image
            src="/images/synced_logo_yellow.png"
            alt="Synced Logo"
            width={169}
            height={59}
            className="object-contain cursor-pointer"
            unoptimized
          />
        </Link>

        {/* Desktop nav with spaced items */}
        <nav className="hidden md:flex items-center justify-between gap-x-2 w-full px-15">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm sm:text-base font-medium font-poppins transition ${
                activeSection === href && activeSection !== '#contact'
                  ? 'text-[#faff05]'
                  : 'text-white hover:text-[#faff05]'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded bg-white/10 hover:bg-white/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a
            href="#contact"
            className="bg-[#faff05] p-2 rounded-full hover:opacity-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-lg flex flex-col py-2">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 text-white hover:text-[#faff05] text-sm font-poppins transition"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Contact Us (outside container) */}
      <a
        href="#contact"
        className="hidden md:flex items-center space-x-2 bg-[#faff05] text-black font-poppins text-sm sm:text-base font-bold px-4 md:px-5 py-2 rounded-full hover:opacity-90 transition ml-4 whitespace-nowrap"
      >
        <span>Contact Us</span>
        <span className="bg-black rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </a>
    </header>
  )
}
