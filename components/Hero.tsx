'use client';
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#160d09] text-center text-white py-10">
      <div className="flex justify-center">
        <Image
          src="/images/synced-choco.png"
          alt="Synced Chocolate"
          width={800}
          height={800}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
