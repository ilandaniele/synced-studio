'use client'
import React from 'react'

const servicesData = [
  {
    title: '3D MODELING',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    title: '3D ANIMATION & VFX',
    description:
      'High-quality, photorealistic renders that showcase designs with realistic lighting, textures, and shadows.',
  },
  {
    title: 'CREATIVE BRAND DIRECTION',
    description:
      'We craft disruptive concepts and brand strategies that elevate your identity across every platform. From campaigns to immersive brand experiences, we make sure your message feels fresh, clear, and unforgettable.',
  },
]

const Services: React.FC = () => {
  return (
    <section className="bg-[#160d09] text-white py-28 px-4">
      <h2 className="text-7xl md:text-8xl font-black mb-30 text-center">SERVICES</h2>
      <div className="max-w-7xl mx-auto space-y-12">
        {servicesData.map((svc, i) => (
          <div
            key={i}
            className="group flex items-center space-x-4 border-b border-gray-600 pb-8 last:border-b-0"
          >
            {/* Número */}
            <span
              className="text-8xl md:text-9xl font-extrabold leading-none -ml-2 transition-transform duration-300 group-hover:-translate-y-2"
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Contenido */}
            <div className="flex flex-col items-start w-full mx-12">
              {/* Título centrado verticalmente, animado con el número */}
              <h3
                className="text-4xl md:text-7xl font-semibold mb-2 tracking-tight text-left transition-all duration-300 group-hover:text-2xl group-hover:md:text-4xl group-hover:-translate-y-2"
              >
                {svc.title}
              </h3>

              {/* Descripción oculta hasta hover */}
              <p
                className="text-lg md:text-xl text-gray-300 leading-snug opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-40 group-hover:translate-y-0"
              >
                {svc.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
