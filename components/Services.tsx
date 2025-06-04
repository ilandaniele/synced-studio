// components/Services.tsx
'use client'
import React from 'react'

const servicesData = [
  {
    title: '3D MODELING',
    description:
      'We turn your product into impressive 3D renders that shine across every touchpoint: Shelves, Ads, Social Media, E-commerce, Email Marketing, Billboards, and More.',
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
      <h2 className="text-7xl md:text-8xl font-black mb-30 text-center">
        SERVICES
      </h2>

      <div className="max-w-7xl mx-auto space-y-12">
        {servicesData.map((svc, i) => (
          <div
            key={i}
            className="
              group
              flex
              items-baseline                 /* ← 1) Sin hover: alinea número y título por la línea base */
              group-hover:items-start         /* ← 2) En hover: alinea número y título por el top */
              space-x-4
              border-b border-gray-600
              pb-8 last:border-b-0
              h-44 md:h-52                    /* ← altura fija para evitar que 'PROJECTS' suba/baje */
            "
          >
            {/* ─── Número (Su baseline nunca cambia) ─── */}
            <span className="text-8xl md:text-9xl font-extrabold leading-none -ml-2">
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* ─── Contenido (Título + Descripción) ─── */}
            <div className="pl-10 flex flex-col justify-center items-start w-full group-hover:-translate-y-17">
              {/* 
                Título:
                  - Sin hover: su línea base coincide con la del número (porque el contenedor es items-baseline).
                  - Con hover: el contenedor cambia a items-start, así que el top del número y el top del título coinciden.
                  - Ajustamos el tamaño en hover (text-2xl/md:text-4xl). NO necesitamos ningún translate extra.
              */}
              <h3
                className="
                  text-4xl md:text-7xl font-semibold tracking-tight text-left
                  transition-all duration-300
                  group-hover:text-2xl group-hover:md:text-4xl
                "
              >
                {svc.title}
              </h3>

              {/* 
                Descripción (solo visible en hover):
                  - Sin hover: opacity-0 + max-h-0 => colapsada.
                  - Con hover: opacity-100 + max-h-40 => aparece justo debajo del título.
              */}
              <p
                className="
                  mt-2
                  text-lg md:text-xl text-gray-300 leading-snug
                  opacity-0 max-h-0 overflow-hidden
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:max-h-40
                "
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
