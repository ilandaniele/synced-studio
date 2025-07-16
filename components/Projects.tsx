'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  thumb: string
  gallery: string[]
  ratioClass: string
}

const projects: Project[] = [
  { id: 1, title: "Hershey's", thumb: '/images/projects/hersheys/1.jpg', gallery: ['/images/projects/hersheys/1.jpg'], ratioClass: 'aspect-[3/4]' },
  { id: 2, title: 'Huel', thumb: '/images/projects/huel/1.jpg', gallery: ['/images/projects/huel/1.jpg', '/images/projects/huel/2.png', '/images/projects/huel/3.jpg', '/images/projects/huel/4.mp4'], ratioClass: 'aspect-[9/16]' },
  { id: 3, title: '', thumb: '', gallery: [], ratioClass: 'aspect-[9/16]' },
  { id: 4, title: 'Perfect Ted', thumb: '/images/projects/perfect_ted/1.jpg', gallery: ['/images/projects/perfect_ted/1.jpg', '/images/projects/perfect_ted/2.jpg'], ratioClass: 'aspect-square' },
  { id: 5, title: 'Raise', thumb: '/images/projects/raise/1.jpg', gallery: ['/images/projects/raise/1.jpg', '/images/projects/raise/2.jpg', '/images/projects/raise/3.jpg', '/images/projects/raise/4.jpg', '/images/projects/raise/5.jpg', '/images/projects/raise/6.jpg'], ratioClass: 'aspect-[3/4]' },
  { id: 6, title: 'Aquela Kombucha', thumb: '/images/projects/aquela_kombucha/1.jpg', gallery: ['/images/projects/aquela_kombucha/1.jpg', '/images/projects/aquela_kombucha/2.jpg', '/images/projects/aquela_kombucha/3.mp4', '/images/projects/aquela_kombucha/4.jpg', '/images/projects/aquela_kombucha/5.jpg', '/images/projects/aquela_kombucha/6.jpg'], ratioClass: 'aspect-[9/16]' },
  { id: 7, title: "Diana's", thumb: '/images/projects/dianas/1.jpg', gallery: ['/images/projects/dianas/1.jpg'], ratioClass: 'aspect-[9/16]' },
  { id: 8, title: "Reese's", thumb: '/images/projects/reeses/1.jpg', gallery: ['/images/projects/reeses/1.jpg', '/images/projects/reeses/2.jpg', '/images/projects/reeses/3.jpg', '/images/projects/reeses/4.jpg', '/images/projects/reeses/5.jpg', '/images/projects/reeses/6.mp4', '/images/projects/reeses/7.jpg'], ratioClass: 'aspect-[3/4]' },
  { id: 9, title: '', thumb: '', gallery: [], ratioClass: 'aspect-[3/4]' },
  { id: 10, title: 'Almonds & Chocos', thumb: '/images/projects/almonds/1.jpg', gallery: ['/images/projects/almonds/1.jpg', '/images/projects/almonds/2.jpg', '/images/projects/almonds/3.jpg', '/images/projects/almonds/4.jpg', '/images/projects/almonds/5.jpg'], ratioClass: 'aspect-[3/4]' },
  { id: 11, title: 'Zumino', thumb: '/images/projects/zumino/1.jpg', gallery: ['/images/projects/zumino/1.jpg', '/images/projects/zumino/2.mp4'], ratioClass: 'aspect-[3/4]' },
  { id: 12, title: 'Glad', thumb: '/images/projects/glad/1.jpg', gallery: ['/images/projects/glad/1.jpg', '/images/projects/glad/2.jpg', '/images/projects/glad/3.jpg'], ratioClass: 'aspect-[3/4]' },
]

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0)
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number>(0)

  const openCarousel = (idx: number) => {
    setActiveProjectIdx(idx)
    setActiveGalleryIdx(0)
    setOpen(true)
  }

  const project = projects[activeProjectIdx]
  const gallery = project.gallery
  const total = gallery.length

  const prev = () => {
    setActiveGalleryIdx(i => (i - 1 + total) % total)
  }

  const next = () => {
    setActiveGalleryIdx(i => (i + 1) % total)
  }

  const renderPortrait = (src: string, className = '') => {
    if (src.endsWith('.mp4')) {
      return (
        <video
          src={src}
          className={`w-full h-auto rounded-lg ${className}`}
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
        fill
        className={`object-cover rounded-lg ${className}`}
        unoptimized
      />
    )
  }

  const renderMedia = (src: string, className = '') => {
    if (src.endsWith('.mp4')) {
      return (
        <video
          src={src}
          className={`w-full h-auto rounded-lg ${className}`}
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
        width={800}
        height={600}
        className={`w-full h-auto rounded-lg ${className}`}
        unoptimized
      />
    )
  }

  return (
    <>
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-[#faff05] mb-4">PROJECTS</h2>
        <p className="text-center font-poppins text-lg text-white mb-12">
          Behind every design, there’s a purpose. Behind every project, a result.
        </p>

        <div className="columns-2 md:columns-4 gap-4 space-y-4 relative">
          {projects.map((p, i) => {
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
                  p.gallery.length > 0 ? 'cursor-pointer hover:scale-110' : ''
                ].join(' ')}
              >
                {hasImage && renderPortrait(p.thumb, 'absolute inset-0 object-cover')}

                {p.gallery.length > 0 && (
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 flex items-end justify-center">
                    <span className="
                      mb-4 bg-[#faff05] text-black px-5 py-2 rounded-full 
                      text-sm font-bold font-poppins opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300
                      shadow-lg uppercase
                    ">
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-4 overflow-hidden">
              {total === 1 ? (
                <div className="flex-shrink-0 w-1/3 transform transition-all duration-300 scale-100 opacity-100">
                  {renderMedia(gallery[0], 'object-contain')}
                </div>
              ) : (
                [activeGalleryIdx - 1, activeGalleryIdx, activeGalleryIdx + 1].map((offset, pos) => {
                  const idx = (offset + total) % total
                  return (
                    <div
                      key={pos}
                      className={[
                        'flex-shrink-0 w-1/3 transform transition-all duration-300',
                        pos === 1 ? 'scale-100 opacity-100' : 'scale-75 opacity-50',
                      ].join(' ')}
                    >
                      {renderMedia(gallery[idx], 'object-contain')}
                    </div>
                  )
                })
              )}
            </div>

            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-3xl hover:scale-125 transition"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-3xl hover:scale-125 transition"
                  aria-label="Next"
                >
                  →
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
