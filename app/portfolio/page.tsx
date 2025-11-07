'use client'
import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/constants/projects'
import { useIsMobile } from '@/hooks'

// Mapeo de fotos de personas por proyecto
const projectPersonPhotos: Record<string, string> = {
  "Hershey's": '/images/THEREALSTUDIO_person.jpg',
  'Perfect Ted': '/images/PerfectTed_person.jpg',
  'Raise': '/images/THEREALSTUDIO_person.jpg',
  "Reese's": '/images/Reeses_person.jpg',
  'Monaco': '/images/THEREALSTUDIO_person.jpg',
  'Glad': '/images/glad_person.jpg',
  'Zumino': '/images/THEREALSTUDIO_person.jpg',
  'Huel': '/images/THEREALSTUDIO_person.jpg',
  'Aquela Kombucha': '/images/aquelaKombucha_person.jpg',
}

export default function PortfolioPage() {
  const [openModal, setOpenModal] = useState(false)
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0)
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number>(0)
  const isMobile = useIsMobile()

  // Filtrar solo proyectos con contenido
  const portfolioProjects = React.useMemo(() => {
    return PROJECTS.filter(p => p.thumb && p.gallery.length > 0)
  }, [])

  // Scroll automático al proyecto específico desde URL hash
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const projectId = hash.replace('#project-', '')
      const element = document.getElementById(`project-${projectId}`)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [])

  const openCarousel = useCallback((projectIndex: number) => {
    const selectedProject = portfolioProjects[projectIndex]
    if (!selectedProject || selectedProject.gallery.length === 0) return
    const realIndex = PROJECTS.findIndex(p => p.id === selectedProject.id)
    if (realIndex !== -1) {
      setActiveProjectIdx(realIndex)
      setActiveGalleryIdx(0)
      setOpenModal(true)
    }
  }, [portfolioProjects])

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

  return (
    <div className="min-h-screen bg-black">
      {/* Header con botón de regreso */}
      <header className="fixed top-0 left-0 w-full px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between z-40 bg-black/50 backdrop-blur-md">
        <Link href="/">
          <Image
            src="/images/synced_logo_yellow.png"
            alt="Synced Logo"
            width={120}
            height={40}
            className="object-contain cursor-pointer"
            unoptimized
            priority
          />
        </Link>
        <Link
          href="/#projects"
          className="bg-[#faff05] text-black font-poppins text-sm font-bold px-4 py-2 rounded-full hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </header>

      <main className="pt-24 pb-12 px-5 md:px-10">
        {/* Header con Título y Estadísticas */}
        <div className="max-w-7xl mx-auto mb-8 md:mb-12">
          {/* Layout Desktop: Título izquierda, Stats derecha */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 mb-4 md:mb-6">
            {/* Left: Título */}
            <div className="text-left">
              <h1 className="text-[#faff05] text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-2">
                PORTFOLIO
              </h1>
              <p className="text-white/80 font-poppins text-xs md:text-sm max-w-2xl">
                Focused in finding and providing solutions about design,
                <br className="hidden md:block" />
                aiming in collaborative, accessible and professional environment.
              </p>
            </div>

            {/* Right: Estadísticas */}
            <div className="flex gap-8 md:gap-12 lg:gap-16 flex-shrink-0">
              <div className="text-left md:text-center">
                <div className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-poppins">+7</div>
                <div className="text-white/60 text-[10px] md:text-xs font-poppins uppercase tracking-wider">
                  YEARS EXPERIENCE
                </div>
              </div>
              <div className="text-left md:text-center">
                <div className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-poppins">+23</div>
                <div className="text-white/60 text-[10px] md:text-xs font-poppins uppercase tracking-wider">
                  PROJECTS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proyectos agrupados */}
        {portfolioProjects.map((project, projectIdx) => (
          <div key={project.id} id={`project-${project.id}`} className="mb-12 md:mb-20 scroll-mt-24">
            {/* Header del proyecto - Card con fondo difuminado */}
            <div className="max-w-7xl mx-auto mb-6 md:mb-8">
              <div 
                className="relative rounded-3xl md:rounded-4xl border border-yellow-200/20 bg-black p-6 md:p-8"
                style={{
                  backgroundImage: 'linear-gradient(to top, rgba(57,60,5,0.50) 0%, rgba(57,60,5,0.20) 32%, rgba(57,60,5,0.00) 62%, rgba(57,60,5,0.00) 100%)'
                }}
              >
                <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left: Logo + Title + Description */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-xs md:text-sm font-bold text-black">LOGO</div>
                      </div>
                      <div>
                        <h2 className="text-white text-xl md:text-2xl font-bold font-poppins">
                          {project.title}
                        </h2>
                        <p className="text-white/60 text-xs md:text-sm font-poppins">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
                      We created a series of 3D product renders for {project.title}, designed to simulate a high-end product photoshoot. Through realistic lighting, material accuracy, and compositional balance, the visuals highlight the product&apos;s texture and packaging identity blending the look of studio photography with the control of CGI.
                    </p>
                  </div>

                  {/* Right: Photo + Stars + Review (Layout Vertical) */}
                  <div className="flex flex-col items-center md:items-end gap-3 flex-shrink-0">
                    {/* Person Photo + Stars - Juntos */}
                    <div className="flex items-center gap-3">
                      {/* Person Photo */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 outline outline-4 outline-black">
                        <Image
                          src={projectPersonPhotos[project.title] || '/images/THEREALSTUDIO_person.jpg'}
                          alt="Client"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      {/* Stars */}
                      <div className="flex text-[#faff05]">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Review Text - Más abajo */}
                    <div className="flex flex-col gap-4 max-w-md text-right">
                      <p className="text-white text-sm md:text-base leading-snug">
                        &quot;We will definitely use Synced again, great experience.&quot;
                      </p>
                      
                      {/* Author - Mucho más abajo */}
                      <p className="text-white/50 text-xs md:text-sm">
                        Client Name · {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid de imágenes del proyecto */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto">
              {project.gallery.map((media, mediaIdx) => {
                const isVideo = media.endsWith('.mp4')
                return (
                  <div
                    key={mediaIdx}
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] group cursor-pointer hover:scale-[1.02] md:hover:scale-[1.04] transition-transform duration-300"
                    onClick={() => openCarousel(projectIdx)}
                  >
                    {isVideo ? (
                      <video
                        src={media}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <Image
                        src={media}
                        alt={`${project.title} ${mediaIdx + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                        loading={projectIdx === 0 && mediaIdx < 4 ? "eager" : "lazy"}
                        quality={85}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </main>

      {/* Footer simple */}
      <footer className="w-full bg-[#faff05] py-4 text-center">
        <p className="text-black font-poppins text-sm">
          © 2025 Synced Studio - All rights reserved
        </p>
      </footer>

      {/* MODAL / CARRUSEL (igual que en Projects) */}
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
    </div>
  )
}