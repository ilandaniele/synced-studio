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
    brandLogo: '/images/THEREALSTUDIO_logo.jpg',
    personPhoto: '/images/THEREALSTUDIO_person.jpg',
    rating: 5,
    text: 'Super good! We loved the animation so much that we placed it in our landing page background.',
    author: 'Jose Real',
    role: 'The Real Studio Founder',
  },
  {
    brandLogo: '/images/alimp_logo.jpg',
    personPhoto: '/images/alimp_person.jpg',
    rating: 5,
    text: 'Synced turned a vague idea into stunning 3D visuals that boosted our product and sales, professional, seamless, and highly recommended.',
    author: "Alimp’s Founder",
  },
  {
    brandLogo: '/images/TheCoconutCollab_logo.jpg',
    personPhoto: '/images/TheCoconutCollab_person.jpg',
    rating: 4,
    text: 'Synced work was fast, effective and useful. They made our product launch a success with their captivating visuals.',
    author: 'Edward Averdieck',
    role: 'The Coconut Collab',
  },
  {
    brandLogo: '/images/glad_logo.jpg',
    personPhoto: '/images/glad_person.jpg',
    rating: 5,
    text: 'They understood my vision from a brief message. Super smooth process, amazing results. Highly recommend for 3D animations!',
    author: 'Katrin Cavalcanti',
    role: "Glad’s Founder",
  },
  {
    brandLogo: '/images/aquelaKombucha_logo.jpg',
    personPhoto: '/images/aquelaKombucha_person.jpg',
    rating: 4,
    text: 'The content didn’t just look amazing, it made strangers remember us!',
    author: 'Maria Lima',
    role: "Aquela Kombucha’s Founder",
  },
  {
    brandLogo: '/images/Reeses_logo_testimonial.jpg',
    personPhoto: '/images/Reeses_person.jpg',
    rating: 4,
    text: 'We will definitely use Synced again, good experience.',
    author: 'Fred Trevor',
    role: "Reese’s Graphic Designer",
  },
  {
    brandLogo: '/images/PerfectTed_logo.jpg',
    personPhoto: '/images/PerfectTed_person.jpg',
    rating: 4,
    text: 'Our work with Synced was super fast and helpful.',
    author: 'Marisa Poster',
    role: "PerfectTed’s Founder",
  },
  {
    brandLogo: '/images/helpbnk_logo.jpg',
    personPhoto: '/images/helpbnk_person.jpg',
    rating: 5,
    text: 'Synced helped us visualize how we imagined our brand’s tone and voice.',
    author: 'Will Waite',
    role: 'HelpBnk Marketing Director',
  },
  {
    brandLogo: '/images/ModHaus_logo.jpg',
    personPhoto: '/images/ModHaus_person.jpg',
    rating: 5,
    text: 'Instantly got our brand vision, delivered fast and exceeded my expectations. Great communication throughout. Highly recommend!',
    author: 'Aaron von Kreisler',
    role: "ModHaus’s Founder",
  },
]

export default function Testimonials() {
  const contentRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const posRef = useRef<number>(0)

  useEffect(() => {
    const speed = 1.8

    const step = () => {
      if (contentRef.current) {
        const width = contentRef.current.scrollWidth / 2
        posRef.current -= speed
        if (Math.abs(posRef.current) >= width) {
          posRef.current = 0
        }
        contentRef.current.style.transform = `translateX(${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const looped = [...testimonials, ...testimonials]

  function getStarsImage(rating: number) {
    if (rating >= 5) return '/images/5stars.png'
    if (rating >= 4.5) return '/images/4.5stars.png'
    if (rating >= 4) return '/images/4stars.png'
    return '/images/4stars.png'
  }

  return (
    <section id="comments" className="text-white py-[14vw] md:py-[6vw] overflow-hidden">
      <h2 className="text-5xl md:text-4xl font-bold text-[#faff05] font-poppins text-center">
        PARTNERS REVIEWS
      </h2>
      <p className="text-center font-poppins lg:text-2xl md:text-xl mb-12 px-4 max-w-2xl mx-auto">
        Results that speak for themselves
      </p>
      <div
        className="flex gap-8 no-scrollbar px-4 will-change-transform"
        ref={contentRef}
      >
        {looped.map((t, i) => (
          <div
            key={i}
            className="rounded-4xl flex-shrink-0 border border-yellow-200/20 flex flex-col"
            style={{
              width: 370,
              minHeight: 240,
              background:
                'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,5,0.05) 100%)',
            }}
          >
            <div className="flex items-center h-32 px-9 pt-6 relative">
              <div className="relative w-17 h-17 rounded-xl overflow-hidden flex-shrink-0 z-0">
                <Image
                  src={t.brandLogo}
                  alt={`Logo de ${t.author}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex items-center">
                <div className="relative flex-shrink-0 -translate-x-[0.5rem] z-10 outline outline-[6px] outline-black rounded-full" >
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
                <div className="flex-shrink-0">
                  <Image
                    src={getStarsImage(t.rating)}
                    alt={`${t.rating} stars`}
                    width={160}
                    height={32}
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <div className="px-10 pt-4 pb-6 flex flex-col justify-between h-3/4">
              <p className="pt-2 text-left text-md leading-snug break-words">
                “{t.text}”
              </p>
              <p className="text-left text-gray-200 text-sm whitespace-normal opacity-50">
                {t.author}
                {t.role && ` – ${t.role}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
