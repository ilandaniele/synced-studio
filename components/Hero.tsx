'use client';
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/synced-choco.jpg"
          alt="Synced Chocolate"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section> 
    // <section className="bg-[#160d09] relative w-full h-screen overflow-hidden">
  );
};

export default Hero;
