'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const logos = [
  { src: "/images/coconut_bw.png",        alt: "The Coconut Collaborative" },
  { src: "/images/separator.png",         alt: "" },
  { src: "/images/aquela_kombucha_bw.png",alt: "Aquela Kombucha" },
  { src: "/images/separator.png",         alt: "" },
  { src: "/images/glad_bw.png",           alt: "Glad" },
  { src: "/images/separator.png",         alt: "" },
  { src: "/images/perfect_ted_bw.png",    alt: "Perfect Ted" },
  { src: "/images/separator.png",         alt: "" },
  { src: "/images/hersheys_bw.png",       alt: "Hershey´s" },
  { src: "/images/separator.png",         alt: "" },
  { src: "/images/raise_bw.png",          alt: "Raise" },
  { src: "/images/separator.png",         alt: "" },
  { src: "/images/reeses_bw.png",         alt: "Reese's" },
  { src: "/images/separator.png",         alt: "" },
  { src: "/images/zumino_bw.png",         alt: "Zumino" },
  { src: "/images/separator.png",         alt: "" },
]

export default function TrustedBy() {
  const contentRef = useRef<HTMLDivElement>(null)
  const rafRef     = useRef<number>(0)
  const posRef     = useRef<number>(0)

  useEffect(() => {
    const speed = 1.8

    const step = () => {
      posRef.current -= speed
      if (contentRef.current) {
        const width = contentRef.current.scrollWidth / 2
        if (Math.abs(posRef.current) >= width) {
          posRef.current = 0
        }
        contentRef.current.style.transform = `translateX(${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(step)
    }

    step()
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section className="text-white overflow-hidden w-full h-full">
      <div
        className="flex items-center gap-0 whitespace-nowrap w-full h-full will-change-transform"
        ref={contentRef}
      >
        {[...logos, ...logos].map((logo, i) => {
          const isSeparator = logo.alt === ""
          const width       = isSeparator ? '2vw' : '12vw'
          const marginX     = isSeparator ? '1vw' : '0.001vw'

          return (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                width: width,
                height: '100%',
                margin: `0 ${marginX}`,
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                unoptimized
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
