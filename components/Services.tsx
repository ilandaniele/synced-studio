// components/Services.tsx
'use client'
import React from 'react'
import Image from 'next/image'

const servicesData = [
  {
    title: '3D MODELING',
    description: `
We turn your product into impressive 3D renders that shine across every touchpoint:
Shelves, Ads, Social Media, E-commerce, Email Marketing, Billboards, and More.
`,
  },
  {
    title: '3D ANIMATION & VFX',
    description:
      'We shape visual narratives that grab attention, spark curiosity, and drive sales, through 3D Animations that make your brand impossible to ignore.',
  },
  {
    title: 'CREATIVE BRAND DIRECTION',
    description:
      'We craft disruptive concepts and brand strategies that elevate your identity across every platform. From campaigns to immersive brand experiences, we make sure your message feels fresh, clear, and unforgettable. Because iconic brands don’t just follow culture, they shape it.',
  },
]

const Services: React.FC = () => {
  return (
    <section className="bg-[#160d09] text-white py-28 px-4">
      <h2 className="text-7xl md:text-8xl font-black mb-30 text-center font-poppins font-bold">
        SERVICES
      </h2>

      <div className="max-w-7xl mx-auto space-y-12">
        {servicesData.map((svc, i) => (
          <div
            key={i}
            className="
              group
              flex
              items-baseline                 /* Sin hover: baseline */
              group-hover:items-start        /* Con hover: top */
              space-x-4
              border-b border-gray-600
              pb-8 last:border-b-0
              h-44 md:h-52                    /* altura fija */
            "
          >
            {/* Número convertido en imagen */}
            <div className="-ml-2 flex-shrink-0">
              <Image
                src={`/images/${String(i + 1).padStart(2, '0')}.png`}
                alt={String(i + 1).padStart(2, '0')}
                width={170}
                height={96}
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Contenido */}
            <div className="pl-14 flex flex-col justify-center items-start w-full -translate-y-3 group-hover:-translate-y-17">
              {/* Título en Poppins Bold */}
              <h3
                className="
                  font-poppins font-bold
                  text-4xl md:text-7xl tracking-tight text-left
                  transition-all duration-300
                  group-hover:text-2xl group-hover:md:text-4xl
                "
              >
                {svc.title}
              </h3>

              {/* Descripción en Poppins Regular */}
              <p
                className="
                  font-poppins font-normal
                  mt-2 text-lg md:text-xl text-gray-300 leading-snug
                  opacity-0 max-h-0 overflow-hidden
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:max-h-40
                "
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
        ))}
      </div>
    </section>
  )
}

export default Services
