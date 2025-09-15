'use client'
import React from 'react'
import Link from 'next/link'

type Service = {
  img: string
  imgAlt: string
  title: string
  copy: string
  cta: string
  href: string        // ⬅️ destino del CTA
}

const services: Service[] = [
  {
    img: '/images/lata-services.jpg',
    imgAlt: '3D gold can',
    title: 'Fast & Flexible\n3D Product Images',
    copy:
      'Accelerate your go to market. Our 3D product\n' +
      'visuals let you test, launch, and sell faster,\n' +
      'without waiting for production. Eye catching,\n' +
      'cost effective, and built to convert.',
    cta: 'See Examples',
    href: '#projects',          // ⬅️ a Projects
  },
  {
    img: '/images/cine-services.jpg',
    imgAlt: 'Gold clapperboard',
    title: 'Cinematic 3D\nAnimation & VFX',
    copy:
      'Stories sell. We create cinematic 3D content\n' +
      'that hooks your audience in seconds, boosts\n' +
      'engagement, and drives real sales impact\n' +
      'across every platform.',
    cta: 'Watch Demo',
    href: '#projects',          // ⬅️ también a Projects
  },
  {
    img: '/images/foco-services.jpg',
    imgAlt: 'Gold lightbulb',
    title: 'Creative\nBrand Direction',
    copy:
      'Consistency builds brands. We craft clear,\n' +
      'strategic visuals that strengthen recognition,\n' +
      'maximize shelf impact, and position you\n' +
      'ahead of the competition.',
    cta: "Let’s Strategy",
    href: '#contact',           // ⬅️ a Get in Touch (ajustá al id real si es otro)
  },
]

const Card: React.FC<Service> = ({ img, imgAlt, title, copy, cta, href }) => (
  <div
    className="
      relative isolate overflow-hidden rounded-[24px]
      border border-yellow-200/20
      flex flex-col h-full pt-10 pb-7 md:px-9 bg-black
    "
    style={{
      boxShadow:
        'inset 0 0 0 1px rgba(250,255,5,0.06), inset 0 -80px 120px rgba(160,160,0,0.18)'
    }}
  >
    <span
      aria-hidden
      className="pointer-events-none absolute rounded-[22px]"
      style={{ boxShadow: 'inset 0 0 0 1px rgba(250,255,5,0.08)' }}
    />

    {/* IMAGEN */}
    <div
      role="img"
      aria-label={imgAlt}
      className="relative z-0 w-full h-[170px] md:h-[150px] lg:h-[170px] rounded-[24px]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
      }}
    />

    {/* OVERLAY */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[24px] z-[2]"
      style={{
        mixBlendMode: 'screen',
        backgroundImage: `
          radial-gradient(120% 70% at 50% 100%,
            rgba(170,180,0,0.36) 0%,
            rgba(120,120,0,0.22) 28%,
            rgba(80,80,0,0.10) 55%,
            rgba(0,0,0,0.00) 72%),
          radial-gradient(140% 35% at 50% 0%,
            rgba(255,255,200,0.12) 0%,
            rgba(255,255,200,0.06) 12%,
            rgba(0,0,0,0.00) 32%)
        `,
        WebkitMaskImage:
          'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 38%, rgba(255,255,255,0) 70%)'
      }}
    />

    {/* CONTENIDO */}
    <div className="relative z-10 flex flex-col flex-1 items-center text-center gap-5 pb-2 md:pb-2 pt-6">
      <h3 className="font-poppins font-extrabold text-white leading-[1.05] text-[7.5vw] md:text-[clamp(22px,2.2vw,32px)]">
        {title.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
      </h3>
      <p className="font-poppins text-[#faff05] text-[3.3vw] md:text-[clamp(10px,0.95vw,14px)] pb-2 leading-snug max-w-[80ch] whitespace-pre-line">
        {copy}
      </p>

      {/* CTA */}
      <Link
        href={href}
        scroll
        onClick={(e) => {
          if (href.startsWith('#')) {
            e.preventDefault()
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }}
        role="button"
        className="mt-auto inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-[#faff05] text-black font-poppins font-semibold text-[15px] hover:-translate-y-[1px] transition-transform"
      >
        {cta}
      </Link>
    </div>
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
              flex gap-4 overflow-x-auto px-4 scrollbar-hide
              snap-x snap-mandatory scroll-smooth
            "
            aria-label="Services carousel"
          >
            {services.map((s, i) => (
              <div key={i} className="snap-center shrink-0 w-[88vw]">
                <Card {...s} />
              </div>
            ))}
            <div className="shrink-0 w-[4vw]" />
          </div>
        </div>

        {/* Desktop: 3 columnas */}
        <div className="hidden md:flex justify-center gap-6">
          {services.map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
