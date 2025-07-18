// components/Services.tsx
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa'

const servicesData = [
  {
    title: 'LAYOUT DESIGNS & 3D MODELING',
    description: `
We turn your product into impressive 3D renders that shine across every touchpoint:
Shelves, Ads, Social Media, E-commerce, Email Marketing, and Billboards.
`,
  },
  {
    title: '3D ANIMATION & VFX',
    description: `
We shape visual narratives that grab attention, spark curiosity, 
and drive sales, through 3D Animations that make your brand impossible to ignore.
`,
  },
  {
    title: 'CREATIVE BRAND DIRECTION',
    description: `
We craft disruptive concepts and brand strategies that elevate your identity across 
every platform. From campaigns to immersive brand experiences, we make sure 
your message feels fresh, clear, and unforgettable. Because iconic brands don’t 
follow culture, they shape it.
`,
  },
]

const Services: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setActiveCard(prev => (prev === index ? null : index))
  }

  return (
    <section id="services" className="text-white py-28 px-4">
      <h2 className="text-5xl mb-4 text-center font-poppins font-bold text-[#faff05]">
        SERVICES
      </h2>
      <p className="text-center font-poppins text-lg md:text-xl mb-12 text-gray-300">
        How we shape attention into action.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((svc, i) => (
          <div
            key={i}
            className="relative bg-[#1a1a1a] rounded-xl overflow-hidden aspect-[15/16] cursor-pointer transition-all duration-500"
            onClick={() => setActiveCard(null)}
          >
            {/* Flecha */}
            <button
              className="absolute top-4 right-4 z-20 bg-[#faff05] text-black rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation()
                toggleCard(i)
              }}
            >
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  activeCard === i ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Contenido */}
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500">
              <div
                className={`flex items-center space-x-2 text-center transition-transform duration-500 ${
                  activeCard === i ? '-translate-y-28' : 'translate-y-0'
                }`}
              >
                <Image
                  src={`/images/${String(i + 1).padStart(2, '0')}.png`}
                  alt={String(i + 1).padStart(2, '0')}
                  width={60}
                  height={60}
                  className="object-contain"
                  unoptimized
                />
                <h3 className="font-poppins font-bold text-xl md:text-2xl">
                  {svc.title}
                </h3>
              </div>
            </div>

            {/* Descripción */}
            <p
              className={`absolute bottom-6 left-6 right-6 text-center font-poppins text-sm md:text-base text-gray-300 px-4 transition-all duration-500 ${
                activeCard === i ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
              } overflow-hidden`}
            >
              {svc.description
                .trim()
                .split('\n')
                .map((line, idx, arr) => (
                  <React.Fragment key={idx}>
                    {line.trim()}
                    {idx < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
