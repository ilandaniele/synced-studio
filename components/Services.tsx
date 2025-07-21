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
    <section id="services" className="text-white py-[10vw] px-4">
      <h2 className="text-5xl text-center font-poppins font-bold text-[#faff05]">
        SERVICES
      </h2>
      <p className="text-center font-poppins md:text-lg lg:text-2xl text-white mb-[5vw] text-white">
        How we shape attention into action.
      </p>

      <div className="
        max-w-7xl mx-auto 
        md:grid md:grid-cols-3 md:gap-[2vw] 
        flex overflow-x-auto gap-4
        scroll-smooth snap-x snap-mandatory scrollbar-hide
      ">
        {servicesData.map((svc, i) => (
          <div
            key={i}
            className={`
              relative rounded-xl overflow-hidden
              w-[80vw] h-[65vw] md:h-auto md:w-auto
              aspect-[15/16] md:aspect-[15/16]
              cursor-pointer transition-all duration-500
              flex-shrink-0 snap-center
              ${i === 0 ? 'ml-[10vw] md:ml-0' : ''}
              ${i === servicesData.length -1 ? 'mr-[10vw] md:mr-0' : ''}
              border border-yellow-200/20
            `}
            style={{
              background:
                'linear-gradient(145deg, rgba(250,255,5,0.1), rgba(26,26,26,0.9) 30%, rgba(26,26,26,0.9) 70%, rgba(250,255,5,0.1))',
            }}
            onClick={() => toggleCard(i)}
          >
            {/* Número arriba izq */}
            <div className="absolute top-[2vw] left-[4vw] md:top-[1vw] md:left-[2vw] z-20 font-poppins font-bold text-[7vw] md:text-[5vw]">
              {svc.number}
            </div>

            {/* Flechita arriba der */}
            <button
              className="absolute top-[4vw] right-[4vw] md:top-[2vw] md:right-[2vw] z-20 bg-[#faff05] text-black rounded-full p-[2vw] md:p-[1.3vw]"
              onClick={(e) => {
                e.stopPropagation()
                toggleCard(i)
              }}
            >
              <FaChevronDown
                className={`transition-transform duration-300 ${activeCard === i ? 'rotate-180' : ''}`}
              />
            </button>

            <div className="absolute inset-0 flex flex-col p-[4vw] md:p-[2vw] justify-between">
              <div className={`transition-all duration-500 ${activeCard === i ? 'mt-[10vw] md:mt-[6vw]' : 'mt-[20vw] md:mt-[10vw]'}`}>
                <h3 className={`font-poppins font-bold transition-all duration-500 ${activeCard === i ? 'text-[4vw] md:text-[1.3vw]' : 'text-[7vw] md:text-[2.6vw]'}`}>
                  {svc.title}
                </h3>
              </div>

              <p className={`mb-[2vw] md:mb-[1vw] text-[3.8vw] md:text-[1.3vw] font-poppins text-yellow-500 transition-all duration-500 ${activeCard === i ? 'opacity-100 max-h-[60vw] md:max-h-[30vw]' : 'opacity-0 max-h-0'} overflow-hidden`}>
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
        ))}
      </div>
    </section>
  )
}

export default Services
