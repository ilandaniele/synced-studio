'use client'
import React from 'react'
import Link from 'next/link'
import { SERVICES } from '@/constants/services'
import { smoothScrollToElement } from '@/lib/utils'
import type { Service } from '@/types'

// ServiceCard component
const ServiceCard = React.memo<Service>(({ img, imgAlt, title, copy, cta, href }) => {
  const handleClick = React.useCallback((e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      smoothScrollToElement(href)
    }
  }, [href])

  return (
    <div
      className="
        relative isolate overflow-hidden rounded-[24px]
        border border-yellow-200/20
        flex flex-col h-full pt-8 pb-6 md:px-7 bg-black
      "
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
        className="pointer-events-none absolute inset-[1px] rounded-[23px] z-[2]"
        style={{
          mixBlendMode: 'screen',
          backgroundImage: `
            radial-gradient(120% 85% at 50% 120%,
              rgba(170,180,0,0.36) 0%,
              rgba(120,120,0,0.22) 28%,
              rgba(80,80,0,0.10) 55%,
              rgba(0,0,0,0.00) 72%)
          `
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col flex-1 items-center text-center gap-4 pb-2 md:pb-2 pt-5">
        <h3 className="font-poppins font-extrabold text-white leading-[1.05] text-[6.5vw] md:text-[1.7vw]">
          {title.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
        </h3>
        <p className="font-poppins text-[#faff05] text-[3vw] md:text-[0.9vw] leading-snug whitespace-pre-line px-5 md:px-0">
          {copy}
        </p>

        {/* CTA */}
        <Link
          href={href}
          scroll
          onClick={handleClick}
          role="button"
          className="mt-auto inline-flex items-center justify-center rounded-full px-5 py-2 bg-[#faff05] text-black font-poppins font-semibold text-[14px] hover:-translate-y-[1px] transition-transform"
        >
          {cta}
        </Link>
      </div>
    </div>
  )
})
ServiceCard.displayName = 'ServiceCard'

// Main Services component
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
            {SERVICES.map((service, index) => (
              <div key={index} className="snap-center shrink-0 w-[88vw]">
                <ServiceCard {...service} />
              </div>
            ))}
            <div className="shrink-0 w-[4vw]" />
          </div>
        </div>

        {/* Desktop: 4 columnas */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
