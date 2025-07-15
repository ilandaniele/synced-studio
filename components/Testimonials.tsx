// components/Testimonials.tsx
'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

interface Testimonial {
  brandLogo: string
  personPhoto: string
  rating: number
  text: string
  author: string
  role?: string
  initialColor?: string
  finalColor?: string
}

const testimonials: Testimonial[] = [
  {
    brandLogo: '/images/THEREALSTUDIO_logo.jpg',
    personPhoto: '/images/THEREALSTUDIO_person.jpg',
    rating: 5,
    text: 'Super good! We loved the animation so much that we placed it in our landing page background.',
    author: 'Jose Real',
    role: 'The Real Studio Founder',
    initialColor: '#373737',
    finalColor: '#0f0f0f',
  },
  {
    brandLogo: '/images/alimp_logo.jpg',
    personPhoto: '/images/alimp_person.jpg',
    rating: 5,
    text: 'Synced turned a vague idea into stunning 3D visuals that boosted our product and sales, professional, seamless, and highly recommended.',
    author: "Alimp’s Founder",
    initialColor: '#802d1a',
    finalColor: '#100700',
  },
  {
    brandLogo: '/images/TheCoconutCollab_logo.jpg',
    personPhoto: '/images/TheCoconutCollab_person.jpg',
    rating: 4,
    text: 'Synced work was fast, effective and useful. They made our product launch a success with their captivating visuals.',
    author: 'Edward Averdieck',
    role: 'The Coconut Collab',
    initialColor: '#006c7f',
    finalColor: '#000c10',
  },
  {
    brandLogo: '/images/glad_logo.jpg',
    personPhoto: '/images/glad_person.jpg',
    rating: 5,
    text: 'They understood my vision from a brief message. Super smooth process, amazing results. Highly recommend for 3D animations!',
    author: 'Katrin Cavalcanti',
    role: "Glad’s Founder",
    initialColor: '#7f6000',
    finalColor: '#100b00',
  },
  {
    brandLogo: '/images/aquelaKombucha_logo.jpg',
    personPhoto: '/images/aquelaKombucha_person.jpg',
    rating: 4,
    text: 'The content didn’t just look amazing, it made strangers remember us!',
    author: 'Maria Lima',
    role: "Aquela Kombucha’s Founder",
    initialColor: '#00217f',
    finalColor: '#010010',
  },
  {
    brandLogo: '/images/Reeses_logo_testimonial.jpg',
    personPhoto: '/images/Reeses_person.jpg',
    rating: 4,
    text: 'We will definitely use Synced again, good experience.',
    author: 'Fred Trevor',
    role: "Reese’s Graphic Designer",
    initialColor: '#7f2500',
    finalColor: '#100500',
  },
  {
    brandLogo: '/images/PerfectTed_logo.jpg',
    personPhoto: '/images/PerfectTed_person.jpg',
    rating: 4,
    text: 'Our work with Synced was super fast and helpful.',
    author: 'Marisa Poster',
    role: "PerfectTed’s Founder",
    initialColor: '#007f48',
    finalColor: '#001005',
  },
  {
    brandLogo: '/images/helpbnk_logo.jpg',
    personPhoto: '/images/helpbnk_person.jpg',
    rating: 5,
    text: 'Synced helped us visualize how we imagined our brand’s tone and voice.',
    author: 'Will Waite',
    role: 'HelpBnk Marketing Director',
    initialColor: '#00547f',
    finalColor: '#000810',
  },
  {
    brandLogo: '/images/ModHaus_logo.jpg',
    personPhoto: '/images/ModHaus_person.jpg',
    rating: 5,
    text: 'Instantly got our brand vision, delivered fast and exceeded my expectations. Great communication throughout. Highly recommend!',
    author: 'Aaron von Kreisler',
    role: "ModHaus’s Founder",
    initialColor: '#7f2500',
    finalColor: '#100500',
  },
]

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const speed = 0.5
    const container = containerRef.current!
    const step = () => {
      const half = container.scrollWidth / 2
      container.scrollLeft -= speed
      if (container.scrollLeft <= 0) {
        container.scrollLeft += half
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const looped = [...testimonials, ...testimonials]

  // Elige el PNG de estrellas según rating (4, 4.5 ó 5)
  function getStarsImage(rating: number) {
    if (rating >= 5) return '/images/5stars.png'
    if (rating >= 4.5) return '/images/4.5stars.png'
    if (rating >= 4) return '/images/4stars.png'
    return '/images/4stars.png'
  }

  return (
    <section className="text-white py-16 overflow-hidden">
      <h2 className="text-4xl md:text-4xl font-bold text-[#faff05] font-poppins text-center mb-12">
        COMMENTS
      </h2>
      <div
        ref={containerRef}
        className="flex gap-8 overflow-x-hidden no-scrollbar px-4"
      >
        {looped.map((t, i) => {
          // Genera el degradado CSS para fondo+avatar
          const start = t.initialColor || '#0F1521'
          const end = t.finalColor || '#000000'
          const gradientCSS = `linear-gradient(to bottom, ${start}, ${end})`

          return (
            <div
              key={i}
              className="inline-block rounded-2xl flex-shrink-0"
              style={{
                width: 370,
                height: 'fit-content',
                background: gradientCSS,
              }}
            >
              {/* ─── CABECERA DEL TESTIMONIAL ─── */}
              <div className="flex items-center h-32 px-9 pt-4 relative">
                {/* Logo de la marca */}
                <div className="relative w-17 h-17 rounded-xl overflow-hidden flex-shrink-0 z-0">
                  <Image
                    src={t.brandLogo}
                    alt={`Logo de ${t.author}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Avatar + estrellas */}
                <div className="flex items-center">
                  {/* Borde del avatar con el mismo degradado */}
                  {/* ─── Avatar + borde “transparente” ─── */}
                  <div className="relative flex-shrink-0 -translate-x-[0.5rem] z-10">
                    {/* 2) La propia imagen del avatar, encima del borde */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent pointer-events-none" />
                    <div className="relative w-18 h-18 rounded-full overflow-hidden">
                      <Image
                        src={t.personPhoto}
                        alt={`Foto de ${t.author}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>


                  {/* PNG de estrellas (más grande) */}
                  <div className="flex-shrink-0">
                    <Image
                      src={getStarsImage(t.rating)}
                      alt={`${t.rating} stars`}
                      width={160}    /* ancho real: 160px */
                      height={32}    /* alto real: 32px */
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* ─── CUERPO DEL TESTIMONIAL ─── */}
              <div className="px-10 pb-9 flex flex-col justify-start">
                <p className="pt-2 text-left text-md leading-snug break-words">
                  “{t.text}”
                </p>
                <p className="pt-5 text-left text-gray-200 text-sm whitespace-normal overflow-visible">
                  {t.author}
                  {t.role && ` – ${t.role}`}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
