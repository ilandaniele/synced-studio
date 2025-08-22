'use client'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const servicesData = [
  {
    number: '01',
    title: 'LAYOUT DESIGNS & 3D MODELING',
    description: `
We turn your product into impressive 3D renders that shine across every touchpoint: Shelves, Ads, Social Media, E-commerce, Email Marketing, and Billboards.
    `,
  },
  {
    number: '02',
    title: '3D ANIMATION & VFX',
    description: `
We shape visual narratives that grab attention, spark curiosity, and drive sales, through 3D Animations that make your brand impossible to ignore.
    `,
  },
  {
    number: '03',
    title: 'CREATIVE BRAND DIRECTION',
    description: `
We craft disruptive concepts with strategies that elevate your identity across every platform. Campaigns to immersive brand experiences. Because iconic brands don’t follow culture, they shape it.
    `,
  },
]

const Services: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const toggleCard = (index: number) => {
    setActiveCard(prev => (prev === index ? null : index))
  }

  return (
    <section id="services" className="text-white py-[14vw] md:py-[6vw] px-4">
      <h2 className="text-5xl text-center font-poppins font-bold text-[#faff05]">
        SERVICES
      </h2>
      <p className="text-center font-poppins md:text-lg lg:text-2xl text-white mb-[5vw]">
        How we shape attention into action.
      </p>

      <div
        className="
          mx-auto
          flex gap-2 scroll-smooth scrollbar-hide
          overflow-x-auto snap-x snap-mandatory
          md:overflow-visible md:snap-none
          md:flex-row md:flex-nowrap md:justify-center
          md:gap-10
        "
      >
        {servicesData.map((svc, i) => (
          <div
            key={i}
            onClick={() => toggleCard(i)}
            className={`
              relative rounded-3xl overflow-hidden border border-yellow-200/20
              transition-all duration-500 cursor-pointer
              w-[80vw] h-[65vw] flex-shrink-0 snap-center
              ${i === 0 ? 'ml-[10vw] md:ml-0' : ''}
              ${i === servicesData.length - 1 ? 'mr-[10vw] md:mr-0' : ''}
              md:flex-col md:max-w-[22vw]
              md:h-[min(28vw,440px)] lg:h-[min(26vw,480px)] xl:h-[min(22vw,520px)] 2xl:h-[min(20vw,560px)]
            `}
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,0,0.05) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.6) 70%, rgba(255,255,0,0.05) 100%)',
            }}
          >
            {/* CONTENEDOR INTERNO */}
            <div
              className={`
                absolute inset-0 flex flex-col pt-[4vw] pb-[2vw] px-[6vw]
                md:pt-[0.7vw] md:pb-[0.4vw] md:px-[2.2vw]
                justify-between
              `}
            >
              {/* Bloque superior: número + botón */}
              <div className="flex items-center justify-between">
                <div className="font-poppins font-bold text-[7vw] md:text-[3vw] xl:text-[3.5vw]">
                  {svc.number}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleCard(i)
                  }}
                  aria-label="Toggle service"
                  className="bg-[#faff05] text-black rounded-full p-[2vw] md:p-[0.9vw] xl:p-[0.8vw] transition-transform"
                >
                  <FaChevronDown
                    className={`transition-transform duration-300 ${activeCard === i ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {/* Bloque inferior: título + descripción */}
              <div
                className={`
                  flex flex-col
                  ${activeCard === i ? 'mt-auto mb-[4vw] md:mb-[1.2vw]' : 'justify-end'}
                `}
              >
                <h3
                  className={`
                    font-poppins font-bold transition-all duration-300
                    ${activeCard === i
                      ? 'text-[4vw] md:text-[clamp(20px,1.6vw,28px)] 2xl:text-[1.0vw]'
                      : 'text-[7vw] md:text-[clamp(28px,2.4vw,42px)] 2xl:text-[clamp(32px,2vw,48px)]'}
                  `}
                >
                  {svc.title}
                </h3>

                <p
                  className={`
                    text-yellow-500 font-poppins transition-all duration-300 overflow-hidden
                    mt-[2vw] md:mt-[1vw]
                    text-[3.5vw] md:text-[clamp(14px,0.95vw,18px)]
                    ${activeCard === i ? 'opacity-100 max-h-[60vw] md:max-h-[18vw]' : 'opacity-0 max-h-0'}
                  `}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
