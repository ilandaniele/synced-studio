'use client'
import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { FAQS } from '@/constants'

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faqs" className="pt-[10vw] pb-[14vw] md:py-[6vw] px-4 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-[#faff05] font-poppins mb-8">FAQ&apos;s</h2>

        <div className="space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = idx === open
            return (
              <div key={idx} className={`font-poppins ${isOpen ? 'relative overflow-hidden bg-black border-x border-b border-yellow-200/20 rounded-[2.5rem] md:rounded-[2.1rem]' : ''}`}>
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between pl-6 pr-5 py-4 transition-colors relative z-10 !rounded-[10vw] md:!rounded-[3vw] border border-yellow-200/20 hover:opacity-95"
                  style={{
                    backgroundImage: `linear-gradient(270deg, rgba(57, 60, 5, 0.50) 0%, rgba(57, 60, 5, 0.20) 32%, rgba(57, 60, 5, 0.04) 62%, rgba(57, 60, 5, 0.00) 100%)`
                  }}
                >
                  <span className="text-left text-xs md:text-lg">{item.question}</span>
                  <div
                    className="p-1 ml-3 rounded-full"
                    style={{ backgroundColor: isOpen ? '#faff05' : '#f7e8d3' }}
                  >
                    {isOpen ? (
                      <ChevronUpIcon className="w-6 h-6 text-[#3c1f10] stroke-2" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-[#3c1f10] stroke-2" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-[max-height] overflow-hidden ease-out duration-300 ${isOpen ? 'max-h-[600px] px-6 py-4 bg-black border-yellow-200/20 rounded-b-[10vw] md:rounded-b-[3vw]' : 'max-h-0 px-6 py-0'}`}
                >
                  <div className="text-gray-200 leading-relaxed space-y-2">
                    {item.answer.map((line: string, i: number) => (
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