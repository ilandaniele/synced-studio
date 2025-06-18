'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-6 px-4 flex justify-center">
      <div className="w-full max-w-7xl flex justify-between items-center bg-[#faff05] rounded-full px-8 py-1 shadow-md">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex-1 flex justify-center gap-[9rem] tracking-wider">
          <Link href="#about" className="text-sm font-normal text-black hover:text-[#946e49] transition">
            ABOUT US
          </Link>
          <Link href="#costumers" className="text-sm font-normal text-black hover:text-[#946e49] transition">
            COSTUMERS
          </Link>
          <Link href="#projects" className="text-sm font-normal text-black hover:text-[#946e49] transition">
            PROJECTS
          </Link>
          <Link href="#services" className="text-sm font-normal text-black hover:text-[#946e49] transition">
            SERVICES
          </Link>
        </nav>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="bg-[#160d09] text-white text-sm font-medium px-6 py-2 rounded-full hover:opacity-90 transition"
        >
          CONTACT US
        </Link>
      </div>
    </header>
  );
};

export default Header;
