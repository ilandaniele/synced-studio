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
    brandLogo: '/images/gladLOGO.jpg',
    personPhoto: '/images/Gladfoto.jpg',
    rating: 5,
    text: 'They understood my vision from a brief message. Super smooth process, amazing results. Highly recommend for 3D animations!',
    author: 'Katrin Cavalcanti',
    role: "Glad’s Founder",
    initialColor: '#7f6000',
    finalColor: '#100b00',
  },
  {
    brandLogo: '/images/ModHausLOGO.jpg',
    personPhoto: '/images/ModHausfoto.jpg',
    rating: 5,
    text: 'Instantly got our brand vision, delivered fast and exceeded my expectations. Great communication throughout. Highly recommend!',
    author: 'Aaron von Kreisler',
    role: "ModHaus’s Founder",
    initialColor: '#7f2500',
    finalColor: '#100500',
  },
  {
    brandLogo: '/images/AlimpLOGO.jpg',
    personPhoto: '/images/Alimpfoto.jpg',
    rating: 5,
    text: 'Synced turned a vague idea into stunning 3D visuals that boosted our product and sales, professional, seamless, and highly recommended.',
    author: "Alimp’s Founder",
    initialColor: '#802d1a',
    finalColor: '#100700',
  },
  {
    brandLogo: '/images/AquelakombuchaLOGO.jpg',
    personPhoto: '/images/Aquelakombuchafoto.jpg',
    rating: 4,
    text: 'The content didn’t just look amazing, it made strangers remember us!',
    author: 'Maria Lima',
    role: "Aquela Kombucha’s Founder",
    initialColor: '#00217f',
    finalColor: '#010010',
  },
  {
    brandLogo: '/images/ReesesLOGO.jpg',
    personPhoto: '/images/Reesesfoto.jpg',
    rating: 4,
    text: 'We will definitely use Synced again, good experience.',
    author: 'Fred Trevor',
    role: "Reese’s Graphic Designer",
    initialColor: '#7f2500',
    finalColor: '#100500',
  },
  {
    brandLogo: '/images/TheCoconutCollabLOGO.jpg',
    personPhoto: '/images/TheCoconutCollabfoto.jpg',
    rating: 4,
    text: 'Synced work was fast, effective and useful. They made our product launch a success with their captivating visuals.',
    author: 'Edward Averdieck',
    role: 'The Coconut Collab Founder',
    initialColor: '#006c7f',
    finalColor: '#000c10',
  },
  {
    brandLogo: '/images/THEREALSTUDIOLOGO.jpg',
    personPhoto: '/images/THEREALSTUDIOfoto.jpg',
    rating: 5,
    text: 'Super good! We loved the animation so much that we placed it in our landing page background.',
    author: 'Jose Real',
    role: 'The Real Studio Founder',
    initialColor: '#373737',
    finalColor: '#0f0f0f',
  },
  {
    brandLogo: '/images/PerfectTedLOGO.jpg',
    personPhoto: '/images/PerfectTedFoto.jpg',
    rating: 4,
    text: 'Our work with Synced was super fast and helpful.',
    author: 'Marisa Poster',
    role: "PerfectTed’s Founder",
    initialColor: '#007f48',
    finalColor: '#001005',
  },
  {
    brandLogo: '/images/helpbnkLOGO.jpg',
    personPhoto: '/images/helpbnkfoto.jpg',
    rating: 5,
    text: 'Synced helped us visualize how we imagined our brand’s tone and voice.',
    author: 'Will Waite',
    role: 'HelpBnk Marketing Director',
    initialColor: '#00547f',
    finalColor: '#000810',
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
    <section className="bg-black text-white py-16 overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-medium text-[#F7E8D3] text-center mb-12">
        What clients are saying
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
                width: 500,
                height: 400,
                background: gradientCSS,
              }}
            >
              {/* ─── CABECERA DEL TESTIMONIAL ─── */}
              <div className="flex items-center h-32 px-10 pt-10 relative">
                {/* Logo de la marca */}
                <div className="relative w-22 h-22 rounded-xl overflow-hidden flex-shrink-0">
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
                  <div
                    className="rounded-full p-2 flex-shrink-0 -translate-x-[0.5rem] z-10"
                    style={{ background: gradientCSS }}
                  >
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
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
                  <div className="pl-4">
                    <Image
                      src={getStarsImage(t.rating)}
                      alt={`${t.rating} stars`}
                      width={240}   /* Aumenté un poco el ancho */
                      height={140}  /* Aumenté el alto */
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* ─── CUERPO DEL TESTIMONIAL ─── */}
              <div className="px-10 pb-10 flex flex-col justify-between h-[calc(100%-128px)]">
                <p className="pt-8 text-left text-2xl leading-snug break-words">
                  “{t.text}”
                </p>
                <p className="text-left text-gray-200 text-lg truncate">
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
