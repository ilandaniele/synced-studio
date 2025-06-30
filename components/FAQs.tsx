// components/Faqs.tsx
'use client'
import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const faqs = [
  { q: 'What is your 3D modeling process?', a: 'We start with a deep dive into your brand, gather references, sculpt in ZBrush or Blender, then refine textures and lighting until it’s pixel-perfect.' },
  { q: 'How long does a typical animation take?', a: 'Most 15–30s animations take 2–3 weeks from brief to final render, depending on complexity and feedback rounds.' },
  { q: 'Can you match our existing brand guidelines?', a: 'Absolutely—we work from your color palette, typography and moodboards to make sure everything feels on-brand.' },
  { q: 'What deliverables do we get?', a: 'You’ll receive high-res PNGs, MP4/WebM loops, layered PSDs or Blender scenes—whatever you need to deploy instantly.' },
  { q: 'What’s your revision policy?', a: 'We include two free rounds of minor tweaks. After that, revisions are billed at our standard hourly rate.' }
]

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#140a05] via-[#3c1f10] to-[#140a05] text-white">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#faff05] mb-8">FAQ’s</h2>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = idx === open
            return (
              <div key={idx} className="overflow-hidden rounded-2xl">
                {/* Question */}
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className={
                    `w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-colors ` +
                    (isOpen ? 'bg-[#312015]' : 'bg-[#2d1b10] hover:bg-[#3a2519]')
                  }
                >
                  <span className="text-lg">{item.q}</span>
                  {isOpen ? (
                    <div className="p-1 bg-[#faff05] rounded-full">
                      <ChevronUpIcon className="w-5 h-5 text-[#3c1f10]" />
                    </div>
                  ) : (
                    <div className="p-1 bg-[#3c1f10] rounded-full">
                      <ChevronDownIcon className="w-5 h-5 text-[#faff05]" />
                    </div>
                  )}
                </button>

                {/* Answer */}
                <div
                  className={
                    `px-6 overflow-hidden transition-[max-height] duration-300 ease-out ` +
                    (isOpen ? 'max-h-40 py-4 bg-[#20120b]' : 'max-h-0 py-0')
                  }
                >
                  <p className="text-gray-200 leading-relaxed">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
