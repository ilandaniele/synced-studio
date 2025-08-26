'use client'
import Image from 'next/image'
import React from 'react'
import TrustedBy from './TrustedBy'
import BoostCard from './BoostCard'

const Hero: React.FC = () => {
  const [boostOn, setBoostOn] = React.useState(true)

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#060503] flex flex-col items-center justify-center pt-30 md:pt-0 mt-20 md:mt-1">
      {/* Texto */}
      <div className="absolute top-[3vw] md:top-[5.5vw] w-full flex flex-col justify-center md:px-35 px-10">
        <h1
          className="font-poppins font-bold text-center text-[5.5vw] md:text-[3.3vw] lg:text-[2.8vw] xl:text-[2.6vw] leading-tight bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
          style={{
            backgroundImage: 'linear-gradient(90deg, #faff05, #d4af37, #faff05)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Your product deserves 
          <br className="block md:hidden" />
          to look irresistible.
        </h1>
        <p
          className="font-poppins text-center text-[2.5vw] md:text-[1vw]"
          style={{
            backgroundImage: 'linear-gradient(90deg, #faff05, #fcff82, #faff05)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Traditional photoshoots aren’t built for
          <br className="block md:hidden" />
          today’s speed, volume, and creative iteration. <b>We are.</b>
        </p>
      </div>

      {/* Imagen responsive */}
      <div className="w-full">
        <Image
          src="/images/synced-choco-mobile.png"
          alt="Synced Chocolate Mobile"
          width={1000}
          height={600}
          quality={100}
          unoptimized
          className="w-full h-auto object-contain md:hidden"
          priority
        />
        <Image
          src="/images/synced-choco.png"
          alt="Synced Chocolate"
          width={4746}
          height={2855}
          quality={100}
          unoptimized
          className="w-full h-auto object-contain hidden md:block"
          priority
        />
      </div>

      {/* Tarjeta mobile */}
      <BoostCard
        on={boostOn}
        onToggle={() => setBoostOn(v => !v)}
        className="absolute z-10 md:hidden md:top-[30vw] top-[26vw] w-[90vw] max-w-[90vw] md:w-[55vw] md:max-w-[60vw]"
      />

      {/* Tarjetas desktop: izquierda (off) y derecha (on), sin interacción */}
      <BoostCard
        on={false}
        onToggle={() => {}}
        interactive={false}
        animateKnob={false}
        className="hidden md:block absolute z-10 md:left-[3vw] md:top-[12vw] xl:top-[16vw] md:w-[40vw] md:max-w-[28vw]"
      />
      <BoostCard
        on={true}
        onToggle={() => {}}
        interactive={false}
        animateKnob={false}
        className="hidden md:block absolute z-10 md:right-[3vw] md:top-[12vw] xl:top-[16vw] md:w-[30vw] md:max-w-[28vw]"
      />

      {/* Banda amarilla */}
      <div className="absolute bottom-3 sm:bottom-6 2xl:bottom-10 left-0 w-full h-[8.3vw] sm:h-[8.3vw] 2xl:h-[8.3vw] bg-[#faff05] origin-top-left -rotate-[2.8deg] overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="transform w-full">
            <TrustedBy />
          </div>
        </div>
      </div>

      {/* Animación gradiente */}
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
