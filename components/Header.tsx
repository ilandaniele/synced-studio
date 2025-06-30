// components/Header.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  const navItems = [
    { href: '/',          label: 'Home',    active: true  },
    { href: '#services',  label: 'Services'           },
    { href: '#projects',  label: 'Projects'           },
    { href: '#comments',  label: 'Comments'           },
    { href: '#faqs',      label: "FAQ's"              },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-3 flex justify-center">
      <div className="flex items-center">
        {/* Logo sits _outside_ the pill, flush on its left */}
        <Link href="/" className="-mr-6 z-10">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={32}
            height={32}
          />
        </Link>

        {/* Only these five links go in the grey pill */}
        <nav className="bg-[#292929] rounded-full px-6 py-2 flex items-center space-x-10">
          {navItems.map(({ href, label, active }) => (
            <Link
              key={href}
              href={href}
              className={`
                text-sm font-medium transition
                ${active
                  ? 'bg-[#faff05] text-black px-4 py-1 rounded-full'
                  : 'text-white hover:text-[#faff05]'}
              `}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact Us sits _outside_ the pill, flush on its right */}
        <Link
          href="#contact"
          className="-ml-6 z-10 flex items-center space-x-2 bg-[#faff05] text-black text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition"
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
