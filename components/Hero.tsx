'use client';
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-screen overflow-visible">
      <div className="w-screen">
        <Image
          src="/images/synced-choco.jpg"
          alt="Synced Chocolate"
          width={1920}          // ancho original de tu asset
          height={1280}         // alto original de tu asset
          quality={100}         // máxima calidad
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
