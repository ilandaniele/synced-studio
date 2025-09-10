'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  subtitle: string
  thumb: string
  gallery: string[]
}

const projects: Project[] = [
  { id: 1,  title: "Hershey's",     subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/hersheys/1.jpg',        gallery: ['/images/projects/hersheys/1.jpg'] },
  { id: 2,  title: 'Perfect Ted',   subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/perfect_ted/1.jpg',     gallery: ['/images/projects/perfect_ted/1.jpg', '/images/projects/perfect_ted/2.jpg'] },
  { id: 3,  title: 'Raise',         subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/raise/1.jpg',           gallery: ['/images/projects/raise/1.jpg', '/images/projects/raise/2.jpg', '/images/projects/raise/3.jpg', '/images/projects/raise/4.jpg', '/images/projects/raise/5.jpg', '/images/projects/raise/6.jpg'] },
  { id: 4,  title: "Reese's",       subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/reeses/1.jpg',          gallery: ['/images/projects/reeses/1.jpg', '/images/projects/reeses/2.jpg', '/images/projects/reeses/3.jpg', '/images/projects/reeses/4.jpg', '/images/projects/reeses/5.jpg', '/images/projects/reeses/6.mp4', '/images/projects/reeses/7.jpg'] },
  { id: 5,  title: 'Monaco', subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/monaco/1.jpg', gallery: ['/images/projects/monaco/1.jpg'] },
  { id: 6, title: 'Glad',          subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/glad/1.jpg',            gallery: ['/images/projects/glad/1.jpg', '/images/projects/glad/2.jpg', '/images/projects/glad/3.jpg'] },
  { id: 7, title: 'Zumino',        subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/zumino/1.jpg',          gallery: ['/images/projects/zumino/1.jpg', '/images/projects/zumino/2.mp4'] },
  { id: 8,  title: 'Huel',          subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/huel/1.jpg',            gallery: ['/images/projects/huel/1.jpg', '/images/projects/huel/2.png', '/images/projects/huel/3.jpg', '/images/projects/huel/4.mp4'] },
  { id: 9,  title: 'Aquela Kombucha', subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/aquela_kombucha/1.jpg', gallery: ['/images/projects/aquela_kombucha/1.jpg', '/images/projects/aquela_kombucha/2.jpg', '/images/projects/aquela_kombucha/3.mp4', '/images/projects/aquela_kombucha/4.jpg', '/images/projects/aquela_kombucha/5.jpg', '/images/projects/aquela_kombucha/6.jpg'] },
  // { id: 6,  title: "Diana's",       subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/dianas/1.jpg',          gallery: ['/images/projects/dianas/1.jpg'] },
  // { id: 8, title: 'Almonds & Chocos', subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/almonds/1.jpg',      gallery: ['/images/projects/almonds/1.jpg', '/images/projects/almonds/2.jpg', '/images/projects/almonds/3.jpg', '/images/projects/almonds/4.jpg', '/images/projects/almonds/5.jpg'] },
  { id: 10,  title: '', subtitle: '', thumb: '', gallery: [] },
  { id: 11,  title: '', subtitle: '', thumb: '', gallery: [] },
  { id: 12,  title: '', subtitle: '', thumb: '', gallery: [] }
]

export default function Projects() {
  const [openModal, setOpenModal] = useState(false)
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0)
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number>(0)
  const [isMobile, setIsMobile] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const visibleProjects = React.useMemo(() => {
    if (expanded) return projects
    const onlyWithThumb = projects.filter(p => p.thumb)
    return onlyWithThumb.slice(0, 8)
  }, [expanded])

  const openCarousel = (visibleIndex: number) => {
    const proj = visibleProjects[visibleIndex]
    if (!proj || proj.gallery.length === 0) return
    const realIdx = projects.findIndex(p => p.id === proj.id)
    if (realIdx !== -1) {
      setActiveProjectIdx(realIdx)
      setActiveGalleryIdx(0)
      setOpenModal(true)
    }
  }

  const project = projects[activeProjectIdx] || { gallery: [], title: '', subtitle: '' }
  const gallery = project.gallery || []
  const total = gallery.length
  const prev = () => { if (total > 0) setActiveGalleryIdx(i => (i - 1 + total) % total) }
  const next = () => { if (total > 0) setActiveGalleryIdx(i => (i + 1) % total) }

  const renderMedia = (src: string, className = '') => {
    if (src.endsWith('.mp4')) {
      return (
        <video
          src={src}
          className={`w-full h-auto max-h-[60vh] md:max-h-[70vh] rounded-lg object-contain mx-auto max-w-[92vw] md:max-w-none ${className}`}
          autoPlay loop muted playsInline
        />
      )
    }
    return (
      <Image
        src={src}
        alt=""
        width={700}
        height={525}
        className={`w-full h-auto max-h-[60vh] md:max-h-[70vh] rounded-lg object-contain mx-auto max-w-[92vw] md:max-w-none ${className}`}
        unoptimized
      />
    )
  }

  const Placeholder = () => (
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
  )

  return (
    <>
      <section id="projects" className="py-[14vw] md:py-[6vw] px-5 md:px-10">
        <h2 className="text-5xl font-bold font-poppins text-center text-[#faff05]">PROJECTS</h2>
        <p className="text-center font-poppins md:text-lg lg:text-2xl text-white mb-8 md:mb-10">
          Behind every design, there’s a purpose. Behind every project, a result.
        </p>

        {/* LISTA DE PROYECTOS - FLEX WRAP CENTRADO */}
        <div className="relative pb-20 md:pb-24">
          {/* centramos TODO el conjunto y damos un gutter mínimo */}
          <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-3">
            {visibleProjects.map((p, i) => {
              const hasImage = !!p.thumb
              return (
                <div
                  key={p.id}
                  className="basis-1/3 md:basis-1/5 mb-3 bg-transparent"
                  onClick={() => p.gallery.length > 0 && openCarousel(i)}
                >
                  <div
                    className={[
                      // antes: 'w-full'
                      'relative mx-auto aspect-[3/4] rounded-2xl overflow-hidden group',
                      hasImage ? 'bg-[#111]' : 'bg-transparent',
                      p.gallery.length > 0 ? 'cursor-pointer hover:scale-[1.02] md:hover:scale-[1.04] transition-transform duration-300' : ''
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
                  </div>
                </div>
              )
            })}
          </div>

          {/* DIFUMINADO + BOTÓN */}

          {/* BOTÓN + FADE */}
          {!expanded ? (
            // "View More" — superpuesto sobre las imágenes
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -translate-y-15 md:-translate-y-25 flex flex-col items-center z-30">
              {/* Fade negro suave detrás del botón */}
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[75%] md:w-[83.2%] h-30 bg-gradient-to-t from-black/90 via-black/90 to-transparent"></div>

              <button
                onClick={() => setExpanded(true)}
                aria-label="View More Projects"
                className="pointer-events-auto w-[75%] md:w-[85%]
                          rounded-full px-6 md:px-8 py-3 md:py-3.5 font-poppins font-semibold text-[#faff05]
                          ring-1 ring-white/90
                          bg-[linear-gradient(90deg,rgba(109,97,33,1)_0%,rgba(44,39,6,1)_25%,rgba(44,39,6,1)_75%,rgba(109,97,33,1)_100%)]
                          hover:scale-[1.01] active:scale-[0.99] transition will-change-transform"
              >
                View More Projects
              </button>
            </div>
          ) : (
            // "View Less" — debajo del grid, sin superponer
            <div className="mt-10 md:mt-12 flex justify-center z-10">
              <button
                onClick={() => setExpanded(false)}
                aria-label="View Less Projects"
                className="w-[75%] md:w-[85%]
                          rounded-full px-6 md:px-8 py-3 md:py-3.5 font-poppins font-semibold text-[#faff05]
                          ring-1 ring-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,.25)]
                           bg-[linear-gradient(90deg,rgba(148,150,9,1)_0%,rgb(142,127,44)_25%,rgba(82,73,20,1)_50%,rgb(142,127,44)_75%,rgba(148,150,9,1)_100%)]
                          hover:scale-[1.01] active:scale-[0.99] transition will-change-transform"
              >
                View Less Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* MODAL / CARRUSEL */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md z-10" onClick={() => setOpenModal(false)} />
          <div className="relative max-w-7xl w-full px-4 z-20 mt-6 md:mt-12">
            <div
              className={`${
                isMobile
                  ? 'relative top-0 left-0 translate-x-0 w-[95vw] max-w-[480px] mx-auto mb-3'
                  : 'absolute -top-20 left-1/2 -translate-x-1/2 max-w-[700px]'
              } bg-black border border-white/20 rounded-full flex items-center justify-between z-30 shadow-lg px-4 md:px-6 py-3 md:py-4 gap-4`}
            >
              <div className="text-white font-poppins text-sm md:text-md flex flex-col flex-grow truncate">
                <div className="font-bold leading-tight">{project.title}</div>
                <div className="text-white/70 leading-tight">{project.subtitle}</div>
              </div>
              <button
                onClick={() => setOpenModal(false)}
                className="bg-[#faff05] text-black rounded-full p-2 hover:scale-125 transition flex-shrink-0"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className={`flex items-center relative ${isMobile ? 'gap-4' : 'justify-center gap-8 overflow-hidden'}`}>
              {isMobile ? (
                total === 1 ? (
                  <div className="w-[90vw] max-w-[520px] mx-auto">
                    {renderMedia(gallery[0])}
                  </div>
                ) : (
                  <div className="overflow-x-auto scroll-snap-x snap-x snap-mandatory scrollbar-hide gap-4 flex w-full">
                    {gallery.map((src, idx) => (
                      <div key={idx} className="flex-shrink-0 w-[85%] max-w-[500px] snap-center flex justify-center px-2">
                        <div className="w-full">{renderMedia(src)}</div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                total === 1 ? (
                  <div className="flex-shrink-0 w-[300px] mx-auto transform transition-all duration-300 scale-100 opacity-100">
                    {renderMedia(gallery[0])}
                  </div>
                ) : (
                  [activeGalleryIdx - 1, activeGalleryIdx, activeGalleryIdx + 1].map((offset, pos) => {
                    const idx = (offset + total) % total
                    return (
                      <div
                        key={pos}
                        className={`flex-shrink-0 w-[300px] transform transition-all duration-300 ${pos === 1 ? 'scale-100 opacity-100' : 'scale-75 opacity-100'}`}
                      >
                        {renderMedia(gallery[idx])}
                      </div>
                    )
                  })
                )
              )}
            </div>

            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-[#faff05] text-black rounded-full p-2 hover:scale-125 transition z-30"
                  aria-label="Previous"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-[#faff05] text-black rounded-full p-2 hover:scale-125 transition z-30"
                  aria-label="Next"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
