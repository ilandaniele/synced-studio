'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useCallback } from 'react'

import { useActiveSection } from '@/hooks'
import { NAVIGATION_ITEMS, SECTION_REFS, IMAGE_SIZES, Z_INDEX } from '@/constants'
import { smoothScrollToElement } from '@/lib/utils'

// Sub-components
const Logo = React.memo(({ isMobile = false }: { isMobile?: boolean }) => {
  const sizes = isMobile ? IMAGE_SIZES.LOGO_MOBILE : IMAGE_SIZES.LOGO_DESKTOP
  
  return (
    <Link href="#hero" className={isMobile ? "flex-shrink-0 md:hidden" : "hidden md:flex flex-shrink-0"}>
      <Image
        src="/images/synced_logo_yellow.png"
        alt="Synced Logo"
        width={sizes.width}
        height={sizes.height}
        className="object-contain cursor-pointer"
        unoptimized
        priority
      />
    </Link>
  )
})
Logo.displayName = 'Logo'

const NavigationItem = React.memo(({ 
  href, 
  label, 
  isActive, 
  onClick 
}: { 
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
}) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault()
      smoothScrollToElement(href)
      onClick?.()
    }}
    className={`text-sm sm:text-base font-medium font-poppins transition ${
      isActive && href !== '#contact'
        ? 'text-[#faff05]'
        : 'text-white hover:text-[#faff05]'
    }`}
  >
    {label}
  </a>
))
NavigationItem.displayName = 'NavigationItem'

const MobileMenuButton = React.memo(({ 
  onClick 
}: { 
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className="p-2 rounded bg-white/10 hover:bg-white/20 transition"
    aria-label="Toggle mobile menu"
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
))
MobileMenuButton.displayName = 'MobileMenuButton'

const ContactButton = React.memo(({ isMobile = false }: { isMobile?: boolean }) => {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    smoothScrollToElement('#contact')
  }, [])

  if (isMobile) {
    return (
      <a
        href="#contact"
        onClick={handleClick}
        className="bg-[#faff05] p-2 rounded-full hover:opacity-90 transition"
        aria-label="Contact us"
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
    )
  }

  return (
    <a
      href="#contact"
      onClick={handleClick}
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
  )
})
ContactButton.displayName = 'ContactButton'

const MobileDropdown = React.memo(({ 
  isOpen, 
  activeSection, 
  onClose 
}: { 
  isOpen: boolean
  activeSection: string
  onClose: () => void
}) => {
  if (!isOpen) return null

  return (
    <div className="absolute top-full right-4 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-lg flex flex-col py-2">
      {NAVIGATION_ITEMS.map(({ href, label }) => (
        <NavigationItem
          key={href}
          href={href}
          label={label}
          isActive={activeSection === href}
          onClick={onClose}
        />
      ))}
    </div>
  )
})
MobileDropdown.displayName = 'MobileDropdown'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection([...SECTION_REFS])

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  return (
    <header 
      className="fixed top-0 left-0 w-full px-4 sm:px-6 md:px-10 py-4 flex items-center justify-center"
      style={{ zIndex: Z_INDEX.HEADER }}
    >
      {/* Logo (desktop only) */}
      <Logo />

      {/* Center container */}
      <div className="flex items-center justify-between flex-grow max-w-full md:max-w-[700px] lg:max-w-[800px] mx-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 md:px-8 py-3 w-full">
        {/* Mobile logo inside container */}
        <Logo isMobile />

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center justify-between gap-x-2 w-full px-15">
          {NAVIGATION_ITEMS.map(({ href, label }) => (
            <NavigationItem
              key={href}
              href={href}
              label={label}
              isActive={activeSection === href}
            />
          ))}
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <MobileMenuButton onClick={toggleMenu} />
          <ContactButton isMobile />
        </div>

        {/* Mobile dropdown */}
        <MobileDropdown 
          isOpen={menuOpen} 
          activeSection={activeSection} 
          onClose={closeMenu} 
        />
      </div>

      {/* Desktop Contact Button */}
      <ContactButton />
    </header>
  )
}
