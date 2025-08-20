// components/Faqs.tsx
'use client'
import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const faqs = [
  {
    q: 'Why is 3D content better than a traditional photoshoot?',
    a: [
      'Traditional photoshoots are slow, expensive, and hard to change once they’re done.',
      'With 3D, you get total flexibility: we can tweak lighting, colors, camera angles, or even product variants without having to reshoot anything.',
      'It’s faster, more scalable, and built for brands that need volume, consistency, and creative control.',
    ],
  },
  {
    q: 'What’s the typical timeline for a project?',
    a: [
      'Most projects take 1 to 2 weeks, depending on the scope.',
      'If you need something faster, we can prioritize it, just let us know your deadline and we’ll make it work.',
    ],
  },
  {
    q: 'Can you match the style of our current branding?',
    a: [
      '100%. We study your brand assets, packaging, and previous campaigns to match your visual identity perfectly, or push it to the next level if that’s what you’re looking for.',
    ],
  },
  {
    q: 'What do I actually receive at the end of a project?',
    a: [
      'You get high-resolution visuals, optimized for your use case:',
      '- Static images (for web, ads, social)',
      '- Animations (for reels, ads, product demos)',
      '- Source files (on request)',
      '- Plus, you own full usage rights.',
    ],
  },
  {
    q: 'What if I need changes or edits after delivery?',
    a: [
      'Every project includes 1–2 revision rounds, depending on the scope.',
      'We always review with you before final delivery to avoid surprises.',
      'And if you need extra edits later, we’re fast and fair about it.',
    ],
  },
]

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faqs" className="py-[14vw] md:py-[6vw] px-4 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-[#faff05] font-poppins mb-8">FAQ’s</h2>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = idx === open
            return (
              <div key={idx} className="overflow-hidden rounded-4xl font-poppins border border-[#ffffff33] bg-[#1a0f0b99]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-4xl transition-colors ${
                    isOpen ? 'bg-[#312015]' : 'bg-[#2d1b10] hover:bg-[#3a2519]'
                  }`}
                >
                  <span className="text-lg">{item.q}</span>
                  <div className="ml-5 p-1 rounded-full" style={{ backgroundColor: isOpen ? '#faff05' : '#f7e8d3' }}>
                    {isOpen ? (
                      <ChevronUpIcon className="w-6 h-6 text-[#3c1f10] stroke-2" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-[#3c1f10] stroke-2" />
                    )}
                  </div>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-[max-height] duration-300 ease-out ${
                    isOpen ? 'max-h-[600px] py-4 bg-[#1a0f0b99]' : 'max-h-0 py-0'
                  }`}

                  // style={
                  //   isOpen
                  //     ? {
                  //         background:
                  //           'linear-gradient(135deg, rgba(255,255,0,0.05) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.6) 70%, rgba(255,255,0,0.05) 100%)',
                  //       }
                  //     : {}
                  // }
                >
                  <div className="text-gray-200 leading-relaxed space-y-2">
                    {item.a.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
