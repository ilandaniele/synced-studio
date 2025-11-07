'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/constants/projects'
import { useIsMobile } from '@/hooks'





export default function Projects() {
  const isMobile = useIsMobile()
  const [expanded, setExpanded] = useState(false)

  const visibleProjects = React.useMemo(() => {
    if (expanded) return PROJECTS
    const projectsWithThumbnails = PROJECTS.filter(p => p.thumb)
    return projectsWithThumbnails.slice(0, 8)
  }, [expanded])

  const Placeholder = React.memo(() => (
    <div className="absolute inset-px rounded-2xl flex items-center justify-center bg-[#000000] ring-1 ring-white/20">
      <Image
        src="placeholder.svg"
        alt=""
        width={300}
        height={300}
        className="opacity-40"
        priority
      />
    </div>
  ))
  Placeholder.displayName = 'Placeholder'

  return (
    <>
      <section id="projects" className="pt-[6vw] pb-[6vw] md:pt-[3vw] md:pb-[2vw] px-5 md:px-10">
        <h2 className="text-5xl font-bold font-poppins text-center text-[#faff05]">PROJECTS</h2>
        <p className="text-center font-poppins md:text-lg lg:text-2xl text-white mb-8 md:mb-10">
          Behind every design, there’s a purpose. Behind every project, a result.
        </p>

        {/* LISTA DE PROYECTOS - FLEX WRAP CENTRADO */}
        <div className="relative pb-20 md:pb-24">
          {/* centramos TODO el conjunto y damos un gutter mínimo */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap md justify-center md:gap-x-3 gap-3">
            {/* <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-3"> */}
            {/* ⬇️ REEMPLAZÁ todo el map actual por este */}
            {visibleProjects.map((p, i) => {
              if (isMobile && i >= visibleProjects.length - 2) return null;

              const hasImage = !!p.thumb

              // Oculta en mobile los que tengan la flag
              if (isMobile && p.disappearOnMobile) return null

              return (
                <div
                  key={p.id}
                  className="basis-1/3 md:basis-1/5 mx-0.5 mb-1 bg-transparent"
                >
                  <Link
                    href={`/portfolio#project-${p.id}`}
                    className={[
                      'relative mx-auto aspect-[3/4] rounded-2xl overflow-hidden group block',
                      hasImage ? 'bg-[#111]' : 'bg-transparent',
                      p.gallery.length > 0
                        ? 'cursor-pointer hover:scale-[1.02] md:hover:scale-[1.04] transition-transform duration-300'
                        : ''
                    ].join(' ')}
                  >
                    {hasImage ? (
                      <>
                        <Image
                          src={p.thumb}
                          alt=""
                          fill
                          unoptimized
                          sizes="(max-width:768px) 50vw, 25vw"
                          className="absolute inset-0 object-contain"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 flex items-end justify-center">
                          {p.gallery.length > 0 && (
                            <span className="mb-3 bg-[#faff05] text-black px-4 py-2 rounded-full text-xs md:text-sm font-bold font-poppins opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg uppercase">
                              View More
                            </span>
                          )}
                        </div>
                      </>
                    ) : (
                      <Placeholder />
                    )}
                  </Link>
                </div>
              )
            })}
          </div>


          {/* DIFUMINADO + BOTÓN */}

          {/* BOTÓN + FADE */}
          {!expanded ? (
            // "View More" — superpuesto sobre las imágenes
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -translate-y-15 md:-translate-y-22 flex flex-col items-center z-30">
              {/* Fade negro suave detrás del botón */}
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[99%] md:w-[85%] h-30 bg-gradient-to-t from-black/90 via-black/90 to-transparent"></div>

              <Link
                href="/portfolio"
                aria-label="View More Projects"
                className="pointer-events-auto w-[98%] md:w-[85%]
                          rounded-full px-6 md:px-8 py-3 md:py-3.5 font-poppins font-semibold text-[#000000]
                          bg-[#faff05]
                          hover:scale-[1.01] active:scale-[0.99] transition will-change-transform
                          text-center block"
              >
                View More Projects
              </Link>
            </div>
          ) : (
            // "View Less" — debajo del grid, sin superponer
            <div className="mt-10 md:mt-12 flex justify-center z-10">
              <button
                onClick={() => setExpanded(false)}
                aria-label="View Less Projects"
                className="w-[98%] md:w-[85%]
                          rounded-full px-6 md:px-8 py-3 md:py-3.5 font-poppins font-semibold text-[#000000]
                          bg-[#faff05]
                          hover:scale-[1.01] active:scale-[0.99] transition will-change-transform"
              >
                View Less Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
