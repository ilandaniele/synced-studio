'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  subtitle: string
  thumb: string
  gallery: string[]
  ratioClass: string
}

const projects: Project[] = [
  { id: 1, title: "Hershey's", subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/hersheys/1.jpg', gallery: ['/images/projects/hersheys/1.jpg'], ratioClass: 'aspect-[3/4]' },
  { id: 2, title: 'Huel', subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/huel/1.jpg', gallery: ['/images/projects/huel/1.jpg', '/images/projects/huel/2.png', '/images/projects/huel/3.jpg', '/images/projects/huel/4.mp4'], ratioClass: 'aspect-[9/16]' },
  { id: 3, title: '', subtitle: '', thumb: '', gallery: [], ratioClass: 'aspect-square' },
  { id: 4, title: 'Perfect Ted', subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/perfect_ted/1.jpg', gallery: ['/images/projects/perfect_ted/1.jpg', '/images/projects/perfect_ted/2.jpg'], ratioClass: 'aspect-square' },
  { id: 5, title: 'Raise', subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/raise/1.jpg', gallery: ['/images/projects/raise/1.jpg', '/images/projects/raise/2.jpg', '/images/projects/raise/3.jpg', '/images/projects/raise/4.jpg', '/images/projects/raise/5.jpg', '/images/projects/raise/6.jpg'], ratioClass: 'aspect-[3/4]' },
  { id: 6, title: 'Aquela Kombucha', subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/aquela_kombucha/1.jpg', gallery: ['/images/projects/aquela_kombucha/1.jpg', '/images/projects/aquela_kombucha/2.jpg', '/images/projects/aquela_kombucha/3.mp4', '/images/projects/aquela_kombucha/4.jpg', '/images/projects/aquela_kombucha/5.jpg', '/images/projects/aquela_kombucha/6.jpg'], ratioClass: 'aspect-[9/16]' },
  { id: 7, title: "Diana's", subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/dianas/1.jpg', gallery: ['/images/projects/dianas/1.jpg'], ratioClass: 'aspect-[9/16]' },
  { id: 8, title: "Reese's", subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/reeses/1.jpg', gallery: ['/images/projects/reeses/1.jpg', '/images/projects/reeses/2.jpg', '/images/projects/reeses/3.jpg', '/images/projects/reeses/4.jpg', '/images/projects/reeses/5.jpg', '/images/projects/reeses/6.mp4', '/images/projects/reeses/7.jpg'], ratioClass: 'aspect-[3/4]' },
  { id: 9, title: '', subtitle: '', thumb: '', gallery: [], ratioClass: 'aspect-square' },
  { id: 10, title: 'Almonds & Chocos', subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/almonds/1.jpg', gallery: ['/images/projects/almonds/1.jpg', '/images/projects/almonds/2.jpg', '/images/projects/almonds/3.jpg', '/images/projects/almonds/4.jpg', '/images/projects/almonds/5.jpg'], ratioClass: 'aspect-[3/4]' },
  { id: 11, title: 'Zumino', subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/zumino/1.jpg', gallery: ['/images/projects/zumino/1.jpg', '/images/projects/zumino/2.mp4'], ratioClass: 'aspect-[3/4]' },
  { id: 12, title: 'Glad', subtitle: '01. Layout Design & 3D Modeling', thumb: '/images/projects/glad/1.jpg', gallery: ['/images/projects/glad/1.jpg', '/images/projects/glad/2.jpg', '/images/projects/glad/3.jpg'], ratioClass: 'aspect-[3/4]' },
]

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0)
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number>(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const filteredProjects = isMobile
    ? projects.filter(p => p.title !== '' && p.thumb !== '')
    : projects

  const openCarousel = (filteredIdx: number) => {
    const realIdx = projects.findIndex(p => p.id === filteredProjects[filteredIdx].id)
    if (realIdx !== -1) {
      setActiveProjectIdx(realIdx)
      setActiveGalleryIdx(0)
      setOpen(true)
    }
  }

  const project = projects[activeProjectIdx] || { gallery: [], title: '', subtitle: '' }
  const gallery = project.gallery || []
  const total = gallery.length

  const prev = () => {
    if (total > 0) setActiveGalleryIdx(i => (i - 1 + total) % total)
  }

  const next = () => {
    if (total > 0) setActiveGalleryIdx(i => (i + 1) % total)
  }

  const renderMedia = (src: string, className = '') => {
    if (src.endsWith('.mp4')) {
      return (
        <video
          src={src}
          className={`w-full h-auto max-h-[70vh] rounded-lg object-contain ${className}`}
          autoPlay
          loop
          muted
          playsInline
        />
      )
    }
    return (
      <Image
        src={src}
        alt=""
        width={700}
        height={500}
        className={`w-full h-auto max-h-[70vh] rounded-lg object-contain ${className}`}
        unoptimized
      />
    )
  }

  return (
    <>
      <section id="projects" className="py-[14vw] md:py-[6vw] px-5 md:px-10">
        <h2 className="text-5xl font-bold font-poppins text-center text-[#faff05]">PROJECTS</h2>
        <p className="text-center font-poppins md:text-lg lg:text-2xl text-white mb-12">
          Behind every design, there’s a purpose. Behind every project, a result.
        </p>

        <div className="columns-2 md:columns-4 gap-4 space-y-4 relative">
          {filteredProjects.map((p, i) => {
            const hasImage = !!p.thumb
            return (
              <div
                key={p.id}
                onClick={() => p.gallery.length > 0 && openCarousel(i)}
                className={[
                  'break-inside-avoid mb-4',
                  'group relative w-full rounded-xl overflow-hidden',
                  'z-0 hover:z-50',
                  p.ratioClass,
                  hasImage
                    ? 'bg-[#333] transition-transform duration-300'
                    : 'bg-black/10 border border-white/30 backdrop-blur-sm',
                  p.gallery.length > 0 ? 'cursor-pointer hover:scale-120' : ''
                ].join(' ')}
              >
                {hasImage && (
                  <Image
                    src={p.thumb}
                    alt=""
                    fill
                    className="absolute inset-0 object-cover rounded-lg"
                    unoptimized
                  />
                )}
                {p.gallery.length > 0 && (
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 flex items-end justify-center">
                    <span className="mb-4 bg-[#faff05] text-black px-5 py-2 rounded-full text-sm font-bold font-poppins opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg uppercase">
                      View More
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md z-10"
            onClick={() => setOpen(false)}
          />

          <div className="relative max-w-7xl w-full px-4 z-20 mt-12">

            {/* ✅ Header con título + botón X */}
            <div className="absolute top-[-10vw] left-1/2 -translate-x-1/2 md:top-[-4vw] bg-black border border-white/20 px-4 py-2 rounded-full flex items-center gap-4 z-30">
              <div className="text-white font-poppins text-sm md:text-md">
                <div className="font-bold">{project.title}</div>
                <div className="text-white/70">{project.subtitle}</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="bg-[#faff05] text-black rounded-full p-2 hover:scale-125 transition"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className={`flex items-center relative ${isMobile ? 'overflow-x-auto scroll-snap-x snap-x snap-mandatory scrollbar-hide gap-4' : 'justify-center gap-8 overflow-hidden'}`}>
              {isMobile ? (
                gallery.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[85%] max-w-[500px] snap-center flex justify-center px-2"
                  >
                    <div className="w-full">{renderMedia(src)}</div>
                  </div>
                ))
              ) : (
                total === 1 ? (
                  <div className="flex-shrink-0 w-[300px] transform transition-all duration-300 scale-100 opacity-100">
                    {renderMedia(gallery[0])}
                  </div>
                ) : (
                  [activeGalleryIdx - 1, activeGalleryIdx, activeGalleryIdx + 1].map((offset, pos) => {
                    const idx = (offset + total) % total
                    return (
                      <div
                        key={pos}
                        className={`flex-shrink-0 w-[300px] transform transition-all duration-300 ${
                          pos === 1 ? 'scale-100 opacity-100' : 'scale-75 opacity-100'
                        }`}
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
