'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    logo: 'https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/662cd6dd-41cd-4cff-ab72-e4f605e1dd62/Outlook-ea4djg5y.png',
    alt: 'Glad',
    text: 'Amazing service and stunning visuals!'
  },
  {
    logo: 'https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/c88396ae-abc4-490f-849c-1a1a9fe25d8c/Logo.png',
    alt: 'Perfect Ted',
    text: 'Great communication and quick turnaround.'
  },
  {
    logo: 'https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/e0288289-5355-4c07-a906-a9432d4a9095/AK+logo.png',
    alt: 'Aquela Kombucha',
    text: 'The quality of the content is superb!'
  },
  {
    logo: 'https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/757bb5e4-f632-4f6a-94dc-746e35a0494a/Logo.png',
    alt: 'Modhaus',
    text: 'They nailed the branding on the first try.'
  }
]

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<number>(0)
  const animationRef = useRef<number | null>(null)

  const animate = () => {
    const container = containerRef.current
    if (container) {
      container.scrollLeft += scrollRef.current

      const scrollLeft = container.scrollLeft
      const scrollWidth = container.scrollWidth
      // const containerWidth = container.clientWidth

      // Si llegamos al final, volvemos al medio (que tiene el mismo contenido)
      if (scrollLeft >= scrollWidth / 2) {
        container.scrollLeft = scrollLeft - scrollWidth / 2
      }

      // Si llegamos al principio, empujamos hacia la mitad del scroll (que tiene lo mismo)
      if (scrollLeft <= 0) {
        container.scrollLeft = scrollLeft + scrollWidth / 2
      }
    }
    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (event: WheelEvent) => {
      scrollRef.current = event.deltaY > 0 ? 1.5 : -1.5
    }

    // Seteamos scroll al medio al montar
    container.scrollLeft = container.scrollWidth / 4

    window.addEventListener('wheel', handleWheel)
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <section className="bg-black text-white py-16 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-[#f7e8d3] text-center mb-12">
        What clients are saying
      </h2>
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap no-scrollbar px-[10vw] py-4"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="inline-block bg-[#f7e8d3] text-black rounded-[60px] w-[280px] h-[400px] flex flex-col justify-start items-start px-6 pt-6 shrink-0"
          >
            <Image
              src={testimonial.logo}
              alt="Client logo"
              width={80}
              height={80}
              className="h-12 w-auto object-contain mb-8"
              unoptimized
            />
            <p className="text-left">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials