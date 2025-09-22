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
      'Accelerate your go to market. Our 3D product ' +
      'visuals let you test, launch, and sell faster, ' +
      'without waiting for production. Eye catching, ' +
      'cost effective, and built to convert.',
    cta: 'See Examples',
    href: '#projects',
  },
  {
    img: '/images/cine-services.jpg',
    imgAlt: 'Gold clapperboard',
    title: 'Cinematic 3D\nAnimation & VFX',
    copy:
      'Stories sell. We create cinematic 3D content ' +
      'that hooks your audience in seconds, boosts ' +
      'engagement, and drives real sales impact ' +
      'across every platform.',
    cta: 'Watch Demo',
    href: '#projects',
  },
  {
    img: '/images/foco-services.jpg',
    imgAlt: 'Gold lightbulb',
    title: 'Creative\nBrand Direction',
    copy:
      'Consistency builds brands. We craft clear, ' +
      'strategic visuals that strengthen recognition, ' +
      'maximize shelf impact, and position you ' +
      'ahead of the competition.',
    cta: "Let’s Strategy",
    href: '#contact',
  },
  // ✅ Nuevo servicio (placeholder image por ahora)
  {
    img: '/images/placeholder-services.jpg', // poné el asset que quieras luego
    imgAlt: 'Placeholder',
    title: 'Hire Us\nMonthly Partner',
    copy:
      'Work with us on a monthly retainer. Send as many ' +
      'requests as you want within scope, we handle, refine, ' +
      'and deliver fast. Priority queue, weekly check-ins, ' +
      'and rapid turnarounds—your creative team on demand.',
    cta: 'Hire Us',
    href: '#contact',
  },
]

const Card: React.FC<Service> = ({ img, imgAlt, title, copy, cta, href }) => (
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
      className="relative z-0 w-full h-[150px] md:h-[130px] lg:h-[150px] rounded-[24px]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
      }}
    />

    {/* OVERLAY (solo desde abajo, sin halo arriba ni en esquinas) */}
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
        onClick={(e) => {
          if (href.startsWith('#')) {
            e.preventDefault()
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }}
        role="button"
        className="mt-auto inline-flex items-center justify-center rounded-full px-5 py-2 bg-[#faff05] text-black font-poppins font-semibold text-[14px] hover:-translate-y-[1px] transition-transform"
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

        {/* Desktop: 4 columnas (mantiene tamaños) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
