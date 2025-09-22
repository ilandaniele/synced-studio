'use client'
import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { PROJECTS } from '@/constants/projects'
import { useIsMobile } from '@/hooks'





export default function Projects() {
  const [openModal, setOpenModal] = useState(false)
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0)
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number>(0)
  const isMobile = useIsMobile()
  const [expanded, setExpanded] = useState(false)

  const visibleProjects = React.useMemo(() => {
    if (expanded) return PROJECTS
    const projectsWithThumbnails = PROJECTS.filter(p => p.thumb)
    return projectsWithThumbnails.slice(0, 8)
  }, [expanded])

  const openCarousel = useCallback((visibleIndex: number) => {
    const selectedProject = visibleProjects[visibleIndex]
    if (!selectedProject || selectedProject.gallery.length === 0) return
    const projectIndex = PROJECTS.findIndex(p => p.id === selectedProject.id)
    if (projectIndex !== -1) {
      setActiveProjectIdx(projectIndex)
      setActiveGalleryIdx(0)
      setOpenModal(true)
    }
  }, [visibleProjects])

  const currentProject = PROJECTS[activeProjectIdx] || { gallery: [], title: '', subtitle: '' }
  const galleryItems = currentProject.gallery || []
  const totalItems = galleryItems.length
  const prev = useCallback(() => { 
    if (totalItems > 0) setActiveGalleryIdx(i => (i - 1 + totalItems) % totalItems) 
  }, [totalItems])
  const next = useCallback(() => { 
    if (totalItems > 0) setActiveGalleryIdx(i => (i + 1) % totalItems) 
  }, [totalItems])

  const renderMedia = useCallback((src: string, className = '') => {
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
  }, [])

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
                  onClick={() => p.gallery.length > 0 && openCarousel(i)}
                >
                  <div
                    className={[
                      'relative mx-auto aspect-[3/4] rounded-2xl overflow-hidden group',
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
                  </div>
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

              <button
                onClick={() => setExpanded(true)}
                aria-label="View More Projects"
                className="pointer-events-auto w-[98%] md:w-[85%]
                          rounded-full px-6 md:px-8 py-3 md:py-3.5 font-poppins font-semibold text-[#000000]
                          bg-[#faff05]
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
                <div className="font-bold leading-tight">{currentProject.title}</div>
                <div className="text-white/70 leading-tight">{currentProject.subtitle}</div>
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
                totalItems === 1 ? (
                  <div className="w-[90vw] max-w-[520px] mx-auto">
                    {renderMedia(galleryItems[0])}
                  </div>
                ) : (
                  <div className="overflow-x-auto scroll-snap-x snap-x snap-mandatory scrollbar-hide gap-4 flex w-full">
                    {galleryItems.map((src: string, idx: number) => (
                      <div key={idx} className="flex-shrink-0 w-[85%] max-w-[500px] snap-center flex justify-center px-2">
                        <div className="w-full">{renderMedia(src)}</div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                totalItems === 1 ? (
                  <div className="flex-shrink-0 w-[300px] mx-auto transform transition-all duration-300 scale-100 opacity-100">
                    {renderMedia(galleryItems[0])}
                  </div>
                ) : (
                  [activeGalleryIdx - 1, activeGalleryIdx, activeGalleryIdx + 1].map((offset, pos) => {
                    const itemIndex = (offset + totalItems) % totalItems
                    return (
                      <div
                        key={pos}
                        className={`flex-shrink-0 w-[300px] transform transition-all duration-300 ${pos === 1 ? 'scale-100 opacity-100' : 'scale-75 opacity-100'}`}
                      >
                        {renderMedia(galleryItems[itemIndex])}
                      </div>
                    )
                  })
                )
              )}
            </div>

            {totalItems > 1 && (
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
