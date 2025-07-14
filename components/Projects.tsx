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
  { id: 1,  title: "Hershey's",       thumb: '/images/projects/hersheys/1.jpg',        gallery: ['/images/projects/hersheys/1.jpg'],                                            ratioClass: 'aspect-[3/4]' },
  { id: 2,  title: 'Huel',            thumb: '/images/projects/huel/1.jpg',           gallery: ['/images/projects/huel/1.jpg','/images/projects/huel/2.png','/images/projects/huel/3.jpg','/images/projects/huel/4.mp4'],       ratioClass: 'aspect-[9/16]' },
  { id: 3, title: '',                thumb: '',                                        gallery: [],                                                                                 ratioClass: 'aspect-[9/16]' },
  { id: 4,  title: 'Perfect Ted',     thumb: '/images/projects/perfect_ted/1.jpg',    gallery: ['/images/projects/perfect_ted/1.jpg','/images/projects/perfect_ted/2.jpg'],    ratioClass: 'aspect-square' },
  { id: 5,  title: 'Raise',           thumb: '/images/projects/raise/1.jpg',          gallery: ['/images/projects/raise/1.jpg','/images/projects/raise/2.jpg','/images/projects/raise/3.jpg','/images/projects/raise/4.jpg','/images/projects/raise/5.jpg','/images/projects/raise/6.jpg'], ratioClass: 'aspect-[3/4]' },
  { id: 6, title: 'Aquela Kombucha', thumb: '/images/projects/aquela_kombucha/1.jpg',gallery: ['/images/projects/aquela_kombucha/1.jpg','/images/projects/aquela_kombucha/2.jpg','/images/projects/aquela_kombucha/3.mp4','/images/projects/aquela_kombucha/4.jpg','/images/projects/aquela_kombucha/5.jpg','/images/projects/aquela_kombucha/6.jpg'], ratioClass: 'aspect-[9/16]' },
  { id: 7,  title: "Diana's",         thumb: '/images/projects/dianas/1.jpg',         gallery: ['/images/projects/dianas/1.jpg'],                                               ratioClass: 'aspect-[9/16]' },
  { id: 8,  title: "Reese's",         thumb: '/images/projects/reeses/1.jpg',         gallery: ['/images/projects/reeses/1.jpg','/images/projects/reeses/2.jpg','/images/projects/reeses/3.jpg','/images/projects/reeses/4.jpg','/images/projects/reeses/5.jpg','/images/projects/reeses/6.mp4','/images/projects/reeses/7.jpg'], ratioClass: 'aspect-[3/4]' },
  { id: 9,  title: '',                thumb: '',                                        gallery: [],                                                                                 ratioClass: 'aspect-[3/4]' },
  { id: 10, title: 'Almonds & Chocos',thumb: '/images/projects/almonds/1.jpg',        gallery: ['/images/projects/almonds/1.jpg','/images/projects/almonds/2.jpg','/images/projects/almonds/3.jpg','/images/projects/almonds/4.jpg','/images/projects/almonds/5.jpg'], ratioClass: 'aspect-[3/4]' },
  { id: 11,  title: 'Zumino',          thumb: '/images/projects/zumino/1.jpg',         gallery: ['/images/projects/zumino/1.jpg','/images/projects/zumino/2.mp4'],             ratioClass: 'aspect-[3/4]' },
  { id: 12, title: 'Glad',            thumb: '/images/projects/glad/1.jpg',           gallery: ['/images/projects/glad/1.jpg','/images/projects/glad/2.jpg','/images/projects/glad/3.jpg'],               ratioClass: 'aspect-[3/4]' },
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

  return (
    <>
      <section className="py-16 px-4 bg-transparent">
        <h2 className="text-6xl font-bold text-center text-[#F7E8D3] mb-4">PROJECTS</h2>
        <p className="text-center text-lg text-[#F7E8D3]/80 mb-12">
          Behind every design, there’s a purpose. Behind every project, a result.
        </p>

        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {projects.map((p, i) => (
            <div
              key={p.id}
              onClick={() => p.gallery.length > 0 && openCarousel(i)}
              className={[
                'break-inside-avoid mb-4',
                'group relative w-full rounded-xl overflow-hidden',
                p.ratioClass,
                'bg-[#333] transition-transform',
                p.gallery.length > 0 ? 'cursor-pointer hover:scale-120' : ''
              ].join(' ')}
            >
              {p.thumb && (
                <Image
                  src={p.thumb}
                  alt={p.title}
                  fill
                  className="object-cover rounded-xl"
                  unoptimized
                />
              )}

              {p.gallery.length > 0 && (
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-colors duration-300">
                  <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View More
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 max-w-4xl w-full px-4">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex items-center justify-center gap-4 overflow-hidden">
              {total === 1 ? (
                <div className="w-full flex justify-center">
                  <Image
                    src={gallery[0]}
                    alt=""
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                    unoptimized
                  />
                </div>
              ) : (
                [activeGalleryIdx - 1, activeGalleryIdx, activeGalleryIdx + 1].map((offset, pos) => {
                  const idx = (offset + total) % total
                  return (
                    <div
                      key={pos}
                      className={[
                        'flex-shrink-0 w-1/3 rounded-lg overflow-hidden transform transition-all duration-300',
                        pos === 1 ? 'scale-100 opacity-100' : 'scale-75 opacity-50',
                      ].join(' ')}
                    >
                      <Image
                        src={gallery[idx]}
                        alt=""
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        unoptimized
                      />
                    </div>
                  )
                })
              )}
            </div>

            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 rounded-full p-2"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 rounded-full p-2"
                  aria-label="Next"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
