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
}

const testimonials: Testimonial[] = [
  {
    brandLogo: '/images/gladLOGO.jpg',
    personPhoto: '/images/Gladfoto.jpg',
    rating: 5,
    text: '“They understood my vision from a brief message. Super smooth process, amazing results. Highly recommend for 3D animations!”',
    author: 'Katrin Cavalcanti',
    role: "Glad’s Founder"
  },
  {
    brandLogo: '/images/ModHausLOGO.jpg',
    personPhoto: '/images/ModHausfoto.jpg',
    rating: 5,
    text: '“Instantly got our brand vision, delivered fast and exceeded my expectations. Great communication throughout. Highly recommend!”',
    author: 'Aaron von Kreisler',
    role: "ModHaus’s Founder"
  },
  {
    brandLogo: '/images/AlimpLOGO.jpg',
    personPhoto: '/images/Alimpfoto.jpg',
    rating: 5,
    text: '“Synced turned a vague idea into stunning 3D visuals that boosted our product and sales, professional, seamless, and highly recommended.”',
    author: "Alimp’s Founder"
  },
  {
    brandLogo: '/images/AquelakombuchaLOGO.jpg',
    personPhoto: '/images/Aquelakombuchafoto.jpg',
    rating: 4,
    text: '“The content didn’t just look amazing, it made strangers remember us!”',
    author: 'Maria Lima',
    role: "Aquela Kombucha’s Founder"
  },
  {
    brandLogo: '/images/Reese’sLOGO.jpg',
    personPhoto: '/images/Reese’sfoto.jpg',
    rating: 4,
    text: '“We will definitely use Synced again, good experience.”',
    author: 'Fred Trevor',
    role: "Reese’s Graphic Designer"
  },
  {
    brandLogo: '/images/TheCoconutCollabLOGO.jpg',
    personPhoto: '/images/TheCoconutCollabfoto.jpg',
    rating: 4,
    text: '“Synced work was fast, effective and useful. They made our product launch a success with their captivating visuals.”',
    author: 'Edward Averdieck',
    role: 'The Coconut Collab Founder'
  },
  {
    brandLogo: '/images/THEREALSTUDIOLOGO.jpg',
    personPhoto: '/images/THEREALSTUDIOfoto.jpg',
    rating: 5,
    text: '“Super good! We loved the animation so much that we placed it in our landing page background.”',
    author: 'Jose Real',
    role: 'The Real Studio Founder'
  },
  {
    brandLogo: '/images/PerfectTedLOGO.jpg',
    personPhoto: '/images/PerfectTedFoto.jpg',
    rating: 4,
    text: '“Our work with Synced was super fast and helpful.”',
    author: 'Marisa Poster',
    role: "PerfectTed’s Founder"
  },
  {
    brandLogo: '/images/helpbnkLOGO.jpg',
    personPhoto: '/images/helpbnkfoto.jpg',
    rating: 5,
    text: '“Synced helped us visualize how we imagined our brand’s tone and voice.”',
    author: 'Will Waite',
    role: 'HelpBnk Marketing Director'
  }
]

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const speed = 0.5 // px por frame
    const container = containerRef.current!
    const step = () => {
      const half = container.scrollWidth / 2
      container.scrollLeft += speed
      if (container.scrollLeft >= half) container.scrollLeft -= half
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const looped = [...testimonials, ...testimonials]

  return (
    <section className="bg-black text-white py-16 overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-medium text-[#F7E8D3] text-center mb-12">
        What clients are saying
      </h2>
      <div
        ref={containerRef}
        className="flex gap-8 overflow-x-hidden no-scrollbar px-4"
      >
        {looped.map((t, i) => (
          <div
            key={i}
            className="inline-block bg-[#0F1521] rounded-2xl flex-shrink-0"
            style={{ width: 300, height: 360 }}
          >
            {/* ─── CABECERA ─── */}
            <div className="flex items-center h-32 px-6 relative">
              {/* logo de marca */}
              <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={t.brandLogo}
                  alt={`Logo de ${t.author}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              {/* avatar + rating */}
              <div className="flex items-center ml-auto space-x-4">
                {/* avatar desplazado sobre el logo */}
                <div className="relative w-14 h-14 -translate-x-4 rounded-full overflow-hidden border-2 border-[#F7E8D3] flex-shrink-0 z-10">
                  <Image
                    src={t.personPhoto}
                    alt={`Foto de ${t.author}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* estrellas */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <span key={k} className="text-yellow-400 text-3xl">★</span>
                  ))}
                  {Array.from({ length: 5 - t.rating }).map((_, k) => (
                    <span key={k} className="text-gray-600 text-3xl">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── TEXTO ─── */}
            <div className="px-6 pb-4 flex flex-col justify-between h-[calc(100%-128px)]">
              <p className="text-left text-lg leading-snug mb-4 break-words">
                “{t.text}”
              </p>
              <p className="text-left text-gray-400 text-sm">
                {t.author}{t.role && ` – ${t.role}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
