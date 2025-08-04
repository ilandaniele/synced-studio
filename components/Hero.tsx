'use client'
import Image from 'next/image'
import React from 'react'
import TrustedBy from './TrustedBy'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#060503] flex flex-col items-center justify-center mt-30 md:mt-1">
      {/* Texto arriba de la imagen */}
      <div className="absolute top-[2vw] md:top-[6vw] w-full flex flex-col justify-center px-4">
        <h1
          className="font-poppins font-bold text-center text-[6vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] xl:text-[2.8vw] leading-tight bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
          style={{
            backgroundImage: 'linear-gradient(90deg, #faff05, #d4af37, #faff05)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Your product deserves to look irresistible
        </h1>
        <p className="font-poppins text-center">Traditional photoshoots aren’t built for today’s speed, volume, and creative iteration. <b>We are.</b></p>
      </div>

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

      {/* Banda amarilla inclinada */}
      <div className="absolute bottom-3 sm:bottom-6 2xl:bottom-10 left-0 w-full h-[8.3vw] sm:h-[8.3vw] 2xl:h-[8.3vw] bg-[#faff05] origin-top-left -rotate-[2.8deg] overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="transform w-full">
            <TrustedBy />
          </div>
        </div>
      </div>

      {/* Animación del gradiente */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
