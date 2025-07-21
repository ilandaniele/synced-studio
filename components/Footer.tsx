'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { PiThreadsLogo } from 'react-icons/pi'

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#faff05] rounded-t-[30px] md:rounded-t-[60px] text-black">
      <div className="py-6 md:py-12 px-6 md:px-25 flex flex-col md:flex-row justify-between items-center md:gap-10">
        {/* Left: Text and contact */}
        <div className="w-full md:w-auto text-left mb-4 md:mb-0">
          <h3 className="text-base md:text-xl font-bold font-poppins mb-1 md:mb-2">
            We design Visual experiences that connect and convert.
          </h3>
          <p className="text-sm md:text-md font-poppins">
            Contact: info@synced-studio.eu
          </p>
        </div>

        {/* Logo + Social icons (responsive) */}
        <div className="w-full md:w-auto flex items-center justify-start md:flex-col md:justify-end md:items-end gap-3">
          <Image
            src="/images/synced_logo.png"
            alt="Synced Logo"
            width={180}
            height={60}
            className="w-[40vw] md:w-[180px] md:h-[60px]" // ~40% viewport width on mobile
          />
          <div className="flex gap-2">
            <Link href="https://www.tiktok.com/@synced_4k" target="_blank" rel="noopener noreferrer">
              <div className="bg-black rounded-[12px] p-[1.8vw] md:p-2.5">
                <FaTiktok className="text-[#faff05] w-[4vw] h-[4vw] md:w-6 md:h-6" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/company/synced-studio" target="_blank" rel="noopener noreferrer">
              <div className="bg-black rounded-[12px] p-[1.8vw] md:p-2.5">
                <FaLinkedin className="text-[#faff05] w-[4vw] h-[4vw] md:w-6 md:h-6" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/synced_4k" target="_blank" rel="noopener noreferrer">
              <div className="bg-black rounded-[12px] p-[1.8vw] md:p-2.5">
                <FaInstagram className="text-[#faff05] w-[4vw] h-[4vw] md:w-6 md:h-6" />
              </div>
            </Link>
            <Link href="https://www.threads.net/@synced_4k" target="_blank" rel="noopener noreferrer">
              <div className="bg-black rounded-[12px] p-[1.8vw] md:p-2.5">
                <PiThreadsLogo className="text-[#faff05] w-[4vw] h-[4vw] md:w-6 md:h-6" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full bg-[#b7b329] py-2.5 md:py-4 px-6 md:px-25 flex flex-col items-center text-center text-sm md:text-base">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-black font-poppins underline mb-1 md:mb-2">
          <Link href="/cookies">Política de cookies</Link>
          <Link href="/privacy">Política de privacidad</Link>
          <Link href="/legal">Aviso legal</Link>
        </div>
        <div className="text-black text-sm md:text-base font-poppins">
          © 2025 Synced Studio - All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
