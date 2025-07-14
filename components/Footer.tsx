'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { PiThreadsLogo } from 'react-icons/pi'

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#faff05] rounded-t-[60px] text-black">
      <div className="py-12 px-25 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left: Text and contact */}
        <div className="text-left">
          <h3 className="text-xl font-bold font-poppins mb-2">
            We design Visual experiences to connect and convert.
          </h3>
          <p className="text-md font-poppins">Contact: info@synced-studio.eu</p>
        </div>

        {/* Right: Logo and social icons */}
        <div className="flex flex-col items-center md:items-end">
          <Image
            src="/images/synced_logo.png"
            alt="Synced Logo"
            width={180}   // AGRANDADO
            height={60}
            className="mb-4"
          />
          <div className="flex gap-3">
            <Link href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-black rounded-[12px] p-2">
                <FaTiktok className="text-[#faff05] w-5 h-5" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-black rounded-[12px] p-2">
                <FaLinkedin className="text-[#faff05] w-5 h-5" />
              </div>
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-black rounded-[12px] p-2">
                <FaInstagram className="text-[#faff05] w-5 h-5" />
              </div>
            </Link>
            <Link href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
              <div className="bg-black rounded-[12px] p-2">
                <PiThreadsLogo className="text-[#faff05] w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full bg-[#b7b329] py-4 px-25 flex flex-col md:flex-row justify-between items-center text-base">
        <div className="flex gap-4 text-black font-poppins underline mb-2 md:mb-0">
          <Link href="/cookies">Política de cookies</Link>
          <Link href="/privacy">Política de privacidad</Link>
          <Link href="/legal">Aviso legal</Link>
        </div>
        <div className="text-black text-xl font-poppins">
          © 2025 Synced Studio - All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
