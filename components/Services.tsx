'use client'
import Image from 'next/image'
import React from 'react'

type Service = {
  img: string
  imgAlt: string
  title: string
  copy: string
  cta: string
}

const services: Service[] = [
  {
    img: '/images/lata-services.jpg',
    imgAlt: '3D gold can',
    title: 'Fast & Flexible\n3D Product Images',
    copy:
      'Accelerate your go to market. Our 3D product visuals let you test, launch, and sell faster, without waiting for production. Eye catching, cost effective, and built to convert.',
    cta: 'See Examples',
  },
  {
    img: '/images/cine-services.jpg',
    imgAlt: 'Gold clapperboard',
    title: 'Cinematic 3D\nAnimation & VFX',
    copy:
      'Stories sell. We create cinematic 3D content that hooks your audience in seconds, boosts engagement, and drives real sales impact across every platform.',
    cta: 'Watch Demo',
  },
  {
    img: '/images/foco-services.jpg',
    imgAlt: 'Gold lightbulb',
    title: 'Creative\nBrand Direction',
    copy:
      'Consistency builds brands. We craft clear, strategic visuals that strengthen recognition, maximize shelf impact, and position you ahead of the competition.',
    cta: "Let’s Strategy",
  },
]

const Card: React.FC<Service> = ({ img, imgAlt, title, copy, cta }) => (
  <div
    className="
      relative rounded-[24px] overflow-hidden
      border border-yellow-200/20
      shadow-[0_0_30px_rgba(250,255,5,0.05)]
      flex flex-col h-full
      bg-[radial-gradient(120%_100%_at_50%_0%,rgba(250,255,5,0.05)_0%,rgba(0,0,0,0.85)_40%,rgba(0,0,0,0.85)_100%)]
    "
  >
    <div className="relative w-full h-[240px] md:h-[280px] lg:h-[300px]">
      <Image
        src={img}
        alt={imgAlt}
        fill
        priority
        className="object-contain p-3 md:p-4"
        sizes="(max-width: 768px) 90vw, (max-width: 1400px) 33vw, 460px"
      />
      <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-black/30" />
    </div>

    <div className="flex flex-col flex-1 items-center text-center gap-3 px-6 pb-6 md:pb-7 -mt-1">
      <h3 className="font-poppins font-extrabold text-white leading-[1.05]
                     text-[clamp(22px,2.2vw,32px)] tracking-tight">
        {title.split('\n').map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </h3>

      <p className="font-poppins text-[#faff05] text-[clamp(13px,0.95vw,16px)]
                    leading-relaxed max-w-[46ch]">
        {copy}
      </p>

      <button
        className="
          mt-auto
          inline-flex items-center justify-center
          rounded-full px-5 py-2.5
          bg-[#faff05] text-black font-poppins font-semibold
          text-[15px]
          shadow-[0_8px_24px_rgba(250,255,5,0.22)]
          hover:translate-y-[-1px] active:translate-y-[0]
          transition-transform
        "
      >
        {cta}
      </button>
    </div>

    <div className="pointer-events-none absolute inset-x-6 bottom-3 h-6 rounded-full blur-lg bg-[#faff05]/10" />
  </div>
)

const Services: React.FC = () => {
  return (
    <section id="services" className="text-white py-[12vw] md:py-[6vw]">
      <div className="mx-auto px-4 md:px-6 max-w-[1320px] xl:max-w-[1400px]">
        <h2 className="text-4xl md:text-5xl text-center font-poppins font-bold text-[#faff05]">
          SERVICES
        </h2>
        <p className="text-center font-poppins text-base md:text-lg lg:text-xl text-white mb-[4vw]">
          How we shape attention into action.
        </p>

        {/* Mobile: carrusel horizontal */}
        <div className="md:hidden -mx-4">
          <div
            className="
              flex gap-4 overflow-x-auto px-4 no-scrollbar
              snap-x snap-mandatory scroll-smooth
            "
            aria-label="Services carousel"
          >
            {services.map((s, i) => (
              <div key={i} className="snap-center shrink-0 w-[88vw]">
                <Card {...s} />
              </div>
            ))}
            {/* pequeño espacio final para centrar bien el último slide */}
            <div className="shrink-0 w-[4vw]" />
          </div>
        </div>

        {/* Desktop: 3 columnas */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
