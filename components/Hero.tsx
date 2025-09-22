'use client'
import Image from 'next/image'
import React from 'react'
import TrustedBy from './TrustedBy'
import BoostCard from './BoostCard'

const Hero: React.FC = () => {
  // Mobile (sigue igual: cambia contenido con el toggle)
  const [boostOn, setBoostOn] = React.useState(true)

  // Desktop: exclusión mutua
  const [panelAOn, setPanelAOn] = React.useState(false) // A arranca gris (off)
  const [panelBOn, setPanelBOn] = React.useState(true)  // B arranca amarillo (on)

  const handleToggleA = () => {
    setPanelAOn(prev => {
      const next = !prev
      if (next) setPanelBOn(false) // si A se activa (rojo), B -> gris
      return next
    })
  }
  const handleToggleB = () => {
    setPanelBOn(prev => {
      const next = !prev
      if (next) setPanelAOn(false) // si B se activa (amarillo), A -> gris
      return next
    })
  }

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#000000] flex flex-col items-center justify-center pt-30 md:pt-0 mt-20 md:mt-1">
      {/* Texto */}
      <div className="absolute top-[7.5vw] md:top-[6.5vw] w-full flex flex-col justify-center md:px-35 px-[5vw]">
        <h1
          className="font-poppins font-bold text-center text-[6.5vw] md:text-[3.3vw] lg:text-[2.8vw] xl:text-[2.6vw] leading-tight"
          style={{
            backgroundImage: 'linear-gradient(90deg, #faff05, #fcff82, #faff05)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'gradient 5s ease infinite',
          }}
        >
          Your product deserves
          <br className="block md:hidden" />
          <span className="hidden md:inline">&nbsp;</span>
          to look irresistible.
        </h1>
        <p
          className="font-poppins text-center text-[3.0vw] md:text-[1vw] mt-[1vw] md:mt-[0.1vw]"
          style={{
            backgroundImage: 'linear-gradient(90deg, #faff05, #fcff82, #faff05)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Traditional photoshoots aren’t built for{" "}
          <br className="block md:hidden" />
          today’s speed, volume, and creative iteration. <b>We are.</b>
        </p>
      </div>

      {/* Imagen responsive */}
      <div className="w-full -mt-[65vw] md:-mt-[3vw]">
        <Image
          src="/images/synced-choco-mobile.webp"
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

      {/* Mobile: contenido cambia según toggle */}
      <BoostCard
        on={boostOn}
        onToggle={() => setBoostOn(v => !v)}
        title={boostOn ? 'With Synced' : 'Without Synced'}
        contentVariant={boostOn ? 'positive' : 'negative'}
        className="absolute z-10 md:hidden md:top-[30vw] top-[40vw] w-[90vw] max-w-[90vw] md:w-[55vw] md:max-w-[60vw]"
      />

      {/* Desktop: Panel A (izq) -> título y contenido fijos NEGATIVOS */}
      <BoostCard
        on={panelAOn}
        onToggle={handleToggleA}
        interactive={true}
        animateKnob={true}
        title="Without Synced"
        contentVariant="negative"
        activeColor="red"
        inactiveColor="gray"
        className="hidden md:block absolute z-10 md:left-[7vw] md:top-[12vw] xl:top-[16vw] md:w-[40vw] md:max-w-[28vw]"
      />

      {/* Desktop: Panel B (der) -> título y contenido fijos POSITIVOS */}
      <BoostCard
        on={panelBOn}
        onToggle={handleToggleB}
        interactive={true}
        animateKnob={true}
        title="With Synced"
        contentVariant="positive"
        activeColor="yellow"
        inactiveColor="gray"
        className="hidden md:block absolute z-10 md:right-[5vw] md:top-[12vw] xl:top-[16vw] md:w-[30vw] md:max-w-[28vw]"
      />

      {/* Banda amarilla */}
      <div className="absolute bottom-3 sm:bottom-6 2xl:bottom-10 left-0 w-full h-[8.3vw] sm:h-[8.3vw] 2xl:h-[8.3vw] bg-[#faff05] origin-top-left -rotate-[2.8deg] overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="transform w-full">
            <TrustedBy />
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}

export default Hero
