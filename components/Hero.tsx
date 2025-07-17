// components/Hero.tsx
'use client'
import Image from 'next/image'
import React from 'react'
import TrustedBy from './TrustedBy'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full overflow-visible bg-[#160d09]">
      {/* Imagen de fondo */}
      <div className="w-full">
        <Image
          src="/images/synced-choco.png"
          alt="Synced Chocolate"
          width={4746}
          height={2855}
          quality={100}
          unoptimized
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Banda amarilla inclinada, un poco más arriba (bottom-8) */}
      <div className="absolute bottom-3 sm:bottom-6 2xl:bottom-10 left-0 w-full h-[8.3vw] sm:h-[8.3vw] 2xl:h-[8.3vw] bg-[#faff05] origin-top-left -rotate-[2.8deg] overflow-hidden px-4 sm:px-6 md:px-8">
        {/* Contenedor centrado */}
        <div className="w-full h-full flex items-center justify-center">
          {/* Volvemos a inclinar los logos para que queden paralelos a la banda */}
          <div className="transform w-full">
            <TrustedBy />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
