'use client'
import React from 'react'

const services = [
  {
    title: "3D",
    lines: ["PRODUCT", "VISUALIZATION", "MODELING", "RENDERING"]
  },
  {
    title: "3D ANIMATION",
    lines: ["FOOH", "VFX"]
  },
  {
    title: "LAYOUT VISUALS",
    lines: ["EMAILMARKEING", "ETC"]
  }
]

const Services: React.FC = () => {
  return (
    <section className="bg-[#160d09] text-white text-center py-28 px-6">
      <h2 className="text-6xl md:text-7xl font-bold mb-24 tracking-tight">SERVICES</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-y-20 gap-x-20 flex-wrap">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f7e8d3] text-black rounded-[40px] w-[360px] h-[420px] flex flex-col justify-center items-center px-8 text-base font-bold tracking-wide shadow-md"
          >
            <p className="mb-1">{service.title}</p>
            {service.lines.map((line, idx) => (
              <p key={idx} className="mb-1">{line}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
