'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const logos = [
  { src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/662cd6dd-41cd-4cff-ab72-e4f605e1dd62/Outlook-ea4djg5y.png", alt: "Glad" },
  { src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/c88396ae-abc4-490f-849c-1a1a9fe25d8c/Logo.png", alt: "Perfect Ted" },
  { src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/e0288289-5355-4c07-a906-a9432d4a9095/AK+logo.png", alt: "Aquela Kombucha" },
  { src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/757bb5e4-f632-4f6a-94dc-746e35a0494a/Logo.png", alt: "Modhaus" },
  { src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/8176ed26-38ca-4268-a8f3-34245624d0e5/Therealstudio_logo+copy.png", alt: "The Real Studio" },
  { src: "/images/Reeses_logo.jpg", alt: "Reese's" },
];

const TrustedBy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef       = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 1) Recogemos todas las <img> y esperamos a que cada una termine de cargar
    const imgs = Array.from(container.querySelectorAll('img'))
    const loadPromises = imgs.map(img =>
      img.complete
        ? Promise.resolve()
        : new Promise<void>(resolve => {
            img.onload = () => resolve()
            img.onerror = () => resolve()
          })
    )

    Promise.all(loadPromises).then(() => {
      // 2) Una vez cargadas, medimos scrollWidth correctamente
      const half = container.scrollWidth / 2
      container.scrollLeft = half

      const speed = 0.5 // píxeles por frame
      const step = () => {
        if (container.scrollLeft <= 0) {
          container.scrollLeft = half
        } else {
          container.scrollLeft -= speed
        }
        rafRef.current = requestAnimationFrame(step)
      }

      rafRef.current = requestAnimationFrame(step)
    })

    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section className="bg-[#160d09] text-white pb-10 overflow-hidden">
      <div className="pt-10 max-w-7xl mx-auto text-center">
        <h2 className="text-sm font-semibold tracking-widest mb-8">TRUSTED BY:</h2>
        <div
          ref={containerRef}
          className="flex items-center gap-8 overflow-hidden whitespace-nowrap px-4 py-4"
        >
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0" style={{ width: 120, margin: '0 12px' }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                unoptimized
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
